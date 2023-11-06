# Deno Prompts

## Alerts

```sh
$ alert("Foobar");
```

Will display the message Foobar and wait for the user to press ENTER

## Confirmations

```sh
$ let shouldProceed = confirm("Do you want to proceed?");
```

Will return ***true*** if the user enters ***y*** ***false*** otherwise.

## Prompting User input

```sh
$ const name = prompt("Please enter your name:");
```

A default value for the input can be set by supplying a second parameter:

```sh
$ const name = prompt("Please enter your age:", "18");
```
