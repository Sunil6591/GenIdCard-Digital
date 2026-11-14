import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { cpus: 2 },
};
// Keep a live development preview from overwriting production/test build chunks.
export default phase => ({ ...nextConfig, distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : ".next-production" });
