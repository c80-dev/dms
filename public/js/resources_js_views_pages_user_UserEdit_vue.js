"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_user_UserEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserEdit",
  data: function data() {
    return {
      user: {},
      error: "",
      success: ""
    };
  },
  components: {
    SideBar: function SideBar() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_SideBar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/SideBar.vue */ "./resources/js/components/SideBar.vue"));
    },
    Header: function Header() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Header_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Header.vue */ "./resources/js/components/Header.vue"));
    },
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Footer_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Footer.vue */ "./resources/js/components/Footer.vue"));
    },
    Error: function Error() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Error_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Error.vue */ "./resources/js/components/Error.vue"));
    },
    Success: function Success() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Success_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../../components/Success.vue */ "./resources/js/components/Success.vue"));
    }
  },
  methods: {
    onSubmit: function onSubmit(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("update-profile/" + id, {
                  name: _this.user.name,
                  email: _this.user.email,
                  phone: _this.user.phone,
                  facebook: _this.user.facebook,
                  twitter: _this.user.twitter,
                  linkedin: _this.user.linkedin,
                  _method: "patch"
                });

              case 3:
                response = _context.sent;
                console.log(response);
                _this.success = response.data.message;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _this.error = _context.t0.response.data.message;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    getUser: function getUser(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("users/" + id);

              case 3:
                response = _context2.sent;
                _this2.user = response.data.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                _this2.error = _context2.t0.response.data;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    }
  },
  created: function created() {
    this.getUser(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/***\r\nUser Profile Sidebar by @keenthemes\r\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: https://j.mp/metronictheme\r\nLicensed under MIT\r\n***/\nbody[data-v-787eb31f] {\r\n  background: #f1f3fa;\n}\r\n\r\n/* Profile container */\n.profile[data-v-787eb31f] {\r\n  margin: 20px 0;\n}\r\n\r\n/* Profile sidebar */\n.profile-sidebar[data-v-787eb31f] {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\n}\n.profile-userpic img[data-v-787eb31f] {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50% !important;\n}\n.profile-usertitle[data-v-787eb31f] {\r\n  text-align: center;\r\n  margin-top: 20px;\n}\n.profile-usertitle-name[data-v-787eb31f] {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\n}\n.profile-usertitle-job[data-v-787eb31f] {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\n}\n.profile-userbuttons[data-v-787eb31f] {\r\n  text-align: center;\r\n  margin-top: 10px;\n}\n.profile-userbuttons .btn[data-v-787eb31f] {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px;\r\n  margin-right: 5px;\n}\n.profile-userbuttons .btn[data-v-787eb31f]:last-child {\r\n  margin-right: 0px;\n}\n.profile-usermenu[data-v-787eb31f] {\r\n  margin-top: 30px;\n}\n.profile-usermenu ul li[data-v-787eb31f] {\r\n  border-bottom: 1px solid #f0f4f7;\n}\n.profile-usermenu ul li[data-v-787eb31f]:last-child {\r\n  border-bottom: none;\n}\n.profile-usermenu ul li a[data-v-787eb31f] {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\n}\n.profile-usermenu ul li a i[data-v-787eb31f] {\r\n  margin-right: 8px;\r\n  font-size: 14px;\n}\n.profile-usermenu ul li a[data-v-787eb31f]:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\n}\n.profile-usermenu ul li.active[data-v-787eb31f] {\r\n  border-bottom: none;\n}\n.profile-usermenu ul li.active a[data-v-787eb31f] {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\n}\r\n\r\n/* Profile Content */\n.profile-content[data-v-787eb31f] {\r\n  padding: 20px;\r\n  background: #fff;\r\n  min-height: 460px;\n}\na[data-v-787eb31f],\r\nbutton[data-v-787eb31f],\r\ncode[data-v-787eb31f],\r\ndiv[data-v-787eb31f],\r\nimg[data-v-787eb31f],\r\ninput[data-v-787eb31f],\r\nlabel[data-v-787eb31f],\r\nli[data-v-787eb31f],\r\np[data-v-787eb31f],\r\npre[data-v-787eb31f],\r\nselect[data-v-787eb31f],\r\nspan[data-v-787eb31f],\r\nsvg[data-v-787eb31f],\r\ntable[data-v-787eb31f],\r\ntd[data-v-787eb31f],\r\ntextarea[data-v-787eb31f],\r\nth[data-v-787eb31f],\r\nul[data-v-787eb31f] {\r\n  border-radius: 0 !important;\n}\n.portlet[data-v-787eb31f] {\r\n  margin-top: 0;\r\n  margin-bottom: 25px;\r\n  padding: 0;\r\n  border-radius: 4px;\n}\n.portlet.bordered[data-v-787eb31f] {\r\n  border-left: 2px solid #e6e9ec !important;\n}\n.portlet.light[data-v-787eb31f] {\r\n  padding: 12px 20px 15px;\r\n  background-color: #fff;\n}\n.portlet.light.bordered[data-v-787eb31f] {\r\n  border: 1px solid #e7ecf1 !important;\n}\n.list-separated[data-v-787eb31f] {\r\n  margin-top: 10px;\r\n  margin-bottom: 15px;\n}\n.profile-stat[data-v-787eb31f] {\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid #f0f4f7;\n}\n.profile-stat-title[data-v-787eb31f] {\r\n  color: #7f90a4;\r\n  font-size: 25px;\r\n  text-align: center;\n}\n.uppercase[data-v-787eb31f] {\r\n  text-transform: uppercase !important;\n}\n.profile-stat-text[data-v-787eb31f] {\r\n  color: #5b9bd1;\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n  text-align: center;\n}\n.profile-desc-title[data-v-787eb31f] {\r\n  color: #7f90a4;\r\n  font-size: 17px;\r\n  font-weight: 600;\n}\n.profile-desc-text[data-v-787eb31f] {\r\n  color: #7e8c9e;\r\n  font-size: 14px;\n}\n.margin-top-20[data-v-787eb31f] {\r\n  margin-top: 20px !important;\n}\n[class*=\" fa-\"][data-v-787eb31f]:not(.fa-stack),\r\n[class*=\" glyphicon-\"][data-v-787eb31f],\r\n[class*=\" icon-\"][data-v-787eb31f],\r\n[class^=\"fa-\"][data-v-787eb31f]:not(.fa-stack),\r\n[class^=\"glyphicon-\"][data-v-787eb31f],\r\n[class^=\"icon-\"][data-v-787eb31f] {\r\n  display: inline-block;\r\n  line-height: 14px;\r\n  -webkit-font-smoothing: antialiased;\n}\n.profile-desc-link i[data-v-787eb31f] {\r\n  width: 22px;\r\n  font-size: 19px;\r\n  color: #abb6c4;\r\n  margin-right: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_787eb31f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_787eb31f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_787eb31f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/views/pages/user/UserEdit.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/user/UserEdit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserEdit_vue_vue_type_template_id_787eb31f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=template&id=787eb31f&scoped=true& */ "./resources/js/views/pages/user/UserEdit.vue?vue&type=template&id=787eb31f&scoped=true&");
/* harmony import */ var _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/user/UserEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserEdit_vue_vue_type_style_index_0_id_787eb31f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css& */ "./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserEdit_vue_vue_type_template_id_787eb31f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserEdit_vue_vue_type_template_id_787eb31f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "787eb31f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/user/UserEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/user/UserEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/user/UserEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_style_index_0_id_787eb31f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=style&index=0&id=787eb31f&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/pages/user/UserEdit.vue?vue&type=template&id=787eb31f&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/user/UserEdit.vue?vue&type=template&id=787eb31f&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_787eb31f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_787eb31f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEdit_vue_vue_type_template_id_787eb31f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserEdit.vue?vue&type=template&id=787eb31f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=template&id=787eb31f&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=template&id=787eb31f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/user/UserEdit.vue?vue&type=template&id=787eb31f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "\n    app-container app-theme-white\n    body-tabs-shadow\n    fixed-sidebar fixed-header\n  "
    },
    [
      _c("Header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "app-main" },
        [
          _c("SideBar"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "app-main__outer" },
            [
              _c("div", { staticClass: "app-main__inner" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5 offset-md-3" }, [
                    _c("div", { staticClass: "main-card mb-3 card" }, [
                      _c("div", { staticClass: "container" }, [
                        _c("div", { staticClass: "row profile" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-12 order-content" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "form_main col-md-12 col-sm-5 col-xs-7"
                                },
                                [
                                  _vm._m(1),
                                  _vm._v(" "),
                                  _vm.error
                                    ? _c("Error", {
                                        attrs: { error: _vm.error }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.success
                                    ? _c("Success", {
                                        attrs: { success: _vm.success }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.name,
                                            expression: "user.name"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-md",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.name },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.email,
                                            expression: "user.email"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-md",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.email },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "email",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.phone,
                                            expression: "user.phone"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-md",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.phone },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "phone",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _vm._m(5),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.twitter,
                                            expression: "user.twitter"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-md",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.twitter },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "twitter",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.facebook,
                                            expression: "user.facebook"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-md",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.facebook },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "facebook",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "form-group" }, [
                                      _vm._m(7),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.user.linkedin,
                                            expression: "user.linkedin"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-md",
                                        attrs: { type: "text" },
                                        domProps: { value: _vm.user.linkedin },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.user,
                                              "linkedin",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-dark btn-lg",
                                        attrs: { type: "submit" },
                                        on: {
                                          click: function($event) {
                                            return _vm.onSubmit(_vm.user.id)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                            Update\n                          "
                                        )
                                      ]
                                    )
                                  ])
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("Footer")
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _c("div", { staticClass: "page-title-heading" }, [
          _c("div", { staticClass: "page-title-icon" }, [
            _c("i", { staticClass: "pe-7s-user icon-gradient bg-mean-fruit" })
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n                Profile Edit\n                "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v(
                "\n                  Welcome to C80 electronic document management system\n                "
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "heading" }, [
      _c("strong", [_vm._v("Edit ")]),
      _vm._v(" Profile "),
      _c("span")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("strong", [_vm._v("Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("strong", [_vm._v("Email")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("strong", [_vm._v("Phone")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("strong", [_vm._v("Twitter")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("strong", [_vm._v("Facebook")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _c("strong", [_vm._v("Linkedin")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);