const Promise = require('bluebird')
const fs = require('fs')
const writeFile = Promise.promisify(fs.writeFile)

const write = (rawData, label = 'log') => {
  const data = JSON.stringify(rawData, null, 2)
  
  return writeFile('./logs/default.json', data)
  return writeFile(`./logs/${label}-${Date.now()}.json`, data)
}

module.exports = {
  write
}
