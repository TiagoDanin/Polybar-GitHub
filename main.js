#!/usr/bin/env node

const prog   = require('caporal')
const Client = require('@octokit/rest')

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

			const github = new Client({
				debug: false
			})
			github.authenticate({
				type: 'token',
				token: token
			})
			const ghOptions = {per_page: 50, participating: showparticipating}
			const result = await github.activity.getNotifications(ghOptions)
			const notifications = result.data.length
			if (notifications == 50) {
				logger.info('+' + notifications)
			}
			logger.info(notifications)
		} catch (e) {
			logger.error('Error')
		}
	});
prog.parse(process.argv)
