var Vue
var VueFetch

Vue.use(VueFetch)

var api = {
  root: 'http://jsonplaceholder.typicode.com/users',
  get: '',
  post: '/posts',
  put: '/posts/1',
  delete: '/post/1',
  patch: '/post/1'
}

new Vue({
  el: 'body',
  data: {
    result: {
      get1: {},
      get2: {},
      post: {},
      delete: {},
      put: {},
      patch: {}
    }
  },
  methods: {
    get1: function () {
      var self = this
      this.$fetch.get(api.root + api.get).then(function (data) {
        data.json().then(function (json) {
          self.result.get1 = json
        })
      })
    },
    get2: function () {
      var self = this
      this.$fetch.get(api.root + api.get + '/1').then(function (data) {
        data.json().then(function (json) {
          self.result.get2 = json
        })
      })
    }
  },
  ready: function () {
    this.get1()
    this.get2()
  }
})
