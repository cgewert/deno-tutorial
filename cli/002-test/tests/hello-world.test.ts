// Run with 'deno test hello-world.test.ts'
import * as assertions from "https://deno.land/std@0.204.0/assert/mod.ts";
import { describe, it } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { greeter } from "../hello-world.ts";

describe("Hello World Suite", () => {
  const expected = "Hello, World!";

  it("greeter() returns ", () => {
    assertions.assertEquals(expected, greeter());
  });
});
