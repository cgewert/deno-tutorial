const wasmCode = await Deno.readFile("./fib.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const fib = wasmInstance.exports.fib as CallableFunction;

console.log(fib(10).toString());
