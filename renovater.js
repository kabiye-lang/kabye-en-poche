/*eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https')
const fs = require('fs')

const ncuCfg = require('./.ncurc.json')
const pkg = require('./package.json')

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
      Object.keys(json_data).forEach((dep) => {
        if (pkg.dependencies[dep]) {
          pkg.dependencies[dep] = json_data[dep]
        }
        if (pkg.devDependencies[dep]) {
          pkg.devDependencies[dep] = json_data[dep]
        }
      })
      fs.writeFileSync('.ncurc.json', JSON.stringify(ncuCfg, null, 2))
      fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
    } catch (error) {
      console.error(error)
    }
  })
})

req.on('error', function (e) {
  console.error(e.message)
})
