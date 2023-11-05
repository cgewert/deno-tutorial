import { foobar } from "../foobar.ts";
import { assert } from "https://deno.land/std@0.205.0/assert/mod.ts";

const benchFoobar = "Foobar Benchmark";
Deno.bench(benchFoobar, (ctx) => {
  let startTime = Date.now();
  foobar();
  let endTime = Date.now();
  try {
    assert(endTime - startTime < 400);
  } catch (err) {
    console.log("Benchmarktest failed for", ctx.name);
  }
});
