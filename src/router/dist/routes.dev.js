"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var routes = [{
  path: "/",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("layouts/main.layout.vue"));
    });
  },
  children: [{
    path: "",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/landing.page.vue"));
      });
    }
  }, {
    path: "login",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/login.page.vue"));
      });
    }
  }]
}, {
  path: "/s/",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("layouts/student/student.layout.vue"));
    });
  },
  children: [{
    path: "bulletin",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("src/pages/student/bulletin.page.vue"));
      });
    }
  }, {
    path: "clearance",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("src/pages/student/clearance.page.vue"));
      });
    }
  }, {
    path: "profile",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("src/pages/student/profile.page.vue"));
      });
    }
  }]
}, {
  path: "/a/",
  name: "admin",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../layouts/admin/admin.layout.vue"));
    });
  },
  meta: {
    isAdmin: true
  },
  children: [{
    path: "accounts",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/admin/accounts.page.vue"));
      });
    }
  }, {
    path: "attendance",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/admin/attendance.page.vue"));
      });
    }
  }, {
    path: "bulletin",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/admin/bulletin.page.vue"));
      });
    }
  }, {
    path: "clearances",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/admin/clearances.page.vue"));
      });
    }
  }, {
    path: "records",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("pages/admin/records.page.vue"));
      });
    }
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: "*",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("pages/Error404.vue"));
    });
  }
}];
var _default = routes;
exports["default"] = _default;