(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      artists: [],
      about: {},
      mission: true,
      artist: false,
      support: false,
      active_el: 1,
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      },
      errors: {}
    };
  },
  created: function created() {
    var _this = this;

    if (this.$route.query.mydata == 'artist') {
      this.artist = true;
      this.mission = false;
    } else if (this.$route.query.mydata == 'contact') {
      this.support = true;
      this.mission = false;
      this.active_el = 5;
    } else if (this.$route.query.mydata == 'product') {
      this.support = true;
      this.mission = false;
      1;
    }

    axios.get("/api/get-about-content").then(function (response) {
      _this.artists = response.data.dataArtist;
      _this.about = response.data.data;

      if (_this.about == null) {
        _this.about = '';
      }
    })["catch"](function (error) {
      return _this.errors = error.response.data;
    });
  },
  methods: {
    activate: function activate(el) {
      this.active_el = el;
    },
    send: function send() {
      var _this2 = this;

      axios.post("/aboutContacts-api", this.form).then(function (res) {
        return _this2.form = '';
      })["catch"](function (error) {
        return _this2.errors = error.response.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.row[data-v-2fea7dd6] {\r\n  margin: 0;\r\n  padding: 0;\n}\n.title[data-v-2fea7dd6] {\r\n  font-size: 34px;\r\n  font-weight: bold;\r\n  line-height: 60px;\r\n  margin: 0;\r\n  margin-bottom: 1px;\r\n  cursor: pointer;\r\n  transition: all 0.4s;\r\n  text-align: center;\r\n  background: #f2efeb;\n}\n.title[data-v-2fea7dd6]:hover {\r\n  background: #e6e1da;\n}\n.about-team__people[data-v-2fea7dd6] {\r\n  margin: 0 20px 30px;\n}\n.about-team__people img[data-v-2fea7dd6] {\r\n  width: 120px;\n}\n.topteam[data-v-2fea7dd6] {\r\n  margin-bottom: 30px;\r\n  border-bottom: 2px solid #eee;\r\n  width: 70%;\r\n  margin-left: auto;\r\n  margin-right: auto;\n}\n.support_div .content[data-v-2fea7dd6] {\r\n  color: grey;\r\n  cursor: pointer;\n}\n.support_div .active[data-v-2fea7dd6] {\r\n  color: black;\r\n  font-weight: bold;\n}\n.left[data-v-2fea7dd6] {\r\n  border-right: 2px solid #000;\r\n  padding-left: 300px;\n}\n@media (max-width: 991px) {\n.left[data-v-2fea7dd6] {\r\n    border-right: none;\r\n    padding-left: 0;\n}\n}\n@media (min-width: 992px) and (max-width: 1999px) {\n.left[data-v-2fea7dd6] {\r\n    padding-left: 200px;\n}\n}\n.right[data-v-2fea7dd6] {\r\n  border-left: 2px solid #000;\r\n  padding-right: 300px;\n}\n@media (max-width: 991px) {\n.right[data-v-2fea7dd6] {\r\n    border-left: none;\r\n    padding-right: 0;\n}\n}\n@media (min-width: 992px) and (max-width: 1999px) {\n.right[data-v-2fea7dd6] {\r\n    padding-right: 200px;\n}\n}\n@media(max-width:991px){\n.term_text[data-v-2fea7dd6]{\r\n    text-align: center !important;\n}\n}\n.form[data-v-2fea7dd6] {\r\n  width: 50%;\r\n  margin: auto;\n}\n.mission img[data-v-2fea7dd6]{\r\n  width:90%;\r\n  height:370px;\r\n  border-radius: 10px;\n}\n@media(max-width:767px){\n.mission img[data-v-2fea7dd6]{\r\n    width: 50% !important;\n}\n}\n@media(min-width:768px) and (max-width:991px){\n.mission img[data-v-2fea7dd6]{\r\n    width: 100% !important;\n}\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticStyle: { "min-height": "486px" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "mission myhome mt-4" }, [
      !_vm.mission
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.mission = !_vm.mission
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.ourmission")) + " ")]),
              _vm._v(" "),
              _vm.mission == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.mission = !_vm.mission
                }
              }
            },
            [
              _c("span", [
                _vm._v(" " + _vm._s(_vm.$t("message.ourmission")) + " ")
              ]),
              _vm._v(" "),
              _vm.mission == true
                ? _c("span", { staticClass: "plus" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.mission
        ? _c("div", { staticClass: "row mt-5 text-center" }, [
            _vm.$i18n.locale == "en"
              ? _c("div", { staticClass: "col-md-8" }, [
                  _c("p", [
                    _vm._v(
                      "\n          " + _vm._s(_vm.about.body1_en) + "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.about.body2_en) +
                        " \n        "
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$i18n.locale == "en"
              ? _c("div", { staticClass: "col-md-3" }, [
                  _c("img", { attrs: { src: _vm.about.body_image, alt: "" } })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$i18n.locale == "ar"
              ? _c("div", { staticClass: "col-md-3" }, [
                  _c("img", { attrs: { src: _vm.about.body_image, alt: "" } })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$i18n.locale == "ar"
              ? _c("div", { staticClass: "col-md-8" }, [
                  _c("p", [
                    _vm._v(
                      "\n          " + _vm._s(_vm.about.body1_ar) + "\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.about.body2_ar) +
                        " \n        "
                    )
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "support mt-4" }, [
      !_vm.support
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.support = !_vm.support
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.support")) + " ")]),
              _vm._v(" "),
              _vm.support == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.support = !_vm.support
                }
              }
            },
            [
              _c("span", [
                _vm._v(" " + _vm._s(_vm.$t("message.support")) + " ")
              ]),
              _vm._v(" "),
              _vm.support == true
                ? _c("span", { staticClass: "plus" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.support
        ? _c("div", { staticClass: "mt-5" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(_vm._s(_vm.$t("message.support_text")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "row justify-content-md-center support_div text-center "
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-md-2 content",
                    class: { active: _vm.active_el == 1 },
                    on: {
                      click: function($event) {
                        return _vm.activate(1)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticStyle: { height: "110px" },
                      attrs: {
                        src:
                          "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-1.svg?v=12010384132983907058"
                      }
                    }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mt-4" }, [
                      _vm._v(_vm._s(_vm.$t("message.Product")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-2 content",
                    class: { active: _vm.active_el == 2 },
                    on: {
                      click: function($event) {
                        return _vm.activate(2)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticStyle: { height: "110px" },
                      attrs: {
                        src:
                          "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-2.svg?v=16172020802828672890"
                      }
                    }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mt-4" }, [
                      _vm._v(_vm._s(_vm.$t("message.Shipping")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-2 content",
                    class: { active: _vm.active_el == 3 },
                    on: {
                      click: function($event) {
                        return _vm.activate(3)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticStyle: { height: "110px" },
                      attrs: {
                        src:
                          "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-3.svg?v=6657556400331861725"
                      }
                    }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mt-4" }, [
                      _vm._v(_vm._s(_vm.$t("message.Collabs")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-2 content",
                    class: { active: _vm.active_el == 4 },
                    on: {
                      click: function($event) {
                        return _vm.activate(4)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticStyle: { height: "110px" },
                      attrs: {
                        src:
                          "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-4.svg?v=13401101258815370791"
                      }
                    }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mt-4" }, [
                      _vm._v(_vm._s(_vm.$t("message.Terms")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-2 content",
                    class: { active: _vm.active_el == 5 },
                    on: {
                      click: function($event) {
                        return _vm.activate(5)
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticStyle: { height: "110px" },
                      attrs: {
                        src:
                          "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/support-5.svg?v=6164253995379968036"
                      }
                    }),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mt-4" }, [
                      _vm._v(_vm._s(_vm.$t("message.contact")))
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-5" }, [
              _vm.active_el == 1
                ? _c("div", { staticClass: "col-sm-12" }, [
                    _vm.$i18n.locale == "en"
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center left" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text1"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text2"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text3"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text4"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text5"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text6"))
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-7" }, [
                            _c("p", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("message.product_text7")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                 " +
                                  _vm._s(_vm.$t("message.product_text8")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("message.product_text9")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                " " + _vm._s(_vm.$t("message.product_text10"))
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("message.product_text11")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                 " +
                                  _vm._s(_vm.$t("message.product_text12")) +
                                  "\n              "
                              )
                            ])
                          ])
                        ])
                      : _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-7" }, [
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.product_text7")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.product_text8")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.product_text9")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                " " + _vm._s(_vm.$t("message.product_text10"))
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("message.product_text11")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.$t("message.product_text12")) +
                                  "\n              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center right" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text1"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text2"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text3"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text4"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text5"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.product_text6"))
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.active_el == 2
                ? _c("div", { staticClass: "col-sm-12" }, [
                    _vm.$i18n.locale == "en"
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center left" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [_vm._v(_vm._s(_vm.$t("message.ship_text1")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mt-3" },
                                [_vm._v(_vm._s(_vm.$t("message.ship_text2")))]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-7" }, [
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.ship_text3")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.ship_text4")) +
                                  "\n              "
                              )
                            ])
                          ])
                        ])
                      : _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-7" }, [
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.ship_text3")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.ship_text4")) +
                                  "\n              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center right" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-5" },
                                [_vm._v(_vm._s(_vm.$t("message.ship_text1")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mt-5" },
                                [_vm._v(_vm._s(_vm.$t("message.ship_text2")))]
                              )
                            ]
                          )
                        ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.active_el == 3
                ? _c("div", { staticClass: "col-sm-12" }, [
                    _vm.$i18n.locale == "en"
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center left" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.Collabs_text1"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("message.Collabs_text2")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-7" }, [
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.Collabs_text3")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.Collabs_text4")) +
                                  "\n              "
                              )
                            ])
                          ])
                        ])
                      : _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-7" }, [
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.Collabs_text3")) +
                                  "\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$t("message.Collabs_text4")) +
                                  "\n              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center right" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-4" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("message.Collabs_text1"))
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("message.Collabs_text2")))
                              ])
                            ]
                          )
                        ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.active_el == 4
                ? _c("div", { staticClass: "col-sm-12" }, [
                    _vm.$i18n.locale == "en"
                      ? _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center left" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v(_vm._s(_vm.$t("message.Terms_text1")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v(_vm._s(_vm.$t("message.Terms_text2")))]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("message.Terms_text3")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-7 term_text" }, [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("message.Terms_text4")) +
                                    "\n                "
                                ),
                                _c("router-link", { attrs: { to: "/terms" } }, [
                                  _vm._v("here")
                                ]),
                                _vm._v(".\n              ")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("message.Terms_text5")) +
                                    "\n                "
                                ),
                                _c(
                                  "router-link",
                                  { attrs: { to: "/privacy" } },
                                  [_vm._v("here")]
                                ),
                                _vm._v(".\n              ")
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("message.Terms_text6")) +
                                    "\n                "
                                ),
                                _c(
                                  "router-link",
                                  { attrs: { to: "/refund" } },
                                  [_vm._v("here")]
                                ),
                                _vm._v(".\n              ")
                              ],
                              1
                            )
                          ])
                        ])
                      : _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-sm-7 text-right term_text" },
                            [
                              _c(
                                "p",
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("message.Terms_text4")) +
                                      "\n                "
                                  ),
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/terms" } },
                                    [_vm._v("من هنا")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("message.Terms_text5")) +
                                      "\n                "
                                  ),
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/privacy" } },
                                    [_vm._v("من هنا")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("message.Terms_text6")) +
                                      "\n                "
                                  ),
                                  _c(
                                    "router-link",
                                    { attrs: { to: "/refund" } },
                                    [_vm._v("من هنا")]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-sm-5 text-center right" },
                            [
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v(_vm._s(_vm.$t("message.Terms_text1")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "font-weight-bold mb-3" },
                                [_vm._v(_vm._s(_vm.$t("message.Terms_text2")))]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "font-weight-bold" }, [
                                _vm._v(_vm._s(_vm.$t("message.Terms_text3")))
                              ])
                            ]
                          )
                        ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.active_el == 5
                ? _c(
                    "div",
                    { staticClass: "col-sm-12" },
                    [
                      _vm.$i18n.locale == "en"
                        ? _c(
                            "v-form",
                            {
                              staticClass: "form",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.send($event)
                                }
                              }
                            },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "First name",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "name", $$v)
                                              },
                                              expression: "form.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "E-mail",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.email,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "email", $$v)
                                              },
                                              expression: "form.email"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Phone Number",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.phone,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "phone", $$v)
                                              },
                                              expression: "form.phone"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              outlined: "",
                                              name: "input-7-4",
                                              label: "Message"
                                            },
                                            model: {
                                              value: _vm.form.message,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "message",
                                                  $$v
                                                )
                                              },
                                              expression: "form.message"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticStyle: {
                                        "margin-left": "12px",
                                        color: "#fff"
                                      },
                                      attrs: {
                                        color: "#252524",
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("Send")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "v-form",
                            {
                              staticClass: "form",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.send($event)
                                }
                              }
                            },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: " اﻷسم",
                                              required: "",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "name", $$v)
                                              },
                                              expression: "form.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "البريد اﻷلكتروني",
                                              required: "",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.email,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "email", $$v)
                                              },
                                              expression: "form.email"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "رقم التليفون الخاص بك",
                                              required: "",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.phone,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "phone", $$v)
                                              },
                                              expression: "form.phone"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              outlined: "",
                                              name: "input-7-4",
                                              label: "اكتب رسالتك",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.message,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "message",
                                                  $$v
                                                )
                                              },
                                              expression: "form.message"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticStyle: {
                                        "margin-left": "12px",
                                        float: "right",
                                        color: "#fff"
                                      },
                                      attrs: {
                                        color: "#252524",
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("ارسال")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticStyle: { clear: "both" } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "artists mt-4 mb-2" }, [
      !_vm.artist
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.artist = !_vm.artist
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.artists")))]),
              _vm._v(" "),
              _vm.artist == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.artist = !_vm.artist
                }
              }
            },
            [
              _vm._v(_vm._s(_vm.$t("message.artists")) + " "),
              _vm.artist == true
                ? _c("span", { staticClass: "false" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.artist
        ? _c("div", { staticClass: " mt-5 text-center" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c("p", { staticClass: "text-center" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("message.artisttext")) +
                      "\n                  "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row justify-content-sm-center" },
                  _vm._l(_vm.artists, function(artist) {
                    return _c(
                      "div",
                      {
                        key: artist.id,
                        staticClass: "col-sm-4 col-md-3 col-lg-2"
                      },
                      [
                        _c("div", { staticClass: "about-team__people" }, [
                          _c(
                            "a",
                            {
                              staticStyle: { color: "#000" },
                              attrs: {
                                href: artist.sociallink,
                                target: "_blank"
                              }
                            },
                            [
                              _c("img", {
                                staticStyle: {
                                  "border-radius": "28%",
                                  width: "100px",
                                  height: "100px"
                                },
                                attrs: { src: artist.image_ar, alt: "artist" }
                              }),
                              _vm._v(" "),
                              _vm.$i18n.locale == "en"
                                ? _c(
                                    "h4",
                                    { staticClass: "about-team__name" },
                                    [_vm._v(_vm._s(artist.name_en))]
                                  )
                                : _c(
                                    "h4",
                                    { staticClass: "about-team__name" },
                                    [_vm._v(_vm._s(artist.name_ar))]
                                  )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-content" }, [
      _c("div", { staticClass: "spinner" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& */ "./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& */ "./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fea7dd6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);