const _fetch = window.fetch

function _post (url, method, data) {
  return _fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
    body: JSON.stringify(data)
  })
}

export default {
  get (url) {
    return _fetch(url)
  },
  post (url, data) {
    return _post(url, 'POST', data)
  },
  put (url, data) {
    return _post(url, 'PUT', data)
  },
  patch (url, data) {
    return _post(url, 'PATCH', data)
  },
  delete (url, data) {
    return _post(url, 'DELETE', data)
  }
}
