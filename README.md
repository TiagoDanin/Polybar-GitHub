# Polybar-Github

A Polybar module to show unread notifications from GitHub

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) command line tools.

```sh
npm install polybar-github -g
```

## Example of Config in Polybar

```
; Github custom
[module/github]
type = custom/script
format-prefix = "Github: "
interval = 160
format-foreground = #cc1122
exec = polybar-github YOUTOKEN false
```

## CLI Options

See in `polybar-github --help` :)

## Dependencies

- [@octokit/rest](https://ghub.io/@octokit/rest): GitHub REST API client for Node.js
- [caporal](https://ghub.io/caporal): A full-featured framework for building command line applications (cli) with node.js

## License

MIT
