const _fetch = window.fetch

export function get (url) {
  return _fetch(url)
}

export function post (url, data) {
  return _fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
}
