var Vue
var VueFetch

Vue.use(VueFetch)

var api = {
  root: 'http://jsonplaceholder.typicode.com/usrs',
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
      get1: [],
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
      VueFetch.get(api.get).then(function (data) {
        self.result.get1 = data
      })
    },
    get2: function () {
      var self = this
      VueFetch.get(api.get, '/1').then(function (data) {
        self.result.get2 = data
      })
    }
  },
  ready: function () {
    this.get1()
    this.get2()
  }
})
