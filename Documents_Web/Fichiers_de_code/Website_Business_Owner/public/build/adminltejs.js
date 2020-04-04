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

},[["./assets/adminlte/dist/js/adminlte.min.js","runtime","vendors~adminltejs~bootstrapJs~jquery~warehouseDish~warehouseProduct","vendors~adminltejs~bootstrapJs~jquery"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvQ29udHJvbFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2J1aWxkL2pzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvUHVzaE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2J1aWxkL2pzL1RyZWV2aWV3LmpzIiwid2VicGFjazovLy8uLi8uLi9idWlsZC9qcy9EaXJlY3RDaGF0LmpzIiwid2VicGFjazovLy8uLi8uLi9idWlsZC9qcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvQ2FyZFdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vYnVpbGQvanMvQ2FyZFJlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2J1aWxkL2pzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uLi8uLi9idWlsZC9qcy9Ub2FzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuaXMtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmZpeGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwibmFtZXMiOlsiQ29udHJvbFNpZGViYXIiLCIkIiwiTkFNRSIsIkRBVEFfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiZm4iLCJFdmVudCIsIkNPTExBUFNFRCIsIkVYUEFOREVEIiwiU2VsZWN0b3IiLCJDbGFzc05hbWUiLCJEZWZhdWx0IiwiY29udHJvbHNpZGViYXJTbGlkZSIsInNjcm9sbGJhclRoZW1lIiwic2Nyb2xsYmFyQXV0b0hpZGUiLCJlbGVtZW50IiwiY29uZmlnIiwidGhpcyIsIl9lbGVtZW50IiwiX2NvbmZpZyIsIl9pbml0IiwiY29sbGFwc2UiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiZGVsYXkiLCJxdWV1ZSIsImhpZGUiLCJkZXF1ZXVlIiwiY29sbGFwc2VkRXZlbnQiLCJ0cmlnZ2VyIiwic2hvdyIsImV4cGFuZGVkRXZlbnQiLCJ0b2dnbGUiLCJoYXNDbGFzcyIsIl9maXhIZWlnaHQiLCJfZml4U2Nyb2xsSGVpZ2h0Iiwid2luZG93IiwicmVzaXplIiwiX3RoaXMiLCJzY3JvbGwiLCJoZWlnaHRzIiwiZG9jdW1lbnQiLCJoZWlnaHQiLCJoZWFkZXIiLCJvdXRlckhlaWdodCIsImZvb3RlciIsInBvc2l0aW9ucyIsIk1hdGgiLCJhYnMiLCJzY3JvbGxUb3AiLCJuYXZiYXJGaXhlZCIsImZvb3RlckZpeGVkIiwiY3NzIiwic2lkZWJhckhlaWdodCIsIm92ZXJsYXlTY3JvbGxiYXJzIiwiY2xhc3NOYW1lIiwic2l6ZUF1dG9DYXBhYmxlIiwic2Nyb2xsYmFycyIsImF1dG9IaWRlIiwiY2xpY2tTY3JvbGxpbmciLCJfalF1ZXJ5SW50ZXJmYWNlIiwib3BlcmF0aW9uIiwiZWFjaCIsImRhdGEiLCJfb3B0aW9ucyIsImV4dGVuZCIsIkVycm9yIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FsbCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsImpRdWVyeSIsIkxheW91dCIsInBhbmVsQXV0b0hlaWdodCIsImxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0IiwiZml4TGF5b3V0SGVpZ2h0IiwiZXh0cmEiLCJjb250cm9sX3NpZGViYXIiLCJsZW5ndGgiLCJzaWRlYmFyIiwibWF4IiwiX21heCIsIm9mZnNldCIsImZpeExvZ2luUmVnaXN0ZXJIZWlnaHQiLCJib3hfaGVpZ2h0IiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwic2V0SW50ZXJ2YWwiLCJudW1iZXJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJQdXNoTWVudSIsIkVWRU5UX0tFWSIsIlNIT1dOIiwiYXV0b0NvbGxhcHNlU2l6ZSIsImVuYWJsZVJlbWVtYmVyIiwibm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQiLCJvcHRpb25zIiwiX2FkZE92ZXJsYXkiLCJleHBhbmQiLCJ3aWR0aCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzaG93bkV2ZW50IiwiYXV0b0NvbGxhcHNlIiwicmVtZW1iZXIiLCJnZXRJdGVtIiwib3ZlcmxheSIsImlkIiwiX3RoaXMyIiwiYXBwZW5kIiwibWF0Y2giLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsIlRyZWV2aWV3IiwiU0VMRUNURUQiLCJMT0FEX0RBVEFfQVBJIiwiYW5pbWF0aW9uU3BlZWQiLCJhY2NvcmRpb24iLCJleHBhbmRTaWRlYmFyIiwic2lkZWJhckJ1dHRvblNlbGVjdG9yIiwiaW5pdCIsIl9zZXR1cExpc3RlbmVycyIsInRyZWV2aWV3TWVudSIsInBhcmVudExpIiwib3Blbk1lbnVMaSIsInNpYmxpbmdzIiwiZmlyc3QiLCJvcGVuVHJlZXZpZXciLCJmaW5kIiwic3RvcCIsInNsaWRlRG93biIsIl9leHBhbmRTaWRlYmFyIiwic2xpZGVVcCIsIiRyZWxhdGl2ZVRhcmdldCIsIiRwYXJlbnQiLCJwYXJlbnQiLCJpcyIsInBhcmVudHMiLCJfdGhpczMiLCJEaXJlY3RDaGF0IiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGVkRXZlbnQiLCJUb2RvTGlzdCIsIm9uQ2hlY2siLCJpdGVtIiwib25VbkNoZWNrIiwicHJvcCIsImNoZWNrIiwidW5DaGVjayIsInRoYXQiLCJ0YXJnZXQiLCJDYXJkV2lkZ2V0IiwiTUFYSU1JWkVEIiwiTUlOSU1JWkVEIiwiUkVNT1ZFRCIsIkRBVEFfUkVNT1ZFIiwiREFUQV9DT0xMQVBTRSIsIkRBVEFfTUFYSU1JWkUiLCJDQVJEIiwiQ0FSRF9IRUFERVIiLCJDQVJEX0JPRFkiLCJDQVJEX0ZPT1RFUiIsImNvbGxhcHNlVHJpZ2dlciIsInJlbW92ZVRyaWdnZXIiLCJtYXhpbWl6ZVRyaWdnZXIiLCJjb2xsYXBzZUljb24iLCJleHBhbmRJY29uIiwibWF4aW1pemVJY29uIiwibWluaW1pemVJY29uIiwic2V0dGluZ3MiLCJfcGFyZW50IiwiX3NldHRpbmdzIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJleHBhbmRlZCIsInJlbW92ZSIsInJlbW92ZWQiLCJtYXhpbWl6ZSIsInRyYW5zaXRpb24iLCJtYXhpbWl6ZWQiLCJtaW5pbWl6ZSIsInN0eWxlIiwidG9nZ2xlTWF4aW1pemUiLCJjYXJkIiwiY2xpY2siLCJDYXJkUmVmcmVzaCIsIkxPQURFRCIsIk9WRVJMQVlfQURERUQiLCJPVkVSTEFZX1JFTU9WRUQiLCJEQVRBX1JFRlJFU0giLCJzb3VyY2UiLCJzb3VyY2VTZWxlY3RvciIsInBhcmFtcyIsImNvbnRlbnQiLCJsb2FkSW5Db250ZW50IiwibG9hZE9uSW5pdCIsInJlc3BvbnNlVHlwZSIsIm92ZXJsYXlUZW1wbGF0ZSIsIm9uTG9hZFN0YXJ0Iiwib25Mb2FkRG9uZSIsInJlc3BvbnNlIiwiX292ZXJsYXkiLCJsb2FkIiwiZ2V0IiwiaHRtbCIsIl9yZW1vdmVPdmVybGF5IiwiYmluZCIsImxvYWRlZEV2ZW50Iiwib3ZlcmxheUFkZGVkRXZlbnQiLCJvdmVybGF5UmVtb3ZlZEV2ZW50IiwicmVhZHkiLCJEcm9wZG93biIsInRvZ2dsZVN1Ym1lbnUiLCJuZXh0IiwiZSIsImZpeFBvc2l0aW9uIiwiZWxtIiwidmlzaWJsZVBhcnQiLCJsZWZ0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2V0VGltZW91dCIsIlRvYXN0cyIsIklOSVQiLCJDUkVBVEVEIiwiUG9zaXRpb24iLCJwb3NpdGlvbiIsImZpeGVkIiwiYXV0b2hpZGUiLCJhdXRvcmVtb3ZlIiwiZmFkZSIsImljb24iLCJpbWFnZSIsImltYWdlQWx0IiwiaW1hZ2VIZWlnaHQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY2xvc2UiLCJib2R5IiwiY2xhc3MiLCJfcHJlcGFyZUNvbnRhaW5lciIsImluaXRFdmVudCIsImNyZWF0ZSIsInRvYXN0IiwidG9hc3RfaGVhZGVyIiwidG9hc3RfaW1hZ2UiLCJhdHRyIiwidG9hc3RfY2xvc2UiLCJfZ2V0Q29udGFpbmVySWQiLCJwcmVwZW5kIiwiY3JlYXRlZEV2ZW50IiwicmVtb3ZlZEV2ZW50IiwiY29udGFpbmVyIiwicmVwbGFjZSIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLE1BQU1BLElBQWtCLFVBQUNDLENBQUQsRUFBQ0E7QUFNdkIsUUFBTUMsSUFBcUIsZ0JBQTNCO0FBQUEsUUFDTUMsSUFBcUIsb0JBRDNCO0FBQUEsUUFHTUMsSUFBcUJILEVBQUVJLEVBQUZKLENBQUtDLENBQUxELENBSDNCO0FBQUEsUUFNTUssSUFBUTtBQUNaQyxpQkFBUyw4QkFERztBQUVaQyxnQkFBUTtBQUZJLEtBTmQ7QUFBQSxRQVdNQyxJQUNhLGtCQVpuQjtBQUFBLFFBV01BLElBRXFC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QUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx5RUFBeUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2RBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFkbWlubHRlanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBDb250cm9sU2lkZWJhci5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgQ29udHJvbFNpZGViYXIgPSAoKCQpID0+IHtcbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdDb250cm9sU2lkZWJhcidcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5jb250cm9sc2lkZWJhcidcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIENPTExBUFNFRDogYGNvbGxhcHNlZCR7RVZFTlRfS0VZfWAsXG4gICAgRVhQQU5ERUQ6IGBleHBhbmRlZCR7RVZFTlRfS0VZfWAsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBDT05UUk9MX1NJREVCQVI6ICcuY29udHJvbC1zaWRlYmFyJyxcbiAgICBDT05UUk9MX1NJREVCQVJfQ09OVEVOVDogJy5jb250cm9sLXNpZGViYXItY29udGVudCcsXG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJjb250cm9sLXNpZGViYXJcIl0nLFxuICAgIENPTlRFTlQ6ICcuY29udGVudC13cmFwcGVyJyxcbiAgICBIRUFERVI6ICcubWFpbi1oZWFkZXInLFxuICAgIEZPT1RFUjogJy5tYWluLWZvb3RlcicsXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ09OVFJPTF9TSURFQkFSX0FOSU1BVEU6ICdjb250cm9sLXNpZGViYXItYW5pbWF0ZScsXG4gICAgQ09OVFJPTF9TSURFQkFSX09QRU46ICdjb250cm9sLXNpZGViYXItb3BlbicsXG4gICAgQ09OVFJPTF9TSURFQkFSX1NMSURFOiAnY29udHJvbC1zaWRlYmFyLXNsaWRlLW9wZW4nLFxuICAgIExBWU9VVF9GSVhFRDogJ2xheW91dC1maXhlZCcsXG4gICAgTkFWQkFSX0ZJWEVEOiAnbGF5b3V0LW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLW5hdmJhci1maXhlZCcsXG4gICAgTkFWQkFSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLW5hdmJhci1maXhlZCcsXG4gICAgRk9PVEVSX0ZJWEVEOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX1NNX0ZJWEVEOiAnbGF5b3V0LXNtLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX01EX0ZJWEVEOiAnbGF5b3V0LW1kLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX0xHX0ZJWEVEOiAnbGF5b3V0LWxnLWZvb3Rlci1maXhlZCcsXG4gICAgRk9PVEVSX1hMX0ZJWEVEOiAnbGF5b3V0LXhsLWZvb3Rlci1maXhlZCcsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGNvbnRyb2xzaWRlYmFyU2xpZGU6IHRydWUsXG4gICAgc2Nyb2xsYmFyVGhlbWUgOiAnb3MtdGhlbWUtbGlnaHQnLFxuICAgIHNjcm9sbGJhckF1dG9IaWRlOiAnbCcsXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIENvbnRyb2xTaWRlYmFyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgICB0aGlzLl9jb25maWcgID0gY29uZmlnXG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgY29sbGFwc2UoKSB7XG4gICAgICAvLyBTaG93IHRoZSBjb250cm9sIHNpZGViYXJcbiAgICAgIGlmICh0aGlzLl9jb25maWcuY29udHJvbHNpZGViYXJTbGlkZSkge1xuICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbigpe1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5oaWRlKClcbiAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9BTklNQVRFKVxuICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9PUEVOKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xsYXBzZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGNvbGxhcHNlZEV2ZW50KVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAvLyBDb2xsYXBzZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNvbnRyb2xzaWRlYmFyU2xpZGUpIHtcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSlcbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLnNob3coKS5kZWxheSgxMCkucXVldWUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSkuZGVsYXkoMzAwKS5xdWV1ZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfQU5JTUFURSlcbiAgICAgICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKENsYXNzTmFtZS5DT05UUk9MX1NJREVCQVJfT1BFTilcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhwYW5kZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuRVhQQU5ERUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoZXhwYW5kZWRFdmVudClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBjb25zdCBzaG91bGRDbG9zZSA9ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKVxuICAgICAgICAuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTlRST0xfU0lERUJBUl9TTElERSlcbiAgICAgIGlmIChzaG91bGRDbG9zZSkge1xuICAgICAgICAvLyBDbG9zZSB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgY29udHJvbCBzaWRlYmFyXG4gICAgICAgIHRoaXMuc2hvdygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX2luaXQoKSB7XG4gICAgICB0aGlzLl9maXhIZWlnaHQoKVxuICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZpeEhlaWdodCgpXG4gICAgICAgIHRoaXMuX2ZpeFNjcm9sbEhlaWdodCgpXG4gICAgICB9KVxuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFKSkge1xuICAgICAgICAgICAgdGhpcy5fZml4U2Nyb2xsSGVpZ2h0KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBfZml4U2Nyb2xsSGVpZ2h0KCkge1xuICAgICAgY29uc3QgaGVpZ2h0cyA9IHtcbiAgICAgICAgc2Nyb2xsOiAkKGRvY3VtZW50KS5oZWlnaHQoKSxcbiAgICAgICAgd2luZG93OiAkKHdpbmRvdykuaGVpZ2h0KCksXG4gICAgICAgIGhlYWRlcjogJChTZWxlY3Rvci5IRUFERVIpLm91dGVySGVpZ2h0KCksXG4gICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLm91dGVySGVpZ2h0KCksXG4gICAgICB9XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB7XG4gICAgICAgIGJvdHRvbTogTWF0aC5hYnMoKGhlaWdodHMud2luZG93ICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSAtIGhlaWdodHMuc2Nyb2xsKSxcbiAgICAgICAgdG9wOiAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICB9XG5cbiAgICAgIGxldCBuYXZiYXJGaXhlZCA9IGZhbHNlO1xuICAgICAgbGV0IGZvb3RlckZpeGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoQ2xhc3NOYW1lLkxBWU9VVF9GSVhFRCkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTkFWQkFSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5IRUFERVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIG5hdmJhckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIGZvb3RlckZpeGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25zLnRvcCA9PT0gMCAmJiBwb3NpdGlvbnMuYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdyAtIChoZWlnaHRzLmhlYWRlciArIGhlaWdodHMuZm9vdGVyKSlcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMuYm90dG9tIDw9IGhlaWdodHMuZm9vdGVyKSB7XG4gICAgICAgICAgaWYgKGZvb3RlckZpeGVkID09PSBmYWxzZSkgeyAgXG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUikuY3NzKCdib3R0b20nLCBoZWlnaHRzLmZvb3RlciAtIHBvc2l0aW9ucy5ib3R0b20pO1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnLCAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmNzcygnaGVpZ2h0JywgaGVpZ2h0cy53aW5kb3cgLSAoaGVpZ2h0cy5mb290ZXIgLSBwb3NpdGlvbnMuYm90dG9tKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygnYm90dG9tJywgaGVpZ2h0cy5mb290ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbnMudG9wIDw9IGhlaWdodHMuaGVhZGVyKSB7XG4gICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIgLSBwb3NpdGlvbnMudG9wKTtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJywgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcgJyArIFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9DT05URU5UKS5jc3MoJ2hlaWdodCcsIGhlaWdodHMud2luZG93IC0gKGhlaWdodHMuaGVhZGVyIC0gcG9zaXRpb25zLnRvcCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSKS5jc3MoJ3RvcCcsIGhlaWdodHMuaGVhZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5hdmJhckZpeGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgMCk7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUiArICcsICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBoZWlnaHRzLndpbmRvdylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIpLmNzcygndG9wJywgaGVpZ2h0cy5oZWFkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIF9maXhIZWlnaHQoKSB7XG4gICAgICBjb25zdCBoZWlnaHRzID0ge1xuICAgICAgICB3aW5kb3c6ICQod2luZG93KS5oZWlnaHQoKSxcbiAgICAgICAgaGVhZGVyOiAkKFNlbGVjdG9yLkhFQURFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgZm9vdGVyOiAkKFNlbGVjdG9yLkZPT1RFUikub3V0ZXJIZWlnaHQoKSxcbiAgICAgIH1cblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICBsZXQgc2lkZWJhckhlaWdodCA9IGhlaWdodHMud2luZG93IC0gaGVpZ2h0cy5oZWFkZXI7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1NNX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX01EX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX0xHX0ZJWEVEKVxuICAgICAgICAgIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuRk9PVEVSX1hMX0ZJWEVEKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5GT09URVIpLmNzcyhcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIHNpZGViYXJIZWlnaHQgPSBoZWlnaHRzLndpbmRvdyAtIGhlaWdodHMuaGVhZGVyIC0gaGVpZ2h0cy5mb290ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJChTZWxlY3Rvci5DT05UUk9MX1NJREVCQVIgKyAnICcgKyBTZWxlY3Rvci5DT05UUk9MX1NJREVCQVJfQ09OVEVOVCkuY3NzKCdoZWlnaHQnLCBzaWRlYmFySGVpZ2h0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSICsgJyAnICsgU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLm92ZXJsYXlTY3JvbGxiYXJzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgICA6IHRoaXMuX2NvbmZpZy5zY3JvbGxiYXJUaGVtZSxcbiAgICAgICAgICAgIHNpemVBdXRvQ2FwYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxiYXJzIDoge1xuICAgICAgICAgICAgICBhdXRvSGlkZTogdGhpcy5fY29uZmlnLnNjcm9sbGJhckF1dG9IaWRlLCBcbiAgICAgICAgICAgICAgY2xpY2tTY3JvbGxpbmcgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcGVyYXRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBDb250cm9sU2lkZWJhcih0aGlzLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtvcGVyYXRpb25dID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtvcGVyYXRpb259IGlzIG5vdCBhIGZ1bmN0aW9uYClcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgQ29udHJvbFNpZGViYXIuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IENvbnRyb2xTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENvbnRyb2xTaWRlYmFyXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDb250cm9sU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ29udHJvbFNpZGViYXJcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFNpZGViYXJcbiAgXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBMYXlvdXQuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IExheW91dCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0xheW91dCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5sYXlvdXQnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBTSURFQkFSOiAnc2lkZWJhcidcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIEhFQURFUiAgICAgICAgIDogJy5tYWluLWhlYWRlcicsXG4gICAgTUFJTl9TSURFQkFSICAgOiAnLm1haW4tc2lkZWJhcicsXG4gICAgU0lERUJBUiAgICAgICAgOiAnLm1haW4tc2lkZWJhciAuc2lkZWJhcicsXG4gICAgQ09OVEVOVCAgICAgICAgOiAnLmNvbnRlbnQtd3JhcHBlcicsXG4gICAgQlJBTkQgICAgICAgICAgOiAnLmJyYW5kLWxpbmsnLFxuICAgIENPTlRFTlRfSEVBREVSIDogJy5jb250ZW50LWhlYWRlcicsXG4gICAgV1JBUFBFUiAgICAgICAgOiAnLndyYXBwZXInLFxuICAgIENPTlRST0xfU0lERUJBUjogJy5jb250cm9sLXNpZGViYXInLFxuICAgIENPTlRST0xfU0lERUJBUl9DT05URU5UOiAnLmNvbnRyb2wtc2lkZWJhci1jb250ZW50JyxcbiAgICBDT05UUk9MX1NJREVCQVJfQlROOiAnW2RhdGEtd2lkZ2V0PVwiY29udHJvbC1zaWRlYmFyXCJdJyxcbiAgICBMQVlPVVRfRklYRUQgICA6ICcubGF5b3V0LWZpeGVkJyxcbiAgICBGT09URVIgICAgICAgICA6ICcubWFpbi1mb290ZXInLFxuICAgIFBVU0hNRU5VX0JUTiAgIDogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJyxcbiAgICBMT0dJTl9CT1ggICAgICA6ICcubG9naW4tYm94JyxcbiAgICBSRUdJU1RFUl9CT1ggICA6ICcucmVnaXN0ZXItYm94J1xuICB9XG5cbiAgY29uc3QgQ2xhc3NOYW1lID0ge1xuICAgIEhPTEQgICAgICAgICAgIDogJ2hvbGQtdHJhbnNpdGlvbicsXG4gICAgU0lERUJBUiAgICAgICAgOiAnbWFpbi1zaWRlYmFyJyxcbiAgICBDT05URU5UX0ZJWEVEICA6ICdjb250ZW50LWZpeGVkJyxcbiAgICBTSURFQkFSX0ZPQ1VTRUQ6ICdzaWRlYmFyLWZvY3VzZWQnLFxuICAgIExBWU9VVF9GSVhFRCAgIDogJ2xheW91dC1maXhlZCcsXG4gICAgTkFWQkFSX0ZJWEVEICAgOiAnbGF5b3V0LW5hdmJhci1maXhlZCcsXG4gICAgRk9PVEVSX0ZJWEVEICAgOiAnbGF5b3V0LWZvb3Rlci1maXhlZCcsXG4gICAgTE9HSU5fUEFHRSAgICAgOiAnbG9naW4tcGFnZScsXG4gICAgUkVHSVNURVJfUEFHRSAgOiAncmVnaXN0ZXItcGFnZScsXG4gICAgQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU46ICdjb250cm9sLXNpZGViYXItc2xpZGUtb3BlbicsXG4gICAgQ09OVFJPTF9TSURFQkFSX09QRU46ICdjb250cm9sLXNpZGViYXItb3BlbicsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHNjcm9sbGJhclRoZW1lIDogJ29zLXRoZW1lLWxpZ2h0JyxcbiAgICBzY3JvbGxiYXJBdXRvSGlkZTogJ2wnLFxuICAgIHBhbmVsQXV0b0hlaWdodDogdHJ1ZSxcbiAgICBsb2dpblJlZ2lzdGVyQXV0b0hlaWdodDogdHJ1ZSxcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGFzcyBEZWZpbml0aW9uXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY2xhc3MgTGF5b3V0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgZml4TGF5b3V0SGVpZ2h0KGV4dHJhID0gbnVsbCkge1xuICAgICAgbGV0IGNvbnRyb2xfc2lkZWJhciA9IDBcblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX1NMSURFX09QRU4pIHx8ICQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuQ09OVFJPTF9TSURFQkFSX09QRU4pIHx8IGV4dHJhID09ICdjb250cm9sX3NpZGViYXInKSB7XG4gICAgICAgIGNvbnRyb2xfc2lkZWJhciA9ICQoU2VsZWN0b3IuQ09OVFJPTF9TSURFQkFSX0NPTlRFTlQpLmhlaWdodCgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlaWdodHMgPSB7XG4gICAgICAgIHdpbmRvdzogJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICBoZWFkZXI6ICQoU2VsZWN0b3IuSEVBREVSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLkhFQURFUikub3V0ZXJIZWlnaHQoKSA6IDAsXG4gICAgICAgIGZvb3RlcjogJChTZWxlY3Rvci5GT09URVIpLmxlbmd0aCAhPT0gMCA/ICQoU2VsZWN0b3IuRk9PVEVSKS5vdXRlckhlaWdodCgpIDogMCxcbiAgICAgICAgc2lkZWJhcjogJChTZWxlY3Rvci5TSURFQkFSKS5sZW5ndGggIT09IDAgPyAkKFNlbGVjdG9yLlNJREVCQVIpLmhlaWdodCgpIDogMCxcbiAgICAgICAgY29udHJvbF9zaWRlYmFyOiBjb250cm9sX3NpZGViYXIsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuX21heChoZWlnaHRzKVxuICAgICAgbGV0IG9mZnNldCA9IHRoaXMuX2NvbmZpZy5wYW5lbEF1dG9IZWlnaHRcblxuICAgICAgaWYgKG9mZnNldCA9PT0gdHJ1ZSkge1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICBpZiAobWF4ID09IGhlaWdodHMuY29udHJvbF9zaWRlYmFyKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5DT05URU5UKS5jc3MoJ21pbi1oZWlnaHQnLCAobWF4ICsgb2Zmc2V0KSlcbiAgICAgICAgfSBlbHNlIGlmIChtYXggPT0gaGVpZ2h0cy53aW5kb3cpIHtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIgLSBoZWlnaHRzLmZvb3RlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKFNlbGVjdG9yLkNPTlRFTlQpLmNzcygnbWluLWhlaWdodCcsIChtYXggKyBvZmZzZXQpIC0gaGVpZ2h0cy5oZWFkZXIpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuTEFZT1VUX0ZJWEVEKSkge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICQoU2VsZWN0b3IuQ09OVEVOVCkuY3NzKCdtaW4taGVpZ2h0JywgKG1heCArIG9mZnNldCkgLSBoZWlnaHRzLmhlYWRlciAtIGhlaWdodHMuZm9vdGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm92ZXJsYXlTY3JvbGxiYXJzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICQoU2VsZWN0b3IuU0lERUJBUikub3ZlcmxheVNjcm9sbGJhcnMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lICAgICAgIDogdGhpcy5fY29uZmlnLnNjcm9sbGJhclRoZW1lLFxuICAgICAgICAgICAgc2l6ZUF1dG9DYXBhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbGJhcnMgOiB7XG4gICAgICAgICAgICAgIGF1dG9IaWRlOiB0aGlzLl9jb25maWcuc2Nyb2xsYmFyQXV0b0hpZGUsIFxuICAgICAgICAgICAgICBjbGlja1Njcm9sbGluZyA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZml4TG9naW5SZWdpc3RlckhlaWdodCgpIHtcbiAgICAgIGlmICgkKFNlbGVjdG9yLkxPR0lOX0JPWCArICcsICcgKyBTZWxlY3Rvci5SRUdJU1RFUl9CT1gpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkKCdib2R5LCBodG1sJykuY3NzKCdoZWlnaHQnLCAnYXV0bycpXG4gICAgICB9IGVsc2UgaWYgKCQoU2VsZWN0b3IuTE9HSU5fQk9YICsgJywgJyArIFNlbGVjdG9yLlJFR0lTVEVSX0JPWCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBib3hfaGVpZ2h0ID0gJChTZWxlY3Rvci5MT0dJTl9CT1ggKyAnLCAnICsgU2VsZWN0b3IuUkVHSVNURVJfQk9YKS5oZWlnaHQoKVxuXG4gICAgICAgIGlmICgkKCdib2R5JykuY3NzKCdtaW4taGVpZ2h0JykgIT09IGJveF9oZWlnaHQpIHtcbiAgICAgICAgICAkKCdib2R5JykuY3NzKCdtaW4taGVpZ2h0JywgYm94X2hlaWdodClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KCkge1xuICAgICAgLy8gQWN0aXZhdGUgbGF5b3V0IGhlaWdodCB3YXRjaGVyXG4gICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQgPT09IHRydWUpIHsgICAgICBcbiAgICAgICAgdGhpcy5maXhMb2dpblJlZ2lzdGVySGVpZ2h0KClcbiAgICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLl9jb25maWcubG9naW5SZWdpc3RlckF1dG9IZWlnaHQpKSB7ICAgICAgXG4gICAgICAgIHNldEludGVydmFsKHRoaXMuZml4TG9naW5SZWdpc3RlckhlaWdodCwgdGhpcy5fY29uZmlnLmxvZ2luUmVnaXN0ZXJBdXRvSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJChTZWxlY3Rvci5TSURFQkFSKVxuICAgICAgICAub24oJ2NvbGxhcHNlZC5sdGUudHJlZXZpZXcgZXhwYW5kZWQubHRlLnRyZWV2aWV3JywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KClcbiAgICAgICAgfSlcblxuICAgICAgJChTZWxlY3Rvci5QVVNITUVOVV9CVE4pXG4gICAgICAgIC5vbignY29sbGFwc2VkLmx0ZS5wdXNobWVudSBzaG93bi5sdGUucHVzaG1lbnUnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxuICAgICAgICB9KVxuXG4gICAgICAkKFNlbGVjdG9yLkNPTlRST0xfU0lERUJBUl9CVE4pXG4gICAgICAgIC5vbignY29sbGFwc2VkLmx0ZS5jb250cm9sc2lkZWJhcicsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpeExheW91dEhlaWdodCgpXG4gICAgICAgIH0pXG4gICAgICAgIC5vbignZXhwYW5kZWQubHRlLmNvbnRyb2xzaWRlYmFyJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZml4TGF5b3V0SGVpZ2h0KCdjb250cm9sX3NpZGViYXInKVxuICAgICAgICB9KVxuXG4gICAgICAkKHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5maXhMYXlvdXRIZWlnaHQoKVxuICAgICAgfSlcblxuICAgICAgJCgnYm9keS5ob2xkLXRyYW5zaXRpb24nKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICB9XG5cbiAgICBfbWF4KG51bWJlcnMpIHtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBudW1iZXIgaW4gYSBsaXN0XG4gICAgICBsZXQgbWF4ID0gMFxuXG4gICAgICBPYmplY3Qua2V5cyhudW1iZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKG51bWJlcnNba2V5XSA+IG1heCkge1xuICAgICAgICAgIG1heCA9IG51bWJlcnNba2V5XVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcgPSAnJykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IExheW91dCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcgfHwgY29uZmlnID09PSAnJykge1xuICAgICAgICAgIGRhdGFbJ19pbml0J10oKVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZyA9PT0gJ2ZpeExheW91dEhlaWdodCcgfHwgY29uZmlnID09PSAnZml4TG9naW5SZWdpc3RlckhlaWdodCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICBMYXlvdXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoJ2JvZHknKSlcbiAgfSlcblxuICAkKFNlbGVjdG9yLlNJREVCQVIgKyAnIGEnKS5vbignZm9jdXNpbicsICgpID0+IHtcbiAgICAkKFNlbGVjdG9yLk1BSU5fU0lERUJBUikuYWRkQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfRk9DVVNFRCk7XG4gIH0pXG5cbiAgJChTZWxlY3Rvci5TSURFQkFSICsgJyBhJykub24oJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICQoU2VsZWN0b3IuTUFJTl9TSURFQkFSKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9GT0NVU0VEKTtcbiAgfSlcblxuICAvKipcbiAgICogalF1ZXJ5IEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQuZm5bTkFNRV0gPSBMYXlvdXQuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTGF5b3V0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIExheW91dC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gTGF5b3V0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgUHVzaE1lbnUuanNcbiAqIExpY2Vuc2UgTUlUXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFB1c2hNZW51ID0gKCgkKSA9PiB7XG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnUHVzaE1lbnUnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUucHVzaG1lbnUnXG4gIGNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG4gIGNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuICBjb25zdCBFdmVudCA9IHtcbiAgICBDT0xMQVBTRUQ6IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gLFxuICAgIFNIT1dOOiBgc2hvd24ke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGF1dG9Db2xsYXBzZVNpemU6IDk5MixcbiAgICBlbmFibGVSZW1lbWJlcjogZmFsc2UsXG4gICAgbm9UcmFuc2l0aW9uQWZ0ZXJSZWxvYWQ6IHRydWVcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIFRPR0dMRV9CVVRUT046ICdbZGF0YS13aWRnZXQ9XCJwdXNobWVudVwiXScsXG4gICAgU0lERUJBUl9NSU5JOiAnLnNpZGViYXItbWluaScsXG4gICAgU0lERUJBUl9DT0xMQVBTRUQ6ICcuc2lkZWJhci1jb2xsYXBzZScsXG4gICAgQk9EWTogJ2JvZHknLFxuICAgIE9WRVJMQVk6ICcjc2lkZWJhci1vdmVybGF5JyxcbiAgICBXUkFQUEVSOiAnLndyYXBwZXInXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ09MTEFQU0VEOiAnc2lkZWJhci1jb2xsYXBzZScsXG4gICAgT1BFTjogJ3NpZGViYXItb3BlbicsXG4gICAgQ0xPU0VEOiAnc2lkZWJhci1jbG9zZWQnXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIFB1c2hNZW51IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5fb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBvcHRpb25zKVxuXG4gICAgICBpZiAoISQoU2VsZWN0b3IuT1ZFUkxBWSkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2FkZE92ZXJsYXkoKVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0KClcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGV4cGFuZCgpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ0xPU0VEKVxuXG4gICAgICBpZih0aGlzLl9vcHRpb25zLmVuYWJsZVJlbWVtYmVyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGByZW1lbWJlciR7RVZFTlRfS0VZfWAsIENsYXNzTmFtZS5PUEVOKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTilcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGNvbGxhcHNlKCkge1xuICAgICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b0NvbGxhcHNlU2l6ZSkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gdGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkKFNlbGVjdG9yLkJPRFkpLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG5cbiAgICAgIGlmKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YCwgQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sbGFwc2VkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkNPTExBUFNFRClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudClcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4cGFuZCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYXV0b0NvbGxhcHNlKHJlc2l6ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9ucy5hdXRvQ29sbGFwc2VTaXplKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSB0aGlzLl9vcHRpb25zLmF1dG9Db2xsYXBzZVNpemUpIHtcbiAgICAgICAgICBpZiAoISQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVzaXplID09IHRydWUpIHtcbiAgICAgICAgICBpZiAoJChTZWxlY3Rvci5CT0RZKS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTikpIHtcbiAgICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICAgfSBlbHNlIGlmKCQoU2VsZWN0b3IuQk9EWSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNMT1NFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1lbWJlcigpIHtcbiAgICAgIGlmKHRoaXMuX29wdGlvbnMuZW5hYmxlUmVtZW1iZXIpIHtcbiAgICAgICAgbGV0IHRvZ2dsZVN0YXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHJlbWVtYmVyJHtFVkVOVF9LRVl9YClcbiAgICAgICAgaWYgKHRvZ2dsZVN0YXRlID09IENsYXNzTmFtZS5DT0xMQVBTRUQpe1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zLm5vVHJhbnNpdGlvbkFmdGVyUmVsb2FkKSB7XG4gICAgICAgICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdob2xkLXRyYW5zaXRpb24nKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5kZWxheSg1MCkucXVldWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5ub1RyYW5zaXRpb25BZnRlclJlbG9hZCkge1xuICAgICAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoJ2hvbGQtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpLmRlbGF5KDUwKS5xdWV1ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG9sZC10cmFuc2l0aW9uJylcbiAgICAgICAgICAgICAgJCh0aGlzKS5kZXF1ZXVlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZVxuXG4gICAgX2luaXQoKSB7XG4gICAgICB0aGlzLnJlbWVtYmVyKClcbiAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKClcblxuICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbGxhcHNlKHRydWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9hZGRPdmVybGF5KCkge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9ICQoJzxkaXYgLz4nLCB7XG4gICAgICAgIGlkOiAnc2lkZWJhci1vdmVybGF5J1xuICAgICAgfSlcblxuICAgICAgb3ZlcmxheS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2UoKVxuICAgICAgfSlcblxuICAgICAgJChTZWxlY3Rvci5XUkFQUEVSKS5hcHBlbmQob3ZlcmxheSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKG9wZXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IFB1c2hNZW51KHRoaXMsIF9vcHRpb25zKVxuICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uID09PSAnc3RyaW5nJyAmJiBvcGVyYXRpb24ubWF0Y2goL2NvbGxhcHNlfGV4cGFuZHx0b2dnbGUvKSkge1xuICAgICAgICAgIGRhdGFbb3BlcmF0aW9uXSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuVE9HR0xFX0JVVFRPTiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXRcblxuICAgIGlmICgkKGJ1dHRvbikuZGF0YSgnd2lkZ2V0JykgIT09ICdwdXNobWVudScpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pXG4gICAgfVxuXG4gICAgUHVzaE1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQoYnV0dG9uKSwgJ3RvZ2dsZScpXG4gIH0pXG5cbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgIFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKFNlbGVjdG9yLlRPR0dMRV9CVVRUT04pKVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFB1c2hNZW51Ll9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFB1c2hNZW51XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBQdXNoTWVudS5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gUHVzaE1lbnVcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgUHVzaE1lbnVcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFRyZWV2aWV3LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUcmVldmlldyA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ1RyZWV2aWV3J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLnRyZWV2aWV3J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgU0VMRUNURUQgICAgIDogYHNlbGVjdGVkJHtFVkVOVF9LRVl9YCxcbiAgICBFWFBBTkRFRCAgICAgOiBgZXhwYW5kZWQke0VWRU5UX0tFWX1gLFxuICAgIENPTExBUFNFRCAgICA6IGBjb2xsYXBzZWQke0VWRU5UX0tFWX1gLFxuICAgIExPQURfREFUQV9BUEk6IGBsb2FkJHtFVkVOVF9LRVl9YFxuICB9XG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTEkgICAgICAgICAgIDogJy5uYXYtaXRlbScsXG4gICAgTElOSyAgICAgICAgIDogJy5uYXYtbGluaycsXG4gICAgVFJFRVZJRVdfTUVOVTogJy5uYXYtdHJlZXZpZXcnLFxuICAgIE9QRU4gICAgICAgICA6ICcubWVudS1vcGVuJyxcbiAgICBEQVRBX1dJREdFVCAgOiAnW2RhdGEtd2lkZ2V0PVwidHJlZXZpZXdcIl0nXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgTEkgICAgICAgICAgICAgICA6ICduYXYtaXRlbScsXG4gICAgTElOSyAgICAgICAgICAgICA6ICduYXYtbGluaycsXG4gICAgVFJFRVZJRVdfTUVOVSAgICA6ICduYXYtdHJlZXZpZXcnLFxuICAgIE9QRU4gICAgICAgICAgICAgOiAnbWVudS1vcGVuJyxcbiAgICBTSURFQkFSX0NPTExBUFNFRDogJ3NpZGViYXItY29sbGFwc2UnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHRyaWdnZXIgICAgICAgICAgICAgIDogYCR7U2VsZWN0b3IuREFUQV9XSURHRVR9ICR7U2VsZWN0b3IuTElOS31gLFxuICAgIGFuaW1hdGlvblNwZWVkICAgICAgIDogMzAwLFxuICAgIGFjY29yZGlvbiAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBleHBhbmRTaWRlYmFyICAgICAgICA6IGZhbHNlLFxuICAgIHNpZGViYXJCdXR0b25TZWxlY3RvcjogJ1tkYXRhLXdpZGdldD1cInB1c2htZW51XCJdJ1xuICB9XG5cbiAgLyoqXG4gICAqIENsYXNzIERlZmluaXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cbiAgY2xhc3MgVHJlZXZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICA9IGNvbmZpZ1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLl9zZXR1cExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgZXhwYW5kKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIGNvbnN0IGV4cGFuZGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LkVYUEFOREVEKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmFjY29yZGlvbikge1xuICAgICAgICBjb25zdCBvcGVuTWVudUxpICAgPSBwYXJlbnRMaS5zaWJsaW5ncyhTZWxlY3Rvci5PUEVOKS5maXJzdCgpXG4gICAgICAgIGNvbnN0IG9wZW5UcmVldmlldyA9IG9wZW5NZW51TGkuZmluZChTZWxlY3Rvci5UUkVFVklFV19NRU5VKS5maXJzdCgpXG4gICAgICAgIHRoaXMuY29sbGFwc2Uob3BlblRyZWV2aWV3LCBvcGVuTWVudUxpKVxuICAgICAgfVxuXG4gICAgICB0cmVldmlld01lbnUuc3RvcCgpLnNsaWRlRG93bih0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsICgpID0+IHtcbiAgICAgICAgcGFyZW50TGkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihleHBhbmRlZEV2ZW50KVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5leHBhbmRTaWRlYmFyKSB7XG4gICAgICAgIHRoaXMuX2V4cGFuZFNpZGViYXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbGxhcHNlKHRyZWV2aWV3TWVudSwgcGFyZW50TGkpIHtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZEV2ZW50ID0gJC5FdmVudChFdmVudC5DT0xMQVBTRUQpXG5cbiAgICAgIHRyZWV2aWV3TWVudS5zdG9wKCkuc2xpZGVVcCh0aGlzLl9jb25maWcuYW5pbWF0aW9uU3BlZWQsICgpID0+IHtcbiAgICAgICAgcGFyZW50TGkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gICAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihjb2xsYXBzZWRFdmVudClcbiAgICAgICAgdHJlZXZpZXdNZW51LmZpbmQoYCR7U2VsZWN0b3IuT1BFTn0gPiAke1NlbGVjdG9yLlRSRUVWSUVXX01FTlV9YCkuc2xpZGVVcCgpXG4gICAgICAgIHRyZWV2aWV3TWVudS5maW5kKFNlbGVjdG9yLk9QRU4pLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5PUEVOKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0b2dnbGUoZXZlbnQpIHtcblxuICAgICAgY29uc3QgJHJlbGF0aXZlVGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgY29uc3QgJHBhcmVudCA9ICRyZWxhdGl2ZVRhcmdldC5wYXJlbnQoKVxuXG4gICAgICBsZXQgdHJlZXZpZXdNZW51ID0gJHBhcmVudC5maW5kKCc+ICcgKyBTZWxlY3Rvci5UUkVFVklFV19NRU5VKVxuXG4gICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuXG4gICAgICAgIGlmICghJHBhcmVudC5pcyhTZWxlY3Rvci5MSSkpIHtcbiAgICAgICAgICB0cmVldmlld01lbnUgPSAkcGFyZW50LnBhcmVudCgpLmZpbmQoJz4gJyArIFNlbGVjdG9yLlRSRUVWSUVXX01FTlUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyZWV2aWV3TWVudS5pcyhTZWxlY3Rvci5UUkVFVklFV19NRU5VKSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgY29uc3QgcGFyZW50TGkgPSAkcmVsYXRpdmVUYXJnZXQucGFyZW50cyhTZWxlY3Rvci5MSSkuZmlyc3QoKVxuICAgICAgY29uc3QgaXNPcGVuICAgPSBwYXJlbnRMaS5oYXNDbGFzcyhDbGFzc05hbWUuT1BFTilcblxuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKCQodHJlZXZpZXdNZW51KSwgcGFyZW50TGkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmV4cGFuZCgkKHRyZWV2aWV3TWVudSksIHBhcmVudExpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9zZXR1cExpc3RlbmVycygpIHtcbiAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMuX2NvbmZpZy50cmlnZ2VyLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGUoZXZlbnQpXG4gICAgICB9KVxuICAgIH1cblxuICAgIF9leHBhbmRTaWRlYmFyKCkge1xuICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhDbGFzc05hbWUuU0lERUJBUl9DT0xMQVBTRUQpKSB7XG4gICAgICAgICQodGhpcy5fY29uZmlnLnNpZGViYXJCdXR0b25TZWxlY3RvcikuUHVzaE1lbnUoJ2V4cGFuZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUcmVldmlldygkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1dJREdFVCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBUcmVldmlldy5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ2luaXQnKVxuICAgIH0pXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVHJlZXZpZXcuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVHJlZXZpZXdcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRyZWV2aWV3Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBUcmVldmlld1xufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlld1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgRGlyZWN0Q2hhdC5qc1xuICogTGljZW5zZSBNSVRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgRGlyZWN0Q2hhdCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0RpcmVjdENoYXQnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUuZGlyZWN0Y2hhdCdcbiAgY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbiAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuICBjb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuXG4gIGNvbnN0IEV2ZW50ID0ge1xuICAgIFRPR0dMRUQ6IGB0b2dnbGVke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBEQVRBX1RPR0dMRTogJ1tkYXRhLXdpZGdldD1cImNoYXQtcGFuZS10b2dnbGVcIl0nLFxuICAgIERJUkVDVF9DSEFUOiAnLmRpcmVjdC1jaGF0J1xuICB9O1xuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBESVJFQ1RfQ0hBVF9PUEVOOiAnZGlyZWN0LWNoYXQtY29udGFjdHMtb3BlbidcbiAgfTtcblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIERpcmVjdENoYXQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnBhcmVudHMoU2VsZWN0b3IuRElSRUNUX0NIQVQpLmZpcnN0KCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkRJUkVDVF9DSEFUX09QRU4pO1xuXG4gICAgICBjb25zdCB0b2dnbGVkRXZlbnQgPSAkLkV2ZW50KEV2ZW50LlRPR0dMRUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIodG9nZ2xlZEV2ZW50KVxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERpcmVjdENoYXQoJCh0aGlzKSlcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIERpcmVjdENoYXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gRGlyZWN0Q2hhdC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEaXJlY3RDaGF0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBEaXJlY3RDaGF0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEaXJlY3RDaGF0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdENoYXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIFRvZG9MaXN0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb2RvTGlzdCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ1RvZG9MaXN0J1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLnRvZG9saXN0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgREFUQV9UT0dHTEU6ICdbZGF0YS13aWRnZXQ9XCJ0b2RvLWxpc3RcIl0nXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgVE9ET19MSVNUX0RPTkU6ICdkb25lJ1xuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBvbkNoZWNrOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSxcbiAgICBvblVuQ2hlY2s6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG5cbiAgICAgIHRoaXMuX2luaXQoKVxuICAgIH1cblxuICAgIC8vIFB1YmxpY1xuXG4gICAgdG9nZ2xlKGl0ZW0pIHtcbiAgICAgIGl0ZW0ucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuVE9ET19MSVNUX0RPTkUpO1xuICAgICAgaWYgKCEgJChpdGVtKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgdGhpcy51bkNoZWNrKCQoaXRlbSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2hlY2soaXRlbSk7XG4gICAgfVxuXG4gICAgY2hlY2sgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX2NvbmZpZy5vbkNoZWNrLmNhbGwoaXRlbSk7XG4gICAgfVxuXG4gICAgdW5DaGVjayAoaXRlbSkge1xuICAgICAgdGhpcy5fY29uZmlnLm9uVW5DaGVjay5jYWxsKGl0ZW0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgICAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKS5maW5kKCdpbnB1dDpjaGVja2JveDpjaGVja2VkJykucGFyZW50cygnbGknKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuVE9ET19MSVNUX0RPTkUpXG4gICAgICAkKFNlbGVjdG9yLkRBVEFfVE9HR0xFKS5vbignY2hhbmdlJywgJ2lucHV0OmNoZWNrYm94JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoYXQudG9nZ2xlKCQoZXZlbnQudGFyZ2V0KSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX29wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGVmYXVsdCwgJCh0aGlzKS5kYXRhKCkpXG5cbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBUb2RvTGlzdCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnID09PSAnaW5pdCcpIHtcbiAgICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQod2luZG93KS5vbignbG9hZCcsICgpID0+IHtcbiAgICBUb2RvTGlzdC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxuICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9kb0xpc3RcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgICByZXR1cm4gVG9kb0xpc3QuX2pRdWVyeUludGVyZmFjZVxuICB9XG5cbiAgcmV0dXJuIFRvZG9MaXN0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBZG1pbkxURSBDYXJkV2lkZ2V0LmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJkV2lkZ2V0ID0gKCgkKSA9PiB7XG4gIC8qKlxuICAgKiBDb25zdGFudHNcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICBjb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnQ2FyZFdpZGdldCdcbiAgY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2x0ZS5jYXJkd2lkZ2V0J1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgRVhQQU5ERUQ6IGBleHBhbmRlZCR7RVZFTlRfS0VZfWAsXG4gICAgQ09MTEFQU0VEOiBgY29sbGFwc2VkJHtFVkVOVF9LRVl9YCxcbiAgICBNQVhJTUlaRUQ6IGBtYXhpbWl6ZWQke0VWRU5UX0tFWX1gLFxuICAgIE1JTklNSVpFRDogYG1pbmltaXplZCR7RVZFTlRfS0VZfWAsXG4gICAgUkVNT1ZFRDogYHJlbW92ZWQke0VWRU5UX0tFWX1gXG4gIH1cblxuICBjb25zdCBDbGFzc05hbWUgPSB7XG4gICAgQ0FSRDogJ2NhcmQnLFxuICAgIENPTExBUFNFRDogJ2NvbGxhcHNlZC1jYXJkJyxcbiAgICBDT0xMQVBTSU5HOiAnY29sbGFwc2luZy1jYXJkJyxcbiAgICBFWFBBTkRJTkc6ICdleHBhbmRpbmctY2FyZCcsXG4gICAgV0FTX0NPTExBUFNFRDogJ3dhcy1jb2xsYXBzZWQnLFxuICAgIE1BWElNSVpFRDogJ21heGltaXplZC1jYXJkJyxcbiAgfVxuXG4gIGNvbnN0IFNlbGVjdG9yID0ge1xuICAgIERBVEFfUkVNT1ZFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJyZW1vdmVcIl0nLFxuICAgIERBVEFfQ09MTEFQU0U6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNvbGxhcHNlXCJdJyxcbiAgICBEQVRBX01BWElNSVpFOiAnW2RhdGEtY2FyZC13aWRnZXQ9XCJtYXhpbWl6ZVwiXScsXG4gICAgQ0FSRDogYC4ke0NsYXNzTmFtZS5DQVJEfWAsXG4gICAgQ0FSRF9IRUFERVI6ICcuY2FyZC1oZWFkZXInLFxuICAgIENBUkRfQk9EWTogJy5jYXJkLWJvZHknLFxuICAgIENBUkRfRk9PVEVSOiAnLmNhcmQtZm9vdGVyJyxcbiAgICBDT0xMQVBTRUQ6IGAuJHtDbGFzc05hbWUuQ09MTEFQU0VEfWAsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIGFuaW1hdGlvblNwZWVkOiAnbm9ybWFsJyxcbiAgICBjb2xsYXBzZVRyaWdnZXI6IFNlbGVjdG9yLkRBVEFfQ09MTEFQU0UsXG4gICAgcmVtb3ZlVHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRU1PVkUsXG4gICAgbWF4aW1pemVUcmlnZ2VyOiBTZWxlY3Rvci5EQVRBX01BWElNSVpFLFxuICAgIGNvbGxhcHNlSWNvbjogJ2ZhLW1pbnVzJyxcbiAgICBleHBhbmRJY29uOiAnZmEtcGx1cycsXG4gICAgbWF4aW1pemVJY29uOiAnZmEtZXhwYW5kJyxcbiAgICBtaW5pbWl6ZUljb246ICdmYS1jb21wcmVzcycsXG4gIH1cblxuICBjbGFzcyBDYXJkV2lkZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzZXR0aW5ncykge1xuICAgICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50LnBhcmVudHMoU2VsZWN0b3IuQ0FSRCkuZmlyc3QoKVxuXG4gICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhDbGFzc05hbWUuQ0FSRCkpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncylcbiAgICB9XG5cbiAgICBjb2xsYXBzZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORykuY2hpbGRyZW4oYCR7U2VsZWN0b3IuQ0FSRF9CT0RZfSwgJHtTZWxlY3Rvci5DQVJEX0ZPT1RFUn1gKVxuICAgICAgICAuc2xpZGVVcCh0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgfSlcblxuICAgICAgdGhpcy5fcGFyZW50LmZpbmQoJz4gJyArIFNlbGVjdG9yLkNBUkRfSEVBREVSICsgJyAnICsgdGhpcy5fc2V0dGluZ3MuY29sbGFwc2VUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZUljb24pXG5cbiAgICAgIGNvbnN0IGNvbGxhcHNlZCA9ICQuRXZlbnQoRXZlbnQuQ09MTEFQU0VEKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoY29sbGFwc2VkLCB0aGlzLl9wYXJlbnQpXG4gICAgfVxuXG4gICAgZXhwYW5kKCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFkZENsYXNzKENsYXNzTmFtZS5FWFBBTkRJTkcpLmNoaWxkcmVuKGAke1NlbGVjdG9yLkNBUkRfQk9EWX0sICR7U2VsZWN0b3IuQ0FSRF9GT09URVJ9YClcbiAgICAgICAgLnNsaWRlRG93bih0aGlzLl9zZXR0aW5ncy5hbmltYXRpb25TcGVlZCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VEKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuRVhQQU5ESU5HKVxuICAgICAgICB9KVxuXG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCgnPiAnICsgU2VsZWN0b3IuQ0FSRF9IRUFERVIgKyAnICcgKyB0aGlzLl9zZXR0aW5ncy5jb2xsYXBzZVRyaWdnZXIgKyAnIC4nICsgdGhpcy5fc2V0dGluZ3MuZXhwYW5kSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlSWNvbilcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLmV4cGFuZEljb24pXG5cbiAgICAgIGNvbnN0IGV4cGFuZGVkID0gJC5FdmVudChFdmVudC5FWFBBTkRFRClcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKGV4cGFuZGVkLCB0aGlzLl9wYXJlbnQpXG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgdGhpcy5fcGFyZW50LnNsaWRlVXAoKVxuXG4gICAgICBjb25zdCByZW1vdmVkID0gJC5FdmVudChFdmVudC5SRU1PVkVEKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIocmVtb3ZlZCwgdGhpcy5fcGFyZW50KVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRCkpIHtcbiAgICAgICAgdGhpcy5leHBhbmQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2xsYXBzZSgpXG4gICAgfVxuICAgIFxuICAgIG1heGltaXplKCkge1xuICAgICAgdGhpcy5fcGFyZW50LmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyICsgJyAuJyArIHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgICAgLmFkZENsYXNzKHRoaXMuX3NldHRpbmdzLm1pbmltaXplSWNvbilcbiAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMuX3NldHRpbmdzLm1heGltaXplSWNvbilcbiAgICAgIHRoaXMuX3BhcmVudC5jc3Moe1xuICAgICAgICAnaGVpZ2h0JzogdGhpcy5fcGFyZW50LmhlaWdodCgpLFxuICAgICAgICAnd2lkdGgnOiB0aGlzLl9wYXJlbnQud2lkdGgoKSxcbiAgICAgICAgJ3RyYW5zaXRpb24nOiAnYWxsIC4xNXMnXG4gICAgICB9KS5kZWxheSgxNTApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRClcbiAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKENsYXNzTmFtZS5DT0xMQVBTRUQpKSB7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRClcbiAgICAgICAgfVxuICAgICAgICAkKHRoaXMpLmRlcXVldWUoKVxuICAgICAgfSlcblxuICAgICAgY29uc3QgbWF4aW1pemVkID0gJC5FdmVudChFdmVudC5NQVhJTUlaRUQpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcihtYXhpbWl6ZWQsIHRoaXMuX3BhcmVudClcbiAgICB9XG5cbiAgICBtaW5pbWl6ZSgpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5maW5kKHRoaXMuX3NldHRpbmdzLm1heGltaXplVHJpZ2dlciArICcgLicgKyB0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgICAgIC5hZGRDbGFzcyh0aGlzLl9zZXR0aW5ncy5tYXhpbWl6ZUljb24pXG4gICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLl9zZXR0aW5ncy5taW5pbWl6ZUljb24pXG4gICAgICB0aGlzLl9wYXJlbnQuY3NzKCdjc3NUZXh0JywgJ2hlaWdodDonICsgdGhpcy5fcGFyZW50WzBdLnN0eWxlLmhlaWdodCArICcgIWltcG9ydGFudDsnICtcbiAgICAgICAgJ3dpZHRoOicgKyB0aGlzLl9wYXJlbnRbMF0uc3R5bGUud2lkdGggKyAnICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246IGFsbCAuMTVzOydcbiAgICAgICkuZGVsYXkoMTApLnF1ZXVlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk1BWElNSVpFRClcbiAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5NQVhJTUlaRUQpXG4gICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAnaGVpZ2h0JzogJ2luaGVyaXQnLFxuICAgICAgICAgICd3aWR0aCc6ICdpbmhlcml0J1xuICAgICAgICB9KVxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuV0FTX0NPTExBUFNFRCkpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5XQVNfQ09MTEFQU0VEKVxuICAgICAgICB9XG4gICAgICAgICQodGhpcykuZGVxdWV1ZSgpXG4gICAgICB9KVxuXG4gICAgICBjb25zdCBNSU5JTUlaRUQgPSAkLkV2ZW50KEV2ZW50Lk1JTklNSVpFRClcblxuICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKE1JTklNSVpFRCwgdGhpcy5fcGFyZW50KVxuICAgIH1cblxuICAgIHRvZ2dsZU1heGltaXplKCkge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudC5oYXNDbGFzcyhDbGFzc05hbWUuTUFYSU1JWkVEKSkge1xuICAgICAgICB0aGlzLm1pbmltaXplKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMubWF4aW1pemUoKVxuICAgIH1cblxuICAgIC8vIFByaXZhdGVcblxuICAgIF9pbml0KGNhcmQpIHtcbiAgICAgIHRoaXMuX3BhcmVudCA9IGNhcmRcblxuICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLmNvbGxhcHNlVHJpZ2dlcikuY2xpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgICB9KVxuXG4gICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MubWF4aW1pemVUcmlnZ2VyKS5jbGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlTWF4aW1pemUoKVxuICAgICAgfSlcblxuICAgICAgJCh0aGlzKS5maW5kKHRoaXMuX3NldHRpbmdzLnJlbW92ZVRyaWdnZXIpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFdpZGdldCgkKHRoaXMpLCBfb3B0aW9ucylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCB0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyA/IGRhdGE6IGNvbmZpZylcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIGNvbmZpZy5tYXRjaCgvY29sbGFwc2V8ZXhwYW5kfHJlbW92ZXx0b2dnbGV8bWF4aW1pemV8bWluaW1pemV8dG9nZ2xlTWF4aW1pemUvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBkYXRhLl9pbml0KCQodGhpcykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERhdGEgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9DT0xMQVBTRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSwgJ3RvZ2dsZScpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgU2VsZWN0b3IuREFUQV9SRU1PVkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdyZW1vdmUnKVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfTUFYSU1JWkUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIENhcmRXaWRnZXQuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGVNYXhpbWl6ZScpXG4gIH0pXG5cbiAgLyoqXG4gICAqIGpRdWVyeSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkLmZuW05BTUVdID0gQ2FyZFdpZGdldC5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJkV2lkZ2V0XG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJkV2lkZ2V0Ll9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBDYXJkV2lkZ2V0XG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRXaWRnZXRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIENhcmRSZWZyZXNoLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBDYXJkUmVmcmVzaCA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0NhcmRSZWZyZXNoJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLmNhcmRyZWZyZXNoJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgTE9BREVEOiBgbG9hZGVkJHtFVkVOVF9LRVl9YCxcbiAgICBPVkVSTEFZX0FEREVEOiBgb3ZlcmxheS5hZGRlZCR7RVZFTlRfS0VZfWAsXG4gICAgT1ZFUkxBWV9SRU1PVkVEOiBgb3ZlcmxheS5yZW1vdmVkJHtFVkVOVF9LRVl9YCxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBDQVJEOiAnY2FyZCcsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBDQVJEOiBgLiR7Q2xhc3NOYW1lLkNBUkR9YCxcbiAgICBEQVRBX1JFRlJFU0g6ICdbZGF0YS1jYXJkLXdpZGdldD1cImNhcmQtcmVmcmVzaFwiXScsXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICAgIHNvdXJjZTogJycsXG4gICAgc291cmNlU2VsZWN0b3I6ICcnLFxuICAgIHBhcmFtczoge30sXG4gICAgdHJpZ2dlcjogU2VsZWN0b3IuREFUQV9SRUZSRVNILFxuICAgIGNvbnRlbnQ6ICcuY2FyZC1ib2R5JyxcbiAgICBsb2FkSW5Db250ZW50OiB0cnVlLFxuICAgIGxvYWRPbkluaXQ6IHRydWUsXG4gICAgcmVzcG9uc2VUeXBlOiAnJyxcbiAgICBvdmVybGF5VGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjxpIGNsYXNzPVwiZmFzIGZhLTJ4IGZhLXN5bmMtYWx0IGZhLXNwaW5cIj48L2k+PC9kaXY+JyxcbiAgICBvbkxvYWRTdGFydDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgb25Mb2FkRG9uZTogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgQ2FyZFJlZnJlc2gge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHNldHRpbmdzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50ICA9IGVsZW1lbnRcbiAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQucGFyZW50cyhTZWxlY3Rvci5DQVJEKS5maXJzdCgpXG4gICAgICB0aGlzLl9zZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBzZXR0aW5ncylcbiAgICAgIHRoaXMuX292ZXJsYXkgPSAkKHRoaXMuX3NldHRpbmdzLm92ZXJsYXlUZW1wbGF0ZSlcblxuICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoQ2xhc3NOYW1lLkNBUkQpKSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLnNvdXJjZSA9PT0gJycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3VyY2UgdXJsIHdhcyBub3QgZGVmaW5lZC4gUGxlYXNlIHNwZWNpZnkgYSB1cmwgaW4geW91ciBDYXJkUmVmcmVzaCBzb3VyY2Ugb3B0aW9uLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICB0aGlzLl9hZGRPdmVybGF5KClcbiAgICAgIHRoaXMuX3NldHRpbmdzLm9uTG9hZFN0YXJ0LmNhbGwoJCh0aGlzKSlcblxuICAgICAgJC5nZXQodGhpcy5fc2V0dGluZ3Muc291cmNlLCB0aGlzLl9zZXR0aW5ncy5wYXJhbXMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZEluQ29udGVudCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zb3VyY2VTZWxlY3RvciAhPSAnJykge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSAkKHJlc3BvbnNlKS5maW5kKHRoaXMuX3NldHRpbmdzLnNvdXJjZVNlbGVjdG9yKS5odG1sKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9zZXR0aW5ncy5jb250ZW50KS5odG1sKHJlc3BvbnNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3Mub25Mb2FkRG9uZS5jYWxsKCQodGhpcyksIHJlc3BvbnNlKVxuICAgICAgICB0aGlzLl9yZW1vdmVPdmVybGF5KCk7XG4gICAgICB9LmJpbmQodGhpcyksIHRoaXMuX3NldHRpbmdzLnJlc3BvbnNlVHlwZSAhPT0gJycgJiYgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VUeXBlKVxuXG4gICAgICBjb25zdCBsb2FkZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuTE9BREVEKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGxvYWRlZEV2ZW50KVxuICAgIH1cblxuICAgIF9hZGRPdmVybGF5KCkge1xuICAgICAgdGhpcy5fcGFyZW50LmFwcGVuZCh0aGlzLl9vdmVybGF5KVxuXG4gICAgICBjb25zdCBvdmVybGF5QWRkZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuT1ZFUkxBWV9BRERFRClcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihvdmVybGF5QWRkZWRFdmVudClcbiAgICB9O1xuXG4gICAgX3JlbW92ZU92ZXJsYXkoKSB7XG4gICAgICB0aGlzLl9wYXJlbnQuZmluZCh0aGlzLl9vdmVybGF5KS5yZW1vdmUoKVxuXG4gICAgICBjb25zdCBvdmVybGF5UmVtb3ZlZEV2ZW50ID0gJC5FdmVudChFdmVudC5PVkVSTEFZX1JFTU9WRUQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIob3ZlcmxheVJlbW92ZWRFdmVudClcbiAgICB9O1xuXG5cbiAgICAvLyBQcml2YXRlXG5cbiAgICBfaW5pdChjYXJkKSB7XG4gICAgICAkKHRoaXMpLmZpbmQodGhpcy5fc2V0dGluZ3MudHJpZ2dlcikub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWQoKVxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRPbkluaXQpIHtcbiAgICAgICAgdGhpcy5sb2FkKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0aWNcblxuICAgIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQ2FyZFJlZnJlc2goJCh0aGlzKSwgX29wdGlvbnMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgdHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycgPyBkYXRhOiBjb25maWcpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiBjb25maWcubWF0Y2goL2xvYWQvKSkge1xuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YS5faW5pdCgkKHRoaXMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEYXRhIEFQSVxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLkRBVEFfUkVGUkVTSCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgQ2FyZFJlZnJlc2guX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICdsb2FkJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChTZWxlY3Rvci5EQVRBX1JFRlJFU0gpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJCh0aGlzKSlcbiAgICB9KVxuICB9KVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IENhcmRSZWZyZXNoLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IENhcmRSZWZyZXNoXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgIHJldHVybiBDYXJkUmVmcmVzaC5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gQ2FyZFJlZnJlc2hcbn0pKGpRdWVyeSlcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFJlZnJlc2hcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFkbWluTFRFIERyb3Bkb3duLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBEcm9wZG93biA9ICgoJCkgPT4ge1xuICAvKipcbiAgICogQ29uc3RhbnRzXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ0Ryb3Bkb3duJ1xuICBjb25zdCBEQVRBX0tFWSAgICAgICAgICAgPSAnbHRlLmRyb3Bkb3duJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgU2VsZWN0b3IgPSB7XG4gICAgTkFWQkFSOiAnLm5hdmJhcicsXG4gICAgRFJPUERPV05fTUVOVTogJy5kcm9wZG93bi1tZW51JyxcbiAgICBEUk9QRE9XTl9NRU5VX0FDVElWRTogJy5kcm9wZG93bi1tZW51LnNob3cnLFxuICAgIERST1BET1dOX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBEUk9QRE9XTl9IT1ZFUjogJ2Ryb3Bkb3duLWhvdmVyJyxcbiAgICBEUk9QRE9XTl9SSUdIVDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG4gIH1cblxuICBjb25zdCBEZWZhdWx0ID0ge1xuICB9XG5cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNsYXNzIERyb3Bkb3duIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyAgPSBjb25maWdcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gUHVibGljXG5cbiAgICB0b2dnbGVTdWJtZW51KCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zaWJsaW5ncygpLnNob3coKS50b2dnbGVDbGFzcyhcInNob3dcIilcblxuICAgICAgaWYgKCEgdGhpcy5fZWxlbWVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudHMoJy5kcm9wZG93bi1tZW51JykuZmlyc3QoKS5maW5kKCcuc2hvdycpLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5oaWRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnRzKCdsaS5uYXYtaXRlbS5kcm9wZG93bi5zaG93Jykub24oJ2hpZGRlbi5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCgnLmRyb3Bkb3duLXN1Ym1lbnUgLnNob3cnKS5yZW1vdmVDbGFzcyhcInNob3dcIikuaGlkZSgpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZpeFBvc2l0aW9uKCkge1xuICAgICAgbGV0IGVsbSA9ICQoU2VsZWN0b3IuRFJPUERPV05fTUVOVV9BQ1RJVkUpXG5cbiAgICAgIGlmIChlbG0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChlbG0uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BET1dOX1JJR0hUKSkge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpXG4gICAgICAgICAgZWxtLmNzcygncmlnaHQnLCAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAwKVxuICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgJ2luaGVyaXQnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9mZnNldCA9IGVsbS5vZmZzZXQoKVxuICAgICAgICBsZXQgd2lkdGggPSBlbG0ud2lkdGgoKVxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKVxuICAgICAgICBsZXQgdmlzaWJsZVBhcnQgPSB3aW5kb3dXaWR0aCAtIG9mZnNldC5sZWZ0XG5cbiAgICAgICAgaWYgKG9mZnNldC5sZWZ0IDwgMCkge1xuICAgICAgICAgIGVsbS5jc3MoJ2xlZnQnLCAnaW5oZXJpdCcpXG4gICAgICAgICAgZWxtLmNzcygncmlnaHQnLCAob2Zmc2V0LmxlZnQgLSA1KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmlzaWJsZVBhcnQgPCB3aWR0aCkge1xuICAgICAgICAgICAgZWxtLmNzcygnbGVmdCcsICdpbmhlcml0JylcbiAgICAgICAgICAgIGVsbS5jc3MoJ3JpZ2h0JywgMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gIFxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRhdGEgICAgICA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgICAgY29uc3QgX2NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCAkKHRoaXMpLmRhdGEoKSlcblxuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKCQodGhpcyksIF9jb25maWcpXG4gICAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZVN1Ym1lbnUnIHx8IGNvbmZpZyA9PSAnZml4UG9zaXRpb24nKSB7XG4gICAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGF0YSBBUElcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKi9cblxuICAkKFNlbGVjdG9yLkRST1BET1dOX01FTlUgKyAnICcgKyBTZWxlY3Rvci5EUk9QRE9XTl9UT0dHTEUpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlU3VibWVudScpXG4gIH0pO1xuXG4gICQoU2VsZWN0b3IuTkFWQkFSICsgJyAnICsgU2VsZWN0b3IuRFJPUERPV05fVE9HR0xFKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnZml4UG9zaXRpb24nKVxuICAgIH0sIDEpXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4gICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiAgfVxuXG4gIHJldHVybiBEcm9wZG93blxufSkoalF1ZXJ5KVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQWRtaW5MVEUgVG9hc3RzLmpzXG4gKiBMaWNlbnNlIE1JVFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUb2FzdHMgPSAoKCQpID0+IHtcbiAgLyoqXG4gICAqIENvbnN0YW50c1xuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuXG4gIGNvbnN0IE5BTUUgICAgICAgICAgICAgICA9ICdUb2FzdHMnXG4gIGNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdsdGUudG9hc3RzJ1xuICBjb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuICBjb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5cbiAgY29uc3QgRXZlbnQgPSB7XG4gICAgSU5JVDogYGluaXQke0VWRU5UX0tFWX1gLFxuICAgIENSRUFURUQ6IGBjcmVhdGVkJHtFVkVOVF9LRVl9YCxcbiAgICBSRU1PVkVEOiBgcmVtb3ZlZCR7RVZFTlRfS0VZfWAsXG4gIH1cblxuICBjb25zdCBTZWxlY3RvciA9IHtcbiAgICBCT0RZOiAndG9hc3QtYm9keScsXG4gICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJyN0b2FzdHNDb250YWluZXJUb3BSaWdodCcsXG4gICAgQ09OVEFJTkVSX1RPUF9MRUZUOiAnI3RvYXN0c0NvbnRhaW5lclRvcExlZnQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fUklHSFQ6ICcjdG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJyN0b2FzdHNDb250YWluZXJCb3R0b21MZWZ0JyxcbiAgfVxuXG4gIGNvbnN0IENsYXNzTmFtZSA9IHtcbiAgICBUT1BfUklHSFQ6ICd0b2FzdHMtdG9wLXJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ3RvYXN0cy10b3AtbGVmdCcsXG4gICAgQk9UVE9NX1JJR0hUOiAndG9hc3RzLWJvdHRvbS1yaWdodCcsXG4gICAgQk9UVE9NX0xFRlQ6ICd0b2FzdHMtYm90dG9tLWxlZnQnLFxuICAgIEZBREU6ICdmYWRlJyxcbiAgfVxuXG4gIGNvbnN0IFBvc2l0aW9uID0ge1xuICAgIFRPUF9SSUdIVDogJ3RvcFJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ3RvcExlZnQnLFxuICAgIEJPVFRPTV9SSUdIVDogJ2JvdHRvbVJpZ2h0JyxcbiAgICBCT1RUT01fTEVGVDogJ2JvdHRvbUxlZnQnLFxuICB9XG5cbiAgY29uc3QgSWQgPSB7XG4gICAgQ09OVEFJTkVSX1RPUF9SSUdIVDogJ3RvYXN0c0NvbnRhaW5lclRvcFJpZ2h0JyxcbiAgICBDT05UQUlORVJfVE9QX0xFRlQ6ICd0b2FzdHNDb250YWluZXJUb3BMZWZ0JyxcbiAgICBDT05UQUlORVJfQk9UVE9NX1JJR0hUOiAndG9hc3RzQ29udGFpbmVyQm90dG9tUmlnaHQnLFxuICAgIENPTlRBSU5FUl9CT1RUT01fTEVGVDogJ3RvYXN0c0NvbnRhaW5lckJvdHRvbUxlZnQnLFxuICB9XG5cbiAgY29uc3QgRGVmYXVsdCA9IHtcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uVE9QX1JJR0hULFxuICAgIGZpeGVkOiB0cnVlLFxuICAgIGF1dG9oaWRlOiBmYWxzZSxcbiAgICBhdXRvcmVtb3ZlOiB0cnVlLFxuICAgIGRlbGF5OiAxMDAwLFxuICAgIGZhZGU6IHRydWUsXG4gICAgaWNvbjogbnVsbCxcbiAgICBpbWFnZTogbnVsbCxcbiAgICBpbWFnZUFsdDogbnVsbCxcbiAgICBpbWFnZUhlaWdodDogJzI1cHgnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHN1YnRpdGxlOiBudWxsLFxuICAgIGNsb3NlOiB0cnVlLFxuICAgIGJvZHk6IG51bGwsXG4gICAgY2xhc3M6IG51bGwsXG4gIH1cblxuICAvKipcbiAgICogQ2xhc3MgRGVmaW5pdGlvblxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAqL1xuICBjbGFzcyBUb2FzdHMge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgICAgdGhpcy5fY29uZmlnICA9IGNvbmZpZ1xuXG4gICAgICB0aGlzLl9wcmVwYXJlQ29udGFpbmVyKCk7XG5cbiAgICAgIGNvbnN0IGluaXRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSU5JVClcbiAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGluaXRFdmVudClcbiAgICB9XG5cbiAgICAvLyBQdWJsaWNcblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgIHZhciB0b2FzdCA9ICQoJzxkaXYgY2xhc3M9XCJ0b2FzdFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiLz4nKVxuXG4gICAgICB0b2FzdC5kYXRhKCdhdXRvaGlkZScsIHRoaXMuX2NvbmZpZy5hdXRvaGlkZSlcbiAgICAgIHRvYXN0LmRhdGEoJ2FuaW1hdGlvbicsIHRoaXMuX2NvbmZpZy5mYWRlKVxuICAgICAgXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmNsYXNzKSB7XG4gICAgICAgIHRvYXN0LmFkZENsYXNzKHRoaXMuX2NvbmZpZy5jbGFzcylcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5kZWxheSAmJiB0aGlzLl9jb25maWcuZGVsYXkgIT0gNTAwKSB7XG4gICAgICAgIHRvYXN0LmRhdGEoJ2RlbGF5JywgdGhpcy5fY29uZmlnLmRlbGF5KVxuICAgICAgfVxuXG4gICAgICB2YXIgdG9hc3RfaGVhZGVyID0gJCgnPGRpdiBjbGFzcz1cInRvYXN0LWhlYWRlclwiPicpXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuaW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICB2YXIgdG9hc3RfaW1hZ2UgPSAkKCc8aW1nIC8+JykuYWRkQ2xhc3MoJ3JvdW5kZWQgbXItMicpLmF0dHIoJ3NyYycsIHRoaXMuX2NvbmZpZy5pbWFnZSkuYXR0cignYWx0JywgdGhpcy5fY29uZmlnLmltYWdlQWx0KVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCAhPSBudWxsKSB7XG4gICAgICAgICAgdG9hc3RfaW1hZ2UuaGVpZ2h0KHRoaXMuX2NvbmZpZy5pbWFnZUhlaWdodCkud2lkdGgoJ2F1dG8nKVxuICAgICAgICB9XG5cbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCh0b2FzdF9pbWFnZSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pY29uICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdtci0yJykuYWRkQ2xhc3ModGhpcy5fY29uZmlnLmljb24pKVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgdG9hc3RfaGVhZGVyLmFwcGVuZCgkKCc8c3Ryb25nIC8+JykuYWRkQ2xhc3MoJ21yLWF1dG8nKS5odG1sKHRoaXMuX2NvbmZpZy50aXRsZSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuc3VidGl0bGUgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKCQoJzxzbWFsbCAvPicpLmh0bWwodGhpcy5fY29uZmlnLnN1YnRpdGxlKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5jbG9zZSA9PSB0cnVlKSB7XG4gICAgICAgIHZhciB0b2FzdF9jbG9zZSA9ICQoJzxidXR0b24gZGF0YS1kaXNtaXNzPVwidG9hc3RcIiAvPicpLmF0dHIoJ3R5cGUnLCAnYnV0dG9uJykuYWRkQ2xhc3MoJ21sLTIgbWItMSBjbG9zZScpLmF0dHIoJ2FyaWEtbGFiZWwnLCAnQ2xvc2UnKS5hcHBlbmQoJzxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+JylcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcudGl0bGUgPT0gbnVsbCkge1xuICAgICAgICAgIHRvYXN0X2Nsb3NlLnRvZ2dsZUNsYXNzKCdtbC0yIG1sLWF1dG8nKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0b2FzdF9oZWFkZXIuYXBwZW5kKHRvYXN0X2Nsb3NlKVxuICAgICAgfVxuXG4gICAgICB0b2FzdC5hcHBlbmQodG9hc3RfaGVhZGVyKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmJvZHkgIT0gbnVsbCkge1xuICAgICAgICB0b2FzdC5hcHBlbmQoJCgnPGRpdiBjbGFzcz1cInRvYXN0LWJvZHlcIiAvPicpLmh0bWwodGhpcy5fY29uZmlnLmJvZHkpKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnByZXBlbmQodG9hc3QpXG5cbiAgICAgIGNvbnN0IGNyZWF0ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuQ1JFQVRFRClcbiAgICAgICQoJ2JvZHknKS50cmlnZ2VyKGNyZWF0ZWRFdmVudClcblxuICAgICAgdG9hc3QudG9hc3QoJ3Nob3cnKVxuXG5cbiAgICAgIGlmICh0aGlzLl9jb25maWcuYXV0b3JlbW92ZSkge1xuICAgICAgICB0b2FzdC5vbignaGlkZGVuLmJzLnRvYXN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQodGhpcykuZGVsYXkoMjAwKS5yZW1vdmUoKTtcblxuICAgICAgICAgIGNvbnN0IHJlbW92ZWRFdmVudCA9ICQuRXZlbnQoRXZlbnQuUkVNT1ZFRClcbiAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcihyZW1vdmVkRXZlbnQpXG4gICAgICAgIH0pXG4gICAgICB9XG5cblxuICAgIH1cblxuICAgIC8vIFN0YXRpY1xuXG4gICAgX2dldENvbnRhaW5lcklkKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfUklHSFQpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9UT1BfUklHSFQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICByZXR1cm4gU2VsZWN0b3IuQ09OVEFJTkVSX1RPUF9MRUZUO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX1JJR0hUKSB7XG4gICAgICAgIHJldHVybiBTZWxlY3Rvci5DT05UQUlORVJfQk9UVE9NX1JJR0hUO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9jb25maWcucG9zaXRpb24gPT0gUG9zaXRpb24uQk9UVE9NX0xFRlQpIHtcbiAgICAgICAgcmV0dXJuIFNlbGVjdG9yLkNPTlRBSU5FUl9CT1RUT01fTEVGVDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfcHJlcGFyZUNvbnRhaW5lcigpIHtcbiAgICAgIGlmICgkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnPGRpdiAvPicpLmF0dHIoJ2lkJywgdGhpcy5fZ2V0Q29udGFpbmVySWQoKS5yZXBsYWNlKCcjJywgJycpKVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLlRPUF9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX1JJR0hUKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5UT1BfTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuVE9QX0xFRlQpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY29uZmlnLnBvc2l0aW9uID09IFBvc2l0aW9uLkJPVFRPTV9SSUdIVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX1JJR0hUKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5wb3NpdGlvbiA9PSBQb3NpdGlvbi5CT1RUT01fTEVGVCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhDbGFzc05hbWUuQk9UVE9NX0xFRlQpXG4gICAgICAgIH1cblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5maXhlZCkge1xuICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLmFkZENsYXNzKCdmaXhlZCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMuX2dldENvbnRhaW5lcklkKCkpLnJlbW92ZUNsYXNzKCdmaXhlZCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGljXG5cbiAgICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShvcHRpb24sIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IF9vcHRpb25zID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGNvbmZpZylcbiAgICAgICAgdmFyIHRvYXN0ID0gbmV3IFRvYXN0cygkKHRoaXMpLCBfb3B0aW9ucylcblxuICAgICAgICBpZiAob3B0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgICAgIHRvYXN0W29wdGlvbl0oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBqUXVlcnkgQVBJXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICovXG5cbiAgJC5mbltOQU1FXSA9IFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4gICQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBUb2FzdHNcbiAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ICA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gICAgcmV0dXJuIFRvYXN0cy5falF1ZXJ5SW50ZXJmYWNlXG4gIH1cblxuICByZXR1cm4gVG9hc3RzXG59KShqUXVlcnkpXG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0c1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICghU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEgpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIHF1b3QgPSAvXCIvZztcblxuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVodG1sXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBOdW1iZXIuaXNJbnRlZ2VyYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci5pc2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KSB7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWludGVnZXInKTtcblxuLy8gYE51bWJlci5pc0ludGVnZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbnVtYmVyLmlzaW50ZWdlclxuJCh7IHRhcmdldDogJ051bWJlcicsIHN0YXQ6IHRydWUgfSwge1xuICBpc0ludGVnZXI6IGlzSW50ZWdlclxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUtleXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMgfSwge1xuICBrZXlzOiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXModG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVIVE1MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1odG1sJyk7XG52YXIgZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctaHRtbC1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuZml4ZWRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5maXhlZFxuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ0hUTUxNZXRob2QoJ2ZpeGVkJykgfSwge1xuICBmaXhlZDogZnVuY3Rpb24gZml4ZWQoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ3R0JywgJycsICcnKTtcbiAgfVxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=