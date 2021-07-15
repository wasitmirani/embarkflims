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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  data: function data() {
    return {
      projects: {},
      total: 0,
      completed: 0,
      procces: 0,
      cancel: 0,
      pending: 0
    };
  },
  methods: {
    getpercentage: function getpercentage(value) {
      if (value != "0") {
        return value / this.total * 100;
      }

      return 0;
    },
    getProjects: function getProjects(status) {
      var _this = this;

      axios.get('/daily/projects?user_id=' + user.id + "&status=" + status).then(function (res) {
        _this.projects = res.data.projects;
        _this.total = res.data.total;
        _this.completed = res.data.completed;
        _this.cancel = res.data.cancel;
        _this.procces = res.data.pending;
      });
    }
  },
  mounted: function mounted() {
    this.getProjects(null);
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
    _vm._v("\n      " + _vm._s(this.$Progress.start()) + "\n        "),
    _c("div", { staticClass: "section-body mt-3" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row clearfix row-deck" }, [
          _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "a",
                {
                  attrs: { role: "button" },
                  on: {
                    click: function($event) {
                      return _vm.getProjects(4)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "widgets2" }, [
                      _c("div", { staticClass: "state" }, [
                        _c("h6", [_vm._v("Projects")]),
                        _vm._v(" "),
                        _c("h2", [_vm._v(_vm._s(this.total))])
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-sm" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-info",
                        style: "width:" + _vm.getpercentage(_vm.total) + "%;",
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": _vm.getpercentage(_vm.total),
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-small" }, [
                      _vm._v("Total Projects")
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "a",
                {
                  attrs: { role: "button" },
                  on: {
                    click: function($event) {
                      return _vm.getProjects(0)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "widgets2" }, [
                      _c("div", { staticClass: "state" }, [
                        _c("h6", [_vm._v("Proccess")]),
                        _vm._v(" "),
                        _c("h2", [_vm._v(_vm._s(_vm.procces))])
                      ]),
                      _vm._v(" "),
                      _vm._m(1)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-sm" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-success",
                        style: "width:" + _vm.getpercentage(_vm.procces) + "%;",
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": _vm.getpercentage(_vm.procces),
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-small" }, [
                      _vm._v("Total Projects in Proccess")
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "a",
                {
                  attrs: { role: "button" },
                  on: {
                    click: function($event) {
                      return _vm.getProjects(2)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "widgets2" }, [
                      _c("div", { staticClass: "state" }, [
                        _c("h6", [_vm._v("Completed")]),
                        _vm._v(" "),
                        _c("h2", [_vm._v(_vm._s(_vm.completed))])
                      ]),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-sm" }, [
                      _c("div", {
                        staticClass: "progress-bar bg",
                        style:
                          "width:" + _vm.getpercentage(_vm.completed) + "%;",
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": _vm.getpercentage(_vm.completed),
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-small" }, [
                      _vm._v("Total Projects in Completed")
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3 col-md-6 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "a",
                {
                  attrs: { role: "button" },
                  on: {
                    click: function($event) {
                      return _vm.getProjects(3)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "widgets2" }, [
                      _c("div", { staticClass: "state" }, [
                        _c("h6", [_vm._v("Canecel")]),
                        _vm._v(" "),
                        _c("h2", [_vm._v(_vm._s(_vm.cancel))])
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "progress progress-sm" }, [
                      _c("div", {
                        staticClass: "progress-bar bg-success",
                        style: "width:" + _vm.getpercentage(_vm.cancel) + "%;",
                        attrs: {
                          role: "progressbar",
                          "aria-valuenow": _vm.getpercentage(_vm.cancel),
                          "aria-valuemin": "0",
                          "aria-valuemax": "100"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-small" }, [
                      _vm._v("Total Projects in Cancel")
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "section-body" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row clearfix" }, [
          _c("div", { staticClass: "col-12 col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-vcenter table_custom spacing5 border-style mb-0"
                    },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.projects.data, function(item) {
                          return _c("tr", { key: item.id }, [
                            _c("td", [
                              _c(
                                "span",
                                {
                                  staticClass: "avatar avatar-pink",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": item.groom_name
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      item.groom_name.substr(0, 2).toUpperCase()
                                    )
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.groom_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.bride_name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("a", { attrs: { href: "#" } }, [
                                _c("h5", [
                                  _c("strong", [
                                    _vm._v("$" + _vm._s(item.total))
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("p", {
                                domProps: {
                                  innerHTML: _vm._f("projectstatus")(
                                    item.status
                                  )
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.drone))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.no_videograp))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.video_exp))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.hours))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.date))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.time))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.attendees))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.location))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.city))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.state))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.zip_code))]),
                            _vm._v(" "),
                            _c("td")
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v("\n         " + _vm._s(this.$Progress.finish()) + "\n")
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-hand-o-left" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-hand-o-left" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-hand-o-left" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-hand-o-left" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("RECENT Project")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "w40" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Groom Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bride Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Pay")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Drone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Videographers")]),
        _vm._v(" "),
        _c("th", [_vm._v("Cinematographer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Hours")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Time")]),
        _vm._v(" "),
        _c("th", [_vm._v("Attendees")]),
        _vm._v(" "),
        _c("th", [_vm._v("Location")]),
        _vm._v(" "),
        _c("th", [_vm._v("City")]),
        _vm._v(" "),
        _c("th", [_vm._v("State")]),
        _vm._v(" "),
        _c("th", [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", { staticClass: "w40" })
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