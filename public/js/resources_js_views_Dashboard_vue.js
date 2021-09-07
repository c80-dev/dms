"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Dashboard',
  data: function data() {
    return {
      users: []
    };
  },
  components: {
    SideBar: function SideBar() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_SideBar_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/SideBar.vue */ "./resources/js/components/SideBar.vue"));
    },
    Header: function Header() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Header_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Header.vue */ "./resources/js/components/Header.vue"));
    },
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ "resources_js_components_Footer_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Footer.vue */ "./resources/js/components/Footer.vue"));
    }
  },
  created: function created() {
    this.getEmployees();
  },
  methods: {
    getEmployees: function getEmployees() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('users');

              case 2:
                response = _context.sent;
                _this.users = response.data.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    delteUser: function delteUser(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                alert(id);
                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().delete('groups/' + id);

              case 4:
                response = _context2.sent;
                _this2.success = response.data.message;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                _this2.error = _context2.t0.response.data.message;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }))();
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['user']))
});

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1f79daf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "app-main__inner" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6 col-xl-4" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "card mb-3 widget-content bg-midnight-bloom"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "widget-content-wrapper text-white" },
                          [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("div", { staticClass: "widget-content-right" }, [
                              _c(
                                "div",
                                { staticClass: "widget-numbers text-white" },
                                [_c("span", [_vm._v(_vm._s(_vm.users.length))])]
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "main-card mb-3 card" }, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c(
                          "table",
                          {
                            staticClass:
                              "align-middle mb-0 table table-borderless table-striped table-hover"
                          },
                          [
                            _vm._m(5),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.users, function(userData, index) {
                                return _c(
                                  "tr",
                                  { key: userData.id, attrs: { index: index } },
                                  [
                                    _c(
                                      "td",
                                      { staticClass: "text-center text-muted" },
                                      [_vm._v(_vm._s(index + 1))]
                                    ),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "div",
                                        { staticClass: "widget-content p-0" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "widget-content-wrapper"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "widget-content-left mr-3"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "widget-content-left"
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "rounded-circle",
                                                        attrs: {
                                                          width: "40",
                                                          src: _vm.asset(
                                                            "images/avt.png"
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "widget-content-left flex2"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "widget-heading"
                                                    },
                                                    [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(
                                                            userData.name
                                                          ) +
                                                          " "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "widget-subheading opacity-7"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          userData.roles[0].name
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _vm._v(" " + _vm._s(userData.email) + " ")
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(userData.phone) +
                                          "\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", { staticClass: "text-center" }, [
                                      _vm._v(
                                        "\n                                            " +
                                          _vm._s(userData.created_at) +
                                          "\n                                        "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      { staticClass: "text-center" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-primary btn-sm",
                                            attrs: {
                                              to: "button",
                                              id: "PopoverCustomT-1"
                                            }
                                          },
                                          [_vm._v("Proifle")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-danger btn-sm",
                                            attrs: { id: "PopoverCustomT-1" },
                                            on: {
                                              click: function($event) {
                                                return _vm.delteUser(
                                                  userData.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Delete")]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]
                        )
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
            _vm._v(" Dashboard\n                            "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v(
                "\n                                Welcome to C80 electronic document management system\n                            "
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
    return _c("div", { staticClass: "widget-content-left" }, [
      _c("div", { staticClass: "widget-heading" }, [_vm._v("Total Users")]),
      _vm._v(" "),
      _c("div", { staticClass: "widget-subheading" }, [
        _vm._v("Total users of the system")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-xl-4" }, [
      _c("div", { staticClass: "card mb-3 widget-content bg-arielle-smile" }, [
        _c("div", { staticClass: "widget-content-wrapper text-white" }, [
          _c("div", { staticClass: "widget-content-left" }, [
            _c("div", { staticClass: "widget-heading" }, [
              _vm._v("Total Files")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "widget-subheading" }, [
              _vm._v("Total files stored in the system")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "widget-content-right" }, [
            _c("div", { staticClass: "widget-numbers text-white" }, [
              _c("span", [_vm._v(" 0")])
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
    return _c("div", { staticClass: "col-md-6 col-xl-4" }, [
      _c("div", { staticClass: "card mb-3 widget-content bg-grow-early" }, [
        _c("div", { staticClass: "widget-content-wrapper text-white" }, [
          _c("div", { staticClass: "widget-content-left" }, [
            _c("div", { staticClass: "widget-heading" }, [
              _vm._v("Total Groups")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "widget-subheading" }, [
              _vm._v("Total Groups created")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "widget-content-right" }, [
            _c("div", { staticClass: "widget-numbers text-white" }, [
              _c("span", [_vm._v("0")])
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
    return _c(
      "div",
      { staticClass: "d-xl-none d-lg-block col-md-6 col-xl-4" },
      [
        _c("div", { staticClass: "card mb-3 widget-content bg-premium-dark" }, [
          _c("div", { staticClass: "widget-content-wrapper text-white" }, [
            _c("div", { staticClass: "widget-content-left" }, [
              _c("div", { staticClass: "widget-heading" }, [
                _vm._v("Total Files")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "widget-subheading" }, [
                _vm._v("Total files uploaded")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "widget-content-right" }, [
              _c("div", { staticClass: "widget-numbers text-warning" }, [
                _c("span", [_vm._v("4")])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "text-center" }, [_vm._v("No..")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);