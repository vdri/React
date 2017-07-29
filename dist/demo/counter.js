"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Counter = exports.Counter = function () {
    function Counter() {
        _classCallCheck(this, Counter);

        this.max = 100;
    }

    _createClass(Counter, [{
        key: "start",
        value: function start() {
            var _this = this;

            this.count = 0;
            var title = "start";
            setInterval(function () {
                var title = "counter";
                {
                    var _title = "test";
                }
                _this.count++;
            }, 2000);
        }
    }]);

    return Counter;
}();