"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Header',
  methods: {
    onLogout: function onLogout() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('logout', {
        token: localStorage.getItem('token')
      });
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['user']))
});

/***/ }),

/***/ "./resources/js/components/Header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Header.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1f42fb90& */ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=1f42fb90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-header header-shadow" }, [
    _c(
      "div",
      { staticClass: "app-header__logo" },
      [
        _c("router-link", { attrs: { to: "/dashboard" } }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "197.792",
                height: "30",
                viewBox: "0 0 297.792 92"
              }
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group_482",
                    "data-name": "Group 482",
                    transform: "translate(-1326.208 -68)"
                  }
                },
                [
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Group_479",
                        "data-name": "Group 479",
                        transform: "translate(1324.208 74.474)"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          id: "Path_518",
                          "data-name": "Path 518",
                          d:
                            "M25.758,40.517A14.758,14.758,0,1,1,40.517,25.758,14.758,14.758,0,0,1,25.758,40.517Z",
                          transform: "translate(13.137 13.137)"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          id: "Path_519",
                          "data-name": "Path 519",
                          d:
                            "M8.954,19.688c-4.277.754-7.208,4.885-5.567,8.906a36.9,36.9,0,0,0,68.782-1.2c1.5-4.076-1.574-8.1-5.874-8.706S58.134,21.213,56.01,25a21.169,21.169,0,0,1-36.555.638C17.2,21.928,13.231,18.934,8.954,19.688Z",
                          transform: "translate(1.35 24.249)",
                          fill: "#404040"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          id: "Path_520",
                          "data-name": "Path 520",
                          d:
                            "M75.506,43.507A36.9,36.9,0,1,0,2,38.9a37.163,37.163,0,0,0,.467,5.888,11.514,11.514,0,0,1,7.2-4.48A11.946,11.946,0,0,1,17.94,41.91,21.17,21.17,0,1,1,60.065,38.9a21.443,21.443,0,0,1-.122,2.282,11.945,11.945,0,0,1,8.216-1.895A11.514,11.514,0,0,1,75.506,43.507Z",
                          transform: "translate(0 0)",
                          fill: "#f7b029"
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "text",
                    {
                      attrs: {
                        id: "Kasha",
                        transform: "translate(1407 134)",
                        "font-size": "69",
                        "font-family":
                          "BlaakBlackPERSONALUSE, Blaak Black PERSONAL USE"
                      }
                    },
                    [
                      _c("tspan", { attrs: { x: "0", y: "0" } }, [
                        _vm._v("Kasha")
                      ])
                    ]
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(0)
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "app-header__content" }, [
      _c("div", { staticClass: "app-header-left" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("ul", { staticClass: "header-menu nav" }, [
          _c(
            "li",
            { staticClass: "dropdown nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: {
                    to: "/profile-edit/" + _vm.user.id,
                    href: "javascript:void(0);"
                  }
                },
                [
                  _c("i", { staticClass: "nav-link-icon fa fa-cog" }),
                  _vm._v(
                    "\n                            Settings\n                        "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "dropdown nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "nav-link",
                  attrs: { to: "/change-password/" + _vm.user.id }
                },
                [
                  _c("i", { staticClass: "nav-link-icon fa fa-key" }),
                  _vm._v(
                    "\n                            Change Password\n                        "
                  )
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "app-header-right" }, [
        _c("div", {}, [
          _vm.user
            ? _c("div", { staticClass: "widget-heading" }, [
                _vm._v(
                  "\n                       " +
                    _vm._s(_vm.user.name) +
                    "\n                    "
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header-btn-lg pr-0" }, [
          _c("div", { staticClass: "widget-content p-0" }, [
            _c("div", { staticClass: "widget-content-wrapper" }, [
              _c("div", { staticClass: "widget-content-left" }, [
                _c("div", { staticClass: "btn-group" }, [
                  _vm.user.image_path
                    ? _c(
                        "a",
                        {
                          staticClass: "p-0 btn",
                          attrs: {
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              width: "42",
                              src: _vm.asset(
                                "storage/uploads/" + _vm.user.image_path
                              ),
                              alt: ""
                            }
                          })
                        ]
                      )
                    : _c(
                        "a",
                        {
                          staticClass: "p-0 btn",
                          attrs: {
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "rounded-circle",
                            attrs: {
                              width: "42",
                              src: _vm.asset("images/avt.png"),
                              alt: ""
                            }
                          })
                        ]
                      )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header__pane ml-auto" }, [
      _c("div", [
        _c(
          "button",
          {
            staticClass: "hamburger close-sidebar-btn hamburger--elastic",
            attrs: { type: "button", "data-class": "closed-sidebar" }
          },
          [
            _c("span", { staticClass: "hamburger-box" }, [
              _c("span", { staticClass: "hamburger-inner" })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__mobile-menu" }, [
      _c("div", [
        _c(
          "button",
          {
            staticClass: "hamburger hamburger--elastic mobile-toggle-nav",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "hamburger-box" }, [
              _c("span", { staticClass: "hamburger-inner" })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-header__menu" }, [
      _c("span", [
        _c(
          "button",
          {
            staticClass:
              "btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "btn-icon-wrapper" }, [
              _c("i", { staticClass: "fa fa-ellipsis-v fa-w-6" })
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-wrapper" }, [
      _c("div", { staticClass: "input-holder" }, [
        _c("input", {
          staticClass: "search-input",
          attrs: { type: "text", placeholder: "Type to search" }
        }),
        _vm._v(" "),
        _c("button", { staticClass: "search-icon" }, [_c("span")])
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "close" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);