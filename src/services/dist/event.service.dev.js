"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebaseInit = require("../firestore/firebaseInit.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventService =
/*#__PURE__*/
function () {
  function EventService() {
    _classCallCheck(this, EventService);
  }

  _createClass(EventService, [{
    key: "getEventById",
    //   async getEvents() {
    //     let eventArr = [];
    //     event.onSnapshot(docs => {
    //       return docs;
    //       //   docs.forEach(doc => {
    //       //     eventArr.push({
    //       //       id: doc.id,
    //       //       eventName: doc.data().eventName,
    //       //       eventDate: doc.data().eventDate,
    //       //       eventDetails: doc.data().eventDetails,
    //       //       eventStatus: doc.data().eventStatus
    //       //     });
    //       //     return eventArr;
    //       //   });
    //     });
    //   }
    value: function getEventById(id) {
      var res;
      return regeneratorRuntime.async(function getEventById$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_firebaseInit.event.doc(id).get());

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
    key: "editEvent",
    value: function editEvent(id, data) {
      var res;
      return regeneratorRuntime.async(function editEvent$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(id, data);
              _context2.next = 3;
              return regeneratorRuntime.awrap(_firebaseInit.event.doc(id).update(data));

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

  return EventService;
}();

var eventService = new EventService();
var _default = eventService;
exports["default"] = _default;