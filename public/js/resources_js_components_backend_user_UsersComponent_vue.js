(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_backend_user_UsersComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/SearchInput.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/SearchInput.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "search-input",
  props: ['label', 'name']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
Vue.filter('avatar_name', function (value) {
  if (value) {
    return value.slice(0, 2);
  }

  return value;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['users', 'getUsers']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UsersComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UsersComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_SearchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SearchInput */ "./resources/js/components/backend/components/SearchInput.vue");
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm */ "./resources/js/components/backend/user/UserForm.vue");
/* harmony import */ var _UserTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserTable */ "./resources/js/components/backend/user/UserTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "User",
  components: {
    SearchInput: _components_SearchInput__WEBPACK_IMPORTED_MODULE_0__.default,
    UserForm: _UserForm__WEBPACK_IMPORTED_MODULE_1__.default,
    UserTable: _UserTable__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      users: {},
      query: "",
      page_num: 1
    };
  },
  methods: {
    getUrlParams: function getUrlParams() {
      this.$router.replace({
        name: "users",
        query: {
          query: this.query,
          page: this.page_num
        }
      });
    },
    getUsers: function getUsers() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.page_num;
      this.getUrlParams();
      axios.get("/user/users?page=" + page + "&query=" + this.query).then(function (res) {
        _this.users = res.data.users;
      });
    }
  },
  mounted: function mounted() {
    if (this.$route.query.query) {
      this.query = this.$route.query.query;
    }

    if (this.$route.query.page) {
      this.page_num = this.$route.query.page;
      console.log(this.$route.query.page);
    }

    this.getUsers();
  }
});

/***/ }),

/***/ "./resources/js/components/backend/components/SearchInput.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/backend/components/SearchInput.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchInput_vue_vue_type_template_id_f0900362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=template&id=f0900362& */ "./resources/js/components/backend/components/SearchInput.vue?vue&type=template&id=f0900362&");
/* harmony import */ var _SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/components/SearchInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SearchInput_vue_vue_type_template_id_f0900362___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchInput_vue_vue_type_template_id_f0900362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/components/SearchInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/user/UserForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/backend/user/UserForm.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserForm_vue_vue_type_template_id_10e3a79d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=10e3a79d& */ "./resources/js/components/backend/user/UserForm.vue?vue&type=template&id=10e3a79d&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/user/UserForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserForm_vue_vue_type_template_id_10e3a79d___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserForm_vue_vue_type_template_id_10e3a79d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/user/UserForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/user/UserTable.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/backend/user/UserTable.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserTable_vue_vue_type_template_id_2bccb545___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserTable.vue?vue&type=template&id=2bccb545& */ "./resources/js/components/backend/user/UserTable.vue?vue&type=template&id=2bccb545&");
/* harmony import */ var _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserTable.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/user/UserTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserTable_vue_vue_type_template_id_2bccb545___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserTable_vue_vue_type_template_id_2bccb545___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/user/UserTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/user/UsersComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/backend/user/UsersComponent.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UsersComponent_vue_vue_type_template_id_9a15167a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=template&id=9a15167a& */ "./resources/js/components/backend/user/UsersComponent.vue?vue&type=template&id=9a15167a&");
/* harmony import */ var _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/backend/user/UsersComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersComponent_vue_vue_type_template_id_9a15167a___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersComponent_vue_vue_type_template_id_9a15167a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/backend/user/UsersComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/backend/components/SearchInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/backend/components/SearchInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/SearchInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/user/UserForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/backend/user/UserForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/user/UserTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/backend/user/UserTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/user/UsersComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backend/user/UsersComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UsersComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/backend/components/SearchInput.vue?vue&type=template&id=f0900362&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/backend/components/SearchInput.vue?vue&type=template&id=f0900362& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_template_id_f0900362___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_template_id_f0900362___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_template_id_f0900362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchInput.vue?vue&type=template&id=f0900362& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/SearchInput.vue?vue&type=template&id=f0900362&");


/***/ }),

/***/ "./resources/js/components/backend/user/UserForm.vue?vue&type=template&id=10e3a79d&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/backend/user/UserForm.vue?vue&type=template&id=10e3a79d& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_10e3a79d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_10e3a79d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_10e3a79d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserForm.vue?vue&type=template&id=10e3a79d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserForm.vue?vue&type=template&id=10e3a79d&");


/***/ }),

/***/ "./resources/js/components/backend/user/UserTable.vue?vue&type=template&id=2bccb545&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/backend/user/UserTable.vue?vue&type=template&id=2bccb545& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_2bccb545___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_2bccb545___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserTable_vue_vue_type_template_id_2bccb545___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserTable.vue?vue&type=template&id=2bccb545& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserTable.vue?vue&type=template&id=2bccb545&");


/***/ }),

/***/ "./resources/js/components/backend/user/UsersComponent.vue?vue&type=template&id=9a15167a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/backend/user/UsersComponent.vue?vue&type=template&id=9a15167a& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_9a15167a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_9a15167a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_9a15167a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersComponent.vue?vue&type=template&id=9a15167a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UsersComponent.vue?vue&type=template&id=9a15167a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/SearchInput.vue?vue&type=template&id=f0900362&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/components/SearchInput.vue?vue&type=template&id=f0900362& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "form-group" }, [
    _vm.name
      ? _c("label", { staticClass: "form-label" }, [_vm._v(_vm._s(_vm.name))])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "input-icon mb-3" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: _vm.label }
      }),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-icon-addon" }, [
      _c("i", { staticClass: "fe fe-search" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserForm.vue?vue&type=template&id=10e3a79d&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserForm.vue?vue&type=template&id=10e3a79d& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "row clearfix" }, [
        _c("div", { staticClass: "col-lg-12 col-md-12 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Employee ID *" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "First Name *" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 col-md-6 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Last Name" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Email ID *" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Mobile No" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("select", { staticClass: "form-control show-tick" }, [
              _c("option", [_vm._v("Select Role Type")]),
              _vm._v(" "),
              _c("option", [_vm._v("Super Admin")]),
              _vm._v(" "),
              _c("option", [_vm._v("Admin")]),
              _vm._v(" "),
              _c("option", [_vm._v("Employee")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Username *" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Password" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Confirm Password" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("hr", { staticClass: "mt-4" }),
          _vm._v(" "),
          _c("h6", [_vm._v("Module Permission")]),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table table-striped" }, [
              _c("thead", [
                _c("tr", [
                  _c("th"),
                  _vm._v(" "),
                  _c("th", [_vm._v("Read")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Write")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Delete")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Super Admin")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Admin")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Employee")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("HR Admin")]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "label",
                      { staticClass: "custom-control custom-checkbox" },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            name: "example-checkbox1",
                            value: "option1",
                            checked: ""
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "custom-control-label" }, [
                          _vm._v(" ")
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "button" } },
            [_vm._v("Add")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button", "data-dismiss": "modal" }
            },
            [_vm._v("CLOSE")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserTable.vue?vue&type=template&id=2bccb545&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UserTable.vue?vue&type=template&id=2bccb545& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "table",
          {
            staticClass:
              "table table-striped table-hover table-vcenter text-nowrap mb-0"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users.data, function(user) {
                return _c("tr", { key: user.id }, [
                  _c("td", [
                    _c(
                      "span",
                      {
                        staticClass: "avatar avatar-blue",
                        attrs: {
                          "data-toggle": "tooltip",
                          "data-placement": "top",
                          title: "",
                          "data-original-title": user.name
                        }
                      },
                      [_vm._v(_vm._s(_vm._f("avatar_name")(user.name)))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("h6", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(user.name))
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _c(
                        "a",
                        {
                          staticClass: "__cf_email__",
                          attrs: {
                            href: "mailto:" + user.email,
                            "data-cfemail":
                              "93f2fff6ebf2fdf7f6e1d3f4fef2faffbdf0fcfe"
                          }
                        },
                        [_vm._v("[email protected]")]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(1, true),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.created_at))]),
                  _vm._v(" "),
                  _c("td", [_vm._v("HR")]),
                  _vm._v(" "),
                  _vm._m(2, true)
                ])
              }),
              0
            )
          ]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("pagination", {
          attrs: { data: _vm.users },
          on: { "pagination-change-page": _vm.getUsers }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "w60" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Created Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", { staticClass: "w100" }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "tag tag-success" }, [_vm._v("HR Admin")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c(
        "button",
        {
          staticClass: "btn btn-icon",
          attrs: { type: "button", title: "Edit" }
        },
        [_c("i", { staticClass: "fa fa-edit" })]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-icon js-sweetalert",
          attrs: { type: "button", title: "Delete", "data-type": "confirm" }
        },
        [_c("i", { staticClass: "fa fa-trash-o text-danger" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UsersComponent.vue?vue&type=template&id=9a15167a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/backend/user/UsersComponent.vue?vue&type=template&id=9a15167a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "section-body mt-3" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "tab-content mt-3" }, [
          _c(
            "div",
            {
              staticClass: "tab-pane fade show active",
              attrs: { id: "user-list", role: "tabpanel" }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("h3", { staticClass: "card-title" }, [
                    _vm._v("User List")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-options" }, [
                    _c("form", [
                      _c(
                        "div",
                        { staticClass: "input-group" },
                        [
                          _c("SearchInput", {
                            attrs: { label: "Search Users" },
                            model: {
                              value: _vm.query,
                              callback: function($$v) {
                                _vm.query = $$v
                              },
                              expression: "query"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("UserTable", {
                      attrs: { users: _vm.users, getUsers: _vm.getUsers }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "tab-pane fade",
              attrs: { id: "user-add", role: "tabpanel" }
            },
            [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [_c("UserForm")], 1)
              ])
            ]
          )
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
    return _c("div", { staticClass: "section-body" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
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
                      id: "user-tab",
                      "data-toggle": "tab",
                      href: "#user-list"
                    }
                  },
                  [_vm._v("List")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "user-tab",
                      "data-toggle": "tab",
                      href: "#user-add"
                    }
                  },
                  [_vm._v("Add New")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "header-action" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  attrs: {
                    id: "user-tab",
                    "data-toggle": "tab",
                    href: "#user-add"
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" }
                    },
                    [_c("i", { staticClass: "fe fe-plus mr-2" }), _vm._v("Add")]
                  )
                ]
              )
            ])
          ]
        )
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