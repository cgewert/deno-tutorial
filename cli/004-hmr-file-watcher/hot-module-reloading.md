# Hot Module Reloading and File watching Features

## Hot Module Reloading (since Deno 1.38.0)

```sh
$ deno run --unstable-hmr your-filename.ts
```

The HMR process will restart your code after each file saving. It will try to modify the code in place. You can react to ***hmr*** Events in your code to e.g. update a websocket connection:

```js
addEventListener("hmr", (e) => {
  console.log("HMR triggered", e.detail.path);
});
```

## File watching

The --watch parameter can be supplied to deno run, deno test and to deno fmt

### deno run --watch

Watched files will be automatically restarted after each file change.

### deno test --watch

Test files will be executed after each file change.

### deno fmt --watch

Watched files will be formatted on every file change.