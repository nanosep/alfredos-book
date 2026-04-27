import { defineCollection, z } from "astro:content";

const slugListSchema = z.array(z.string().min(1)).default([]);

const mediaSlotSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(["image", "video", "graphic"]),
  title: z.string().min(1),
  purpose: z.string().min(1),
  status: z.enum(["placeholder", "ready"]).default("placeholder"),
  assetPath: z.string().optional(),
  caption: z.string().optional()
});

const metricSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  note: z.string().optional()
});

const proseBlockSchema = z.object({
  type: z.literal("prose"),
  content: z.string().min(1)
});

const insertBlockSchema = z.object({
  type: z.literal("insert"),
  id: z.string().min(1),
  kind: z.enum(["image", "video", "graphic"]),
  title: z.string().min(1),
  purpose: z.string().min(1),
  status: z.enum(["placeholder", "ready"]).default("placeholder"),
  assetPath: z.string().optional(),
  caption: z.string().optional(),
  eyebrow: z.string().optional(),
  variant: z
    .enum(["default", "photo-context", "photo-break", "graphic-explainer", "paired"])
    .default("default"),
  layout: z.enum(["full", "wide", "narrow"]).default("wide"),
  objectPosition: z.string().optional(),
  maxWidth: z.string().optional()
});

const calculatorBlockSchema = z.object({
  type: z.literal("calculator"),
  slug: z.string().min(1),
  title: z.string().optional(),
  summary: z.string().optional()
});

const noteBlockSchema = z.object({
  type: z.literal("note"),
  title: z.string().min(1),
  content: z.string().min(1)
});

const contentBlockSchema = z.discriminatedUnion("type", [
  proseBlockSchema,
  insertBlockSchema,
  calculatorBlockSchema,
  noteBlockSchema
]);

const sectionCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    bookLabel: z.string().optional(),
    order: z.number().int().positive(),
    summary: z.string().min(1),
    chapterSlugs: slugListSchema,
    calculatorSlugs: slugListSchema,
    seasonTags: slugListSchema,
    coverSlot: mediaSlotSchema.optional()
  })
});

const chapterCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    bookLabel: z.string().optional(),
    order: z.number().int().positive(),
    sectionSlug: z.string().min(1),
    summary: z.string().min(1),
    sourcePages: z
      .object({
        start: z.number().int().positive(),
        end: z.number().int().positive()
      })
      .optional(),
    readingTimeMinutes: z.number().int().positive().optional(),
    keyMetrics: z.array(metricSchema).default([]),
    calculatorSlugs: slugListSchema,
    seasonTags: slugListSchema,
    mediaSlots: z.array(mediaSlotSchema).default([]),
    contentBlocks: z.array(contentBlockSchema).default([])
  })
});

const calculatorCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string().min(1),
    slug: z.string().min(1),
    title: z.string().min(1),
    sectionSlug: z.string().min(1),
    summary: z.string().min(1),
    status: z.enum(["planned", "active"]).default("planned"),
    inputs: z.array(
      z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        type: z.enum(["number", "select", "boolean"]),
        unit: z.string().optional(),
        required: z.boolean().default(true),
        defaultValue: z.union([z.number(), z.string(), z.boolean()]).optional(),
        options: z.array(z.string()).optional(),
        note: z.string().optional()
      })
    ),
    outputs: z.array(
      z.object({
        id: z.string().min(1),
        label: z.string().min(1),
        unit: z.string().optional(),
        note: z.string().optional()
      })
    ),
    formulaNotes: z.array(z.string()).default([])
  })
});

const calendarCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string().min(1),
    month: z.number().int().min(1).max(12),
    title: z.string().min(1),
    sectionSlug: z.string().min(1),
    taskType: z.string().min(1),
    priority: z.enum(["low", "medium", "high", "critical"]).default("medium"),
    summary: z.string().min(1),
    relatedChapterSlugs: slugListSchema,
    calculatorSlugs: slugListSchema
  })
});

export const collections = {
  sections: sectionCollection,
  chapters: chapterCollection,
  calculators: calculatorCollection,
  calendar: calendarCollection
};
