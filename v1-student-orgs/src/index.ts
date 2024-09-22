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

// OSU data essential import.
import { getStudentOrgs } from "@keminghe/osu";

// -----------------------------------------------------------------------------
// GET api endpoint to return a list of all student organizations at OSU.
export default {
  async fetch(request, env, ctx): Promise<Response> {
    // For GET requests, return a JSON object with the list of student organizations.
    if (request.method === "GET") {
      return new Response(JSON.stringify(getStudentOrgs()), {
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
