var fs = require('fs')
var rollup = require('rollup')
var uglify = require('uglify-js')
var babel = require('rollup-plugin-babel')
var json = require('rollup-plugin-json')
var pkg = require('../package.json')
var version = process.env.VERSION || pkg.version
var banner =
    '/*!\n' +
    ' * vue-fetch v' + version + '\n' +
    ' * https://github.com/v-poly/vue-fetch\n' +
    ' * Released under the MIT License.\n' +
    ' */\n'

// Standalone
rollup.rollup({
  entry: 'src/index.js',
  plugins: [
    babel(),
    json()
  ]
})
.then(function (bundle) {
  return write('dist/vue-fetch.js', bundle.generate({
    format: 'umd',
    banner: banner,
    moduleName: 'VueFetch'
  }).code)
})
.then(function () {
  return write(
    'dist/vue-fetch.min.js',
    banner + '\n' + uglify.minify('dist/vue-fetch.js').code
  )
})
.catch(logError)

// CommonJS
rollup.rollup({
  entry: 'src/index.js',
  plugins: [
    babel(),
    json()
  ]
})
.then(function (bundle) {
  return write('dist/vue-fetch.common.js', bundle.generate({
    format: 'cjs',
    banner: banner
  }).code)
})

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
