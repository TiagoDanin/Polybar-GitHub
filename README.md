# Polybar-Github
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1c064a1c0b2d45e4bba8eee9cf393683)](https://www.codacy.com/app/tiagodanin/Polybar-GitHub?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TiagoDanin/Polybar-GitHub&amp;utm_campaign=Badge_Grade) [![CodeFactor](https://www.codefactor.io/repository/github/tiagodanin/polybar-github/badge)](https://www.codefactor.io/repository/github/tiagodanin/polybar-github) [![Known Vulnerabilities](https://snyk.io/test/github/TiagoDanin/Polybar-GitHub/badge.svg?targetFile=package.json)](https://snyk.io/test/github/TiagoDanin/Polybar-GitHubtargetFile=package.json)

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
