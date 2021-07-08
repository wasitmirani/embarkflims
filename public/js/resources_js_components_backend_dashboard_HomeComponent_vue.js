(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_dashboard_HomeComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Home",
  mounted: function mounted() {
    var chart = c3.generate({
      bindto: "#chart-combination",
      data: {
        columns: [["data1", 1, 2, 4, 9, 6, 3, 2, 5, 8, 7], ["data2", 7, 5, 2, 1, 6, 4, 9, 8, 3, 2], ["data3", 7, 5, 3, 1, 5, 9, 8, 5, 2, 6], ["data4", 1, 2, 3, 5, 4, 8, 5, 2, 6, 1]],
        type: "bar",
        types: {
          data2: "line",
          data3: "spline"
        },
        groups: [["data1", "data4"]],
        colors: {
          data1: "#fed284",
          data2: "#ff7f81",
          data3: "#44b39b",
          data4: "#004660"
        },
        names: {
          data1: "Development",
          data2: "Marketing",
          data3: "Design",
          data4: "Sales"
        }
      },
      axis: {
        x: {
          type: "category",
          categories: ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8", "Jun 9", "Jun 10"]
        }
      },
      bar: {
        width: 16
      },
      legend: {
        show: false
      },
      padding: {
        bottom: 0,
        top: 0
      }
    });
    console.log("charts", chart);
  }
});

/***/ }),

/***/ "./resources/js/components/backend/dashboard/HomeComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/backend/dashboard/HomeComponent.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_2e20aae6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=2e20aae6& */ "./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=template&id=2e20aae6&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _HomeComponent_vue_vue_type_template_id_2e20aae6___WEBPACK_IMPORTED_MODULE_0__.render,
  _HomeComponent_vue_vue_type_template_id_2e20aae6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/dashboard/HomeComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=template&id=2e20aae6&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=template&id=2e20aae6& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_2e20aae6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_2e20aae6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_2e20aae6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./HomeComponent.vue?vue&type=template&id=2e20aae6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=template&id=2e20aae6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=template&id=2e20aae6&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/dashboard/HomeComponent.vue?vue&type=template&id=2e20aae6& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    _vm._v("\n      " + _vm._s(this.$Progress.start()) + "\n    "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v("\n         " + _vm._s(this.$Progress.finish()) + "\n")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-body mt-3" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row clearfix" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "mb-4" }, [
              _c("h4", [
                _vm._v("Welcome @auth\n                           "),
                _vm._v("\n                       @endauth!")
              ]),
              _vm._v(" "),
              _c("small", [
                _vm._v(
                  "Measure How Fast You’re Growing Monthly Recurring Revenue. "
                ),
                _c("a", { attrs: { href: "#" } }, [_vm._v("Learn More")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row clearfix" }, [
          _c("div", { staticClass: "col-6 col-md-4 col-xl-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body ribbon" }, [
                _c("div", { staticClass: "ribbon-box green" }, [_vm._v("5")]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "my_sort_cut text-muted",
                    attrs: { href: "project-taskboard.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-list" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("TaskBoard")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-md-4 col-xl-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body ribbon" }, [
                _c("div", { staticClass: "ribbon-box pink" }, [_vm._v("8")]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "my_sort_cut text-muted",
                    attrs: { href: "hr-holidays.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-like" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Todo")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-md-4 col-xl-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "a",
                  {
                    staticClass: "my_sort_cut text-muted",
                    attrs: { href: "hr-payroll.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-credit-card" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Payroll")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-md-4 col-xl-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body ribbon" }, [
                _c("div", { staticClass: "ribbon-box orange" }, [_vm._v("8")]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "my_sort_cut text-muted",
                    attrs: { href: "hr-events.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-doc" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("New Ticket")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-md-4 col-xl-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "a",
                  {
                    staticClass: "my_sort_cut text-muted",
                    attrs: { href: "hr-accounts.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-calculator" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Accounts")])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 col-md-4 col-xl-2" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "a",
                  {
                    staticClass: "my_sort_cut text-muted",
                    attrs: { href: "hr-report.html" }
                  },
                  [
                    _c("i", { staticClass: "icon-pie-chart" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Report")])
                  ]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row clearfix row-deck" }, [
          _c("div", { staticClass: "col-xl-4 col-lg-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Project Statistics")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-options" }, [
                  _c(
                    "a",
                    {
                      staticClass: "card-options-collapse",
                      attrs: { href: "#", "data-toggle": "card-collapse" }
                    },
                    [_c("i", { staticClass: "fe fe-chevron-up" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "card-options-fullscreen",
                      attrs: { href: "#", "data-toggle": "card-fullscreen" }
                    },
                    [_c("i", { staticClass: "fe fe-maximize" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "card-options-remove",
                      attrs: { href: "#", "data-toggle": "card-remove" }
                    },
                    [_c("i", { staticClass: "fe fe-x" })]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "row text-center" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-4 border-right pb-4 pt-4" },
                    [
                      _c("label", { staticClass: "mb-0" }, [
                        _vm._v("Total Project")
                      ]),
                      _vm._v(" "),
                      _c(
                        "h4",
                        {
                          staticClass:
                            "font-30 font-weight-bold text-col-blue counter"
                        },
                        [_vm._v("42")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4 border-right pb-4 pt-4" },
                    [
                      _c("label", { staticClass: "mb-0" }, [
                        _vm._v("On Going")
                      ]),
                      _vm._v(" "),
                      _c(
                        "h4",
                        {
                          staticClass:
                            "font-30 font-weight-bold text-col-blue counter"
                        },
                        [_vm._v("23")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4 pb-4 pt-4" }, [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Pending")]),
                    _vm._v(" "),
                    _c(
                      "h4",
                      {
                        staticClass:
                          "font-30 font-weight-bold text-col-blue counter"
                      },
                      [_vm._v("8")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table table-striped table-vcenter mb-0" },
                  [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [
                          _c("div", { staticClass: "clearfix" }, [
                            _c("div", { staticClass: "float-left" }, [
                              _c("strong", [_vm._v("35%")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "float-right" }, [
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v("Design Team")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress progress-xs" }, [
                            _c("div", {
                              staticClass: "progress-bar bg-azure",
                              staticStyle: { width: "35%" },
                              attrs: {
                                role: "progressbar",
                                "aria-valuenow": "42",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("div", { staticClass: "clearfix" }, [
                            _c("div", { staticClass: "float-left" }, [
                              _c("strong", [_vm._v("25%")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "float-right" }, [
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v("Developer Team")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress progress-xs" }, [
                            _c("div", {
                              staticClass: "progress-bar bg-green",
                              staticStyle: { width: "25%" },
                              attrs: {
                                role: "progressbar",
                                "aria-valuenow": "0",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("div", { staticClass: "clearfix" }, [
                            _c("div", { staticClass: "float-left" }, [
                              _c("strong", [_vm._v("15%")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "float-right" }, [
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v("Marketing")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress progress-xs" }, [
                            _c("div", {
                              staticClass: "progress-bar bg-orange",
                              staticStyle: { width: "15%" },
                              attrs: {
                                role: "progressbar",
                                "aria-valuenow": "36",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("div", { staticClass: "clearfix" }, [
                            _c("div", { staticClass: "float-left" }, [
                              _c("strong", [_vm._v("20%")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "float-right" }, [
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v("Management")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress progress-xs" }, [
                            _c("div", {
                              staticClass: "progress-bar bg-indigo",
                              staticStyle: { width: "20%" },
                              attrs: {
                                role: "progressbar",
                                "aria-valuenow": "6",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("div", { staticClass: "clearfix" }, [
                            _c("div", { staticClass: "float-left" }, [
                              _c("strong", [_vm._v("11%")])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "float-right" }, [
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v("Other")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "progress progress-xs" }, [
                            _c("div", {
                              staticClass: "progress-bar bg-pink",
                              staticStyle: { width: "11%" },
                              attrs: {
                                role: "progressbar",
                                "aria-valuenow": "6",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100"
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-8 col-lg-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Current Ticket Status")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-options" }, [
                  _c(
                    "a",
                    {
                      staticClass: "card-options-collapse",
                      attrs: { href: "#", "data-toggle": "card-collapse" }
                    },
                    [_c("i", { staticClass: "fe fe-chevron-up" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "card-options-fullscreen",
                      attrs: { href: "#", "data-toggle": "card-fullscreen" }
                    },
                    [_c("i", { staticClass: "fe fe-maximize" })]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "card-options-remove",
                      attrs: { href: "#", "data-toggle": "card-remove" }
                    },
                    [_c("i", { staticClass: "fe fe-x" })]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "d-sm-flex justify-content-between" },
                  [
                    _c("div", { staticClass: "font-12" }, [
                      _vm._v("as of 10th to 17th of Jun 2019")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "selectgroup w250" }, [
                      _c("label", { staticClass: "selectgroup-item" }, [
                        _c("input", {
                          staticClass: "selectgroup-input",
                          attrs: {
                            type: "radio",
                            name: "intensity",
                            value: "low",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "selectgroup-button" }, [
                          _vm._v("10 Day")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "selectgroup-item" }, [
                        _c("input", {
                          staticClass: "selectgroup-input",
                          attrs: {
                            type: "radio",
                            name: "intensity",
                            value: "medium"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "selectgroup-button" }, [
                          _vm._v("20 Day")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "selectgroup-item" }, [
                        _c("input", {
                          staticClass: "selectgroup-input",
                          attrs: {
                            type: "radio",
                            name: "intensity",
                            value: "high"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "selectgroup-button" }, [
                          _vm._v("30 Day")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", {
                  staticStyle: { height: "205px" },
                  attrs: { id: "chart-combination" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6 col-xl-3 col-md-6" }, [
                    _c("h5", [_vm._v("05")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clearfix" }, [
                      _c("div", { staticClass: "float-left" }, [
                        _c("strong", [_vm._v("35%")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "float-right" }, [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Yesterday")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-xs" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-gray",
                        staticStyle: { width: "35%" },
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": "42",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-uppercase font-10" }, [
                      _vm._v("New Tickets")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-xl-3 col-md-6" }, [
                    _c("h5", [_vm._v("18")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clearfix" }, [
                      _c("div", { staticClass: "float-left" }, [
                        _c("strong", [_vm._v("61%")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "float-right" }, [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Yesterday")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-xs" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-gray",
                        staticStyle: { width: "61%" },
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": "42",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-uppercase font-10" }, [
                      _vm._v("Open Tickets")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-xl-3 col-md-6" }, [
                    _c("h5", [_vm._v("06")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clearfix" }, [
                      _c("div", { staticClass: "float-left" }, [
                        _c("strong", [_vm._v("100%")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "float-right" }, [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Yesterday")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-xs" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-gray",
                        staticStyle: { width: "100%" },
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": "42",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-uppercase font-10" }, [
                      _vm._v("Solved Tickets")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6 col-xl-3 col-md-6" }, [
                    _c("h5", [_vm._v("11")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "clearfix" }, [
                      _c("div", { staticClass: "float-left" }, [
                        _c("strong", [_vm._v("87%")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "float-right" }, [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Yesterday")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-xs" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-gray",
                        staticStyle: { width: "87%" },
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": "42",
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-uppercase font-10" }, [
                      _vm._v("Unresolved")
                    ])
                  ])
                ])
              ])
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
    return _c("div", { staticClass: "section-body" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row clearfix row-deck" }, [
          _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Customer Satisfaction")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "d-flex align-items-baseline" }, [
                  _c("h1", { staticClass: "mb-0 mr-2" }, [_vm._v("9.8")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _c("span", { staticClass: "text-success" }, [
                      _vm._v("1.6% "),
                      _c("i", { staticClass: "fa fa-arrow-up" })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("h6", { staticClass: "text-uppercase font-10" }, [
                  _vm._v("Performance Score")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress progress-xs" }, [
                  _c("div", {
                    staticClass: "progress-bar",
                    staticStyle: { width: "15%" },
                    attrs: {
                      role: "progressbar",
                      "aria-valuenow": "15",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "progress-bar bg-info",
                    staticStyle: { width: "20%" },
                    attrs: {
                      role: "progressbar",
                      "aria-valuenow": "20",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "progress-bar bg-success",
                    staticStyle: { width: "30%" },
                    attrs: {
                      role: "progressbar",
                      "aria-valuenow": "30",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "progress-bar bg-orange",
                    staticStyle: { width: "5%" },
                    attrs: {
                      role: "progressbar",
                      "aria-valuenow": "20",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "progress-bar bg-indigo",
                    staticStyle: { width: "13%" },
                    attrs: {
                      role: "progressbar",
                      "aria-valuenow": "20",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100"
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table table-striped table-vcenter mb-0" },
                  [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [
                          _c("i", { staticClass: "fa fa-circle text-blue" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "tx-medium" }, [
                          _vm._v("Excellent")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("3,007")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("50%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("i", { staticClass: "fa fa-circle text-success" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "tx-medium" }, [
                          _vm._v("Very Good")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("1,674")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("25%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("i", { staticClass: "fa fa-circle text-info" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "tx-medium" }, [
                          _vm._v("Good")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("125")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("6%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("i", { staticClass: "fa fa-circle text-orange" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "tx-medium" }, [
                          _vm._v("Fair")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("98")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("5%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [
                          _c("i", { staticClass: "fa fa-circle text-indigo" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "tx-medium" }, [
                          _vm._v("Poor")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("512")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("10%")])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Overall Rating")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "d-flex align-items-baseline" }, [
                  _c("h2", { staticClass: "font-28 mr-2" }, [_vm._v("4.2")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "font-14" }, [
                    _c("i", { staticClass: "fa fa-star text-orange" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-star text-orange" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-star text-orange" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-star text-orange" }),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-star" })
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "mb-0 font-12" }, [
                  _vm._v(
                    "Overall the quality or your support team’s efforts Rating."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c(
                  "table",
                  { staticClass: "table table-striped table-vcenter mb-0" },
                  [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_c("strong", [_vm._v("5.0")])]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("432")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("58%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("strong", [_vm._v("4.0")])]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("189")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("42%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("strong", [_vm._v("3.0")])]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v("125")
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("23%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("strong", [_vm._v("2.0")])]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("89")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("18%")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("strong", [_vm._v("1.0")])]),
                        _vm._v(" "),
                        _c("td", [
                          _c("i", { staticClass: "fa fa-star" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" }),
                          _vm._v(" "),
                          _c("i", { staticClass: "fa fa-star-o" })
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("18")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [_vm._v("11%")])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xl-4 col-lg-12 col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Transaction History")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-options" }, [
                  _c(
                    "a",
                    {
                      staticClass: "card-options-remove",
                      attrs: { href: "#", "data-toggle": "card-remove" }
                    },
                    [_c("i", { staticClass: "fe fe-x" })]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "item-action dropdown ml-2" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "javascript:void(0)",
                          "data-toggle": "dropdown",
                          "aria-expanded": "false"
                        }
                      },
                      [_c("i", { staticClass: "fe fe-more-vertical" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "dropdown-menu dropdown-menu-right",
                        staticStyle: {
                          position: "absolute",
                          transform: "translate3d(-174px, 25px, 0px)",
                          top: "0px",
                          left: "0px",
                          "will-change": "transform"
                        },
                        attrs: { "x-placement": "bottom-end" }
                      },
                      [
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
                            _c("i", {
                              staticClass: "dropdown-icon fa fa-share-alt"
                            }),
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
                            _c("i", {
                              staticClass: "dropdown-icon fa fa-cloud-download"
                            }),
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
                            _c("i", {
                              staticClass: "dropdown-icon fa fa-copy"
                            }),
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
                            _c("i", {
                              staticClass: "dropdown-icon fa fa-folder"
                            }),
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
                            _c("i", {
                              staticClass: "dropdown-icon fa fa-edit"
                            }),
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
                            _c("i", {
                              staticClass: "dropdown-icon fa fa-trash"
                            }),
                            _vm._v(" Delete")
                          ]
                        )
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("table", { staticClass: "table card-table mt-2" }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", { staticClass: "width45" }, [
                      _c("span", { staticClass: "avatar avatar-green" }, [
                        _c("i", { staticClass: "fa fa-check" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Payment from #1598")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted font-13" }, [
                        _vm._v("Feb 21, 2019, 3:30pm")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c("p", { staticClass: "mb-0" }, [_vm._v("$300")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-success font-13" }, [
                        _vm._v("Done")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "width45" }, [
                      _c("span", { staticClass: "avatar avatar-green" }, [
                        _c("i", { staticClass: "fa fa-truck" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Process delivery to #85236")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted font-13" }, [
                        _vm._v("March 14, 2019, 2:30pm")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c("p", { staticClass: "mb-0" }, [_vm._v("$300")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-success font-13" }, [
                        _vm._v("For pickup")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "width45" }, [
                      _c("span", { staticClass: "avatar avatar-orange" }, [
                        _c("i", { staticClass: "fa fa-angle-left" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Process refund #4568")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted font-13" }, [
                        _vm._v("March 18, 2019, 6:30pm")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c("p", { staticClass: "mb-0" }, [_vm._v("$300")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-success font-13" }, [
                        _vm._v("Done")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "width45" }, [
                      _c("span", { staticClass: "avatar avatar-red" }, [
                        _c("i", { staticClass: "fa fa-cc-visa" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Payment failed from #32658")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted font-13" }, [
                        _vm._v("April 27, 2019, 3:48pm")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c("p", { staticClass: "mb-0" }, [_vm._v("$300")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-danger font-13" }, [
                        _vm._v("Declined")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "width45" }, [
                      _c("span", { staticClass: "avatar avatar-orange" }, [
                        _c("i", { staticClass: "fa fa-angle-left" })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("p", { staticClass: "mb-0" }, [
                        _vm._v("Process refund #4568")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-muted font-13" }, [
                        _vm._v("March 18, 2019, 6:30pm")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-right" }, [
                      _c("p", { staticClass: "mb-0" }, [_vm._v("$300")]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-success font-13" }, [
                        _vm._v("Done")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row clearfix" }, [
          _c("div", { staticClass: "col-12 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Project Summary")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-hover table-striped text-nowrap table-vcenter mb-0"
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Client Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Team")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Project")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Project Cost")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Payment")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Status")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("#AD1245")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sean Black")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled team-info sm margin-0 w150"
                              },
                              [
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar1.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar2.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar3.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar4.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "ml-2" }, [
                                  _c("span", [_vm._v("2+")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Angular Admin")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$14,500")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Done")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "tag tag-success" }, [
                              _vm._v("Delivered")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("#DF1937")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sean Black")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled team-info sm margin-0 w150"
                              },
                              [
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar1.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar2.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar3.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar4.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "ml-2" }, [
                                  _c("span", [_vm._v("2+")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Angular Admin")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$14,500")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Pending")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "tag tag-success" }, [
                              _vm._v("Delivered")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("#YU8585")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Merri Diamond")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled team-info sm margin-0 w150"
                              },
                              [
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar1.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar2.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("One page html Admin")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$500")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Done")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "tag tag-orange" }, [
                              _vm._v("Submit")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("#AD1245")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Sean Black")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled team-info sm margin-0 w150"
                              },
                              [
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar1.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar2.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar3.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar4.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Wordpress One page")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$1,500")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Done")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "tag tag-success" }, [
                              _vm._v("Delivered")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("#GH8596")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Allen Collins")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "list-unstyled team-info sm margin-0 w150"
                              },
                              [
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar1.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar2.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar3.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", [
                                  _c("img", {
                                    attrs: {
                                      src: "assets/images/xs/avatar4.jpg",
                                      alt: "Avatar"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("li", { staticClass: "ml-2" }, [
                                  _c("span", [_vm._v("2+")])
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("VueJs Application")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$9,500")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Done")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "tag tag-success" }, [
                              _vm._v("Delivered")
                            ])
                          ])
                        ])
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