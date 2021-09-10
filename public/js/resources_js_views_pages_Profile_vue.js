"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  name: "Profile",
  data: function data() {
    return {
      user: {},
      file: null
    };
  },
  components: {
    SideBar: function SideBar() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_SideBar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/SideBar.vue */ "./resources/js/components/SideBar.vue"));
    },
    Header: function Header() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Header_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Header.vue */ "./resources/js/components/Header.vue"));
    },
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Footer_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/Footer.vue */ "./resources/js/components/Footer.vue"));
    }
  },
  created: function created() {
    this.getProfile(this.$route.params.id);
  },
  methods: {
    selectFile: function selectFile(event) {
      this.file = event.target.files[0];
    },
    onSubmit: function onSubmit(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                formData = new FormData();
                formData.append("image_path", _this.file, _this.name);
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("change-picture/" + id, formData, {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                });

              case 5:
                response = _context.sent;
                alert(response.data.message);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                alert(_context.t0.response.data.message);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }))();
    },
    getProfile: function getProfile(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("users/" + id);

              case 2:
                response = _context2.sent;
                _this2.user = response.data.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    formatDate: function formatDate(dateString) {
      var options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/***\nUser Profile Sidebar by @keenthemes\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: https://j.mp/metronictheme\nLicensed under MIT\n***/\nbody[data-v-7d62f8cf] {\n  background: #f1f3fa;\n}\n\n/* Profile container */\n.profile[data-v-7d62f8cf] {\n  margin: 20px 0;\n}\n\n/* Profile sidebar */\n.profile-sidebar[data-v-7d62f8cf] {\n  padding: 20px 0 10px 0;\n  background: #fff;\n}\n.profile-userpic img[data-v-7d62f8cf] {\n  width: 20%;\n  height: 20%;\n  border-radius: 50% !important;\n}\n#file[data-v-7d62f8cf]{\n    border: 0px solid black;\n}\n.profile-usertitle[data-v-7d62f8cf] {\n  text-align: center;\n  margin-top: 20px;\n}\n.profile-usertitle-name[data-v-7d62f8cf] {\n  color: #5a7391;\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.profile-usertitle-job[data-v-7d62f8cf] {\n  text-transform: uppercase;\n  color: #5b9bd1;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.profile-userbuttons[data-v-7d62f8cf] {\n  text-align: center;\n  margin-top: 10px;\n}\n.profile-userbuttons .btn[data-v-7d62f8cf] {\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 6px 15px;\n  margin-right: 5px;\n}\n.profile-userbuttons .btn[data-v-7d62f8cf]:last-child {\n  margin-right: 0px;\n}\n.profile-usermenu[data-v-7d62f8cf] {\n  margin-top: 30px;\n}\n.profile-usermenu ul li[data-v-7d62f8cf] {\n  border-bottom: 1px solid #f0f4f7;\n}\n.profile-usermenu ul li[data-v-7d62f8cf]:last-child {\n  border-bottom: none;\n}\n.profile-usermenu ul li a[data-v-7d62f8cf] {\n  color: #93a3b5;\n  font-size: 14px;\n  font-weight: 400;\n}\n.profile-usermenu ul li a i[data-v-7d62f8cf] {\n  margin-right: 8px;\n  font-size: 14px;\n}\n.profile-usermenu ul li a[data-v-7d62f8cf]:hover {\n  background-color: #fafcfd;\n  color: #5b9bd1;\n}\n.profile-usermenu ul li.active[data-v-7d62f8cf] {\n  border-bottom: none;\n}\n.profile-usermenu ul li.active a[data-v-7d62f8cf] {\n  color: #5b9bd1;\n  background-color: #f6f9fb;\n  border-left: 2px solid #5b9bd1;\n  margin-left: -2px;\n}\n\n/* Profile Content */\n.profile-content[data-v-7d62f8cf] {\n  padding: 20px;\n  background: #fff;\n  min-height: 460px;\n}\na[data-v-7d62f8cf],\nbutton[data-v-7d62f8cf],\ncode[data-v-7d62f8cf],\ndiv[data-v-7d62f8cf],\nimg[data-v-7d62f8cf],\ninput[data-v-7d62f8cf],\nlabel[data-v-7d62f8cf],\nli[data-v-7d62f8cf],\np[data-v-7d62f8cf],\npre[data-v-7d62f8cf],\nselect[data-v-7d62f8cf],\nspan[data-v-7d62f8cf],\nsvg[data-v-7d62f8cf],\ntable[data-v-7d62f8cf],\ntd[data-v-7d62f8cf],\ntextarea[data-v-7d62f8cf],\nth[data-v-7d62f8cf],\nul[data-v-7d62f8cf] {\n  border-radius: 0 !important;\n}\n.portlet[data-v-7d62f8cf] {\n  margin-top: 0;\n  margin-bottom: 25px;\n  padding: 0;\n  border-radius: 4px;\n}\n.portlet.bordered[data-v-7d62f8cf] {\n  border-left: 2px solid #e6e9ec !important;\n}\n.portlet.light[data-v-7d62f8cf] {\n  padding: 12px 20px 15px;\n  background-color: #fff;\n}\n.portlet.light.bordered[data-v-7d62f8cf] {\n  border: 1px solid #e7ecf1 !important;\n}\n.list-separated[data-v-7d62f8cf] {\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.profile-stat[data-v-7d62f8cf] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #f0f4f7;\n}\n.profile-stat-title[data-v-7d62f8cf] {\n  color: #7f90a4;\n  font-size: 25px;\n  text-align: center;\n}\n.uppercase[data-v-7d62f8cf] {\n  text-transform: uppercase !important;\n}\n.profile-stat-text[data-v-7d62f8cf] {\n  color: #5b9bd1;\n  font-size: 10px;\n  font-weight: 600;\n  text-align: center;\n}\n.profile-desc-title[data-v-7d62f8cf] {\n  color: #7f90a4;\n  font-size: 17px;\n  font-weight: 600;\n}\n.profile-desc-text[data-v-7d62f8cf] {\n  color: #7e8c9e;\n  font-size: 14px;\n}\n.margin-top-20[data-v-7d62f8cf] {\n  margin-top: 20px !important;\n}\n[class*=\" fa-\"][data-v-7d62f8cf]:not(.fa-stack),\n[class*=\" glyphicon-\"][data-v-7d62f8cf],\n[class*=\" icon-\"][data-v-7d62f8cf],\n[class^=\"fa-\"][data-v-7d62f8cf]:not(.fa-stack),\n[class^=\"glyphicon-\"][data-v-7d62f8cf],\n[class^=\"icon-\"][data-v-7d62f8cf] {\n  display: inline-block;\n  line-height: 14px;\n  -webkit-font-smoothing: antialiased;\n}\n.profile-desc-link i[data-v-7d62f8cf] {\n  width: 22px;\n  font-size: 19px;\n  color: #abb6c4;\n  margin-right: 5px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_7d62f8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_7d62f8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_7d62f8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/views/pages/Profile.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/pages/Profile.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_7d62f8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=7d62f8cf&scoped=true& */ "./resources/js/views/pages/Profile.vue?vue&type=template&id=7d62f8cf&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_id_7d62f8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css& */ "./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_7d62f8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_7d62f8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7d62f8cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/pages/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_7d62f8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=style&index=0&id=7d62f8cf&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/pages/Profile.vue?vue&type=template&id=7d62f8cf&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/Profile.vue?vue&type=template&id=7d62f8cf&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_7d62f8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_7d62f8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_7d62f8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=7d62f8cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=template&id=7d62f8cf&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=template&id=7d62f8cf&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Profile.vue?vue&type=template&id=7d62f8cf&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("div", { staticClass: "profile-sidebar" }, [
                              _c("div", { staticClass: "profile-usertitle" }, [
                                _vm.user.image_path
                                  ? _c(
                                      "div",
                                      { staticClass: "profile-userpic" },
                                      [
                                        _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            width: "40",
                                            src: _vm.asset(
                                              "storage/uploads/" +
                                                _vm.user.image_path
                                            ),
                                            alt: ""
                                          }
                                        })
                                      ]
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "profile-userpic" },
                                      [
                                        _c("img", {
                                          staticClass: "rounded-circle",
                                          attrs: {
                                            width: "40",
                                            src: _vm.asset("images/avt.png"),
                                            alt: ""
                                          }
                                        })
                                      ]
                                    ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "profile-usertitle-name" },
                                  [_vm._v(" " + _vm._s(_vm.user.name) + " ")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "profile-usertitle-job" },
                                  [_vm._v(" " + _vm._s(_vm.user.roles[0].name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "profile-userbuttons" },
                                [
                                  _c("input", {
                                    staticClass: "form-control form-control-md",
                                    attrs: {
                                      type: "file",
                                      id: "file",
                                      name: "file"
                                    },
                                    on: { change: _vm.selectFile }
                                  }),
                                  _vm._v(" "),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success btn-sm",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          return _vm.onSubmit(_vm.user.id)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                         Change Picture\n                        "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "profile-usermenu mb-10" },
                                [
                                  _c("ul", { staticClass: "nav" }, [
                                    _vm._m(1),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: "/profile-edit/" + _vm.user.id
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "glyphicon glyphicon-user"
                                            }),
                                            _vm._v(
                                              "\n                              Account Settings\n                            "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "portlet light bordered" },
                                [
                                  _c("div", [
                                    _c(
                                      "h4",
                                      { staticClass: "profile-desc-title" },
                                      [
                                        _vm._v(
                                          "\n                            About " +
                                            _vm._s(_vm.user.name) +
                                            "\n                          "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "profile-desc-text" },
                                      [
                                        _vm._v(
                                          "\n                            Lorem ipsum dolor sit amet diam nonummy nibh\n                            dolore.\n                          "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("small", [
                                      _c("strong", [_vm._v("Joined : ")]),
                                      _vm._v(" " + _vm._s(_vm.user.created_at))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "margin-top-20 profile-desc-link"
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-twitter"
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v("@" + _vm._s(_vm.user.twitter))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "margin-top-20 profile-desc-link"
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-facebook"
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(_vm.user.facebook))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "margin-top-20 profile-desc-link"
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-linkedin"
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(_vm.user.linkedin))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "margin-top-20 profile-desc-link"
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-envelope"
                                        }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(_vm.user.email))
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "margin-top-20 profile-desc-link"
                                      },
                                      [
                                        _c("i", { staticClass: "fa fa-phone" }),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(_vm._s(_vm.user.phone))
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ])
                          ])
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
            _c("i", { staticClass: "pe-7s-home icon-gradient bg-mean-fruit" })
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n                Profile\n                "),
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
    return _c("li", { staticClass: "active" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "glyphicon glyphicon-home" }),
        _vm._v(
          "\n                              Overview\n                            "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);