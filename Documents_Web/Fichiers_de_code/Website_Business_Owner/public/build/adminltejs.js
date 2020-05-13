(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminltejs"],{

/***/ "./assets/adminlte/dist/js/adminlte.min.js":
/*!*************************************************!*\
  !*** ./assets/adminlte/dist/js/adminlte.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.number.is-integer */ "./node_modules/core-js/modules/es.number.is-integer.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.fixed */ "./node_modules/core-js/modules/es.string.fixed.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * AdminLTE v3.0.4 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  var e = function (t) {
    var e = "ControlSidebar",
        i = "lte.controlsidebar",
        n = t.fn[e],
        s = {
      COLLAPSED: "collapsed.lte.controlsidebar",
      EXPANDED: "expanded.lte.controlsidebar"
    },
        o = ".control-sidebar",
        a = ".control-sidebar-content",
        r = '[data-widget="control-sidebar"]',
        l = ".main-header",
        c = ".main-footer",
        d = "control-sidebar-animate",
        h = "control-sidebar-open",
        f = "control-sidebar-slide-open",
        u = "layout-fixed",
        g = "layout-navbar-fixed",
        p = "layout-sm-navbar-fixed",
        _ = "layout-md-navbar-fixed",
        m = "layout-lg-navbar-fixed",
        v = "layout-xl-navbar-fixed",
        C = "layout-footer-fixed",
        y = "layout-sm-footer-fixed",
        b = "layout-md-footer-fixed",
        w = "layout-lg-footer-fixed",
        x = "layout-xl-footer-fixed",
        E = {
      controlsidebarSlide: !0,
      scrollbarTheme: "os-theme-light",
      scrollbarAutoHide: "l"
    },
        A = function () {
      function e(t, e) {
        this._element = t, this._config = e, this._init();
      }

      var n = e.prototype;
      return n.collapse = function () {
        this._config.controlsidebarSlide ? (t("html").addClass(d), t("body").removeClass(f).delay(300).queue(function () {
          t(o).hide(), t("html").removeClass(d), t(this).dequeue();
        })) : t("body").removeClass(h);
        var e = t.Event(s.COLLAPSED);
        t(this._element).trigger(e);
      }, n.show = function () {
        this._config.controlsidebarSlide ? (t("html").addClass(d), t(o).show().delay(10).queue(function () {
          t("body").addClass(f).delay(300).queue(function () {
            t("html").removeClass(d), t(this).dequeue();
          }), t(this).dequeue();
        })) : t("body").addClass(h);
        var e = t.Event(s.EXPANDED);
        t(this._element).trigger(e);
      }, n.toggle = function () {
        t("body").hasClass(h) || t("body").hasClass(f) ? this.collapse() : this.show();
      }, n._init = function () {
        var e = this;
        this._fixHeight(), this._fixScrollHeight(), t(window).resize(function () {
          e._fixHeight(), e._fixScrollHeight();
        }), t(window).scroll(function () {
          (t("body").hasClass(h) || t("body").hasClass(f)) && e._fixScrollHeight();
        });
      }, n._fixScrollHeight = function () {
        var e = {
          scroll: t(document).height(),
          window: t(window).height(),
          header: t(l).outerHeight(),
          footer: t(c).outerHeight()
        },
            i = Math.abs(e.window + t(window).scrollTop() - e.scroll),
            n = t(window).scrollTop(),
            s = !1,
            r = !1;
        t("body").hasClass(u) && ((t("body").hasClass(g) || t("body").hasClass(p) || t("body").hasClass(_) || t("body").hasClass(m) || t("body").hasClass(v)) && "fixed" === t(l).css("position") && (s = !0), (t("body").hasClass(C) || t("body").hasClass(y) || t("body").hasClass(b) || t("body").hasClass(w) || t("body").hasClass(x)) && "fixed" === t(c).css("position") && (r = !0), 0 === n && 0 === i ? (t(o).css("bottom", e.footer), t(o).css("top", e.header), t(o + ", " + o + " " + a).css("height", e.window - (e.header + e.footer))) : i <= e.footer ? !1 === r ? (t(o).css("bottom", e.footer - i), t(o + ", " + o + " " + a).css("height", e.window - (e.footer - i))) : t(o).css("bottom", e.footer) : n <= e.header ? !1 === s ? (t(o).css("top", e.header - n), t(o + ", " + o + " " + a).css("height", e.window - (e.header - n))) : t(o).css("top", e.header) : !1 === s ? (t(o).css("top", 0), t(o + ", " + o + " " + a).css("height", e.window)) : t(o).css("top", e.header));
      }, n._fixHeight = function () {
        var e = t(window).height(),
            i = t(l).outerHeight(),
            n = t(c).outerHeight();

        if (t("body").hasClass(u)) {
          var s = e - i;
          (t("body").hasClass(C) || t("body").hasClass(y) || t("body").hasClass(b) || t("body").hasClass(w) || t("body").hasClass(x)) && "fixed" === t(c).css("position") && (s = e - i - n), t(o + " " + a).css("height", s), "undefined" != typeof t.fn.overlayScrollbars && t(o + " " + a).overlayScrollbars({
            className: this._config.scrollbarTheme,
            sizeAutoCapable: !0,
            scrollbars: {
              autoHide: this._config.scrollbarAutoHide,
              clickScrolling: !0
            }
          });
        }
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var s = t(this).data(i),
              o = t.extend({}, E, t(this).data());
          if (s || (s = new e(this, o), t(this).data(i, s)), "undefined" === s[n]) throw new Error(n + " is not a function");
          s[n]();
        });
      }, e;
    }();

    return t(document).on("click", r, function (e) {
      e.preventDefault(), A._jQueryInterface.call(t(this), "toggle");
    }), t.fn[e] = A._jQueryInterface, t.fn[e].Constructor = A, t.fn[e].noConflict = function () {
      return t.fn[e] = n, A._jQueryInterface;
    }, A;
  }(jQuery),
      i = function (t) {
    var e = "Layout",
        i = t.fn[e],
        n = ".main-header",
        s = ".main-sidebar",
        o = ".main-sidebar .sidebar",
        a = ".content-wrapper",
        r = ".control-sidebar-content",
        l = '[data-widget="control-sidebar"]',
        c = ".main-footer",
        d = '[data-widget="pushmenu"]',
        h = ".login-box",
        f = ".register-box",
        u = "sidebar-focused",
        g = "layout-fixed",
        p = "control-sidebar-slide-open",
        _ = "control-sidebar-open",
        m = {
      scrollbarTheme: "os-theme-light",
      scrollbarAutoHide: "l",
      panelAutoHeight: !0,
      loginRegisterAutoHeight: !0
    },
        v = function () {
      function e(t, e) {
        this._config = e, this._element = t, this._init();
      }

      var i = e.prototype;
      return i.fixLayoutHeight = function (e) {
        void 0 === e && (e = null);
        var i = 0;
        (t("body").hasClass(p) || t("body").hasClass(_) || "control_sidebar" == e) && (i = t(r).height());

        var s = {
          window: t(window).height(),
          header: 0 !== t(n).length ? t(n).outerHeight() : 0,
          footer: 0 !== t(c).length ? t(c).outerHeight() : 0,
          sidebar: 0 !== t(o).length ? t(o).height() : 0,
          control_sidebar: i
        },
            l = this._max(s),
            d = this._config.panelAutoHeight;

        !0 === d && (d = 0), !1 !== d && (l == s.control_sidebar ? t(a).css("min-height", l + d) : l == s.window ? t(a).css("min-height", l + d - s.header - s.footer) : t(a).css("min-height", l + d - s.header)), t("body").hasClass(g) && (!1 !== d && t(a).css("min-height", l + d - s.header - s.footer), "undefined" != typeof t.fn.overlayScrollbars && t(o).overlayScrollbars({
          className: this._config.scrollbarTheme,
          sizeAutoCapable: !0,
          scrollbars: {
            autoHide: this._config.scrollbarAutoHide,
            clickScrolling: !0
          }
        }));
      }, i.fixLoginRegisterHeight = function () {
        if (0 === t(h + ", " + f).length) t("body, html").css("height", "auto");else if (0 !== t(h + ", " + f).length) {
          var e = t(h + ", " + f).height();
          t("body").css("min-height") !== e && t("body").css("min-height", e);
        }
      }, i._init = function () {
        var e = this;
        this.fixLayoutHeight(), !0 === this._config.loginRegisterAutoHeight ? this.fixLoginRegisterHeight() : Number.isInteger(this._config.loginRegisterAutoHeight) && setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight), t(o).on("collapsed.lte.treeview expanded.lte.treeview", function () {
          e.fixLayoutHeight();
        }), t(d).on("collapsed.lte.pushmenu shown.lte.pushmenu", function () {
          e.fixLayoutHeight();
        }), t(l).on("collapsed.lte.controlsidebar", function () {
          e.fixLayoutHeight();
        }).on("expanded.lte.controlsidebar", function () {
          e.fixLayoutHeight("control_sidebar");
        }), t(window).resize(function () {
          e.fixLayoutHeight();
        }), t("body.hold-transition").removeClass("hold-transition");
      }, i._max = function (t) {
        var e = 0;
        return Object.keys(t).forEach(function (i) {
          t[i] > e && (e = t[i]);
        }), e;
      }, e._jQueryInterface = function (i) {
        return void 0 === i && (i = ""), this.each(function () {
          var n = t(this).data("lte.layout"),
              s = t.extend({}, m, t(this).data());
          n || (n = new e(t(this), s), t(this).data("lte.layout", n)), "init" === i || "" === i ? n._init() : "fixLayoutHeight" !== i && "fixLoginRegisterHeight" !== i || n[i]();
        });
      }, e;
    }();

    return t(window).on("load", function () {
      v._jQueryInterface.call(t("body"));
    }), t(o + " a").on("focusin", function () {
      t(s).addClass(u);
    }), t(o + " a").on("focusout", function () {
      t(s).removeClass(u);
    }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
      return t.fn[e] = i, v._jQueryInterface;
    }, v;
  }(jQuery),
      n = function (t) {
    var e = "PushMenu",
        i = ".lte.pushmenu",
        n = t.fn[e],
        s = {
      COLLAPSED: "collapsed" + i,
      SHOWN: "shown" + i
    },
        o = {
      autoCollapseSize: 992,
      enableRemember: !1,
      noTransitionAfterReload: !0
    },
        a = '[data-widget="pushmenu"]',
        r = "body",
        l = "#sidebar-overlay",
        c = ".wrapper",
        d = "sidebar-collapse",
        h = "sidebar-open",
        f = "sidebar-closed",
        u = function () {
      function e(e, i) {
        this._element = e, this._options = t.extend({}, o, i), t(l).length || this._addOverlay(), this._init();
      }

      var n = e.prototype;
      return n.expand = function () {
        this._options.autoCollapseSize && t(window).width() <= this._options.autoCollapseSize && t(r).addClass(h), t(r).removeClass(d).removeClass(f), this._options.enableRemember && localStorage.setItem("remember" + i, h);
        var e = t.Event(s.SHOWN);
        t(this._element).trigger(e);
      }, n.collapse = function () {
        this._options.autoCollapseSize && t(window).width() <= this._options.autoCollapseSize && t(r).removeClass(h).addClass(f), t(r).addClass(d), this._options.enableRemember && localStorage.setItem("remember" + i, d);
        var e = t.Event(s.COLLAPSED);
        t(this._element).trigger(e);
      }, n.toggle = function () {
        t(r).hasClass(d) ? this.expand() : this.collapse();
      }, n.autoCollapse = function (e) {
        void 0 === e && (e = !1), this._options.autoCollapseSize && (t(window).width() <= this._options.autoCollapseSize ? t(r).hasClass(h) || this.collapse() : 1 == e && (t(r).hasClass(h) ? t(r).removeClass(h) : t(r).hasClass(f) && this.expand()));
      }, n.remember = function () {
        this._options.enableRemember && (localStorage.getItem("remember" + i) == d ? this._options.noTransitionAfterReload ? t("body").addClass("hold-transition").addClass(d).delay(50).queue(function () {
          t(this).removeClass("hold-transition"), t(this).dequeue();
        }) : t("body").addClass(d) : this._options.noTransitionAfterReload ? t("body").addClass("hold-transition").removeClass(d).delay(50).queue(function () {
          t(this).removeClass("hold-transition"), t(this).dequeue();
        }) : t("body").removeClass(d));
      }, n._init = function () {
        var e = this;
        this.remember(), this.autoCollapse(), t(window).resize(function () {
          e.autoCollapse(!0);
        });
      }, n._addOverlay = function () {
        var e = this,
            i = t("<div />", {
          id: "sidebar-overlay"
        });
        i.on("click", function () {
          e.collapse();
        }), t(c).append(i);
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var n = t(this).data("lte.pushmenu"),
              s = t.extend({}, o, t(this).data());
          n || (n = new e(this, s), t(this).data("lte.pushmenu", n)), "string" == typeof i && i.match(/collapse|expand|toggle/) && n[i]();
        });
      }, e;
    }();

    return t(document).on("click", a, function (e) {
      e.preventDefault();
      var i = e.currentTarget;
      "pushmenu" !== t(i).data("widget") && (i = t(i).closest(a)), u._jQueryInterface.call(t(i), "toggle");
    }), t(window).on("load", function () {
      u._jQueryInterface.call(t(a));
    }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
      return t.fn[e] = n, u._jQueryInterface;
    }, u;
  }(jQuery),
      s = function (t) {
    var e = "Treeview",
        i = t.fn[e],
        n = {
      SELECTED: "selected.lte.treeview",
      EXPANDED: "expanded.lte.treeview",
      COLLAPSED: "collapsed.lte.treeview",
      LOAD_DATA_API: "load.lte.treeview"
    },
        s = ".nav-item",
        o = ".nav-treeview",
        a = ".menu-open",
        r = '[data-widget="treeview"]',
        l = "menu-open",
        c = "sidebar-collapse",
        d = {
      trigger: r + " " + ".nav-link",
      animationSpeed: 300,
      accordion: !0,
      expandSidebar: !1,
      sidebarButtonSelector: '[data-widget="pushmenu"]'
    },
        h = function () {
      function e(t, e) {
        this._config = e, this._element = t;
      }

      var i = e.prototype;
      return i.init = function () {
        this._setupListeners();
      }, i.expand = function (e, i) {
        var s = this,
            r = t.Event(n.EXPANDED);

        if (this._config.accordion) {
          var c = i.siblings(a).first(),
              d = c.find(o).first();
          this.collapse(d, c);
        }

        e.stop().slideDown(this._config.animationSpeed, function () {
          i.addClass(l), t(s._element).trigger(r);
        }), this._config.expandSidebar && this._expandSidebar();
      }, i.collapse = function (e, i) {
        var s = this,
            r = t.Event(n.COLLAPSED);
        e.stop().slideUp(this._config.animationSpeed, function () {
          i.removeClass(l), t(s._element).trigger(r), e.find(a + " > " + o).slideUp(), e.find(a).removeClass(l);
        });
      }, i.toggle = function (e) {
        var i = t(e.currentTarget),
            n = i.parent(),
            a = n.find("> " + o);

        if (a.is(o) || (n.is(s) || (a = n.parent().find("> " + o)), a.is(o))) {
          e.preventDefault();
          var r = i.parents(s).first();
          r.hasClass(l) ? this.collapse(t(a), r) : this.expand(t(a), r);
        }
      }, i._setupListeners = function () {
        var e = this;
        t(document).on("click", this._config.trigger, function (t) {
          e.toggle(t);
        });
      }, i._expandSidebar = function () {
        t("body").hasClass(c) && t(this._config.sidebarButtonSelector).PushMenu("expand");
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var n = t(this).data("lte.treeview"),
              s = t.extend({}, d, t(this).data());
          n || (n = new e(t(this), s), t(this).data("lte.treeview", n)), "init" === i && n[i]();
        });
      }, e;
    }();

    return t(window).on(n.LOAD_DATA_API, function () {
      t(r).each(function () {
        h._jQueryInterface.call(t(this), "init");
      });
    }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
      return t.fn[e] = i, h._jQueryInterface;
    }, h;
  }(jQuery),
      o = function (t) {
    var e = "DirectChat",
        i = t.fn[e],
        n = "toggled{EVENT_KEY}",
        s = '[data-widget="chat-pane-toggle"]',
        o = ".direct-chat",
        a = "direct-chat-contacts-open",
        r = function () {
      function e(t, e) {
        this._element = t;
      }

      return e.prototype.toggle = function () {
        t(this._element).parents(o).first().toggleClass(a);
        var e = t.Event(n);
        t(this._element).trigger(e);
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var n = t(this).data("lte.directchat");
          n || (n = new e(t(this)), t(this).data("lte.directchat", n)), n[i]();
        });
      }, e;
    }();

    return t(document).on("click", s, function (e) {
      e && e.preventDefault(), r._jQueryInterface.call(t(this), "toggle");
    }), t.fn[e] = r._jQueryInterface, t.fn[e].Constructor = r, t.fn[e].noConflict = function () {
      return t.fn[e] = i, r._jQueryInterface;
    }, r;
  }(jQuery),
      a = function (t) {
    var e = "TodoList",
        i = t.fn[e],
        n = '[data-widget="todo-list"]',
        s = "done",
        o = {
      onCheck: function onCheck(t) {
        return t;
      },
      onUnCheck: function onUnCheck(t) {
        return t;
      }
    },
        a = function () {
      function e(t, e) {
        this._config = e, this._element = t, this._init();
      }

      var i = e.prototype;
      return i.toggle = function (e) {
        e.parents("li").toggleClass(s), t(e).prop("checked") ? this.check(e) : this.unCheck(t(e));
      }, i.check = function (t) {
        this._config.onCheck.call(t);
      }, i.unCheck = function (t) {
        this._config.onUnCheck.call(t);
      }, i._init = function () {
        var e = this;
        t(n).find("input:checkbox:checked").parents("li").toggleClass(s), t(n).on("change", "input:checkbox", function (i) {
          e.toggle(t(i.target));
        });
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var n = t(this).data("lte.todolist"),
              s = t.extend({}, o, t(this).data());
          n || (n = new e(t(this), s), t(this).data("lte.todolist", n)), "init" === i && n[i]();
        });
      }, e;
    }();

    return t(window).on("load", function () {
      a._jQueryInterface.call(t(n));
    }), t.fn[e] = a._jQueryInterface, t.fn[e].Constructor = a, t.fn[e].noConflict = function () {
      return t.fn[e] = i, a._jQueryInterface;
    }, a;
  }(jQuery),
      r = function (t) {
    var e = "CardWidget",
        i = ".lte.cardwidget",
        n = t.fn[e],
        s = {
      EXPANDED: "expanded" + i,
      COLLAPSED: "collapsed" + i,
      MAXIMIZED: "maximized" + i,
      MINIMIZED: "minimized" + i,
      REMOVED: "removed" + i
    },
        o = "card",
        a = "collapsed-card",
        r = "collapsing-card",
        l = "expanding-card",
        c = "was-collapsed",
        d = "maximized-card",
        h = {
      DATA_REMOVE: '[data-card-widget="remove"]',
      DATA_COLLAPSE: '[data-card-widget="collapse"]',
      DATA_MAXIMIZE: '[data-card-widget="maximize"]',
      CARD: "." + o,
      CARD_HEADER: ".card-header",
      CARD_BODY: ".card-body",
      CARD_FOOTER: ".card-footer",
      COLLAPSED: "." + a
    },
        f = {
      animationSpeed: "normal",
      collapseTrigger: h.DATA_COLLAPSE,
      removeTrigger: h.DATA_REMOVE,
      maximizeTrigger: h.DATA_MAXIMIZE,
      collapseIcon: "fa-minus",
      expandIcon: "fa-plus",
      maximizeIcon: "fa-expand",
      minimizeIcon: "fa-compress"
    },
        u = function () {
      function e(e, i) {
        this._element = e, this._parent = e.parents(h.CARD).first(), e.hasClass(o) && (this._parent = e), this._settings = t.extend({}, f, i);
      }

      var i = e.prototype;
      return i.collapse = function () {
        var e = this;
        this._parent.addClass(r).children(h.CARD_BODY + ", " + h.CARD_FOOTER).slideUp(this._settings.animationSpeed, function () {
          e._parent.addClass(a).removeClass(r);
        }), this._parent.find("> " + h.CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);
        var i = t.Event(s.COLLAPSED);

        this._element.trigger(i, this._parent);
      }, i.expand = function () {
        var e = this;
        this._parent.addClass(l).children(h.CARD_BODY + ", " + h.CARD_FOOTER).slideDown(this._settings.animationSpeed, function () {
          e._parent.removeClass(a).removeClass(l);
        }), this._parent.find("> " + h.CARD_HEADER + " " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);
        var i = t.Event(s.EXPANDED);

        this._element.trigger(i, this._parent);
      }, i.remove = function () {
        this._parent.slideUp();

        var e = t.Event(s.REMOVED);

        this._element.trigger(e, this._parent);
      }, i.toggle = function () {
        this._parent.hasClass(a) ? this.expand() : this.collapse();
      }, i.maximize = function () {
        this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon), this._parent.css({
          height: this._parent.height(),
          width: this._parent.width(),
          transition: "all .15s"
        }).delay(150).queue(function () {
          t(this).addClass(d), t("html").addClass(d), t(this).hasClass(a) && t(this).addClass(c), t(this).dequeue();
        });
        var e = t.Event(s.MAXIMIZED);

        this._element.trigger(e, this._parent);
      }, i.minimize = function () {
        this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon), this._parent.css("cssText", "height:" + this._parent[0].style.height + " !important;width:" + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
          t(this).removeClass(d), t("html").removeClass(d), t(this).css({
            height: "inherit",
            width: "inherit"
          }), t(this).hasClass(c) && t(this).removeClass(c), t(this).dequeue();
        });
        var e = t.Event(s.MINIMIZED);

        this._element.trigger(e, this._parent);
      }, i.toggleMaximize = function () {
        this._parent.hasClass(d) ? this.minimize() : this.maximize();
      }, i._init = function (e) {
        var i = this;
        this._parent = e, t(this).find(this._settings.collapseTrigger).click(function () {
          i.toggle();
        }), t(this).find(this._settings.maximizeTrigger).click(function () {
          i.toggleMaximize();
        }), t(this).find(this._settings.removeTrigger).click(function () {
          i.remove();
        });
      }, e._jQueryInterface = function (i) {
        var n = t(this).data("lte.cardwidget"),
            s = t.extend({}, f, t(this).data());
        n || (n = new e(t(this), s), t(this).data("lte.cardwidget", "string" == typeof i ? n : i)), "string" == typeof i && i.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/) ? n[i]() : "object" == _typeof(i) && n._init(t(this));
      }, e;
    }();

    return t(document).on("click", h.DATA_COLLAPSE, function (e) {
      e && e.preventDefault(), u._jQueryInterface.call(t(this), "toggle");
    }), t(document).on("click", h.DATA_REMOVE, function (e) {
      e && e.preventDefault(), u._jQueryInterface.call(t(this), "remove");
    }), t(document).on("click", h.DATA_MAXIMIZE, function (e) {
      e && e.preventDefault(), u._jQueryInterface.call(t(this), "toggleMaximize");
    }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
      return t.fn[e] = n, u._jQueryInterface;
    }, u;
  }(jQuery),
      l = function (t) {
    var e = "CardRefresh",
        i = t.fn[e],
        n = {
      LOADED: "loaded.lte.cardrefresh",
      OVERLAY_ADDED: "overlay.added.lte.cardrefresh",
      OVERLAY_REMOVED: "overlay.removed.lte.cardrefresh"
    },
        s = "card",
        o = {
      CARD: "." + s,
      DATA_REFRESH: '[data-card-widget="card-refresh"]'
    },
        a = {
      source: "",
      sourceSelector: "",
      params: {},
      trigger: o.DATA_REFRESH,
      content: ".card-body",
      loadInContent: !0,
      loadOnInit: !0,
      responseType: "",
      overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
      onLoadStart: function onLoadStart() {},
      onLoadDone: function onLoadDone(t) {
        return t;
      }
    },
        r = function () {
      function e(e, i) {
        if (this._element = e, this._parent = e.parents(o.CARD).first(), this._settings = t.extend({}, a, i), this._overlay = t(this._settings.overlayTemplate), e.hasClass(s) && (this._parent = e), "" === this._settings.source) throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.");
      }

      var i = e.prototype;
      return i.load = function () {
        this._addOverlay(), this._settings.onLoadStart.call(t(this)), t.get(this._settings.source, this._settings.params, function (e) {
          this._settings.loadInContent && ("" != this._settings.sourceSelector && (e = t(e).find(this._settings.sourceSelector).html()), this._parent.find(this._settings.content).html(e)), this._settings.onLoadDone.call(t(this), e), this._removeOverlay();
        }.bind(this), "" !== this._settings.responseType && this._settings.responseType);
        var e = t.Event(n.LOADED);
        t(this._element).trigger(e);
      }, i._addOverlay = function () {
        this._parent.append(this._overlay);

        var e = t.Event(n.OVERLAY_ADDED);
        t(this._element).trigger(e);
      }, i._removeOverlay = function () {
        this._parent.find(this._overlay).remove();

        var e = t.Event(n.OVERLAY_REMOVED);
        t(this._element).trigger(e);
      }, i._init = function (e) {
        var i = this;
        t(this).find(this._settings.trigger).on("click", function () {
          i.load();
        }), this._settings.loadOnInit && this.load();
      }, e._jQueryInterface = function (i) {
        var n = t(this).data("lte.cardrefresh"),
            s = t.extend({}, a, t(this).data());
        n || (n = new e(t(this), s), t(this).data("lte.cardrefresh", "string" == typeof i ? n : i)), "string" == typeof i && i.match(/load/) ? n[i]() : n._init(t(this));
      }, e;
    }();

    return t(document).on("click", o.DATA_REFRESH, function (e) {
      e && e.preventDefault(), r._jQueryInterface.call(t(this), "load");
    }), t(document).ready(function () {
      t(o.DATA_REFRESH).each(function () {
        r._jQueryInterface.call(t(this));
      });
    }), t.fn[e] = r._jQueryInterface, t.fn[e].Constructor = r, t.fn[e].noConflict = function () {
      return t.fn[e] = i, r._jQueryInterface;
    }, r;
  }(jQuery),
      c = function (t) {
    var e = "Dropdown",
        i = t.fn[e],
        n = ".navbar",
        s = ".dropdown-menu",
        o = ".dropdown-menu.show",
        a = '[data-toggle="dropdown"]',
        r = "dropdown-menu-right",
        l = {},
        c = function () {
      function e(t, e) {
        this._config = e, this._element = t;
      }

      var i = e.prototype;
      return i.toggleSubmenu = function () {
        this._element.siblings().show().toggleClass("show"), this._element.next().hasClass("show") || this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(), this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function (e) {
          t(".dropdown-submenu .show").removeClass("show").hide();
        });
      }, i.fixPosition = function () {
        var e = t(o);

        if (0 !== e.length) {
          e.hasClass(r) ? (e.css("left", "inherit"), e.css("right", 0)) : (e.css("left", 0), e.css("right", "inherit"));
          var i = e.offset(),
              n = e.width(),
              s = t(window).width() - i.left;
          i.left < 0 ? (e.css("left", "inherit"), e.css("right", i.left - 5)) : s < n && (e.css("left", "inherit"), e.css("right", 0));
        }
      }, e._jQueryInterface = function (i) {
        return this.each(function () {
          var n = t(this).data("lte.dropdown"),
              s = t.extend({}, l, t(this).data());
          n || (n = new e(t(this), s), t(this).data("lte.dropdown", n)), "toggleSubmenu" !== i && "fixPosition" != i || n[i]();
        });
      }, e;
    }();

    return t(s + " " + a).on("click", function (e) {
      e.preventDefault(), e.stopPropagation(), c._jQueryInterface.call(t(this), "toggleSubmenu");
    }), t(n + " " + a).on("click", function (e) {
      e.preventDefault(), setTimeout(function () {
        c._jQueryInterface.call(t(this), "fixPosition");
      }, 1);
    }), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function () {
      return t.fn[e] = i, c._jQueryInterface;
    }, c;
  }(jQuery),
      d = function (t) {
    var e = "Toasts",
        i = t.fn[e],
        n = {
      INIT: "init.lte.toasts",
      CREATED: "created.lte.toasts",
      REMOVED: "removed.lte.toasts"
    },
        s = "#toastsContainerTopRight",
        o = "#toastsContainerTopLeft",
        a = "#toastsContainerBottomRight",
        r = "#toastsContainerBottomLeft",
        l = "toasts-top-right",
        c = "toasts-top-left",
        d = "toasts-bottom-right",
        h = "toasts-bottom-left",
        f = "topRight",
        u = "topLeft",
        g = "bottomRight",
        p = "bottomLeft",
        _ = {
      position: f,
      fixed: !0,
      autohide: !1,
      autoremove: !0,
      delay: 1e3,
      fade: !0,
      icon: null,
      image: null,
      imageAlt: null,
      imageHeight: "25px",
      title: null,
      subtitle: null,
      close: !0,
      body: null,
      "class": null
    },
        m = function () {
      function e(e, i) {
        this._config = i, this._prepareContainer();
        var s = t.Event(n.INIT);
        t("body").trigger(s);
      }

      var i = e.prototype;
      return i.create = function () {
        var e = t('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
        e.data("autohide", this._config.autohide), e.data("animation", this._config.fade), this._config["class"] && e.addClass(this._config["class"]), this._config.delay && 500 != this._config.delay && e.data("delay", this._config.delay);
        var i = t('<div class="toast-header">');

        if (null != this._config.image) {
          var s = t("<img />").addClass("rounded mr-2").attr("src", this._config.image).attr("alt", this._config.imageAlt);
          null != this._config.imageHeight && s.height(this._config.imageHeight).width("auto"), i.append(s);
        }

        if (null != this._config.icon && i.append(t("<i />").addClass("mr-2").addClass(this._config.icon)), null != this._config.title && i.append(t("<strong />").addClass("mr-auto").html(this._config.title)), null != this._config.subtitle && i.append(t("<small />").html(this._config.subtitle)), 1 == this._config.close) {
          var o = t('<button data-dismiss="toast" />').attr("type", "button").addClass("ml-2 mb-1 close").attr("aria-label", "Close").append('<span aria-hidden="true">&times;</span>');
          null == this._config.title && o.toggleClass("ml-2 ml-auto"), i.append(o);
        }

        e.append(i), null != this._config.body && e.append(t('<div class="toast-body" />').html(this._config.body)), t(this._getContainerId()).prepend(e);
        var a = t.Event(n.CREATED);
        t("body").trigger(a), e.toast("show"), this._config.autoremove && e.on("hidden.bs.toast", function () {
          t(this).delay(200).remove();
          var e = t.Event(n.REMOVED);
          t("body").trigger(e);
        });
      }, i._getContainerId = function () {
        return this._config.position == f ? s : this._config.position == u ? o : this._config.position == g ? a : this._config.position == p ? r : void 0;
      }, i._prepareContainer = function () {
        if (0 === t(this._getContainerId()).length) {
          var e = t("<div />").attr("id", this._getContainerId().replace("#", ""));
          this._config.position == f ? e.addClass(l) : this._config.position == u ? e.addClass(c) : this._config.position == g ? e.addClass(d) : this._config.position == p && e.addClass(h), t("body").append(e);
        }

        this._config.fixed ? t(this._getContainerId()).addClass("fixed") : t(this._getContainerId()).removeClass("fixed");
      }, e._jQueryInterface = function (i, n) {
        return this.each(function () {
          var s = t.extend({}, _, n),
              o = new e(t(this), s);
          "create" === i && o[i]();
        });
      }, e;
    }();

    return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = i, m._jQueryInterface;
    }, m;
  }(jQuery);

  t.CardRefresh = l, t.CardWidget = r, t.ControlSidebar = e, t.DirectChat = o, t.Dropdown = c, t.Layout = i, t.PushMenu = n, t.Toasts = d, t.TodoList = a, t.Treeview = s, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/is-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.github.io/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.is-integer.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.is-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isInteger = __webpack_require__(/*! ../internals/is-integer */ "./node_modules/core-js/internals/is-integer.js");

// `Number.isInteger` method
// https://tc39.github.io/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.fixed.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.fixed.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.fixed` method
// https://tc39.github.io/ecma262/#sec-string.prototype.fixed
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('fixed') }, {
  fixed: function fixed() {
    return createHTML(this, 'tt', '', '');
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/adminlte/dist/js/adminlte.min.js","runtime","vendors~adminltejs~bootstrapJs~checkboxes~jquery~locateTruck~orderDish~warehouseDish~warehouseProduc~2bbf597f","vendors~adminltejs~bootstrapJs~jquery~locateTruck~warehouseDish~warehouseProduct~weGLinit","vendors~adminltejs~bootstrapJs~jquery~weGLinit"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvQ29udHJvbFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2J1aWxkL2pzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvUHVzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2J1aWxkL2pzL1RyZWV2aWV3LmpzIiwid2VicGFjazovLy8uLi8uLi9idWlsZC9qcy9EaXJlY3RDaGF0LmpzIiwid2VicGFjazovLy8uLi8uLi9idWlsZC9qcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvQ2FyZFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvQ2FyZFJlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2J1aWxkL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9idWlsZC9qcy9Ub2FzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5maXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xTaWRlYmFyIiwiJCIsIk5BTUUiLCJEQVRBX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsImZuIiwiRXZlbnQiLCJDT0xMQVBTRUQiLCJFWFBBTkRFRCIsIlNlbGVjdG9yIiwiQ2xhc3NOYW1lIiwiRGVmYXVsdCIsImNvbnRyb2xzaWRlYmFyU2xpZGUiLCJzY3JvbGxiYXJUaGVtZSIsInNjcm9sbGJhckF1dG9IaWRlIiwiZWxlbWVudCIsImNvbmZpZyIsInRoaXMiLCJfZWxlbWVudCIsIl9jb25maWciLCJfaW5pdCIsImNvbGxhcHNlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlbGF5IiwicXVldWUiLCJoaWRlIiwiZGVxdWV1ZSIsImNvbGxhcHNlZEV2ZW50IiwidHJpZ2dlciIsInNob3ciLCJleHBhbmRlZEV2ZW50IiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJfZml4SGVpZ2h0IiwiX2ZpeFNjcm9sbEhlaWdodCIsIndpbmRvdyIsInJlc2l6ZSIsIl90aGlzIiwic2Nyb2xsIiwiaGVpZ2h0cyIsImRvY3VtZW50IiwiaGVpZ2h0IiwiaGVhZGVyIiwib3V0ZXJIZWlnaHQiLCJmb290ZXIiLCJwb3NpdGlvbnMiLCJNYXRoIiwiYWJzIiwic2Nyb2xsVG9wIiwibmF2YmFyRml4ZWQiLCJmb290ZXJGaXhlZCIsImNzcyIsInNpZGViYXJIZWlnaHQiLCJvdmVybGF5U2Nyb2xsYmFycyIsImNsYXNzTmFtZSIsInNpemVBdXRvQ2FwYWJsZSIsInNjcm9sbGJhcnMiLCJhdXRvSGlkZSIsImNsaWNrU2Nyb2xsaW5nIiwiX2pRdWVyeUludGVyZmFjZSIsIm9wZXJhdGlvbiIsImVhY2giLCJkYXRhIiwiX29wdGlvbnMiLCJleHRlbmQiLCJFcnJvciIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbGwiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJqUXVlcnkiLCJMYXlvdXQiLCJwYW5lbEF1dG9IZWlnaHQiLCJsb2dpblJlZ2lzdGVyQXV0b0hlaWdodCIsImZpeExheW91dEhlaWdodCIsImV4dHJhIiwiY29udHJvbF9zaWRlYmFyIiwibGVuZ3RoIiwic2lkZWJhciIsIm1heCIsIl9tYXgiLCJvZmZzZXQiLCJmaXhMb2dpblJlZ2lzdGVySGVpZ2h0IiwiYm94X2hlaWdodCIsIk51bWJlciIsImlzSW50ZWdlciIsInNldEludGVydmFsIiwibnVtYmVycyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiUHVzaE1lbnUiLCJFVkVOVF9LRVkiLCJTSE9XTiIsImF1dG9Db2xsYXBzZVNpemUiLCJlbmFibGVSZW1lbWJlciIsIm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkIiwib3B0aW9ucyIsIl9hZGRPdmVybGF5IiwiZXhwYW5kIiwid2lkdGgiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2hvd25FdmVudCIsImF1dG9Db2xsYXBzZSIsInJlbWVtYmVyIiwiZ2V0SXRlbSIsIm92ZXJsYXkiLCJpZCIsIl90aGlzMiIsImFwcGVuZCIsIm1hdGNoIiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJUcmVldmlldyIsIlNFTEVDVEVEIiwiTE9BRF9EQVRBX0FQSSIsImFuaW1hdGlvblNwZWVkIiwiYWNjb3JkaW9uIiwiZXhwYW5kU2lkZWJhciIsInNpZGViYXJCdXR0b25TZWxlY3RvciIsImluaXQiLCJfc2V0dXBMaXN0ZW5lcnMiLCJ0cmVldmlld01lbnUiLCJwYXJlbnRMaSIsIm9wZW5NZW51TGkiLCJzaWJsaW5ncyIsImZpcnN0Iiwib3BlblRyZWV2aWV3IiwiZmluZCIsInN0b3AiLCJzbGlkZURvd24iLCJfZXhwYW5kU2lkZWJhciIsInNsaWRlVXAiLCIkcmVsYXRpdmVUYXJnZXQiLCIkcGFyZW50IiwicGFyZW50IiwiaXMiLCJwYXJlbnRzIiwiX3RoaXMzIiwiRGlyZWN0Q2hhdCIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlZEV2ZW50IiwiVG9kb0xpc3QiLCJvbkNoZWNrIiwiaXRlbSIsIm9uVW5DaGVjayIsInByb3AiLCJjaGVjayIsInVuQ2hlY2siLCJ0aGF0IiwidGFyZ2V0IiwiQ2FyZFdpZGdldCIsIk1BWElNSVpFRCIsIk1JTklNSVpFRCIsIlJFTU9WRUQiLCJEQVRBX1JFTU9WRSIsIkRBVEFfQ09MTEFQU0UiLCJEQVRBX01BWElNSVpFIiwiQ0FSRCIsIkNBUkRfSEVBREVSIiwiQ0FSRF9CT0RZIiwiQ0FSRF9GT09URVIiLCJjb2xsYXBzZVRyaWdnZXIiLCJyZW1vdmVUcmlnZ2VyIiwibWF4aW1pemVUcmlnZ2VyIiwiY29sbGFwc2VJY29uIiwiZXhwYW5kSWNvbiIsIm1heGltaXplSWNvbiIsIm1pbmltaXplSWNvbiIsInNldHRpbmdzIiwiX3BhcmVudCIsIl9zZXR0aW5ncyIsImNoaWxkcmVuIiwiY29sbGFwc2VkIiwiZXhwYW5kZWQiLCJyZW1vdmUiLCJyZW1vdmVkIiwibWF4aW1pemUiLCJ0cmFuc2l0aW9uIiwibWF4aW1pemVkIiwibWluaW1pemUiLCJzdHlsZSIsInRvZ2dsZU1heGltaXplIiwiY2FyZCIsImNsaWNrIiwiQ2FyZFJlZnJlc2giLCJMT0FERUQiLCJPVkVSTEFZX0FEREVEIiwiT1ZFUkxBWV9SRU1PVkVEIiwiREFUQV9SRUZSRVNIIiwic291cmNlIiwic291cmNlU2VsZWN0b3IiLCJwYXJhbXMiLCJjb250ZW50IiwibG9hZEluQ29udGVudCIsImxvYWRPbkluaXQiLCJyZXNwb25zZVR5cGUiLCJvdmVybGF5VGVtcGxhdGUiLCJvbkxvYWRTdGFydCIsIm9uTG9hZERvbmUiLCJyZXNwb25zZSIsIl9vdmVybGF5IiwibG9hZCIsImdldCIsImh0bWwiLCJfcmVtb3ZlT3ZlcmxheSIsImJpbmQiLCJsb2FkZWRFdmVudCIsIm92ZXJsYXlBZGRlZEV2ZW50Iiwib3ZlcmxheVJlbW92ZWRFdmVudCIsInJlYWR5IiwiRHJvcGRvd24iLCJ0b2dnbGVTdWJtZW51IiwibmV4dCIsImUiLCJmaXhQb3NpdGlvbiIsImVsbSIsInZpc2libGVQYXJ0IiwibGVmdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFRpbWVvdXQiLCJUb2FzdHMiLCJJTklUIiwiQ1JFQVRFRCIsIlBvc2l0aW9uIiwicG9zaXRpb24iLCJmaXhlZCIsImF1dG9oaWRlIiwiYXV0b3JlbW92ZSIsImZhZGUiLCJpY29uIiwiaW1hZ2UiLCJpbWFnZUFsdCIsImltYWdlSGVpZ2h0IiwidGl0bGUiLCJzdWJ0aXRsZSIsImNsb3NlIiwiYm9keSIsImNsYXNzIiwiX3ByZXBhcmVDb250YWluZXIiLCJpbml0RXZlbnQiLCJjcmVhdGUiLCJ0b2FzdCIsInRvYXN0X2hlYWRlciIsInRvYXN0X2ltYWdlIiwiYXR0ciIsInRvYXN0X2Nsb3NlIiwiX2dldENvbnRhaW5lcklkIiwicHJlcGVuZCIsImNyZWF0ZWRFdmVudCIsInJlbW92ZWRFdmVudCIsImNvbnRhaW5lciIsInJlcGxhY2UiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNQSxJQUFrQixVQUFDQyxDQUFELEVBQUNBO0FBTXZCLFFBQU1DLElBQXFCLGdCQUEzQjtBQUFBLFFBQ01DLElBQXFCLG9CQUQzQjtBQUFBLFFBR01DLElBQXFCSCxFQUFFSSxFQUFGSixDQUFLQyxDQUFMRCxDQUgzQjtBQUFBLFFBTU1LLElBQVE7QUFDWkMsaUJBQVMsOEJBREc7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Q0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxZQUFZLG1CQUFPLENBQUMscUVBQW9COztBQUV4Qyw2Q0FBNkMsZUFBZSxFQUFFOztBQUU5RDtBQUNBO0FBQ0EsR0FBRyw0REFBNEQ7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2JZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx5RUFBeUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbWlubHRlanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBDb250cm9sU2lkZWJhci5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQ29udHJvbFNpZGViYXIgPSAoKCQpID0+IHtcbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdDb250cm9sU2lkZWJhcidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5jb250cm9sc2lkZWJhcidcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENPTExBUFNFRDogYGNvbGxhcHNlZCR7RVZFTlRfS0VZfWAsXG4gICAgRVhQQU5ERUQ6IGBleHBhbmRlZCR7RVZFTlRfS0VZfWAsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBDT05UUk9MX1NJREVCQVI6ICcuY29udHJvbC1zaWRlYmFyJyxcbiAgICBDT05UUk9MX1NJREVCQVJfQ09OVEVOVDogJy5jb250cm9sLXNpZGViYXItY29udGVudCcsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nLFxuICAgIENPTlRFTlQ6ICcuY29udGVudC13cmFwcGVyJyxcbiAgICBIRUFERVI6ICcubWFpbi1oZWFkZXInLFxuICAgIEZPT1RFUjogJy5tYWluLWZvb3RlcicsXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ09OVFJPTF9TSURFQkFSX0FOSU1BVEU6ICdjb250cm9sLXNpZGViYXItYW5pbWF0ZScsXG4gICAgQ09OVFJPTF9TSURFQkFSX09QRU46ICdjb250cm9sLXNpZGViYXItb3BlbicsXG4gICAgQ09OVFJPTF9TSURFQkFSX1NMSURFOiAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nLFxuICAgIExBWU9VVF9GSVhFRDogJ2xheW91dC1maXhlZCcsXG4gICAgTkFWQkFSX0ZJWEVEOiAnbGF5b3V0LW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLW5hdmJhci1maXhlZCcsXG4gICAgRk9PVEVSX0ZJWEVEOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLWZvb3Rlci1maXhlZCcsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gICAgc2Nyb2xsYmFyVGhlbWUgOiAnb3MtdGhlbWUtbGlnaHQnLFxuICAgIHNjcm9sbGJhckF1dG9IaWRlOiAnbCcsXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIENvbnRyb2xTaWRlYmFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICB0aGlzLl9jb25maWcgID0gY29uZmlnXG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAvLyBTaG93IHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIGlmICh0aGlzLl9jb25maWcuY29udHJvbHNpZGViYXJTbGlkZSkge1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbigpe1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5oaWRlKClcbiAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xsYXBzZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGNvbGxhcHNlZEV2ZW50KVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAvLyBDb2xsYXBzZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSlcbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLnNob3coKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSlcbiAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfT1BFTilcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuRVhQQU5ERUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBjb25zdCBzaG91bGRDbG9zZSA9ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKVxuICAgICAgICAuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSlcbiAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAvLyBDbG9zZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuc2hvdygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX2luaXQoKSB7XG4gICAgICB0aGlzLl9maXhIZWlnaHQoKVxuICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKSkge1xuICAgICAgICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfZml4U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgY29uc3QgaGVpZ2h0cyA9IHtcbiAgICAgICAgc2Nyb2xsOiAkKGRvY3VtZW50KS5oZWlnaHQoKSxcbiAgICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLm91dGVySGVpZ2h0KCksXG4gICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLm91dGVySGVpZ2h0KCksXG4gICAgICB9XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICAgIGJvdHRvbTogTWF0aC5hYnMoKGhlaWdodHMud2luZG93ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSAtIGhlaWdodHMuc2Nyb2xsKSxcbiAgICAgICAgdG9wOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICB9XG5cbiAgICAgIGxldCBuYXZiYXJGaXhlZCA9IGZhbHNlO1xuICAgICAgbGV0IGZvb3RlckZpeGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkxBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5IRUFERVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIG5hdmJhckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIGZvb3RlckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25zLnRvcCA9PT0gMCAmJiBwb3NpdGlvbnMuYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciArIGhlaWdodHMuZm9vdGVyKSlcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMuYm90dG9tIDw9IGhlaWdodHMuZm9vdGVyKSB7XG4gICAgICAgICAgaWYgKGZvb3RlckZpeGVkID09PSBmYWxzZSkgeyAgXG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3RlciAtIHBvc2l0aW9ucy5ib3R0b20pO1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnLCAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMudG9wIDw9IGhlaWdodHMuaGVhZGVyKSB7XG4gICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIgLSBwb3NpdGlvbnMudG9wKTtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJywgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgMCk7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9maXhIZWlnaHQoKSB7XG4gICAgICBjb25zdCBoZWlnaHRzID0ge1xuICAgICAgICB3aW5kb3c6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgaGVhZGVyOiAkKFNlbGVjdG9yLkhFQURFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgZm9vdGVyOiAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgIH1cblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICBsZXQgc2lkZWJhckhlaWdodCA9IGhlaWdodHMud2luZG93IC0gaGVpZ2h0cy5oZWFkZXI7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIHNpZGViYXJIZWlnaHQgPSBoZWlnaHRzLndpbmRvdyAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgICA6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcbiAgICAgICAgICAgIHNpemVBdXRvQ2FwYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxiYXJzIDoge1xuICAgICAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLCBcbiAgICAgICAgICAgICAgY2xpY2tTY3JvbGxpbmcgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb250cm9sU2lkZWJhcih0aGlzLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtvcGVyYXRpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvcGVyYXRpb259IGlzIG5vdCBhIGZ1bmN0aW9uYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbnRyb2xTaWRlYmFyXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29udHJvbFNpZGViYXJcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFNpZGViYXJcbiAgXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBMYXlvdXQuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IExheW91dCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0xheW91dCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5sYXlvdXQnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBTSURFQkFSOiAnc2lkZWJhcidcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIEhFQURFUiAgICAgICAgIDogJy5tYWluLWhlYWRlcicsXG4gICAgTUFJTl9TSURFQkFSICAgOiAnLm1haW4tc2lkZWJhcicsXG4gICAgU0lERUJBUiAgICAgICAgOiAnLm1haW4tc2lkZWJhciAuc2lkZWJhcicsXG4gICAgQ09OVEVOVCAgICAgICAgOiAnLmNvbnRlbnQtd3JhcHBlcicsXG4gICAgQlJBTkQgICAgICAgICAgOiAnLmJyYW5kLWxpbmsnLFxuICAgIENPTlRFTlRfSEVBREVSIDogJy5jb250ZW50LWhlYWRlcicsXG4gICAgV1JBUFBFUiAgICAgICAgOiAnLndyYXBwZXInLFxuICAgIENPTlRST0xfU0lERUJBUjogJy5jb250cm9sLXNpZGViYXInLFxuICAgIENPTlRST0xfU0lERUJBUl9DT05URU5UOiAnLmNvbnRyb2wtc2lkZWJhci1jb250ZW50JyxcbiAgICBDT05UUk9MX1NJREVCQVJfQlROOiAnW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJyxcbiAgICBMQVlPVVRfRklYRUQgICA6ICcubGF5b3V0LWZpeGVkJyxcbiAgICBGT09URVIgICAgICAgICA6ICcubWFpbi1mb290ZXInLFxuICAgIFBVU0hNRU5VX0JUTiAgIDogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJyxcbiAgICBMT0dJTl9CT1ggICAgICA6ICcubG9naW4tYm94JyxcbiAgICBSRUdJU1RFUl9CT1ggICA6ICcucmVnaXN0ZXItYm94J1xuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEhPTEQgICAgICAgICAgIDogJ2hvbGQtdHJhbnNpdGlvbicsXG4gICAgU0lERUJBUiAgICAgICAgOiAnbWFpbi1zaWRlYmFyJyxcbiAgICBDT05URU5UX0ZJWEVEICA6ICdjb250ZW50LWZpeGVkJyxcbiAgICBTSURFQkFSX0ZPQ1VTRUQ6ICdzaWRlYmFyLWZvY3VzZWQnLFxuICAgIExBWU9VVF9GSVhFRCAgIDogJ2xheW91dC1maXhlZCcsXG4gICAgTkFWQkFSX0ZJWEVEICAgOiAnbGF5b3V0LW5hdmJhci1maXhlZCcsXG4gICAgRk9PVEVSX0ZJWEVEICAgOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgTE9HSU5fUEFHRSAgICAgOiAnbG9naW4tcGFnZScsXG4gICAgUkVHSVNURVJfUEFHRSAgOiAncmVnaXN0ZXItcGFnZScsXG4gICAgQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU46ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3BlbicsXG4gICAgQ09OVFJPTF9TSURFQkFSX09QRU46ICdjb250cm9sLXNpZGViYXItb3BlbicsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHNjcm9sbGJhclRoZW1lIDogJ29zLXRoZW1lLWxpZ2h0JyxcbiAgICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnLFxuICAgIHBhbmVsQXV0b0hlaWdodDogdHJ1ZSxcbiAgICBsb2dpblJlZ2lzdGVyQXV0b0hlaWdodDogdHJ1ZSxcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgZml4TGF5b3V0SGVpZ2h0KGV4dHJhID0gbnVsbCkge1xuICAgICAgbGV0IGNvbnRyb2xfc2lkZWJhciA9IDBcblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8IGV4dHJhID09ICdjb250cm9sX3NpZGViYXInKSB7XG4gICAgICAgIGNvbnRyb2xfc2lkZWJhciA9ICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmhlaWdodCgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlaWdodHMgPSB7XG4gICAgICAgIHdpbmRvdzogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICBoZWFkZXI6ICQoU2VsZWN0b3IuSEVBREVSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLkhFQURFUikub3V0ZXJIZWlnaHQoKSA6IDAsXG4gICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLmxlbmd0aCAhPT0gMCA/ICQoU2VsZWN0b3IuRk9PVEVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgICAgc2lkZWJhcjogJChTZWxlY3Rvci5TSURFQkFSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLlNJREVCQVIpLmhlaWdodCgpIDogMCxcbiAgICAgICAgY29udHJvbF9zaWRlYmFyOiBjb250cm9sX3NpZGViYXIsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuX21heChoZWlnaHRzKVxuICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRcblxuICAgICAgaWYgKG9mZnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAobWF4ID09IGhlaWdodHMuY29udHJvbF9zaWRlYmFyKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCAobWF4ICsgb2Zmc2V0KSlcbiAgICAgICAgfSBlbHNlIGlmIChtYXggPT0gaGVpZ2h0cy53aW5kb3cpIHtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIgLSBoZWlnaHRzLmZvb3RlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVEVOVCkuY3NzKCdtaW4taGVpZ2h0JywgKG1heCArIG9mZnNldCkgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICQoU2VsZWN0b3IuU0lERUJBUikub3ZlcmxheVNjcm9sbGJhcnMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lICAgICAgIDogdGhpcy5fY29uZmlnLnNjcm9sbGJhclRoZW1lLFxuICAgICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbGJhcnMgOiB7XG4gICAgICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsIFxuICAgICAgICAgICAgICBjbGlja1Njcm9sbGluZyA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZml4TG9naW5SZWdpc3RlckhlaWdodCgpIHtcbiAgICAgIGlmICgkKFNlbGVjdG9yLkxPR0lOX0JPWCArICcsICcgKyBTZWxlY3Rvci5SRUdJU1RFUl9CT1gpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCdib2R5LCBodG1sJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpXG4gICAgICB9IGVsc2UgaWYgKCQoU2VsZWN0b3IuTE9HSU5fQk9YICsgJywgJyArIFNlbGVjdG9yLlJFR0lTVEVSX0JPWCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBib3hfaGVpZ2h0ID0gJChTZWxlY3Rvci5MT0dJTl9CT1ggKyAnLCAnICsgU2VsZWN0b3IuUkVHSVNURVJfQk9YKS5oZWlnaHQoKVxuXG4gICAgICAgIGlmICgkKCdib2R5JykuY3NzKCdtaW4taGVpZ2h0JykgIT09IGJveF9oZWlnaHQpIHtcbiAgICAgICAgICAkKCdib2R5JykuY3NzKCdtaW4taGVpZ2h0JywgYm94X2hlaWdodClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KCkge1xuICAgICAgLy8gQWN0aXZhdGUgbGF5b3V0IGhlaWdodCB3YXRjaGVyXG4gICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHRydWUpIHsgICAgICBcbiAgICAgICAgdGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0KClcbiAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpKSB7ICAgICAgXG4gICAgICAgIHNldEludGVydmFsKHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCwgdGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJChTZWxlY3Rvci5TSURFQkFSKVxuICAgICAgICAub24oJ2NvbGxhcHNlZC5sdGUudHJlZXZpZXcgZXhwYW5kZWQubHRlLnRyZWV2aWV3JywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcbiAgICAgICAgfSlcblxuICAgICAgJChTZWxlY3Rvci5QVVNITUVOVV9CVE4pXG4gICAgICAgIC5vbignY29sbGFwc2VkLmx0ZS5wdXNobWVudSBzaG93bi5sdGUucHVzaG1lbnUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxuICAgICAgICB9KVxuXG4gICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9CVE4pXG4gICAgICAgIC5vbignY29sbGFwc2VkLmx0ZS5jb250cm9sc2lkZWJhcicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignZXhwYW5kZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KCdjb250cm9sX3NpZGViYXInKVxuICAgICAgICB9KVxuXG4gICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxuICAgICAgfSlcblxuICAgICAgJCgnYm9keS5ob2xkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICB9XG5cbiAgICBfbWF4KG51bWJlcnMpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XG4gICAgICBsZXQgbWF4ID0gMFxuXG4gICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKG51bWJlcnNba2V5XSA+IG1heCkge1xuICAgICAgICAgIG1heCA9IG51bWJlcnNba2V5XVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcgPSAnJykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IExheW91dCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcgfHwgY29uZmlnID09PSAnJykge1xuICAgICAgICAgIGRhdGFbJ19pbml0J10oKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZyA9PT0gJ2ZpeExheW91dEhlaWdodCcgfHwgY29uZmlnID09PSAnZml4TG9naW5SZWdpc3RlckhlaWdodCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoJ2JvZHknKSlcbiAgfSlcblxuICAkKFNlbGVjdG9yLlNJREVCQVIgKyAnIGEnKS5vbignZm9jdXNpbicsICgpID0+IHtcbiAgICAkKFNlbGVjdG9yLk1BSU5fU0lERUJBUikuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfRk9DVVNFRCk7XG4gIH0pXG5cbiAgJChTZWxlY3Rvci5TSURFQkFSICsgJyBhJykub24oJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICQoU2VsZWN0b3IuTUFJTl9TSURFQkFSKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9GT0NVU0VEKTtcbiAgfSlcblxuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTGF5b3V0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIExheW91dC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gTGF5b3V0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgUHVzaE1lbnUuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFB1c2hNZW51ID0gKCgkKSA9PiB7XG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnUHVzaE1lbnUnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUucHVzaG1lbnUnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBDT0xMQVBTRUQ6IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGF1dG9Db2xsYXBzZVNpemU6IDk5MixcbiAgICBlbmFibGVSZW1lbWJlcjogZmFsc2UsXG4gICAgbm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQ6IHRydWVcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIFRPR0dMRV9CVVRUT046ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXScsXG4gICAgU0lERUJBUl9NSU5JOiAnLnNpZGViYXItbWluaScsXG4gICAgU0lERUJBUl9DT0xMQVBTRUQ6ICcuc2lkZWJhci1jb2xsYXBzZScsXG4gICAgQk9EWTogJ2JvZHknLFxuICAgIE9WRVJMQVk6ICcjc2lkZWJhci1vdmVybGF5JyxcbiAgICBXUkFQUEVSOiAnLndyYXBwZXInXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ09MTEFQU0VEOiAnc2lkZWJhci1jb2xsYXBzZScsXG4gICAgT1BFTjogJ3NpZGViYXItb3BlbicsXG4gICAgQ0xPU0VEOiAnc2lkZWJhci1jbG9zZWQnXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIFB1c2hNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBvcHRpb25zKVxuXG4gICAgICBpZiAoISQoU2VsZWN0b3IuT1ZFUkxBWSkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGV4cGFuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ0xPU0VEKVxuXG4gICAgICBpZih0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByZW1lbWJlciR7RVZFTlRfS0VZfWAsIENsYXNzTmFtZS5PUEVOKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTilcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGNvbGxhcHNlKCkge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKFNlbGVjdG9yLkJPRFkpLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG5cbiAgICAgIGlmKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YCwgQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNPTExBUFNFRClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4cGFuZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXV0b0NvbGxhcHNlKHJlc2l6ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzaXplID09IHRydWUpIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5CT0RZKS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTikpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICAgfSBlbHNlIGlmKCQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1lbWJlcigpIHtcbiAgICAgIGlmKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbGV0IHRvZ2dsZVN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YClcbiAgICAgICAgaWYgKHRvZ2dsZVN0YXRlID09IENsYXNzTmFtZS5DT0xMQVBTRUQpe1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkKSB7XG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdob2xkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLmRlbGF5KDUwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX2luaXQoKSB7XG4gICAgICB0aGlzLnJlbWVtYmVyKClcbiAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKClcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9hZGRPdmVybGF5KCkge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAgIGlkOiAnc2lkZWJhci1vdmVybGF5J1xuICAgICAgfSlcblxuICAgICAgb3ZlcmxheS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgICAgfSlcblxuICAgICAgJChTZWxlY3Rvci5XUkFQUEVSKS5hcHBlbmQob3ZlcmxheSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFB1c2hNZW51KHRoaXMsIF9vcHRpb25zKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHx0b2dnbGUvKSkge1xuICAgICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuVE9HR0xFX0JVVFRPTiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcblxuICAgIGlmICgkKGJ1dHRvbikuZGF0YSgnd2lkZ2V0JykgIT09ICdwdXNobWVudScpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pXG4gICAgfVxuXG4gICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpXG4gIH0pXG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pKVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFB1c2hNZW51XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gUHVzaE1lbnVcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgUHVzaE1lbnVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFRyZWV2aWV3LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUcmVldmlldyA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ1RyZWV2aWV3J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLnRyZWV2aWV3J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgU0VMRUNURUQgICAgIDogYHNlbGVjdGVkJHtFVkVOVF9LRVl9YCxcbiAgICBFWFBBTkRFRCAgICAgOiBgZXhwYW5kZWQke0VWRU5UX0tFWX1gLFxuICAgIENPTExBUFNFRCAgICA6IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gLFxuICAgIExPQURfREFUQV9BUEk6IGBsb2FkJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTEkgICAgICAgICAgIDogJy5uYXYtaXRlbScsXG4gICAgTElOSyAgICAgICAgIDogJy5uYXYtbGluaycsXG4gICAgVFJFRVZJRVdfTUVOVTogJy5uYXYtdHJlZXZpZXcnLFxuICAgIE9QRU4gICAgICAgICA6ICcubWVudS1vcGVuJyxcbiAgICBEQVRBX1dJREdFVCAgOiAnW2RhdGEtd2lkZ2V0PVwidHJlZXZpZXdcIl0nXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgTEkgICAgICAgICAgICAgICA6ICduYXYtaXRlbScsXG4gICAgTElOSyAgICAgICAgICAgICA6ICduYXYtbGluaycsXG4gICAgVFJFRVZJRVdfTUVOVSAgICA6ICduYXYtdHJlZXZpZXcnLFxuICAgIE9QRU4gICAgICAgICAgICAgOiAnbWVudS1vcGVuJyxcbiAgICBTSURFQkFSX0NPTExBUFNFRDogJ3NpZGViYXItY29sbGFwc2UnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHRyaWdnZXIgICAgICAgICAgICAgIDogYCR7U2VsZWN0b3IuREFUQV9XSURHRVR9ICR7U2VsZWN0b3IuTElOS31gLFxuICAgIGFuaW1hdGlvblNwZWVkICAgICAgIDogMzAwLFxuICAgIGFjY29yZGlvbiAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBleHBhbmRTaWRlYmFyICAgICAgICA6IGZhbHNlLFxuICAgIHNpZGViYXJCdXR0b25TZWxlY3RvcjogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJ1xuICB9XG5cbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgY2xhc3MgVHJlZXZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICA9IGNvbmZpZ1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLl9zZXR1cExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgZXhwYW5kKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkVYUEFOREVEKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFjY29yZGlvbikge1xuICAgICAgICBjb25zdCBvcGVuTWVudUxpICAgPSBwYXJlbnRMaS5zaWJsaW5ncyhTZWxlY3Rvci5PUEVOKS5maXJzdCgpXG4gICAgICAgIGNvbnN0IG9wZW5UcmVldmlldyA9IG9wZW5NZW51TGkuZmluZChTZWxlY3Rvci5UUkVFVklFV19NRU5VKS5maXJzdCgpXG4gICAgICAgIHRoaXMuY29sbGFwc2Uob3BlblRyZWV2aWV3LCBvcGVuTWVudUxpKVxuICAgICAgfVxuXG4gICAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlRG93bih0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsICgpID0+IHtcbiAgICAgICAgcGFyZW50TGkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihleHBhbmRlZEV2ZW50KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5leHBhbmRTaWRlYmFyKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNpZGViYXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxhcHNlKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZEV2ZW50ID0gJC5FdmVudChFdmVudC5DT0xMQVBTRUQpXG5cbiAgICAgIHRyZWV2aWV3TWVudS5zdG9wKCkuc2xpZGVVcCh0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsICgpID0+IHtcbiAgICAgICAgcGFyZW50TGkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudClcbiAgICAgICAgdHJlZXZpZXdNZW51LmZpbmQoYCR7U2VsZWN0b3IuT1BFTn0gPiAke1NlbGVjdG9yLlRSRUVWSUVXX01FTlV9YCkuc2xpZGVVcCgpXG4gICAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNlbGVjdG9yLk9QRU4pLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcblxuICAgICAgY29uc3QgJHJlbGF0aXZlVGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgY29uc3QgJHBhcmVudCA9ICRyZWxhdGl2ZVRhcmdldC5wYXJlbnQoKVxuXG4gICAgICBsZXQgdHJlZXZpZXdNZW51ID0gJHBhcmVudC5maW5kKCc+ICcgKyBTZWxlY3Rvci5UUkVFVklFV19NRU5VKVxuXG4gICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuXG4gICAgICAgIGlmICghJHBhcmVudC5pcyhTZWxlY3Rvci5MSSkpIHtcbiAgICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoJz4gJyArIFNlbGVjdG9yLlRSRUVWSUVXX01FTlUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY29uc3QgcGFyZW50TGkgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50cyhTZWxlY3Rvci5MSSkuZmlyc3QoKVxuICAgICAgY29uc3QgaXNPcGVuICAgPSBwYXJlbnRMaS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTilcblxuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4cGFuZCgkKHRyZWV2aWV3TWVudSksIHBhcmVudExpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuX2NvbmZpZy50cmlnZ2VyLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9leHBhbmRTaWRlYmFyKCkge1xuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9DT0xMQVBTRUQpKSB7XG4gICAgICAgICQodGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1dJREdFVCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2luaXQnKVxuICAgIH0pXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVHJlZXZpZXdcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBUcmVldmlld1xufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlld1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgRGlyZWN0Q2hhdCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0RpcmVjdENoYXQnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUuZGlyZWN0Y2hhdCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFRPR0dMRUQ6IGB0b2dnbGVke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXdpZGdldD1cImNoYXQtcGFuZS10b2dnbGVcIl0nLFxuICAgIERJUkVDVF9DSEFUOiAnLmRpcmVjdC1jaGF0J1xuICB9O1xuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBESVJFQ1RfQ0hBVF9PUEVOOiAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3BlbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIERpcmVjdENoYXQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnBhcmVudHMoU2VsZWN0b3IuRElSRUNUX0NIQVQpLmZpcnN0KCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkRJUkVDVF9DSEFUX09QRU4pO1xuXG4gICAgICBjb25zdCB0b2dnbGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlRPR0dMRUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIodG9nZ2xlZEV2ZW50KVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERpcmVjdENoYXQoJCh0aGlzKSlcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEaXJlY3RDaGF0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEaXJlY3RDaGF0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdENoYXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFRvZG9MaXN0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb2RvTGlzdCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ1RvZG9MaXN0J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLnRvZG9saXN0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgVE9ET19MSVNUX0RPTkU6ICdkb25lJ1xuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBvbkNoZWNrOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSxcbiAgICBvblVuQ2hlY2s6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgdG9nZ2xlKGl0ZW0pIHtcbiAgICAgIGl0ZW0ucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuVE9ET19MSVNUX0RPTkUpO1xuICAgICAgaWYgKCEgJChpdGVtKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgdGhpcy51bkNoZWNrKCQoaXRlbSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2soaXRlbSk7XG4gICAgfVxuXG4gICAgY2hlY2sgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5vbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgfVxuXG4gICAgdW5DaGVjayAoaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKS5maW5kKCdpbnB1dDpjaGVja2JveDpjaGVja2VkJykucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuVE9ET19MSVNUX0RPTkUpXG4gICAgICAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKS5vbignY2hhbmdlJywgJ2lucHV0OmNoZWNrYm94JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoYXQudG9nZ2xlKCQoZXZlbnQudGFyZ2V0KSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb2RvTGlzdCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3RcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIFRvZG9MaXN0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBDYXJkV2lkZ2V0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJkV2lkZ2V0ID0gKCgkKSA9PiB7XG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnQ2FyZFdpZGdldCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5jYXJkd2lkZ2V0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgRVhQQU5ERUQ6IGBleHBhbmRlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ09MTEFQU0VEOiBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YCxcbiAgICBNQVhJTUlaRUQ6IGBtYXhpbWl6ZWQke0VWRU5UX0tFWX1gLFxuICAgIE1JTklNSVpFRDogYG1pbmltaXplZCR7RVZFTlRfS0VZfWAsXG4gICAgUkVNT1ZFRDogYHJlbW92ZWQke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ0FSRDogJ2NhcmQnLFxuICAgIENPTExBUFNFRDogJ2NvbGxhcHNlZC1jYXJkJyxcbiAgICBDT0xMQVBTSU5HOiAnY29sbGFwc2luZy1jYXJkJyxcbiAgICBFWFBBTkRJTkc6ICdleHBhbmRpbmctY2FyZCcsXG4gICAgV0FTX0NPTExBUFNFRDogJ3dhcy1jb2xsYXBzZWQnLFxuICAgIE1BWElNSVpFRDogJ21heGltaXplZC1jYXJkJyxcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERBVEFfUkVNT1ZFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJyZW1vdmVcIl0nLFxuICAgIERBVEFfQ09MTEFQU0U6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCJdJyxcbiAgICBEQVRBX01BWElNSVpFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJtYXhpbWl6ZVwiXScsXG4gICAgQ0FSRDogYC4ke0NsYXNzTmFtZS5DQVJEfWAsXG4gICAgQ0FSRF9IRUFERVI6ICcuY2FyZC1oZWFkZXInLFxuICAgIENBUkRfQk9EWTogJy5jYXJkLWJvZHknLFxuICAgIENBUkRfRk9PVEVSOiAnLmNhcmQtZm9vdGVyJyxcbiAgICBDT0xMQVBTRUQ6IGAuJHtDbGFzc05hbWUuQ09MTEFQU0VEfWAsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvblNwZWVkOiAnbm9ybWFsJyxcbiAgICBjb2xsYXBzZVRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfQ09MTEFQU0UsXG4gICAgcmVtb3ZlVHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRU1PVkUsXG4gICAgbWF4aW1pemVUcmlnZ2VyOiBTZWxlY3Rvci5EQVRBX01BWElNSVpFLFxuICAgIGNvbGxhcHNlSWNvbjogJ2ZhLW1pbnVzJyxcbiAgICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gICAgbWF4aW1pemVJY29uOiAnZmEtZXhwYW5kJyxcbiAgICBtaW5pbWl6ZUljb246ICdmYS1jb21wcmVzcycsXG4gIH1cblxuICBjbGFzcyBDYXJkV2lkZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU2VsZWN0b3IuQ0FSRCkuZmlyc3QoKVxuXG4gICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDbGFzc05hbWUuQ0FSRCkpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncylcbiAgICB9XG5cbiAgICBjb2xsYXBzZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORykuY2hpbGRyZW4oYCR7U2VsZWN0b3IuQ0FSRF9CT0RZfSwgJHtTZWxlY3Rvci5DQVJEX0ZPT1RFUn1gKVxuICAgICAgICAuc2xpZGVVcCh0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgfSlcblxuICAgICAgdGhpcy5fcGFyZW50LmZpbmQoJz4gJyArIFNlbGVjdG9yLkNBUkRfSEVBREVSICsgJyAnICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG5cbiAgICAgIGNvbnN0IGNvbGxhcHNlZCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoY29sbGFwc2VkLCB0aGlzLl9wYXJlbnQpXG4gICAgfVxuXG4gICAgZXhwYW5kKCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENsYXNzTmFtZS5FWFBBTkRJTkcpLmNoaWxkcmVuKGAke1NlbGVjdG9yLkNBUkRfQk9EWX0sICR7U2VsZWN0b3IuQ0FSRF9GT09URVJ9YClcbiAgICAgICAgLnNsaWRlRG93bih0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRVhQQU5ESU5HKVxuICAgICAgICB9KVxuXG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCgnPiAnICsgU2VsZWN0b3IuQ0FSRF9IRUFERVIgKyAnICcgKyB0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbilcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pXG5cbiAgICAgIGNvbnN0IGV4cGFuZGVkID0gJC5FdmVudChFdmVudC5FWFBBTkRFRClcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKGV4cGFuZGVkLCB0aGlzLl9wYXJlbnQpXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgdGhpcy5fcGFyZW50LnNsaWRlVXAoKVxuXG4gICAgICBjb25zdCByZW1vdmVkID0gJC5FdmVudChFdmVudC5SRU1PVkVEKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIocmVtb3ZlZCwgdGhpcy5fcGFyZW50KVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgfVxuICAgIFxuICAgIG1heGltaXplKCkge1xuICAgICAgdGhpcy5fcGFyZW50LmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbilcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgIHRoaXMuX3BhcmVudC5jc3Moe1xuICAgICAgICAnaGVpZ2h0JzogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAnd2lkdGgnOiB0aGlzLl9wYXJlbnQud2lkdGgoKSxcbiAgICAgICAgJ3RyYW5zaXRpb24nOiAnYWxsIC4xNXMnXG4gICAgICB9KS5kZWxheSgxNTApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRClcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRClcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgfSlcblxuICAgICAgY29uc3QgbWF4aW1pemVkID0gJC5FdmVudChFdmVudC5NQVhJTUlaRUQpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcihtYXhpbWl6ZWQsIHRoaXMuX3BhcmVudClcbiAgICB9XG5cbiAgICBtaW5pbWl6ZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArICcgLicgKyB0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgICAgIC5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgICB0aGlzLl9wYXJlbnQuY3NzKCdjc3NUZXh0JywgJ2hlaWdodDonICsgdGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodCArICcgIWltcG9ydGFudDsnICtcbiAgICAgICAgJ3dpZHRoOicgKyB0aGlzLl9wYXJlbnRbMF0uc3R5bGUud2lkdGggKyAnICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMTVzOydcbiAgICAgICkuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRClcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpXG4gICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAnaGVpZ2h0JzogJ2luaGVyaXQnLFxuICAgICAgICAgICd3aWR0aCc6ICdpbmhlcml0J1xuICAgICAgICB9KVxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRCkpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5XQVNfQ09MTEFQU0VEKVxuICAgICAgICB9XG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBNSU5JTUlaRUQgPSAkLkV2ZW50KEV2ZW50Lk1JTklNSVpFRClcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKE1JTklNSVpFRCwgdGhpcy5fcGFyZW50KVxuICAgIH1cblxuICAgIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudC5oYXNDbGFzcyhDbGFzc05hbWUuTUFYSU1JWkVEKSkge1xuICAgICAgICB0aGlzLm1pbmltaXplKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWF4aW1pemUoKVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KGNhcmQpIHtcbiAgICAgIHRoaXMuX3BhcmVudCA9IGNhcmRcblxuICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9KVxuXG4gICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlTWF4aW1pemUoKVxuICAgICAgfSlcblxuICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnJlbW92ZVRyaWdnZXIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFdpZGdldCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGE6IGNvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHJlbW92ZXx0b2dnbGV8bWF4aW1pemV8bWluaW1pemV8dG9nZ2xlTWF4aW1pemUvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBkYXRhLl9pbml0KCQodGhpcykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9DT0xMQVBTRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdyZW1vdmUnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfTUFYSU1JWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGVNYXhpbWl6ZScpXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJkV2lkZ2V0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBDYXJkV2lkZ2V0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRXaWRnZXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENhcmRSZWZyZXNoLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJkUmVmcmVzaCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0NhcmRSZWZyZXNoJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLmNhcmRyZWZyZXNoJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgTE9BREVEOiBgbG9hZGVkJHtFVkVOVF9LRVl9YCxcbiAgICBPVkVSTEFZX0FEREVEOiBgb3ZlcmxheS5hZGRlZCR7RVZFTlRfS0VZfWAsXG4gICAgT1ZFUkxBWV9SRU1PVkVEOiBgb3ZlcmxheS5yZW1vdmVkJHtFVkVOVF9LRVl9YCxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBDQVJEOiAnY2FyZCcsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBDQVJEOiBgLiR7Q2xhc3NOYW1lLkNBUkR9YCxcbiAgICBEQVRBX1JFRlJFU0g6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNhcmQtcmVmcmVzaFwiXScsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHNvdXJjZTogJycsXG4gICAgc291cmNlU2VsZWN0b3I6ICcnLFxuICAgIHBhcmFtczoge30sXG4gICAgdHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRUZSRVNILFxuICAgIGNvbnRlbnQ6ICcuY2FyZC1ib2R5JyxcbiAgICBsb2FkSW5Db250ZW50OiB0cnVlLFxuICAgIGxvYWRPbkluaXQ6IHRydWUsXG4gICAgcmVzcG9uc2VUeXBlOiAnJyxcbiAgICBvdmVybGF5VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxcbiAgICBvbkxvYWRTdGFydDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgb25Mb2FkRG9uZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgQ2FyZFJlZnJlc2gge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ICA9IGVsZW1lbnRcbiAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTZWxlY3Rvci5DQVJEKS5maXJzdCgpXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncylcbiAgICAgIHRoaXMuX292ZXJsYXkgPSAkKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSlcblxuICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUkQpKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNvdXJjZSA9PT0gJycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3VyY2UgdXJsIHdhcyBub3QgZGVmaW5lZC4gUGxlYXNlIHNwZWNpZnkgYSB1cmwgaW4geW91ciBDYXJkUmVmcmVzaCBzb3VyY2Ugb3B0aW9uLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICB0aGlzLl9hZGRPdmVybGF5KClcbiAgICAgIHRoaXMuX3NldHRpbmdzLm9uTG9hZFN0YXJ0LmNhbGwoJCh0aGlzKSlcblxuICAgICAgJC5nZXQodGhpcy5fc2V0dGluZ3Muc291cmNlLCB0aGlzLl9zZXR0aW5ncy5wYXJhbXMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZEluQ29udGVudCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvciAhPSAnJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSAkKHJlc3BvbnNlKS5maW5kKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yKS5odG1sKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3Mub25Mb2FkRG9uZS5jYWxsKCQodGhpcyksIHJlc3BvbnNlKVxuICAgICAgICB0aGlzLl9yZW1vdmVPdmVybGF5KCk7XG4gICAgICB9LmJpbmQodGhpcyksIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSAhPT0gJycgJiYgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlKVxuXG4gICAgICBjb25zdCBsb2FkZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuTE9BREVEKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGxvYWRlZEV2ZW50KVxuICAgIH1cblxuICAgIF9hZGRPdmVybGF5KCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFwcGVuZCh0aGlzLl9vdmVybGF5KVxuXG4gICAgICBjb25zdCBvdmVybGF5QWRkZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuT1ZFUkxBWV9BRERFRClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihvdmVybGF5QWRkZWRFdmVudClcbiAgICB9O1xuXG4gICAgX3JlbW92ZU92ZXJsYXkoKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKVxuXG4gICAgICBjb25zdCBvdmVybGF5UmVtb3ZlZEV2ZW50ID0gJC5FdmVudChFdmVudC5PVkVSTEFZX1JFTU9WRUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIob3ZlcmxheVJlbW92ZWRFdmVudClcbiAgICB9O1xuXG5cbiAgICAvLyBQcml2YXRlXG5cbiAgICBfaW5pdChjYXJkKSB7XG4gICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MudHJpZ2dlcikub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRPbkluaXQpIHtcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFJlZnJlc2goJCh0aGlzKSwgX29wdGlvbnMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBkYXRhOiBjb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2xvYWQvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfUkVGUkVTSCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdsb2FkJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1JFRlJFU0gpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSlcbiAgICB9KVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcmRSZWZyZXNoXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ2FyZFJlZnJlc2hcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFJlZnJlc2hcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIERyb3Bkb3duLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBEcm9wZG93biA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0Ryb3Bkb3duJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTkFWQkFSOiAnLm5hdmJhcicsXG4gICAgRFJPUERPV05fTUVOVTogJy5kcm9wZG93bi1tZW51JyxcbiAgICBEUk9QRE9XTl9NRU5VX0FDVElWRTogJy5kcm9wZG93bi1tZW51LnNob3cnLFxuICAgIERST1BET1dOX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBEUk9QRE9XTl9IT1ZFUjogJ2Ryb3Bkb3duLWhvdmVyJyxcbiAgICBEUk9QRE9XTl9SSUdIVDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICB9XG5cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIERyb3Bkb3duIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG5cbiAgICB0b2dnbGVTdWJtZW51KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zaWJsaW5ncygpLnNob3coKS50b2dnbGVDbGFzcyhcInNob3dcIilcblxuICAgICAgaWYgKCEgdGhpcy5fZWxlbWVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudHMoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5maW5kKCcuc2hvdycpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5oaWRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKCdsaS5uYXYtaXRlbS5kcm9wZG93bi5zaG93Jykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLXN1Ym1lbnUgLnNob3cnKS5yZW1vdmVDbGFzcyhcInNob3dcIikuaGlkZSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZpeFBvc2l0aW9uKCkge1xuICAgICAgbGV0IGVsbSA9ICQoU2VsZWN0b3IuRFJPUERPV05fTUVOVV9BQ1RJVkUpXG5cbiAgICAgIGlmIChlbG0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChlbG0uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX1JJR0hUKSkge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpXG4gICAgICAgICAgZWxtLmNzcygncmlnaHQnLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAwKVxuICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgJ2luaGVyaXQnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IGVsbS5vZmZzZXQoKVxuICAgICAgICBsZXQgd2lkdGggPSBlbG0ud2lkdGgoKVxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKVxuICAgICAgICBsZXQgdmlzaWJsZVBhcnQgPSB3aW5kb3dXaWR0aCAtIG9mZnNldC5sZWZ0XG5cbiAgICAgICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpXG4gICAgICAgICAgZWxtLmNzcygncmlnaHQnLCAob2Zmc2V0LmxlZnQgLSA1KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmlzaWJsZVBhcnQgPCB3aWR0aCkge1xuICAgICAgICAgICAgZWxtLmNzcygnbGVmdCcsICdpbmhlcml0JylcbiAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gIFxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKCQodGhpcyksIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZVN1Ym1lbnUnIHx8IGNvbmZpZyA9PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkKFNlbGVjdG9yLkRST1BET1dOX01FTlUgKyAnICcgKyBTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlU3VibWVudScpXG4gIH0pO1xuXG4gICQoU2VsZWN0b3IuTkFWQkFSICsgJyAnICsgU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnZml4UG9zaXRpb24nKVxuICAgIH0sIDEpXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEcm9wZG93blxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVG9hc3RzLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb2FzdHMgPSAoKCQpID0+IHtcbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdUb2FzdHMnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUudG9hc3RzJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSU5JVDogYGluaXQke0VWRU5UX0tFWX1gLFxuICAgIENSRUFURUQ6IGBjcmVhdGVkJHtFVkVOVF9LRVl9YCxcbiAgICBSRU1PVkVEOiBgcmVtb3ZlZCR7RVZFTlRfS0VZfWAsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCT0RZOiAndG9hc3QtYm9keScsXG4gICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJyN0b2FzdHNDb250YWluZXJUb3BSaWdodCcsXG4gICAgQ09OVEFJTkVSX1RPUF9MRUZUOiAnI3RvYXN0c0NvbnRhaW5lclRvcExlZnQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fUklHSFQ6ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJyN0b2FzdHNDb250YWluZXJCb3R0b21MZWZ0JyxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBUT1BfUklHSFQ6ICd0b2FzdHMtdG9wLXJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ3RvYXN0cy10b3AtbGVmdCcsXG4gICAgQk9UVE9NX1JJR0hUOiAndG9hc3RzLWJvdHRvbS1yaWdodCcsXG4gICAgQk9UVE9NX0xFRlQ6ICd0b2FzdHMtYm90dG9tLWxlZnQnLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgfVxuXG4gIGNvbnN0IFBvc2l0aW9uID0ge1xuICAgIFRPUF9SSUdIVDogJ3RvcFJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ3RvcExlZnQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ2JvdHRvbVJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVDogJ2JvdHRvbUxlZnQnLFxuICB9XG5cbiAgY29uc3QgSWQgPSB7XG4gICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJ3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0JyxcbiAgICBDT05UQUlORVJfVE9QX0xFRlQ6ICd0b2FzdHNDb250YWluZXJUb3BMZWZ0JyxcbiAgICBDT05UQUlORVJfQk9UVE9NX1JJR0hUOiAndG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJ3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnLFxuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIGZpeGVkOiB0cnVlLFxuICAgIGF1dG9oaWRlOiBmYWxzZSxcbiAgICBhdXRvcmVtb3ZlOiB0cnVlLFxuICAgIGRlbGF5OiAxMDAwLFxuICAgIGZhZGU6IHRydWUsXG4gICAgaWNvbjogbnVsbCxcbiAgICBpbWFnZTogbnVsbCxcbiAgICBpbWFnZUFsdDogbnVsbCxcbiAgICBpbWFnZUhlaWdodDogJzI1cHgnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHN1YnRpdGxlOiBudWxsLFxuICAgIGNsb3NlOiB0cnVlLFxuICAgIGJvZHk6IG51bGwsXG4gICAgY2xhc3M6IG51bGwsXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBjbGFzcyBUb2FzdHMge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICA9IGNvbmZpZ1xuXG4gICAgICB0aGlzLl9wcmVwYXJlQ29udGFpbmVyKCk7XG5cbiAgICAgIGNvbnN0IGluaXRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSU5JVClcbiAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGluaXRFdmVudClcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgIHZhciB0b2FzdCA9ICQoJzxkaXYgY2xhc3M9XCJ0b2FzdFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiLz4nKVxuXG4gICAgICB0b2FzdC5kYXRhKCdhdXRvaGlkZScsIHRoaXMuX2NvbmZpZy5hdXRvaGlkZSlcbiAgICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKVxuICAgICAgXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNsYXNzKSB7XG4gICAgICAgIHRvYXN0LmFkZENsYXNzKHRoaXMuX2NvbmZpZy5jbGFzcylcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5kZWxheSAmJiB0aGlzLl9jb25maWcuZGVsYXkgIT0gNTAwKSB7XG4gICAgICAgIHRvYXN0LmRhdGEoJ2RlbGF5JywgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuXG4gICAgICB2YXIgdG9hc3RfaGVhZGVyID0gJCgnPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPicpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdG9hc3RfaW1hZ2UgPSAkKCc8aW1nIC8+JykuYWRkQ2xhc3MoJ3JvdW5kZWQgbXItMicpLmF0dHIoJ3NyYycsIHRoaXMuX2NvbmZpZy5pbWFnZSkuYXR0cignYWx0JywgdGhpcy5fY29uZmlnLmltYWdlQWx0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgdG9hc3RfaW1hZ2UuaGVpZ2h0KHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCkud2lkdGgoJ2F1dG8nKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCh0b2FzdF9pbWFnZSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdtci0yJykuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb24pKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8c3Ryb25nIC8+JykuYWRkQ2xhc3MoJ21yLWF1dG8nKS5odG1sKHRoaXMuX2NvbmZpZy50aXRsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuc3VidGl0bGUgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKCQoJzxzbWFsbCAvPicpLmh0bWwodGhpcy5fY29uZmlnLnN1YnRpdGxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICAgIHZhciB0b2FzdF9jbG9zZSA9ICQoJzxidXR0b24gZGF0YS1kaXNtaXNzPVwidG9hc3RcIiAvPicpLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJykuYWRkQ2xhc3MoJ21sLTIgbWItMSBjbG9zZScpLmF0dHIoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UnKS5hcHBlbmQoJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JylcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgPT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0X2Nsb3NlLnRvZ2dsZUNsYXNzKCdtbC0yIG1sLWF1dG8nKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKHRvYXN0X2Nsb3NlKVxuICAgICAgfVxuXG4gICAgICB0b2FzdC5hcHBlbmQodG9hc3RfaGVhZGVyKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvZHkgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdC5hcHBlbmQoJCgnPGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIiAvPicpLmh0bWwodGhpcy5fY29uZmlnLmJvZHkpKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnByZXBlbmQodG9hc3QpXG5cbiAgICAgIGNvbnN0IGNyZWF0ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ1JFQVRFRClcbiAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGNyZWF0ZWRFdmVudClcblxuICAgICAgdG9hc3QudG9hc3QoJ3Nob3cnKVxuXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b3JlbW92ZSkge1xuICAgICAgICB0b2FzdC5vbignaGlkZGVuLmJzLnRvYXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKTtcblxuICAgICAgICAgIGNvbnN0IHJlbW92ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuUkVNT1ZFRClcbiAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcihyZW1vdmVkRXZlbnQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgX2dldENvbnRhaW5lcklkKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9UT1BfUklHSFQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX1RPUF9MRUZUO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX1JJR0hUKSB7XG4gICAgICAgIHJldHVybiBTZWxlY3Rvci5DT05UQUlORVJfQk9UVE9NX1JJR0hUO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9CT1RUT01fTEVGVDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcHJlcGFyZUNvbnRhaW5lcigpIHtcbiAgICAgIGlmICgkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnPGRpdiAvPicpLmF0dHIoJ2lkJywgdGhpcy5fZ2V0Q29udGFpbmVySWQoKS5yZXBsYWNlKCcjJywgJycpKVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLlRPUF9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX1JJR0hUKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX0xFRlQpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLkJPVFRPTV9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX1JJR0hUKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5CT1RUT01fTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX0xFRlQpXG4gICAgICAgIH1cblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5maXhlZCkge1xuICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmFkZENsYXNzKCdmaXhlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnJlbW92ZUNsYXNzKCdmaXhlZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcHRpb24sIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGNvbmZpZylcbiAgICAgICAgdmFyIHRvYXN0ID0gbmV3IFRvYXN0cygkKHRoaXMpLCBfb3B0aW9ucylcblxuICAgICAgICBpZiAob3B0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgICAgIHRvYXN0W29wdGlvbl0oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdHNcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gVG9hc3RzXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICghU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEgpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIHF1b3QgPSAvXCIvZztcblxuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVodG1sXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBOdW1iZXIuaXNJbnRlZ2VyYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci5pc2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoRklORCk7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcblxudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyIE5hdGl2ZU51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIE51bWJlclByb3RvdHlwZSA9IE5hdGl2ZU51bWJlci5wcm90b3R5cGU7XG5cbi8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xudmFyIEJST0tFTl9DTEFTU09GID0gY2xhc3NvZihjcmVhdGUoTnVtYmVyUHJvdG90eXBlKSkgPT0gTlVNQkVSO1xuXG4vLyBgVG9OdW1iZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9udW1iZXJcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICB2YXIgZmlyc3QsIHRoaXJkLCByYWRpeCwgbWF4Q29kZSwgZGlnaXRzLCBsZW5ndGgsIGluZGV4LCBjb2RlO1xuICBpZiAodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpIHtcbiAgICBpdCA9IHRyaW0oaXQpO1xuICAgIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSkge1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYgKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKSByZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmIChmaXJzdCA9PT0gNDgpIHtcbiAgICAgIHN3aXRjaCAoaXQuY2hhckNvZGVBdCgxKSkge1xuICAgICAgICBjYXNlIDY2OiBjYXNlIDk4OiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgb2YgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzk6IGNhc2UgMTExOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgb2YgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZGlnaXRzID0gaXQuc2xpY2UoMik7XG4gICAgICBsZW5ndGggPSBkaWdpdHMubGVuZ3RoO1xuICAgICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZiAoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKSByZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG4vLyBgTnVtYmVyYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbnVtYmVyLWNvbnN0cnVjdG9yXG5pZiAoaXNGb3JjZWQoTlVNQkVSLCAhTmF0aXZlTnVtYmVyKCcgMG8xJykgfHwgIU5hdGl2ZU51bWJlcignMGIxJykgfHwgTmF0aXZlTnVtYmVyKCcrMHgxJykpKSB7XG4gIHZhciBOdW1iZXJXcmFwcGVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIGR1bW15ID0gdGhpcztcbiAgICByZXR1cm4gZHVtbXkgaW5zdGFuY2VvZiBOdW1iZXJXcmFwcGVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ0xBU1NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgTnVtYmVyUHJvdG90eXBlLnZhbHVlT2YuY2FsbChkdW1teSk7IH0pIDogY2xhc3NvZihkdW1teSkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVOdW1iZXIodG9OdW1iZXIoaXQpKSwgZHVtbXksIE51bWJlcldyYXBwZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gREVTQ1JJUFRPUlMgPyBnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZU51bWJlcikgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzIwMTUgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzIwMTUgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhcyhOYXRpdmVOdW1iZXIsIGtleSA9IGtleXNbal0pICYmICFoYXMoTnVtYmVyV3JhcHBlciwga2V5KSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkoTnVtYmVyV3JhcHBlciwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTmF0aXZlTnVtYmVyLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgTnVtYmVyV3JhcHBlci5wcm90b3R5cGUgPSBOdW1iZXJQcm90b3R5cGU7XG4gIE51bWJlclByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlcldyYXBwZXI7XG4gIHJlZGVmaW5lKGdsb2JhbCwgTlVNQkVSLCBOdW1iZXJXcmFwcGVyKTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1pbnRlZ2VyJyk7XG5cbi8vIGBOdW1iZXIuaXNJbnRlZ2VyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci5pc2ludGVnZXJcbiQoeyB0YXJnZXQ6ICdOdW1iZXInLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNJbnRlZ2VyOiBpc0ludGVnZXJcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuZml4ZWRcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdmaXhlZCcpIH0sIHtcbiAgZml4ZWQ6IGZ1bmN0aW9uIGZpeGVkKCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICd0dCcsICcnLCAnJyk7XG4gIH1cbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9