var Vue
var VueFetch

Vue.use(VueFetch)

var api = {
  root: 'http://jsonplaceholder.typicode.com/users'
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
      this.$fetch.get(api.root).then(function (data) {
        data.json().then(function (json) {
          self.result.get1 = json
        })
      })
    },
    get2: function () {
      var self = this
      this.$fetch.get(api.root + '/1').then(function (data) {
        data.json().then(function (json) {
          self.result.get2 = json
        })
      })
    },
    post: function () {
      var self = this
      this.$fetch.post(api.root, {
        name: 'Test',
        username: 'terter',
        email: 'test@test.com'
      })
      .then(function (data) {
        data.json().then(function (json) {
          self.result.post = json
        })
      })
    },
    put: function () {
      var self = this
      this.$fetch.put(api.root + '/1', {
        name: 'Test',
        username: 'terter',
        email: 'test@test.com'
      })
      .then(function (data) {
        data.json().then(function (json) {
          self.result.put = json
        })
      })
    },
    patch: function () {
      var self = this
      this.$fetch.patch(api.root + '/1', {
        name: 'Test'
      })
      .then(function (data) {
        data.json().then(function (json) {
          self.result.patch = json
        })
      })
    },
    delete: function () {
      var self = this
      this.$fetch.del(api.root + '/1')
      .then(function (data) {
        data.json().then(function (json) {
          self.result.delete = json
        })
      })
    }
  },
  ready: function () {
    this.get1()
    this.get2()
    this.post()
    this.put()
    this.patch()
    this.delete()
  }
})
