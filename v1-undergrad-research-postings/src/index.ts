/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// Research posting schema and type imports.
import { type ResearchPosting, ResearchPostingSchema } from "@keminghe/osu";

// -----------------------------------------------------------------------------
// Research postings API response interface.
interface ResearchPostingsAPIResponseInterface {
  timestamp: string;
  postings: ResearchPosting[];
}

// -----------------------------------------------------------------------------
// GET api endpoint to return a list of all undergraduate research postings at OSU.
export default {
  async fetch(request, env, ctx): Promise<Response> {
    // For GET requests, return a JSON object with the list of undergraduate research postings.
    if (request.method === "GET") {
      // Fetch the list of undergraduate research postings from public API.
      const apiResponse: Response = await fetch(
        "https://us-central1-dev-research-mentorship-dev.cloudfunctions.net/serveLatestResearchPostings",
        { method: "GET" }
      );

      // Handle error if the API request fails.
      if (!apiResponse.ok) {
        return new Response("Internal server error.", {
          status: 500,
          headers: { "Content-Type": "text/plain" },
        });
      }

      // Parse the JSON response from the API, 
      // and extract the list of research postings to respond to the client.
      const apiResponseJson: ResearchPostingsAPIResponseInterface = await apiResponse.json();
      const postings: ResearchPosting[] = apiResponseJson["postings"];

      // Validate the postings array against the schema.
      if (!ResearchPostingSchema.array().safeParse(postings).success) {
        return new Response("Internal server error.", {
          status: 500,
          headers: { "Content-Type": "text/plain" },
        });
      }

      return new Response(JSON.stringify(postings), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // For other requests, return a 418 I'm a teapot response.
    return new Response("I'm a teapot", {
      status: 418,
      headers: { "Content-Type": "text/plain" },
    });
  },
} satisfies ExportedHandler<Env>;
