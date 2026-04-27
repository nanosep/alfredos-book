import { defineConfig } from "astro/config";

const [owner = "nanosep", repo = "alfredos-book"] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repo.endsWith(".github.io");

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isGitHubActions && !isUserOrOrgSite ? `/${repo}` : "/",
  server: {
    host: true
  }
});
