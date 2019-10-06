const url = require('url')

const PROVIDERS = {}

const addProvider = (name, data) => {
  PROVIDERS[name] = data
}

const delProvider = (name) => {
  delete PROVIDERS[name]
}

const resolve = async (name) => {
  const ud = new url.URL(name)

  if (PROVIDERS[ud.host]) {
    return PROVIDERS[ud.host].resolve(name)
  }

  return new Promise((resolve, reject) => {
    resolve(name)
  })
}

const register = async (name, key) => {
  const ud = new url.URL(name)

  if (PROVIDERS[ud.host]) {
    return PROVIDERS[ud.host].register(name, key)
  }

  return new Promise((resolve, reject) => {
    resolve(key)
  })
}

module.exports = {
  addProvider: addProvider,
  delProvider: delProvider,
  resolve: resolve,
  register: register
}
