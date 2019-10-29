const fetch = require('isomorphic-fetch')
const Promise = require('bluebird')

const BASE_URL = 'https://api.github.com'

module.exports = ({ token }) => {
  const fetchData = (endpoint) => {
    const url = `${BASE_URL}${endpoint}`
    const headers = {
      authorization: `bearer ${token}`,
      accept: [
        'application/vnd.github.inertia-preview+json',
        'application/vnd.github.starfox-preview',
        'application/vnd.github.symmetra-preview+json'
      ].join(',')
    }

    return Promise.resolve()
      .then(() => {
        return fetch(url, {
          headers,
        })
      })
      .then(res => res.json())
  }

  return {
    fetchData,
  }
}