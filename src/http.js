const _fetch = window.fetch

export function get (url) {
  return _fetch(url)
}

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

export function put (url, data) {
  return _post(url, 'PUT', data)
}

export function post (url, data) {
  return _post(url, 'POST', data)
}

export function patch (url, data) {
  return _post(url, 'PATCH', data)
}

export function del (url, data) {
  return _post(url, 'DELETE', data)
}
