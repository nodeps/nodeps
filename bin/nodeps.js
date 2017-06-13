#!/usr/bin/env node
var exec     = require('child_process').exec
var psdFile  = process.cwd() + '/' +process.argv.slice(2)[0]
var execPath = __dirname + '/../index.js'
console.log('psdFile', psdFile)
console.log('execPath', execPath)
exec('node ' + execPath + ' ' + psdFile, function(err, out, code) {  
    console.log('stdout: ' + out)
    if (err !== null) {  
        console.log('err: ',err)
    }  
  
})


