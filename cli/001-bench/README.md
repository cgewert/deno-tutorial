# Deno Benchmarking

## Usage

```sh
$ deno bench benchmark/
```

will discover all *.bench.ts files and run defined benches inside the files.

```ts
Deno.bench("Bench Name", (ctx: any) => {});
```

Use ***Deno.bench*** to define benchs. Inside the callable fill in code to benchmark.