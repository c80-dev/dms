"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SideBar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SideBar',
  methods: {
    onLogout: function onLogout() {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('logout', {
        token: localStorage.getItem('token')
      });
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./resources/js/components/SideBar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/SideBar.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=223abea1& */ "./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/SideBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SideBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SideBar.vue?vue&type=template&id=223abea1& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_223abea1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideBar.vue?vue&type=template&id=223abea1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SideBar.vue?vue&type=template&id=223abea1& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-sidebar sidebar-shadow" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("div", { staticClass: "scrollbar-sidebar" }, [
      _c("div", { staticClass: "app-sidebar__inner" }, [
        _c("ul", { staticClass: "vertical-nav-menu" }, [
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "/dashboard" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-home" }),
                _vm._v(
                  "\n                        Dashboard\n                    "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _vm._m(3),
            _vm._v(" "),
            _c("ul", [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/tag-create" } }, [
                    _c("i", { staticClass: "metismenu-icon" }),
                    _vm._v(
                      "\n                                Create\n                            "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/tag-all" } }, [
                    _c("i", { staticClass: "metismenu-icon" }),
                    _vm._v(
                      "\n                                All Tags\n                            "
                    )
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._m(4),
            _vm._v(" "),
            _c("ul", [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/group-create" } }, [
                    _c("i", { staticClass: "metismenu-icon" }),
                    _vm._v(
                      "\n                                Create\n                            "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/group-all" } }, [
                    _c("i", { staticClass: "metismenu-icon" }),
                    _vm._v(
                      "\n                                All Groups\n                            "
                    )
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _vm._m(5),
            _vm._v(" "),
            _c("ul", [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/file-create" } }, [
                    _c("i", { staticClass: "metismenu-icon" }),
                    _vm._v(
                      "\n                                Create\n                            "
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "file-all" } }, [
                    _c("i", { staticClass: "metismenu-icon" }),
                    _vm._v(
                      "\n                                All Files\n                            "
                    )
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "li",
            [
              _c("router-link", { attrs: { to: "index.html" } }, [
                _c("i", { staticClass: "metismenu-icon pe-7s-users" }),
                _vm._v("\n                        Users\n                    ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: {
                  click: function($event) {
                    return _vm.onLogout()
                  }
                }
              },
              [
                _c("i", { staticClass: "metismenu-icon pe-7s-power" }),
                _vm._v("\n                        Logout\n                    ")
              ]
            )
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
    return _c("div", { staticClass: "app-header__logo" }, [
      _c("div", { staticClass: "logo-src" }),
      _vm._v(" -->\n        "),
      _c("div", { staticClass: "header__pane ml-auto" }, [
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
    return _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "metismenu-icon pe-7s-diamond" }),
      _vm._v("\n                            Tag\n                        "),
      _c("i", {
        staticClass: "metismenu-state-icon pe-7s-angle-down caret-left"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "metismenu-icon pe-7s-folder" }),
      _vm._v("\n                            Group\n                        "),
      _c("i", {
        staticClass: "metismenu-state-icon pe-7s-angle-down caret-left"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "metismenu-icon pe-7s-file" }),
      _vm._v("\n                            Files\n                        "),
      _c("i", {
        staticClass: "metismenu-state-icon pe-7s-angle-down caret-left"
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);