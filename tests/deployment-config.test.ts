import { test } from "node:test";
import assert from "node:assert/strict";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from "next/constants.js";
import nextConfig from "../next.config.mjs";

test("production build and server use Vercel's expected .next output directory", () => {
  assert.equal(nextConfig(PHASE_PRODUCTION_BUILD).distDir, ".next");
  assert.equal(nextConfig(PHASE_PRODUCTION_SERVER).distDir, ".next");
});

test("the development preview cannot overwrite production build output", () => {
  assert.equal(nextConfig(PHASE_DEVELOPMENT_SERVER).distDir, ".next-dev");
  assert.notEqual(nextConfig(PHASE_DEVELOPMENT_SERVER).distDir, nextConfig(PHASE_PRODUCTION_BUILD).distDir);
});
