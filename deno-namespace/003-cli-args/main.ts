/* 
 Deno can access CLI arguments provided to the script like shown here
 Provide arguments by appending them to the deno run <script> call:
    $ deno run main.ts a b c
*/
const args: Array<string> = Deno.args;
console.log(args.length + " CLI Args provided: ", args);
