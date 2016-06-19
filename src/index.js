import { warn } from './util'
import * as Http from './http'

// late bind during install
let Vue

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

class VueFetch {

  constructor ({
    hashbang = true
  } = {}) {
    /* istanbul ignore if */
    if (!VueFetch.installed) {
      throw new Error(
        'Please install the VueFetch with Vue.use() before ' +
        'creating an instance.'
      )
    }

    // Vue instances
    this.app = null
  }
}

// Version
// VueFetch.version = version

/* Installation */
VueFetch.installed = false

/**
 *
 */
VueFetch.get = Http.get

VueFetch.post = Http.post

/**
 * Installation interface.
 * Install the necessary directives.
 */

VueFetch.install = function (externalVue) {
  /* istanbul ignore if */
  if (VueFetch.installed) {
    warn('already installed.')
    return
  }
  Vue = externalVue
  VueFetch.installed = true

  /**
   * Export $fetch to vue instance
   */
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get () {
        return Http
      }
    }
  })
}

// auto install
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFetch)
}

export default VueFetch
