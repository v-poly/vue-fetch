/*!
 * vue-fetch v0.1.0
 * https://github.com/v-poly/vue-fetch
 * Released under the MIT License.
 */

'use strict';

/**
 * Warn stuff.
 *
 * @param {String} msg
 */

function warn(msg) {
  /* istanbul ignore next */
  if (typeof console !== 'undefined') {
    console.error('[vue-router] ' + msg);
  }
}

var _fetch = window.fetch;

function _post(url, method, data) {
  return _fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
    body: JSON.stringify(data)
  });
}

var Http = {
  get: function get(url) {
    return _fetch(url);
  },
  post: function post(url, data) {
    return _post(url, 'POST', data);
  },
  put: function put(url, data) {
    return _post(url, 'PUT', data);
  },
  patch: function patch(url, data) {
    return _post(url, 'PATCH', data);
  },
  delete: function _delete(url, data) {
    return _post(url, 'DELETE', data);
  }
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

// late bind during install
var Vue = void 0;

/**
 * VueFetch constructor
 *
 * @param {Object} [options]
 * @example
 * ```js
 * Ajax.get(url, data).then().catch();
 * Ajax.post(url, data).then().catch();
 * Ajax.put(url, data).then().catch();
 * Ajax.delete(url, data).then().catch();
 * Ajax.config.errorHandler(function(res) {});
 * Ajax.config.headers({Authorition: 'xxx'});
 * Ajax.version;
 * ```
 */

var VueFetch = function VueFetch() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$hashbang = _ref.hashbang;
  var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
  classCallCheck(this, VueFetch);

  /* istanbul ignore if */
  if (!VueFetch.installed) {
    throw new Error('Please install the VueFetch with Vue.use() before ' + 'creating an instance.');
  }

  // Vue instances
  this.app = null;
};

// Version
// VueFetch.version = version

/* Installation */


VueFetch.installed = false;

/**
 *
 */
VueFetch.get = Http.get;

VueFetch.post = Http.post;

/**
 * Installation interface.
 * Install the necessary directives.
 */

VueFetch.install = function (externalVue) {
  /* istanbul ignore if */
  if (VueFetch.installed) {
    warn('already installed.');
    return;
  }
  Vue = externalVue;
  VueFetch.installed = true;

  /**
   * Export $fetch to vue instance
   */
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get: function get() {
        return Http;
      }
    }
  });
};

// auto install
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFetch);
}

module.exports = VueFetch;