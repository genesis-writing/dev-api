// test/index.spec.ts

// Testing essential imports.
import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";

// Third-party validator import.
import { type ResearchPosting, ResearchPostingSchema } from "@keminghe/osu";

// -----------------------------------------------------------------------------
// Integration test suite for the v1-undergrad-research-postings worker.
describe("The v1-undergrad-research-postings worker", () => {
  it("(integration) responds to GET requests with a valid list of all undergrad research postings at OSU.", async () => {
    const response = await SELF.fetch("https://example.com", { method: "GET" });

    // Verify success status.
    expect(response.status).toBe(200);

    // Validate the response body/data against the schema.
    const postings: ResearchPosting[] = await response.json();
    ResearchPostingSchema.array().parse(postings);
  });

  it("(integration) responds to non-GET requests with 418 I'm a teapot.", async () => {
    const response = await SELF.fetch("https://example.com", {
      method: "POST",
    });
    expect(response.status).toBe(418);
    expect(response).toMatchSnapshot();
  });
});
