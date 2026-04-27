export type ContentBlock =
  | {
      type: "prose";
      content: string;
    }
  | {
      type: "insert";
      id: string;
      kind: "image" | "video" | "graphic";
      title: string;
      purpose: string;
      status: "placeholder" | "ready";
      assetPath?: string;
      caption?: string;
      eyebrow?: string;
      variant?: "default" | "photo-context" | "photo-break" | "graphic-explainer" | "paired";
      layout?: "full" | "wide" | "narrow";
      objectPosition?: string;
      maxWidth?: string;
    }
  | {
      type: "calculator";
      slug: string;
      title?: string;
      summary?: string;
    }
  | {
      type: "note";
      title: string;
      content: string;
    };

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderInline = (value: string) =>
  escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");

export const renderProseBlock = (content: string) => {
  const lines = content.trim().split(/\r?\n/);
  const chunks: string[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let tableRows: string[][] | null = null;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    chunks.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list || list.items.length === 0) return;
    const tag = list.ordered ? "ol" : "ul";
    chunks.push(`<${tag}>${list.items.map((item) => `<li>${renderInline(item)}</li>`).join("")}</${tag}>`);
    list = null;
  };

  const flushTable = () => {
    if (!tableRows || tableRows.length === 0) return;
    const [header, ...body] = tableRows;
    chunks.push(
      `<div class="chapter-table"><table><thead><tr>${header
        .map((cell) => `<th>${renderInline(cell)}</th>`)
        .join("")}</tr></thead><tbody>${body
        .map(
          (row) =>
            `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`
        )
        .join("")}</tbody></table></div>`
    );
    tableRows = null;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      flushTable();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushTable();
      chunks.push(`<h2>${renderInline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("### ")) {
      const headingText = line.slice(4);
      if (/^[a-záéíóúüñ]/u.test(headingText) || headingText.endsWith(":")) {
        flushList();
        flushTable();
        paragraph.push(headingText);
        continue;
      }

      flushParagraph();
      flushList();
      flushTable();
      chunks.push(`<h3>${renderInline(headingText)}</h3>`);
      continue;
    }

    if (line.includes("|")) {
      flushParagraph();
      flushList();
      const cells = line
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean);
      if (cells.length >= 2) {
        if (!tableRows) {
          tableRows = [];
        }
        tableRows.push(cells);
        continue;
      }
    } else {
      flushTable();
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      flushParagraph();
      flushTable();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(orderedMatch[2]);
      continue;
    }

    const bulletMatch = line.match(/^-\s+(.*)$/);
    if (bulletMatch) {
      flushParagraph();
      flushTable();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(bulletMatch[1]);
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushTable();

  return chunks.join("\n");
};
