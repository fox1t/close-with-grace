'use strict'

const { promisify } = require('util')
const closeWithGrace = require('..')

const immediate = promisify(setImmediate)

closeWithGrace({ delay: 500 }, function ({ signal, err }) {
  // this promise never resolves, so the delay should kick in
  return new Promise(() => {})
})

// to keep the process open
setInterval(() => {}, 1000)
console.error(process.pid)
