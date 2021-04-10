"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receipts = exports.minutesofmeetings = exports.accounts = exports.news = exports.achievement = exports.event = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/storage");

require("firebase/database");

var _firebaseConfig = _interopRequireDefault(require("./firebaseConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].initializeApp(_firebaseConfig["default"]);

require("firebase/auth"); // utils


var db = _app["default"].firestore(); // const auth = firebase.auth();
// const firebaseStorage = firebase.storage();


var event = db.collection("event");
exports.event = event;
var achievement = db.collection("achievement");
exports.achievement = achievement;
var news = db.collection("news");
exports.news = news;
var accounts = db.collection("accounts");
exports.accounts = accounts;
var minutesofmeetings = db.collection("minutesofmeetings");
exports.minutesofmeetings = minutesofmeetings;
var receipts = db.collection("receipts"); // export utils/refs

exports.receipts = receipts;