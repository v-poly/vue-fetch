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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _fetch = window.fetch;

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

var VueFetch = function () {
  function VueFetch() {
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
  }

  createClass(VueFetch, [{
    key: 'get',
    value: function get(url) {
      return _fetch(url);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return _fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      });
    }
  }]);
  return VueFetch;
}();

// Version
// VueFetch.version = version

/* Installation */


VueFetch.installed = false;

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
};

// auto install
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFetch);
}

module.exports = VueFetch;