/*!
 * vue-fetch v0.1.0
 * https://github.com/v-poly/vue-fetch
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueFetch = factory());
}(this, function () { 'use strict';

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

  function get(url) {
    return _fetch(url);
  }

  function post(url, data) {
    return _fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

var Http = Object.freeze({
    get: get,
    post: post
  });

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
  VueFetch.get = get;

  VueFetch.post = post;

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

  return VueFetch;

}));