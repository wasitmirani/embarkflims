(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_project_InvoiceComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      project_id: "",
      project: {}
    };
  },
  mounted: function mounted() {
    this.getProject();
  },
  methods: {
    printdata: function printdata() {
      console.log(this.$route.params.id);
      window.print();
    },
    getProject: function getProject() {
      var _this = this;

      axios.get('/project/' + this.$route.params.id).then(function (res) {
        _this.project = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/backend/project/InvoiceComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/backend/project/InvoiceComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvoiceComponent_vue_vue_type_template_id_5d5c278c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceComponent.vue?vue&type=template&id=5d5c278c& */ "./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=template&id=5d5c278c&");
/* harmony import */ var _InvoiceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _InvoiceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _InvoiceComponent_vue_vue_type_template_id_5d5c278c___WEBPACK_IMPORTED_MODULE_0__.render,
  _InvoiceComponent_vue_vue_type_template_id_5d5c278c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/project/InvoiceComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoiceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=template&id=5d5c278c&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=template&id=5d5c278c& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComponent_vue_vue_type_template_id_5d5c278c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComponent_vue_vue_type_template_id_5d5c278c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceComponent_vue_vue_type_template_id_5d5c278c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InvoiceComponent.vue?vue&type=template&id=5d5c278c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=template&id=5d5c278c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=template&id=5d5c278c&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/project/InvoiceComponent.vue?vue&type=template&id=5d5c278c& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "section-body" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "row clearfix" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("address", [
                        _c("strong", [_vm._v(_vm._s(_vm.project.title) + ".")]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "float-right" }, [
                          _vm._v(_vm._s(_vm.project.date))
                        ]),
                        _c("br"),
                        _vm._v("\n                              Location: "),
                        _c("strong", [_vm._v(_vm._s(_vm.project.location))]),
                        _c("br"),
                        _vm._v(
                          "\n                              " +
                            _vm._s(_vm.project.city) +
                            ", " +
                            _vm._s(_vm.project.state) +
                            " " +
                            _vm._s(_vm.project.zip_code)
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("abbr", { attrs: { title: "Phone" } }, [
                          _vm._v("Phone:")
                        ]),
                        _vm._v(
                          " (123) 456-34636\n                              "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    _c("table", { staticClass: "table table-hover" }, [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.project.groom_name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.project.bride_name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.project.equipments))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.project.lenses))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.project.cameras))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.project.hours))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(_vm.project.date + " " + _vm.project.time)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(_vm.project.attendees))])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12 align-right" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-warning",
                          on: { click: _vm.printdata }
                        },
                        [_c("i", { staticClass: "icon-printer" })]
                      ),
                      _vm._v(" "),
                      _c("button", { staticClass: "btn btn-primary" }, [
                        _vm._v("Pay Now")
                      ])
                    ])
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-between align-items-center" },
      [
        _c("ul", { staticClass: "nav nav-tabs page-header-tab" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  id: "Resumes-tab",
                  "data-toggle": "tab",
                  href: "#Resumes-list"
                }
              },
              [_vm._v("Project Invoice")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "header-action d-md-flex" }, [
          _c("div", { staticClass: "input-group mr-2" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Invoice")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-options" }, [
        _c("div", { staticClass: "item-action dropdown ml-2" }, [
          _c("div", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-eye" }),
                _vm._v(" View Details ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-share-alt" }),
                _vm._v(" Share ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-cloud-download" }),
                _vm._v(" Download")
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown-divider" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-copy" }),
                _vm._v(" Copy to")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-folder" }),
                _vm._v(" Move to")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-edit" }),
                _vm._v(" Rename")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "dropdown-item",
                attrs: { href: "javascript:void(0)" }
              },
              [
                _c("i", { staticClass: "dropdown-icon fa fa-trash" }),
                _vm._v(" Delete")
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Groom Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bride Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Equipments")]),
        _vm._v(" "),
        _c("th", [_vm._v("Lenses")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cameras")]),
        _vm._v(" "),
        _c("th", [_vm._v("Hours")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date/Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Attendees")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("td"),
        _vm._v(" "),
        _c("td", { attrs: { colspan: "7" } }),
        _vm._v(" "),
        _c("td", [_c("strong", [_vm._v("$55")])])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);