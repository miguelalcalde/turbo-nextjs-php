/** @type {import('next').NextConfig} */
const nextConfig = {
  // Config options here
};
import vercelToolbar from "@vercel/toolbar/plugins/next";

const withVercelToolbar = vercelToolbar();
// Instead of module.exports = nextConfig, do this:
export default withVercelToolbar(nextConfig);
