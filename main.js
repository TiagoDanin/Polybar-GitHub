#!/usr/bin/env node

const prog   = require('caporal')
const client = require('@octokit/rest')

prog
	.version('1.0.0')
	.description('A Polybar module to show unread notifications from GitHub')
	.argument('<token>', 'Github token', prog.REPEATABLE)
	.argument('<participating>', '"true" to show only participant notifications', prog.REPEATABLE)
	.action(async function(args, options, logger) {
		try {
			const token = args['token']
			const participating = args['participating']
			var showparticipating = false
			if (participating && participating == 'true') {
				showparticipating = true
			}

			const github = new client({
				debug: false
			})
			github.authenticate({
				type: 'token',
				token: token
			})
			const ghOptions = {per_page: 100, participating: showparticipating}
			const result = await github.activity.getNotifications(ghOptions)
			logger.info(result.data.length)
		} catch (e) {
			logger.error('Error')
		}
	});
prog.parse(process.argv)
