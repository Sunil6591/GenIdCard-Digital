import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { cpus: 2 },
};
// Vercel and next start use the standard production output directory.
// Isolate the development cache so a live preview cannot overwrite build chunks.
export default phase => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
