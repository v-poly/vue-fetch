/**
 * Warn stuff.
 *
 * @param {String} msg
 */

export function warn (msg) {
  /* istanbul ignore next */
  if (typeof console !== 'undefined') {
    console.error('[vue-router] ' + msg)
  }
}
