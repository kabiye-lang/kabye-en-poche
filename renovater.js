/*eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https')
const fs = require('fs')

const ncuCfg = require('./.ncurc.json')

// SDK-50
const url = 'https://raw.githubusercontent.com/expo/expo/sdk-50/packages/expo/bundledNativeModules.json'

const req = https.get(url, function (res) {
  let data = '',
    json_data

  res.on('data', function (stream) {
    data += stream
  })
  res.on('end', function () {
    try {
      json_data = JSON.parse(data)
      ncuCfg.reject = ['expo', ...Object.keys(json_data)]
      fs.writeFileSync('.ncurc.json', JSON.stringify(ncuCfg, null, 2))
    } catch (error) {
      console.error(error)
    }
  })
})

req.on('error', function (e) {
  console.error(e.message)
})
