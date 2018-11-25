# Polybar-Github

A Polybar module to show unread notifications from GitHub

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install --global polybar-github
```

## Usage

Cli:
```bash
polybar-github FILE GH_TOKEN TIME/s MODE NOTIFICATION
```
- File: tail file
- Gh-Token: GitHub Token
- Time: Interval
- Mode:
	- Default: `all+participating`
	- `all`:
		- Format: `AllNotificationsNumber`
		- Notification: All types
	- `all+participating`:
		- Format: `AllNotificationsNumber (AllParticipatingNumber)`
		- Notifcation: Participating
	- `participating`:
		- Format: `AllParticipatingNumber`
		- Notifcation: Participating
- Notification: `true` or `false`.
	- Default: `true`

Polybar Config:
```
; Polybar GitHub
[module/github]
type = custom/script
format-prefix = "GitHub: "
exec = polybar-github $HOME/.config/polybar/.env/github $TOKEN 60 all true
click-left = echo left >> $HOME/.config/polybar/.env/github
click-middle = echo middle >> $HOME/.config/polybar/.env/github
click-right = echo right >> $HOME/.config/polybar/.env/github
scroll-up = echo scrollUp >> $HOME/.config/polybar/.env/github
scroll-down = echo scrollDown >> $HOME/.config/polybar/.env/github
tail = true
```

And create a file in $HOME/.config/polybar/.env/github.

## Dependencies

- [@octokit/rest](https://ghub.io/@octokit/rest): GitHub REST API client for Node.js
- [node-notifier](https://ghub.io/node-notifier): A Node.js module for sending notifications on native Mac, Windows (post and pre 8) and Linux (or Growl as fallback)
- [polybar-helpers](https://ghub.io/polybar-helpers): [WIP] Polybar - Helpers to create plugin/module using NodeJS

## License

MIT
