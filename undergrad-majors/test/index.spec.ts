// test/index.spec.ts

// Testing essential imports.
import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";

// Third-party validator import.
import { 
  getUndergradMajors, 
  type UndergradMajor 
} from "@keminghe/osu";
// import { UndergradMajorSchema } from "@keminghe/osu";

// -----------------------------------------------------------------------------
// Integration test suite for the dev-api-undergra-majors worker.
describe("dev-api-undergra-majors worker", () => {
  it("(integration) responds to GET requests with a valid list of all undergrad majors at OSU.", async () => {
    const response = await SELF.fetch("https://example.com", { method: "GET" });

    // Validate the response body/data against the schema.
    const majors: UndergradMajor[] = await response.json();
    // UndergradMajorSchema.array().parse(majors);
    expect(majors).toStrictEqual(getUndergradMajors());

    // Verify success status and snapshot the response.
    expect(response.status).toBe(200);
    expect(response).toMatchSnapshot();
  });

  it("(integration) responds to non-GET requests with 418 I'm a teapot.", async () => {
    const response = await SELF.fetch("https://example.com", { method: "POST" });
    expect(response.status).toBe(418);
    expect(response).toMatchSnapshot();
  });
});
