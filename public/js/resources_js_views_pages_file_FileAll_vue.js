"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_file_FileAll_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "GroupAll",
  data: function data() {
    return {
      files: {},
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
  created: function created() {
    this.getTags();
  },
  methods: {
    mounted: function mounted() {
      this.fetch();
    },
    changed_value: function changed_value(options) {
      this.fetch(options.page);
    },
    fetch: function fetch() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var page, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('files?page=' + page);

              case 3:
                response = _context.sent;
                _this.files = response.data.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getTags: function getTags() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("files");

              case 2:
                response = _context2.sent;
                _this2.files = response.data.data;

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
    },
    deleteFile: function deleteFile(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("files/" + id);

              case 3:
                response = _context3.sent;
                _this3.success = response.data.message;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                _this3.error = _context3.t0.response.data.message;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    delteTags: function delteTags(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("tags/" + id);

              case 3:
                response = _context4.sent;
                _this4.success = response.data.message;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                _this4.error = _context4.t0.response.data.message;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    getFileExtention: function getFileExtention(filePath) {
      var ext = filePath.split('.').pop();
      return ext;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["user"]))
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n#showFolder[data-v-17724dfc] {\r\n  border-radius: 10px;\n}\n.card-title[data-v-17724dfc], .card-text[data-v-17724dfc] {\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  margin-left: 3rem;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_style_index_0_id_17724dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_style_index_0_id_17724dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_style_index_0_id_17724dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/pages/file/FileAll.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/pages/file/FileAll.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileAll_vue_vue_type_template_id_17724dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileAll.vue?vue&type=template&id=17724dfc&scoped=true& */ "./resources/js/views/pages/file/FileAll.vue?vue&type=template&id=17724dfc&scoped=true&");
/* harmony import */ var _FileAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileAll.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/file/FileAll.vue?vue&type=script&lang=js&");
/* harmony import */ var _FileAll_vue_vue_type_style_index_0_id_17724dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css& */ "./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _FileAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FileAll_vue_vue_type_template_id_17724dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FileAll_vue_vue_type_template_id_17724dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "17724dfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/file/FileAll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/file/FileAll.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/pages/file/FileAll.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileAll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_style_index_0_id_17724dfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=style&index=0&id=17724dfc&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/pages/file/FileAll.vue?vue&type=template&id=17724dfc&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/pages/file/FileAll.vue?vue&type=template&id=17724dfc&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_template_id_17724dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_template_id_17724dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileAll_vue_vue_type_template_id_17724dfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FileAll.vue?vue&type=template&id=17724dfc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=template&id=17724dfc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=template&id=17724dfc&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/file/FileAll.vue?vue&type=template&id=17724dfc&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            [
              _c(
                "div",
                { staticClass: "app-main__inner" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm.error
                    ? _c("Error", { attrs: { error: _vm.error } })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.success
                    ? _c("Success", { attrs: { success: _vm.success } })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _vm._l(_vm.files, function(file, index) {
                          return _c(
                            "div",
                            {
                              key: file.id,
                              staticClass: "col-md-4 col-sm-6 col-lg-4",
                              attrs: { index: index }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "card mb-3",
                                  attrs: { id: "showFolder" }
                                },
                                [
                                  _c("div", { staticClass: "row g-0" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "col-2",
                                        staticStyle: { "font-size": "1.6rem" }
                                      },
                                      [
                                        _vm.getFileExtention(file.file_path) ==
                                        "pdf"
                                          ? _c("i", {
                                              staticClass:
                                                "fas fa-file-pdf text-danger fa-5x"
                                            })
                                          : _c("i", {
                                              staticClass:
                                                "fas fa-file-word text-primary fa-5x"
                                            })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-8" }, [
                                      _c("div", { staticClass: "card-body" }, [
                                        _c(
                                          "h6",
                                          {
                                            staticClass: "card-title",
                                            attrs: { title: file.name }
                                          },
                                          [
                                            _vm._v(
                                              "\n                        " +
                                                _vm._s(file.name) +
                                                "\n                      "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          {
                                            staticClass: "card-text",
                                            attrs: { title: file.description }
                                          },
                                          [
                                            _c(
                                              "small",
                                              { staticClass: "text-muted" },
                                              [
                                                _vm._v(
                                                  "\n                            " +
                                                    _vm._s(file.description) +
                                                    "\n                          "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("p", { staticClass: "card-text" }, [
                                          _c(
                                            "small",
                                            {
                                              staticClass: "text-muted",
                                              attrs: { title: file.user.name }
                                            },
                                            [
                                              _c("strong", [
                                                _vm._v("Created : ")
                                              ]),
                                              _vm._v(
                                                "  " +
                                                  _vm._s(
                                                    _vm.formatDate(
                                                      file.created_at
                                                    )
                                                  ) +
                                                  "\n                          "
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-2" }, [
                                      _c("br"),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: _vm.asset(
                                              "storage/uploads/" +
                                                file.file_path
                                            ),
                                            download: ""
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-download text-danger fa-1x"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("i", {
                                        staticClass:
                                          "fas fa-edit text-danger fa-1x"
                                      }),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteFile(file.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass:
                                              "fas fa-trash text-danger fa-1x"
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _vm.files.length > 10
                          ? _c("vue-cli-laravel-pagination", {
                              attrs: {
                                data: _vm.files,
                                align: "center",
                                onChange: _vm.changed_value,
                                buttonLimit: "10"
                              }
                            })
                          : _vm._e()
                      ],
                      2
                    )
                  ])
                ],
                1
              ),
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
            _vm._v("\n                All Files\n                "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v("Welcome to C80 electronic document management system")
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