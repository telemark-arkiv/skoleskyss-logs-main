'use strict'

module.exports = {
  DB: process.env.DB || 'mongodb://localhost/skoleskyss',
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  CALLBACK_STATUS_URL: process.env.CALLBACK_STATUS_URL || 'https://logs.service.io/logs',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'skoleskyss',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
