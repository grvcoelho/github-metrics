const filer = require('./services/filer')
const Github = require('./services/github')

;(async function run () {
  const token = process.env.TOKEN
  const github = Github({ token })

  const org = 'pagarme'
  const repo = 'seals'

  await github.fetchData('/repos/grvcoelho/test/issues/4/events')
    .tap(filer.write)
    .tap(console.log)
    .catch(console.log)

})()