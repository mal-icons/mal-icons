#!/usr/bin/env bun
/**
 * Lightweight render benchmark (SRS §12). Renders a batch of icons many
 * times with `renderToStaticMarkup` and reports throughput. Not run in CI;
 * intended for local comparison against alternatives.
 */
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { FiActivity, FiAirplay, FiAlertCircle } from "../packages/react/src/icons/fi/index.ts";

const ICONS = [FiActivity, FiAirplay, FiAlertCircle];
const ITERATIONS = 20_000;

function bench(label: string, fn: () => void): void {
  // Warm up.
  for (let i = 0; i < 1000; i++) fn();
  const start = performance.now();
  for (let i = 0; i < ITERATIONS; i++) fn();
  const ms = performance.now() - start;
  const perOp = (ms / ITERATIONS) * 1000; // microseconds
  console.log(`${label}: ${ms.toFixed(1)} ms total, ${perOp.toFixed(2)} µs/render`);
}

let sink = 0;
bench("mal-icon render", () => {
  for (const Icon of ICONS) {
    sink += renderToStaticMarkup(createElement(Icon, { size: 24 })).length;
  }
});

console.log(`(sink=${sink})`);
