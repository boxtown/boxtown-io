const path = require('path')
const merge = require('webpack-merge')
const S3Plugin = require('webpack-s3-plugin')
const baseConfig = require('./base.config')

module.exports = merge(baseConfig, {
  plugins: [
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      },
      s3UploadOptions: {
        Bucket: 'boxtown.io'
      },
      directory: path.resolve(__dirname, '..', 'build')
    })
  ]
})
