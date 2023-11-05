# deno compile

Will contain deno code into a single executable file.

## How to use

> deno compile --target x86_64-pc-windows-msvc --output YourApplicationName start.ts

deno compile --help will output all available target values.

## Flags

As with deno install, the runtime flags used to execute the script must be specified at compilation time. This includes permission flags.

> deno compile --allow-read --allow-net https://deno.land/std/http/file_server.ts