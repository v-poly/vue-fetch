/**
 * AOP
 * @param  {Class} cls Class
 */
export default function (cls) {
  cls.prototype.before = function (fn) {
    var _this = this
    return function () {
      fn.apply(this, arguments)
      return _this.apply(this, arguments)
    }
  }

  cls.prototype.after = function (fn) {
    var _this = this
    return function () {
      var ret = _this.apply(this, arguments)
      fn.apply(this, arguments)
      return ret
    }
  }
}
