# Deno Testing

## Usage

```sh
$ deno test
$ deno test tests/
$ deno test tests/hello-world.test.ts
```

will discover all *.test.ts files and run defined tests and / or test suites.

## Writing test suites and tests

```js
import * as assertions from "https://deno.land/std@0.204.0/assert/mod.ts";
import { describe, it } from "https://deno.land/std@0.204.0/testing/bdd.ts";

describe("Hello World Suite", () => {
  const expected = "Hello, World!";

  it("greeter() returns ", () => {
    assertions.assertEquals(expected, greeter());
  });
});
```
