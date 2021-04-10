"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebaseInit = require("../firestore/firebaseInit.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NewsService =
/*#__PURE__*/
function () {
  function NewsService() {
    _classCallCheck(this, NewsService);
  }

  _createClass(NewsService, [{
    key: "getNewsById",
    value: function getNewsById(id) {
      var res;
      return regeneratorRuntime.async(function getNewsById$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_firebaseInit.news.doc(id).get());

            case 2:
              res = _context.sent;
              return _context.abrupt("return", res);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "editNews",
    value: function editNews(id, data) {
      var res;
      return regeneratorRuntime.async(function editNews$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(id, data);
              _context2.next = 3;
              return regeneratorRuntime.awrap(_firebaseInit.news.doc(id).update(data));

            case 3:
              res = _context2.sent;
              return _context2.abrupt("return", res);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return NewsService;
}();

var newsService = new NewsService();
var _default = newsService;
exports["default"] = _default;