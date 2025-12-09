import { serveStatic } from "cloudflare:s3-static-assets";

export default {
  async fetch(request, env, ctx) {
    return serveStatic(request, env, ctx);
  }
};
