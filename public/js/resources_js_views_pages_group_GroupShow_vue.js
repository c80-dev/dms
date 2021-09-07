"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_group_GroupShow_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'GroupShow',
  data: function data() {
    return {
      group: {}
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
    }
  },
  created: function created() {
    this.getGroup(this.$route.params.id);
  },
  methods: {
    getGroup: function getGroup(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('groups/' + id);

              case 2:
                response = _context.sent;
                _this.group = response.data.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['user']))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody[data-v-5942d39c]{\n    background:#f5f5f5;\n    margin-top:20px;}\n/*------- portfolio -------*/\n.project[data-v-5942d39c] {\n  margin: 15px 0;\n}\n.no-gutter .project[data-v-5942d39c] {\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.has-spacer[data-v-5942d39c] {\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-bottom: 30px;\n}\n.has-spacer-extra-space[data-v-5942d39c] {\n  margin-left: 30px;\n  margin-right: 30px;\n  margin-bottom: 30px;\n}\n.has-side-spacer[data-v-5942d39c] {\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.project-title[data-v-5942d39c] {\n  font-size: 1.25rem;\n}\n.project-skill[data-v-5942d39c] {\n  font-size: 0.9rem;\n  font-weight: 400;\n  letter-spacing: 0.06rem;\n}\n.project-info-box[data-v-5942d39c] {\n  margin: 15px 0;\n  background-color: #fff;\n  padding: 30px 40px;\n  border-radius: 5px;\n}\n.project-info-box p[data-v-5942d39c] {\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #d5dadb;\n}\n.project-info-box p[data-v-5942d39c]:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-bottom: none;\n}\nimg[data-v-5942d39c] {\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    -webkit-backface-visibility: hidden;\n}\n.rounded[data-v-5942d39c] {\n    border-radius: 5px !important;\n}\n.btn-xs.btn-icon[data-v-5942d39c] {\n    width: 34px;\n    height: 34px;\n    max-width: 34px !important;\n    max-height: 34px !important;\n    font-size: 10px;\n    line-height: 34px;\n}\n/* facebook button */\n.btn-facebook[data-v-5942d39c], .btn-facebook[data-v-5942d39c]:active, .btn-facebook[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #4e68a1;\n  border: 2px solid #4e68a1;\n}\n.btn-facebook[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #3b4f7a;\n  border: 2px solid #3b4f7a;\n}\n.btn-facebook-link[data-v-5942d39c], .btn-facebook-link[data-v-5942d39c]:active, .btn-facebook-link[data-v-5942d39c]:focus {\n  color: #4e68a1 !important;\n  background: transparent;\n  border: none;\n}\n.btn-facebook-link[data-v-5942d39c]:hover {\n  color: #3b4f7a !important;\n}\n.btn-outline-facebook[data-v-5942d39c], .btn-outline-facebook[data-v-5942d39c]:active, .btn-outline-facebook[data-v-5942d39c]:focus {\n  color: #4e68a1 !important;\n  background: transparent;\n  border: 2px solid #4e68a1;\n}\n.btn-outline-facebook[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #4e68a1;\n  border: 2px solid #4e68a1;\n}\n\n/* twitter button */\n.btn-twitter[data-v-5942d39c], .btn-twitter[data-v-5942d39c]:active, .btn-twitter[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #65b5f2;\n  border: 2px solid #65b5f2;\n}\n.btn-twitter[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #5294c6;\n  border: 2px solid #5294c6;\n}\n.btn-twitter[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #5294c6;\n  border: 2px solid #5294c6;\n}\n.btn-twitter-link[data-v-5942d39c], .btn-twitter-link[data-v-5942d39c]:active, .btn-twitter-link[data-v-5942d39c]:focus {\n  color: #65b5f2 !important;\n  background: transparent;\n  border: none;\n}\n.btn-twitter-link[data-v-5942d39c]:hover {\n  color: #5294c6 !important;\n}\n.btn-outline-twitter[data-v-5942d39c], .btn-outline-twitter[data-v-5942d39c]:active, .btn-outline-twitter[data-v-5942d39c]:focus {\n  color: #65b5f2 !important;\n  background: transparent;\n  border: 2px solid #65b5f2;\n}\n.btn-outline-twitter[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #65b5f2;\n  border: 2px solid #65b5f2;\n}\n\n/* google button */\n.btn-google[data-v-5942d39c], .btn-google[data-v-5942d39c]:active, .btn-google[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #e05d4b;\n  border: 2px solid #e05d4b;\n}\n.btn-google[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #b94c3d;\n  border: 2px solid #b94c3d;\n}\n.btn-google-link[data-v-5942d39c], .btn-google-link[data-v-5942d39c]:active, .btn-google-link[data-v-5942d39c]:focus {\n  color: #e05d4b !important;\n  background: transparent;\n  border: none;\n}\n.btn-google-link[data-v-5942d39c]:hover {\n  color: #b94c3d !important;\n}\n.btn-outline-google[data-v-5942d39c], .btn-outline-google[data-v-5942d39c]:active, .btn-outline-google[data-v-5942d39c]:focus {\n  color: #e05d4b !important;\n  background: transparent;\n  border: 2px solid #e05d4b;\n}\n.btn-outline-google[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #e05d4b;\n  border: 2px solid #e05d4b;\n}\n\n/* linkedin button */\n.btn-linkedin[data-v-5942d39c], .btn-linkedin[data-v-5942d39c]:active, .btn-linkedin[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #2083bc;\n  border: 2px solid #2083bc;\n}\n.btn-linkedin[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #186592;\n  border: 2px solid #186592;\n}\n.btn-linkedin-link[data-v-5942d39c], .btn-linkedin-link[data-v-5942d39c]:active, .btn-linkedin-link[data-v-5942d39c]:focus {\n  color: #2083bc !important;\n  background: transparent;\n  border: none;\n}\n.btn-linkedin-link[data-v-5942d39c]:hover {\n  color: #186592 !important;\n}\n.btn-outline-linkedin[data-v-5942d39c], .btn-outline-linkedin[data-v-5942d39c]:active, .btn-outline-linkedin[data-v-5942d39c]:focus {\n  color: #2083bc !important;\n  background: transparent;\n  border: 2px solid #2083bc;\n}\n.btn-outline-linkedin[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #2083bc;\n  border: 2px solid #2083bc;\n}\n\n/* pinterest button */\n.btn-pinterest[data-v-5942d39c], .btn-pinterest[data-v-5942d39c]:active, .btn-pinterest[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #d2373b;\n  border: 2px solid #d2373b;\n}\n.btn-pinterest[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #ad2c2f;\n  border: 2px solid #ad2c2f;\n}\n.btn-pinterest-link[data-v-5942d39c], .btn-pinterest-link[data-v-5942d39c]:active, .btn-pinterest-link[data-v-5942d39c]:focus {\n  color: #d2373b !important;\n  background: transparent;\n  border: none;\n}\n.btn-pinterest-link[data-v-5942d39c]:hover {\n  color: #ad2c2f !important;\n}\n.btn-outline-pinterest[data-v-5942d39c], .btn-outline-pinterest[data-v-5942d39c]:active, .btn-outline-pinterest[data-v-5942d39c]:focus {\n  color: #d2373b !important;\n  background: transparent;\n  border: 2px solid #d2373b;\n}\n.btn-outline-pinterest[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #d2373b;\n  border: 2px solid #d2373b;\n}\n\n/* dribble button */\n.btn-dribbble[data-v-5942d39c], .btn-dribbble[data-v-5942d39c]:active, .btn-dribbble[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #ec5f94;\n  border: 2px solid #ec5f94;\n}\n.btn-dribbble[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #b4446e;\n  border: 2px solid #b4446e;\n}\n.btn-dribbble-link[data-v-5942d39c], .btn-dribbble-link[data-v-5942d39c]:active, .btn-dribbble-link[data-v-5942d39c]:focus {\n  color: #ec5f94 !important;\n  background: transparent;\n  border: none;\n}\n.btn-dribbble-link[data-v-5942d39c]:hover {\n  color: #b4446e !important;\n}\n.btn-outline-dribbble[data-v-5942d39c], .btn-outline-dribbble[data-v-5942d39c]:active, .btn-outline-dribbble[data-v-5942d39c]:focus {\n  color: #ec5f94 !important;\n  background: transparent;\n  border: 2px solid #ec5f94;\n}\n.btn-outline-dribbble[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #ec5f94;\n  border: 2px solid #ec5f94;\n}\n\n/* instagram button */\n.btn-instagram[data-v-5942d39c], .btn-instagram[data-v-5942d39c]:active, .btn-instagram[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #4c5fd7;\n  border: 2px solid #4c5fd7;\n}\n.btn-instagram[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #4252ba;\n  border: 2px solid #4252ba;\n}\n.btn-instagram-link[data-v-5942d39c], .btn-instagram-link[data-v-5942d39c]:active, .btn-instagram-link[data-v-5942d39c]:focus {\n  color: #4c5fd7 !important;\n  background: transparent;\n  border: none;\n}\n.btn-instagram-link[data-v-5942d39c]:hover {\n  color: #4252ba !important;\n}\n.btn-outline-instagram[data-v-5942d39c], .btn-outline-instagram[data-v-5942d39c]:active, .btn-outline-instagram[data-v-5942d39c]:focus {\n  color: #4c5fd7 !important;\n  background: transparent;\n  border: 2px solid #4c5fd7;\n}\n.btn-outline-instagram[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #4c5fd7;\n  border: 2px solid #4c5fd7;\n}\n\n/* youtube button */\n.btn-youtube[data-v-5942d39c], .btn-youtube[data-v-5942d39c]:active, .btn-youtube[data-v-5942d39c]:focus {\n  color: #fff !important;\n  background: #e52d27;\n  border: 2px solid #e52d27;\n}\n.btn-youtube[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #b31217;\n  border: 2px solid #b31217;\n}\n.btn-youtube-link[data-v-5942d39c], .btn-youtube-link[data-v-5942d39c]:active, .btn-youtube-link[data-v-5942d39c]:focus {\n  color: #e52d27 !important;\n  background: transparent;\n  border: none;\n}\n.btn-youtube-link[data-v-5942d39c]:hover {\n  color: #b31217 !important;\n}\n.btn-outline-youtube[data-v-5942d39c], .btn-outline-youtube[data-v-5942d39c]:active, .btn-outline-youtube[data-v-5942d39c]:focus {\n  color: #e52d27 !important;\n  background: transparent;\n  border: 2px solid #e52d27;\n}\n.btn-outline-youtube[data-v-5942d39c]:hover {\n  color: #fff !important;\n  background: #e52d27;\n  border: 2px solid #e52d27;\n}\n.btn-xs.btn-icon span[data-v-5942d39c], .btn-xs.btn-icon i[data-v-5942d39c] {\n    line-height: 34px;\n}\n.btn-icon.btn-circle span[data-v-5942d39c], .btn-icon.btn-circle i[data-v-5942d39c] {\n    margin-top: -1px;\n    margin-right: -1px;\n}\n.btn-icon i[data-v-5942d39c] {\n    margin-top: -1px;\n}\n.btn-icon span[data-v-5942d39c], .btn-icon i[data-v-5942d39c] {\n    display: block;\n    line-height: 50px;\n}\na.btn[data-v-5942d39c], a.btn-social[data-v-5942d39c] {\n    display: inline-block;\n}\n.mr-5[data-v-5942d39c] {\n    margin-right: 5px !important;\n}\n.mb-0[data-v-5942d39c] {\n    margin-bottom: 0 !important;\n}\n.btn-facebook[data-v-5942d39c], .btn-facebook[data-v-5942d39c]:active, .btn-facebook[data-v-5942d39c]:focus {\n    color: #fff !important;\n    background: #4e68a1;\n    border: 2px solid #4e68a1;\n}\n.btn-circle[data-v-5942d39c] {\n    border-radius: 50% !important;\n}\n.project-info-box p[data-v-5942d39c] {\n    margin-bottom: 15px;\n    padding-bottom: 15px;\n    border-bottom: 1px solid #d5dadb;\n}\np[data-v-5942d39c] {\n    font-family: \"Barlow\", sans-serif !important;\n    font-weight: 300;\n    font-size: 1rem;\n    color: #686c6d;\n    letter-spacing: 0.03rem;\n    margin-bottom: 10px;\n}\nb[data-v-5942d39c], strong[data-v-5942d39c] {\n    font-weight: 700 !important;\n}\n\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_style_index_0_id_5942d39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_style_index_0_id_5942d39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_style_index_0_id_5942d39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/views/pages/group/GroupShow.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/group/GroupShow.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GroupShow_vue_vue_type_template_id_5942d39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GroupShow.vue?vue&type=template&id=5942d39c&scoped=true& */ "./resources/js/views/pages/group/GroupShow.vue?vue&type=template&id=5942d39c&scoped=true&");
/* harmony import */ var _GroupShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupShow.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/group/GroupShow.vue?vue&type=script&lang=js&");
/* harmony import */ var _GroupShow_vue_vue_type_style_index_0_id_5942d39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css& */ "./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _GroupShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _GroupShow_vue_vue_type_template_id_5942d39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _GroupShow_vue_vue_type_template_id_5942d39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5942d39c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/group/GroupShow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/group/GroupShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/group/GroupShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_style_index_0_id_5942d39c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=style&index=0&id=5942d39c&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/pages/group/GroupShow.vue?vue&type=template&id=5942d39c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/pages/group/GroupShow.vue?vue&type=template&id=5942d39c&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_template_id_5942d39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_template_id_5942d39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GroupShow_vue_vue_type_template_id_5942d39c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GroupShow.vue?vue&type=template&id=5942d39c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=template&id=5942d39c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=template&id=5942d39c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/group/GroupShow.vue?vue&type=template&id=5942d39c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
        "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
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
            [_vm._m(0), _vm._v(" "), _c("Footer")],
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
    return _c("div", { staticClass: "app-main__inner" }, [
      _c("div", { staticClass: "app-page-title" }, [
        _c("div", { staticClass: "page-title-wrapper" }, [
          _c("div", { staticClass: "page-title-heading" }, [
            _c("div", { staticClass: "page-title-icon" }, [
              _c("i", { staticClass: "pe-7s-home icon-gradient bg-mean-fruit" })
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(" All Groups\r\n                            "),
              _c("div", { staticClass: "page-title-subheading" }, [
                _vm._v(
                  "\r\n                                Welcome to C80 electronic document management system\r\n                            "
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "main-card mb-3 card" }, [
            _c("link", {
              attrs: {
                rel: "stylesheet",
                href:
                  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css",
                integrity:
                  "sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=",
                crossorigin: "anonymous"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "container" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "project-info-box mt-0" }, [
                    _c("h5", [_vm._v("PROJECT DETAILS")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "project-info-box" }, [
                    _c("p", [
                      _c("b", [_vm._v("Client:")]),
                      _vm._v(" CUPCAKE CO")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("b", [_vm._v("Date:")]),
                      _vm._v(" 14.02.2020")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("b", [_vm._v("Designer:")]),
                      _vm._v(" James Doe")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("b", [_vm._v("Tools:")]),
                      _vm._v(" Illustrator")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _c("b", [_vm._v("Budget:")]),
                      _vm._v(" $500")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "project-info-box mt-0 mb-0" }, [
                    _c("p", { staticClass: "mb-0" }, [
                      _c(
                        "span",
                        { staticClass: "fw-bold mr-10 va-middle hide-mobile" },
                        [_vm._v("Share:")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-xs btn-facebook btn-circle btn-icon mr-5 mb-0",
                          attrs: { href: "#x" }
                        },
                        [_c("i", { staticClass: "fab fa-facebook-f" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-xs btn-twitter btn-circle btn-icon mr-5 mb-0",
                          attrs: { href: "#x" }
                        },
                        [_c("i", { staticClass: "fab fa-twitter" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-xs btn-pinterest btn-circle btn-icon mr-5 mb-0",
                          attrs: { href: "#x" }
                        },
                        [_c("i", { staticClass: "fab fa-pinterest" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-xs btn-linkedin btn-circle btn-icon mr-5 mb-0",
                          attrs: { href: "#x" }
                        },
                        [_c("i", { staticClass: "fab fa-linkedin-in" })]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7" }, [
                  _c("img", {
                    staticClass: "rounded",
                    attrs: {
                      src: "https://via.placeholder.com/400x300/FFB6C1/000000",
                      alt: "project-image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "project-info-box" }, [
                    _c("p", [
                      _c("b", [_vm._v("Categories:")]),
                      _vm._v(" Design, Illustration")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _c("b", [_vm._v("Skills:")]),
                      _vm._v(" Illustrator")
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);