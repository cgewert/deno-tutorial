# Tasks

Tasks are shortcuts for cli commands defined inside a deno config file.
See the deno.json for an example.

## Configuring tasks

Inside the tasks field define console commands aliased by the task name. Here we see the task ***dev*** which will execute the cli command deno run with a --watch parameter.

```json
"tasks": {
    "dev": "deno run --watch main.ts"
  }
```

## Running tasks

The aforementioned task ***dev*** can be run with ***deno task***

```sh
$ deno task dev
```