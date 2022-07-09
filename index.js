
const { ServiceProvider } = require('@haluka/core')
const nodemailer = require('nodemailer')

exports.default = class MailServiceProvider extends ServiceProvider {
	register () {
		this.app.singleton('Haluka/Provider/Mail', function (app, { NodeMailerConfig } ) {
			let transporter = nodemailer.createTransport(NodeMailerConfig)

			if (NodeMailerConfig.verifyOnStart) {
				transporter.verify(NodeMailerConfig.onVerificationError || (() => {}))
			}

			return transporter
		})
	}
}