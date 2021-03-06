/**
 * Table of Contents
 *
 *  1. jQuery UI Core
 *  2. jQuery UI Widget
 *  3. jQuery UI Mouse
 *  4. jQuery UI Draggable
 *  5. jQuery UI Datepicker
 *  6. jQuery Cookie Plugin
 *  7. jQuery blockUI
 *
 */

/*!
 * 1. jQuery UI Core
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!(function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  function b(b, d) {
    var e,
      f,
      g,
      h = b.nodeName.toLowerCase();
    return "area" === h
      ? ((e = b.parentNode),
        (f = e.name),
        !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) &&
          ((g = a("img[usemap='#" + f + "']")[0]), !!g && c(g)))
      : (/^(input|select|textarea|button|object)$/.test(h)
          ? !b.disabled
          : "a" === h
          ? b.href || d
          : d) && c(b);
  }
  function c(b) {
    return (
      a.expr.filters.visible(b) &&
      !a(b)
        .parents()
        .addBack()
        .filter(function () {
          return "hidden" === a.css(this, "visibility");
        }).length
    );
  }
  (a.ui = a.ui || {}),
    a.extend(a.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    a.fn.extend({
      scrollParent: function (b) {
        var c = this.css("position"),
          d = "absolute" === c,
          e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          f = this.parents()
            .filter(function () {
              var b = a(this);
              return (
                (!d || "static" !== b.css("position")) &&
                e.test(
                  b.css("overflow") + b.css("overflow-y") + b.css("overflow-x")
                )
              );
            })
            .eq(0);
        return "fixed" !== c && f.length
          ? f
          : a(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var a = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++a);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
        });
      },
    }),
    a.extend(a.expr[":"], {
      data: a.expr.createPseudo
        ? a.expr.createPseudo(function (b) {
            return function (c) {
              return !!a.data(c, b);
            };
          })
        : function (b, c, d) {
            return !!a.data(b, d[3]);
          },
      focusable: function (c) {
        return b(c, !isNaN(a.attr(c, "tabindex")));
      },
      tabbable: function (c) {
        var d = a.attr(c, "tabindex"),
          e = isNaN(d);
        return (e || d >= 0) && b(c, !e);
      },
    }),
    a("<a>").outerWidth(1).jquery ||
      a.each(["Width", "Height"], function (b, c) {
        function d(b, c, d, f) {
          return (
            a.each(e, function () {
              (c -= parseFloat(a.css(b, "padding" + this)) || 0),
                d &&
                  (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0),
                f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
            }),
            c
          );
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
          f = c.toLowerCase(),
          g = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight,
          };
        (a.fn["inner" + c] = function (b) {
          return void 0 === b
            ? g["inner" + c].call(this)
            : this.each(function () {
                a(this).css(f, d(this, b) + "px");
              });
        }),
          (a.fn["outer" + c] = function (b, e) {
            return "number" != typeof b
              ? g["outer" + c].call(this, b)
              : this.each(function () {
                  a(this).css(f, d(this, b, !0, e) + "px");
                });
          });
      }),
    a.fn.addBack ||
      (a.fn.addBack = function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      }),
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (a.fn.removeData = (function (b) {
        return function (c) {
          return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
        };
      })(a.fn.removeData)),
    (a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    a.fn.extend({
      focus: (function (b) {
        return function (c, d) {
          return "number" == typeof c
            ? this.each(function () {
                var b = this;
                setTimeout(function () {
                  a(b).focus(), d && d.call(b);
                }, c);
              })
            : b.apply(this, arguments);
        };
      })(a.fn.focus),
      disableSelection: (function () {
        var a =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.bind(a + ".ui-disableSelection", function (a) {
            a.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function (b) {
        if (void 0 !== b) return this.css("zIndex", b);
        if (this.length)
          for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
            if (
              ((c = e.css("position")),
              ("absolute" === c || "relative" === c || "fixed" === c) &&
                ((d = parseInt(e.css("zIndex"), 10)), !isNaN(d) && 0 !== d))
            )
              return d;
            e = e.parent();
          }
        return 0;
      },
    }),
    (a.ui.plugin = {
      add: function (b, c, d) {
        var e,
          f = a.ui[b].prototype;
        for (e in d)
          (f.plugins[e] = f.plugins[e] || []), f.plugins[e].push([c, d[e]]);
      },
      call: function (a, b, c, d) {
        var e,
          f = a.plugins[b];
        if (
          f &&
          (d ||
            (a.element[0].parentNode &&
              11 !== a.element[0].parentNode.nodeType))
        )
          for (e = 0; e < f.length; e++)
            a.options[f[e][0]] && f[e][1].apply(a.element, c);
      },
    });
});

/*!
 * 2. jQuery UI Widget
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!(function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  var b = 0,
    c = Array.prototype.slice;
  return (
    (a.cleanData = (function (b) {
      return function (c) {
        var d, e, f;
        for (f = 0; null != (e = c[f]); f++)
          try {
            (d = a._data(e, "events")),
              d && d.remove && a(e).triggerHandler("remove");
          } catch (g) {}
        b(c);
      };
    })(a.cleanData)),
    (a.widget = function (b, c, d) {
      var e,
        f,
        g,
        h,
        i = {},
        j = b.split(".")[0];
      return (
        (b = b.split(".")[1]),
        (e = j + "-" + b),
        d || ((d = c), (c = a.Widget)),
        (a.expr[":"][e.toLowerCase()] = function (b) {
          return !!a.data(b, e);
        }),
        (a[j] = a[j] || {}),
        (f = a[j][b]),
        (g = a[j][b] = function (a, b) {
          return this._createWidget
            ? void (arguments.length && this._createWidget(a, b))
            : new g(a, b);
        }),
        a.extend(g, f, {
          version: d.version,
          _proto: a.extend({}, d),
          _childConstructors: [],
        }),
        (h = new c()),
        (h.options = a.widget.extend({}, h.options)),
        a.each(d, function (b, d) {
          return a.isFunction(d)
            ? void (i[b] = (function () {
                var a = function () {
                    return c.prototype[b].apply(this, arguments);
                  },
                  e = function (a) {
                    return c.prototype[b].apply(this, a);
                  };
                return function () {
                  var b,
                    c = this._super,
                    f = this._superApply;
                  return (
                    (this._super = a),
                    (this._superApply = e),
                    (b = d.apply(this, arguments)),
                    (this._super = c),
                    (this._superApply = f),
                    b
                  );
                };
              })())
            : void (i[b] = d);
        }),
        (g.prototype = a.widget.extend(
          h,
          { widgetEventPrefix: f ? h.widgetEventPrefix || b : b },
          i,
          { constructor: g, namespace: j, widgetName: b, widgetFullName: e }
        )),
        f
          ? (a.each(f._childConstructors, function (b, c) {
              var d = c.prototype;
              a.widget(d.namespace + "." + d.widgetName, g, c._proto);
            }),
            delete f._childConstructors)
          : c._childConstructors.push(g),
        a.widget.bridge(b, g),
        g
      );
    }),
    (a.widget.extend = function (b) {
      for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
        for (d in f[g])
          (e = f[g][d]),
            f[g].hasOwnProperty(d) &&
              void 0 !== e &&
              (a.isPlainObject(e)
                ? (b[d] = a.isPlainObject(b[d])
                    ? a.widget.extend({}, b[d], e)
                    : a.widget.extend({}, e))
                : (b[d] = e));
      return b;
    }),
    (a.widget.bridge = function (b, d) {
      var e = d.prototype.widgetFullName || b;
      a.fn[b] = function (f) {
        var g = "string" == typeof f,
          h = c.call(arguments, 1),
          i = this;
        return (
          g
            ? this.each(function () {
                var c,
                  d = a.data(this, e);
                return "instance" === f
                  ? ((i = d), !1)
                  : d
                  ? a.isFunction(d[f]) && "_" !== f.charAt(0)
                    ? ((c = d[f].apply(d, h)),
                      c !== d && void 0 !== c
                        ? ((i = c && c.jquery ? i.pushStack(c.get()) : c), !1)
                        : void 0)
                    : a.error(
                        "no such method '" +
                          f +
                          "' for " +
                          b +
                          " widget instance"
                      )
                  : a.error(
                      "cannot call methods on " +
                        b +
                        " prior to initialization; attempted to call method '" +
                        f +
                        "'"
                    );
              })
            : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))),
              this.each(function () {
                var b = a.data(this, e);
                b
                  ? (b.option(f || {}), b._init && b._init())
                  : a.data(this, e, new d(f, this));
              })),
          i
        );
      };
    }),
    (a.Widget = function () {}),
    (a.Widget._childConstructors = []),
    (a.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (c, d) {
        (d = a(d || this.defaultElement || this)[0]),
          (this.element = a(d)),
          (this.uuid = b++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = a()),
          (this.hoverable = a()),
          (this.focusable = a()),
          d !== this &&
            (a.data(d, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (a) {
                a.target === d && this.destroy();
              },
            }),
            (this.document = a(d.style ? d.ownerDocument : d.document || d)),
            (this.window = a(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = a.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            c
          )),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: a.noop,
      _getCreateEventData: a.noop,
      _create: a.noop,
      _init: a.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(a.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: a.noop,
      widget: function () {
        return this.element;
      },
      option: function (b, c) {
        var d,
          e,
          f,
          g = b;
        if (0 === arguments.length) return a.widget.extend({}, this.options);
        if ("string" == typeof b)
          if (((g = {}), (d = b.split(".")), (b = d.shift()), d.length)) {
            for (
              e = g[b] = a.widget.extend({}, this.options[b]), f = 0;
              f < d.length - 1;
              f++
            )
              (e[d[f]] = e[d[f]] || {}), (e = e[d[f]]);
            if (((b = d.pop()), 1 === arguments.length))
              return void 0 === e[b] ? null : e[b];
            e[b] = c;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[b] ? null : this.options[b];
            g[b] = c;
          }
        return this._setOptions(g), this;
      },
      _setOptions: function (a) {
        var b;
        for (b in a) this._setOption(b, a[b]);
        return this;
      },
      _setOption: function (a, b) {
        return (
          (this.options[a] = b),
          "disabled" === a &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b),
            b &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (b, c, d) {
        var e,
          f = this;
        "boolean" != typeof b && ((d = c), (c = b), (b = !1)),
          d
            ? ((c = e = a(c)), (this.bindings = this.bindings.add(c)))
            : ((d = c), (c = this.element), (e = this.widget())),
          a.each(d, function (d, g) {
            function h() {
              if (
                b ||
                (f.options.disabled !== !0 &&
                  !a(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof g ? f[g] : g).apply(f, arguments);
            }
            "string" != typeof g &&
              (h.guid = g.guid = g.guid || h.guid || a.guid++);
            var i = d.match(/^([\w:-]*)\s*(.*)$/),
              j = i[1] + f.eventNamespace,
              k = i[2];
            k ? e.delegate(k, j, h) : c.bind(j, h);
          });
      },
      _off: function (b, c) {
        (c =
          (c || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          b.unbind(c).undelegate(c),
          (this.bindings = a(this.bindings.not(b).get())),
          (this.focusable = a(this.focusable.not(b).get())),
          (this.hoverable = a(this.hoverable.not(b).get()));
      },
      _delay: function (a, b) {
        function c() {
          return ("string" == typeof a ? d[a] : a).apply(d, arguments);
        }
        var d = this;
        return setTimeout(c, b || 0);
      },
      _hoverable: function (b) {
        (this.hoverable = this.hoverable.add(b)),
          this._on(b, {
            mouseenter: function (b) {
              a(b.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (b) {
              a(b.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (b) {
        (this.focusable = this.focusable.add(b)),
          this._on(b, {
            focusin: function (b) {
              a(b.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (b) {
              a(b.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (b, c, d) {
        var e,
          f,
          g = this.options[b];
        if (
          ((d = d || {}),
          (c = a.Event(c)),
          (c.type = (b === this.widgetEventPrefix
            ? b
            : this.widgetEventPrefix + b
          ).toLowerCase()),
          (c.target = this.element[0]),
          (f = c.originalEvent))
        )
          for (e in f) e in c || (c[e] = f[e]);
        return (
          this.element.trigger(c, d),
          !(
            (a.isFunction(g) &&
              g.apply(this.element[0], [c].concat(d)) === !1) ||
            c.isDefaultPrevented()
          )
        );
      },
    }),
    a.each({ show: "fadeIn", hide: "fadeOut" }, function (b, c) {
      a.Widget.prototype["_" + b] = function (d, e, f) {
        "string" == typeof e && (e = { effect: e });
        var g,
          h = e ? (e === !0 || "number" == typeof e ? c : e.effect || c) : b;
        (e = e || {}),
          "number" == typeof e && (e = { duration: e }),
          (g = !a.isEmptyObject(e)),
          (e.complete = f),
          e.delay && d.delay(e.delay),
          g && a.effects && a.effects.effect[h]
            ? d[b](e)
            : h !== b && d[h]
            ? d[h](e.duration, e.easing, f)
            : d.queue(function (c) {
                a(this)[b](), f && f.call(d[0]), c();
              });
      };
    }),
    a.widget
  );
});

/*!
 * 3. jQuery UI Mouse
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./widget"], a)
    : a(jQuery);
})(function (a) {
  var b = !1;
  return (
    a(document).mouseup(function () {
      b = !1;
    }),
    a.widget("ui.mouse", {
      version: "1.11.4",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var b = this;
        this.element
          .bind("mousedown." + this.widgetName, function (a) {
            return b._mouseDown(a);
          })
          .bind("click." + this.widgetName, function (c) {
            if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent"))
              return (
                a.removeData(c.target, b.widgetName + ".preventClickEvent"),
                c.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (c) {
        if (!b) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(c),
            (this._mouseDownEvent = c);
          var d = this,
            e = 1 === c.which,
            f =
              !("string" != typeof this.options.cancel || !c.target.nodeName) &&
              a(c.target).closest(this.options.cancel).length;
          return (
            !(e && !f && this._mouseCapture(c)) ||
            ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                d.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(c) &&
            this._mouseDelayMet(c) &&
            ((this._mouseStarted = this._mouseStart(c) !== !1),
            !this._mouseStarted)
              ? (c.preventDefault(), !0)
              : (!0 ===
                  a.data(c.target, this.widgetName + ".preventClickEvent") &&
                  a.removeData(
                    c.target,
                    this.widgetName + ".preventClickEvent"
                  ),
                (this._mouseMoveDelegate = function (a) {
                  return d._mouseMove(a);
                }),
                (this._mouseUpDelegate = function (a) {
                  return d._mouseUp(a);
                }),
                this.document
                  .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                c.preventDefault(),
                (b = !0),
                !0))
          );
        }
      },
      _mouseMove: function (b) {
        if (this._mouseMoved) {
          if (
            a.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !b.button
          )
            return this._mouseUp(b);
          if (!b.which) return this._mouseUp(b);
        }
        return (
          (b.which || b.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(b), b.preventDefault())
            : (this._mouseDistanceMet(b) &&
                this._mouseDelayMet(b) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, b) !== !1),
                this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (c) {
        return (
          this.document
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            c.target === this._mouseDownEvent.target &&
              a.data(c.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(c)),
          (b = !1),
          !1
        );
      },
      _mouseDistanceMet: function (a) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - a.pageX),
            Math.abs(this._mouseDownEvent.pageY - a.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    })
  );
});

/*!
 * 4. jQuery UI Draggable
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./core", "./mouse", "./widget"], a)
    : a(jQuery);
})(function (a) {
  return (
    a.widget("ui.draggable", a.ui.mouse, {
      version: "1.11.4",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" === this.options.helper && this._setPositionRelative(),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._setHandleClassName(),
          this._mouseInit();
      },
      _setOption: function (a, b) {
        this._super(a, b),
          "handle" === a &&
            (this._removeHandleClassName(), this._setHandleClassName());
      },
      _destroy: function () {
        return (this.helper || this.element).is(".ui-draggable-dragging")
          ? void (this.destroyOnClear = !0)
          : (this.element.removeClass(
              "ui-draggable ui-draggable-dragging ui-draggable-disabled"
            ),
            this._removeHandleClassName(),
            void this._mouseDestroy());
      },
      _mouseCapture: function (b) {
        var c = this.options;
        return (
          this._blurActiveElement(b),
          !(
            this.helper ||
            c.disabled ||
            a(b.target).closest(".ui-resizable-handle").length > 0
          ) &&
            ((this.handle = this._getHandle(b)),
            !!this.handle &&
              (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix),
              !0))
        );
      },
      _blockFrames: function (b) {
        this.iframeBlocks = this.document.find(b).map(function () {
          var b = a(this);
          return a("<div>")
            .css("position", "absolute")
            .appendTo(b.parent())
            .outerWidth(b.outerWidth())
            .outerHeight(b.outerHeight())
            .offset(b.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _blurActiveElement: function (b) {
        var c = this.document[0];
        if (this.handleElement.is(b.target))
          try {
            c.activeElement &&
              "body" !== c.activeElement.nodeName.toLowerCase() &&
              a(c.activeElement).blur();
          } catch (d) {}
      },
      _mouseStart: function (b) {
        var c = this.options;
        return (
          (this.helper = this._createHelper(b)),
          this.helper.addClass("ui-draggable-dragging"),
          this._cacheHelperProportions(),
          a.ui.ddmanager && (a.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent(!0)),
          (this.offsetParent = this.helper.offsetParent()),
          (this.hasFixedAncestor =
            this.helper.parents().filter(function () {
              return "fixed" === a(this).css("position");
            }).length > 0),
          (this.positionAbs = this.element.offset()),
          this._refreshOffsets(b),
          (this.originalPosition = this.position = this._generatePosition(
            b,
            !1
          )),
          (this.originalPageX = b.pageX),
          (this.originalPageY = b.pageY),
          c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
          this._setContainment(),
          this._trigger("start", b) === !1
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              a.ui.ddmanager &&
                !c.dropBehaviour &&
                a.ui.ddmanager.prepareOffsets(this, b),
              this._normalizeRightBottom(),
              this._mouseDrag(b, !0),
              a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b),
              !0)
        );
      },
      _refreshOffsets: function (a) {
        (this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
          (this.offset.click = {
            left: a.pageX - this.offset.left,
            top: a.pageY - this.offset.top,
          });
      },
      _mouseDrag: function (b, c) {
        if (
          (this.hasFixedAncestor &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(b, !0)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !c)
        ) {
          var d = this._uiHash();
          if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
          this.position = d.position;
        }
        return (
          (this.helper[0].style.left = this.position.left + "px"),
          (this.helper[0].style.top = this.position.top + "px"),
          a.ui.ddmanager && a.ui.ddmanager.drag(this, b),
          !1
        );
      },
      _mouseStop: function (b) {
        var c = this,
          d = !1;
        return (
          a.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (d = a.ui.ddmanager.drop(this, b)),
          this.dropped && ((d = this.dropped), (this.dropped = !1)),
          ("invalid" === this.options.revert && !d) ||
          ("valid" === this.options.revert && d) ||
          this.options.revert === !0 ||
          (a.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, d))
            ? a(this.helper).animate(
                this.originalPosition,
                parseInt(this.options.revertDuration, 10),
                function () {
                  c._trigger("stop", b) !== !1 && c._clear();
                }
              )
            : this._trigger("stop", b) !== !1 && this._clear(),
          !1
        );
      },
      _mouseUp: function (b) {
        return (
          this._unblockFrames(),
          a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
          this.handleElement.is(b.target) && this.element.focus(),
          a.ui.mouse.prototype._mouseUp.call(this, b)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (b) {
        return (
          !this.options.handle ||
          !!a(b.target).closest(this.element.find(this.options.handle)).length
        );
      },
      _setHandleClassName: function () {
        (this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element),
          this.handleElement.addClass("ui-draggable-handle");
      },
      _removeHandleClassName: function () {
        this.handleElement.removeClass("ui-draggable-handle");
      },
      _createHelper: function (b) {
        var c = this.options,
          d = a.isFunction(c.helper),
          e = d
            ? a(c.helper.apply(this.element[0], [b]))
            : "clone" === c.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          e.parents("body").length ||
            e.appendTo(
              "parent" === c.appendTo ? this.element[0].parentNode : c.appendTo
            ),
          d && e[0] === this.element[0] && this._setPositionRelative(),
          e[0] === this.element[0] ||
            /(fixed|absolute)/.test(e.css("position")) ||
            e.css("position", "absolute"),
          e
        );
      },
      _setPositionRelative: function () {
        /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative");
      },
      _adjustOffsetFromHelper: function (b) {
        "string" == typeof b && (b = b.split(" ")),
          a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
          "left" in b && (this.offset.click.left = b.left + this.margins.left),
          "right" in b &&
            (this.offset.click.left =
              this.helperProportions.width - b.right + this.margins.left),
          "top" in b && (this.offset.click.top = b.top + this.margins.top),
          "bottom" in b &&
            (this.offset.click.top =
              this.helperProportions.height - b.bottom + this.margins.top);
      },
      _isRootNode: function (a) {
        return /(html|body)/i.test(a.tagName) || a === this.document[0];
      },
      _getParentOffset: function () {
        var b = this.offsetParent.offset(),
          c = this.document[0];
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== c &&
            a.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((b.left += this.scrollParent.scrollLeft()),
            (b.top += this.scrollParent.scrollTop())),
          this._isRootNode(this.offsetParent[0]) && (b = { top: 0, left: 0 }),
          {
            top:
              b.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              b.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
        var a = this.element.position(),
          b = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            a.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            (b ? 0 : this.scrollParent.scrollTop()),
          left:
            a.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            (b ? 0 : this.scrollParent.scrollLeft()),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var b,
          c,
          d,
          e = this.options,
          f = this.document[0];
        return (
          (this.relativeContainer = null),
          e.containment
            ? "window" === e.containment
              ? void (this.containment = [
                  a(window).scrollLeft() -
                    this.offset.relative.left -
                    this.offset.parent.left,
                  a(window).scrollTop() -
                    this.offset.relative.top -
                    this.offset.parent.top,
                  a(window).scrollLeft() +
                    a(window).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  a(window).scrollTop() +
                    (a(window).height() || f.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
              : "document" === e.containment
              ? void (this.containment = [
                  0,
                  0,
                  a(f).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (a(f).height() || f.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
              : e.containment.constructor === Array
              ? void (this.containment = e.containment)
              : ("parent" === e.containment &&
                  (e.containment = this.helper[0].parentNode),
                (c = a(e.containment)),
                (d = c[0]),
                void (
                  d &&
                  ((b = /(scroll|auto)/.test(c.css("overflow"))),
                  (this.containment = [
                    (parseInt(c.css("borderLeftWidth"), 10) || 0) +
                      (parseInt(c.css("paddingLeft"), 10) || 0),
                    (parseInt(c.css("borderTopWidth"), 10) || 0) +
                      (parseInt(c.css("paddingTop"), 10) || 0),
                    (b
                      ? Math.max(d.scrollWidth, d.offsetWidth)
                      : d.offsetWidth) -
                      (parseInt(c.css("borderRightWidth"), 10) || 0) -
                      (parseInt(c.css("paddingRight"), 10) || 0) -
                      this.helperProportions.width -
                      this.margins.left -
                      this.margins.right,
                    (b
                      ? Math.max(d.scrollHeight, d.offsetHeight)
                      : d.offsetHeight) -
                      (parseInt(c.css("borderBottomWidth"), 10) || 0) -
                      (parseInt(c.css("paddingBottom"), 10) || 0) -
                      this.helperProportions.height -
                      this.margins.top -
                      this.margins.bottom,
                  ]),
                  (this.relativeContainer = c))
                ))
            : void (this.containment = null)
        );
      },
      _convertPositionTo: function (a, b) {
        b || (b = this.position);
        var c = "absolute" === a ? 1 : -1,
          d = this._isRootNode(this.scrollParent[0]);
        return {
          top:
            b.top +
            this.offset.relative.top * c +
            this.offset.parent.top * c -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.top
              : d
              ? 0
              : this.offset.scroll.top) *
              c,
          left:
            b.left +
            this.offset.relative.left * c +
            this.offset.parent.left * c -
            ("fixed" === this.cssPosition
              ? -this.offset.scroll.left
              : d
              ? 0
              : this.offset.scroll.left) *
              c,
        };
      },
      _generatePosition: function (a, b) {
        var c,
          d,
          e,
          f,
          g = this.options,
          h = this._isRootNode(this.scrollParent[0]),
          i = a.pageX,
          j = a.pageY;
        return (
          (h && this.offset.scroll) ||
            (this.offset.scroll = {
              top: this.scrollParent.scrollTop(),
              left: this.scrollParent.scrollLeft(),
            }),
          b &&
            (this.containment &&
              (this.relativeContainer
                ? ((d = this.relativeContainer.offset()),
                  (c = [
                    this.containment[0] + d.left,
                    this.containment[1] + d.top,
                    this.containment[2] + d.left,
                    this.containment[3] + d.top,
                  ]))
                : (c = this.containment),
              a.pageX - this.offset.click.left < c[0] &&
                (i = c[0] + this.offset.click.left),
              a.pageY - this.offset.click.top < c[1] &&
                (j = c[1] + this.offset.click.top),
              a.pageX - this.offset.click.left > c[2] &&
                (i = c[2] + this.offset.click.left),
              a.pageY - this.offset.click.top > c[3] &&
                (j = c[3] + this.offset.click.top)),
            g.grid &&
              ((e = g.grid[1]
                ? this.originalPageY +
                  Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1]
                : this.originalPageY),
              (j = c
                ? e - this.offset.click.top >= c[1] ||
                  e - this.offset.click.top > c[3]
                  ? e
                  : e - this.offset.click.top >= c[1]
                  ? e - g.grid[1]
                  : e + g.grid[1]
                : e),
              (f = g.grid[0]
                ? this.originalPageX +
                  Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0]
                : this.originalPageX),
              (i = c
                ? f - this.offset.click.left >= c[0] ||
                  f - this.offset.click.left > c[2]
                  ? f
                  : f - this.offset.click.left >= c[0]
                  ? f - g.grid[0]
                  : f + g.grid[0]
                : f)),
            "y" === g.axis && (i = this.originalPageX),
            "x" === g.axis && (j = this.originalPageY)),
          {
            top:
              j -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : h
                ? 0
                : this.offset.scroll.top),
            left:
              i -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : h
                ? 0
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1),
          this.destroyOnClear && this.destroy();
      },
      _normalizeRightBottom: function () {
        "y" !== this.options.axis &&
          "auto" !== this.helper.css("right") &&
          (this.helper.width(this.helper.width()),
          this.helper.css("right", "auto")),
          "x" !== this.options.axis &&
            "auto" !== this.helper.css("bottom") &&
            (this.helper.height(this.helper.height()),
            this.helper.css("bottom", "auto"));
      },
      _trigger: function (b, c, d) {
        return (
          (d = d || this._uiHash()),
          a.ui.plugin.call(this, b, [c, d, this], !0),
          /^(drag|start|stop)/.test(b) &&
            ((this.positionAbs = this._convertPositionTo("absolute")),
            (d.offset = this.positionAbs)),
          a.Widget.prototype._trigger.call(this, b, c, d)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
    a.ui.plugin.add("draggable", "connectToSortable", {
      start: function (b, c, d) {
        var e = a.extend({}, c, { item: d.element });
        (d.sortables = []),
          a(d.options.connectToSortable).each(function () {
            var c = a(this).sortable("instance");
            c &&
              !c.options.disabled &&
              (d.sortables.push(c),
              c.refreshPositions(),
              c._trigger("activate", b, e));
          });
      },
      stop: function (b, c, d) {
        var e = a.extend({}, c, { item: d.element });
        (d.cancelHelperRemoval = !1),
          a.each(d.sortables, function () {
            var a = this;
            a.isOver
              ? ((a.isOver = 0),
                (d.cancelHelperRemoval = !0),
                (a.cancelHelperRemoval = !1),
                (a._storedCSS = {
                  position: a.placeholder.css("position"),
                  top: a.placeholder.css("top"),
                  left: a.placeholder.css("left"),
                }),
                a._mouseStop(b),
                (a.options.helper = a.options._helper))
              : ((a.cancelHelperRemoval = !0), a._trigger("deactivate", b, e));
          });
      },
      drag: function (b, c, d) {
        a.each(d.sortables, function () {
          var e = !1,
            f = this;
          (f.positionAbs = d.positionAbs),
            (f.helperProportions = d.helperProportions),
            (f.offset.click = d.offset.click),
            f._intersectsWith(f.containerCache) &&
              ((e = !0),
              a.each(d.sortables, function () {
                return (
                  (this.positionAbs = d.positionAbs),
                  (this.helperProportions = d.helperProportions),
                  (this.offset.click = d.offset.click),
                  this !== f &&
                    this._intersectsWith(this.containerCache) &&
                    a.contains(f.element[0], this.element[0]) &&
                    (e = !1),
                  e
                );
              })),
            e
              ? (f.isOver ||
                  ((f.isOver = 1),
                  (d._parent = c.helper.parent()),
                  (f.currentItem = c.helper
                    .appendTo(f.element)
                    .data("ui-sortable-item", !0)),
                  (f.options._helper = f.options.helper),
                  (f.options.helper = function () {
                    return c.helper[0];
                  }),
                  (b.target = f.currentItem[0]),
                  f._mouseCapture(b, !0),
                  f._mouseStart(b, !0, !0),
                  (f.offset.click.top = d.offset.click.top),
                  (f.offset.click.left = d.offset.click.left),
                  (f.offset.parent.left -=
                    d.offset.parent.left - f.offset.parent.left),
                  (f.offset.parent.top -=
                    d.offset.parent.top - f.offset.parent.top),
                  d._trigger("toSortable", b),
                  (d.dropped = f.element),
                  a.each(d.sortables, function () {
                    this.refreshPositions();
                  }),
                  (d.currentItem = d.element),
                  (f.fromOutside = d)),
                f.currentItem && (f._mouseDrag(b), (c.position = f.position)))
              : f.isOver &&
                ((f.isOver = 0),
                (f.cancelHelperRemoval = !0),
                (f.options._revert = f.options.revert),
                (f.options.revert = !1),
                f._trigger("out", b, f._uiHash(f)),
                f._mouseStop(b, !0),
                (f.options.revert = f.options._revert),
                (f.options.helper = f.options._helper),
                f.placeholder && f.placeholder.remove(),
                c.helper.appendTo(d._parent),
                d._refreshOffsets(b),
                (c.position = d._generatePosition(b, !0)),
                d._trigger("fromSortable", b),
                (d.dropped = !1),
                a.each(d.sortables, function () {
                  this.refreshPositions();
                }));
        });
      },
    }),
    a.ui.plugin.add("draggable", "cursor", {
      start: function (b, c, d) {
        var e = a("body"),
          f = d.options;
        e.css("cursor") && (f._cursor = e.css("cursor")),
          e.css("cursor", f.cursor);
      },
      stop: function (b, c, d) {
        var e = d.options;
        e._cursor && a("body").css("cursor", e._cursor);
      },
    }),
    a.ui.plugin.add("draggable", "opacity", {
      start: function (b, c, d) {
        var e = a(c.helper),
          f = d.options;
        e.css("opacity") && (f._opacity = e.css("opacity")),
          e.css("opacity", f.opacity);
      },
      stop: function (b, c, d) {
        var e = d.options;
        e._opacity && a(c.helper).css("opacity", e._opacity);
      },
    }),
    a.ui.plugin.add("draggable", "scroll", {
      start: function (a, b, c) {
        c.scrollParentNotHidden ||
          (c.scrollParentNotHidden = c.helper.scrollParent(!1)),
          c.scrollParentNotHidden[0] !== c.document[0] &&
            "HTML" !== c.scrollParentNotHidden[0].tagName &&
            (c.overflowOffset = c.scrollParentNotHidden.offset());
      },
      drag: function (b, c, d) {
        var e = d.options,
          f = !1,
          g = d.scrollParentNotHidden[0],
          h = d.document[0];
        g !== h && "HTML" !== g.tagName
          ? ((e.axis && "x" === e.axis) ||
              (d.overflowOffset.top + g.offsetHeight - b.pageY <
              e.scrollSensitivity
                ? (g.scrollTop = f = g.scrollTop + e.scrollSpeed)
                : b.pageY - d.overflowOffset.top < e.scrollSensitivity &&
                  (g.scrollTop = f = g.scrollTop - e.scrollSpeed)),
            (e.axis && "y" === e.axis) ||
              (d.overflowOffset.left + g.offsetWidth - b.pageX <
              e.scrollSensitivity
                ? (g.scrollLeft = f = g.scrollLeft + e.scrollSpeed)
                : b.pageX - d.overflowOffset.left < e.scrollSensitivity &&
                  (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed)))
          : ((e.axis && "x" === e.axis) ||
              (b.pageY - a(h).scrollTop() < e.scrollSensitivity
                ? (f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed))
                : a(window).height() - (b.pageY - a(h).scrollTop()) <
                    e.scrollSensitivity &&
                  (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))),
            (e.axis && "y" === e.axis) ||
              (b.pageX - a(h).scrollLeft() < e.scrollSensitivity
                ? (f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed))
                : a(window).width() - (b.pageX - a(h).scrollLeft()) <
                    e.scrollSensitivity &&
                  (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))),
          f !== !1 &&
            a.ui.ddmanager &&
            !e.dropBehaviour &&
            a.ui.ddmanager.prepareOffsets(d, b);
      },
    }),
    a.ui.plugin.add("draggable", "snap", {
      start: function (b, c, d) {
        var e = d.options;
        (d.snapElements = []),
          a(
            e.snap.constructor !== String
              ? e.snap.items || ":data(ui-draggable)"
              : e.snap
          ).each(function () {
            var b = a(this),
              c = b.offset();
            this !== d.element[0] &&
              d.snapElements.push({
                item: this,
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: c.top,
                left: c.left,
              });
          });
      },
      drag: function (b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = d.options,
          p = o.snapTolerance,
          q = c.offset.left,
          r = q + d.helperProportions.width,
          s = c.offset.top,
          t = s + d.helperProportions.height;
        for (m = d.snapElements.length - 1; m >= 0; m--)
          (i = d.snapElements[m].left - d.margins.left),
            (j = i + d.snapElements[m].width),
            (k = d.snapElements[m].top - d.margins.top),
            (l = k + d.snapElements[m].height),
            r < i - p ||
            q > j + p ||
            t < k - p ||
            s > l + p ||
            !a.contains(
              d.snapElements[m].item.ownerDocument,
              d.snapElements[m].item
            )
              ? (d.snapElements[m].snapping &&
                  d.options.snap.release &&
                  d.options.snap.release.call(
                    d.element,
                    b,
                    a.extend(d._uiHash(), { snapItem: d.snapElements[m].item })
                  ),
                (d.snapElements[m].snapping = !1))
              : ("inner" !== o.snapMode &&
                  ((e = Math.abs(k - t) <= p),
                  (f = Math.abs(l - s) <= p),
                  (g = Math.abs(i - r) <= p),
                  (h = Math.abs(j - q) <= p),
                  e &&
                    (c.position.top = d._convertPositionTo("relative", {
                      top: k - d.helperProportions.height,
                      left: 0,
                    }).top),
                  f &&
                    (c.position.top = d._convertPositionTo("relative", {
                      top: l,
                      left: 0,
                    }).top),
                  g &&
                    (c.position.left = d._convertPositionTo("relative", {
                      top: 0,
                      left: i - d.helperProportions.width,
                    }).left),
                  h &&
                    (c.position.left = d._convertPositionTo("relative", {
                      top: 0,
                      left: j,
                    }).left)),
                (n = e || f || g || h),
                "outer" !== o.snapMode &&
                  ((e = Math.abs(k - s) <= p),
                  (f = Math.abs(l - t) <= p),
                  (g = Math.abs(i - q) <= p),
                  (h = Math.abs(j - r) <= p),
                  e &&
                    (c.position.top = d._convertPositionTo("relative", {
                      top: k,
                      left: 0,
                    }).top),
                  f &&
                    (c.position.top = d._convertPositionTo("relative", {
                      top: l - d.helperProportions.height,
                      left: 0,
                    }).top),
                  g &&
                    (c.position.left = d._convertPositionTo("relative", {
                      top: 0,
                      left: i,
                    }).left),
                  h &&
                    (c.position.left = d._convertPositionTo("relative", {
                      top: 0,
                      left: j - d.helperProportions.width,
                    }).left)),
                !d.snapElements[m].snapping &&
                  (e || f || g || h || n) &&
                  d.options.snap.snap &&
                  d.options.snap.snap.call(
                    d.element,
                    b,
                    a.extend(d._uiHash(), { snapItem: d.snapElements[m].item })
                  ),
                (d.snapElements[m].snapping = e || f || g || h || n));
      },
    }),
    a.ui.plugin.add("draggable", "stack", {
      start: function (b, c, d) {
        var e,
          f = d.options,
          g = a.makeArray(a(f.stack)).sort(function (b, c) {
            return (
              (parseInt(a(b).css("zIndex"), 10) || 0) -
              (parseInt(a(c).css("zIndex"), 10) || 0)
            );
          });
        g.length &&
          ((e = parseInt(a(g[0]).css("zIndex"), 10) || 0),
          a(g).each(function (b) {
            a(this).css("zIndex", e + b);
          }),
          this.css("zIndex", e + g.length));
      },
    }),
    a.ui.plugin.add("draggable", "zIndex", {
      start: function (b, c, d) {
        var e = a(c.helper),
          f = d.options;
        e.css("zIndex") && (f._zIndex = e.css("zIndex")),
          e.css("zIndex", f.zIndex);
      },
      stop: function (b, c, d) {
        var e = d.options;
        e._zIndex && a(c.helper).css("zIndex", e._zIndex);
      },
    }),
    a.ui.draggable
  );
});

/*!
 * 5. jQuery UI Datepicker
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery", "./core"], a)
    : a(jQuery);
})(function (a) {
  function b(a) {
    for (var b, c; a.length && a[0] !== document; ) {
      if (
        ((b = a.css("position")),
        ("absolute" === b || "relative" === b || "fixed" === b) &&
          ((c = parseInt(a.css("zIndex"), 10)), !isNaN(c) && 0 !== c))
      )
        return c;
      a = a.parent();
    }
    return 0;
  }
  function c() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = "ui-datepicker-div"),
      (this._inlineClass = "ui-datepicker-inline"),
      (this._appendClass = "ui-datepicker-append"),
      (this._triggerClass = "ui-datepicker-trigger"),
      (this._dialogClass = "ui-datepicker-dialog"),
      (this._disableClass = "ui-datepicker-disabled"),
      (this._unselectableClass = "ui-datepicker-unselectable"),
      (this._currentClass = "ui-datepicker-current-day"),
      (this._dayOverClass = "ui-datepicker-days-cell-over"),
      (this.regional = []),
      (this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: "",
      }),
      (this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1,
      }),
      a.extend(this._defaults, this.regional[""]),
      (this.regional.en = a.extend(!0, {}, this.regional[""])),
      (this.regional["en-US"] = a.extend(!0, {}, this.regional.en)),
      (this.dpDiv = d(
        a(
          "<div id='" +
            this._mainDivId +
            "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
        )
      ));
  }
  function d(b) {
    var c =
      "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return b
      .delegate(c, "mouseout", function () {
        a(this).removeClass("ui-state-hover"),
          this.className.indexOf("ui-datepicker-prev") !== -1 &&
            a(this).removeClass("ui-datepicker-prev-hover"),
          this.className.indexOf("ui-datepicker-next") !== -1 &&
            a(this).removeClass("ui-datepicker-next-hover");
      })
      .delegate(c, "mouseover", e);
  }
  function e() {
    a.datepicker._isDisabledDatepicker(
      g.inline ? g.dpDiv.parent()[0] : g.input[0]
    ) ||
      (a(this)
        .parents(".ui-datepicker-calendar")
        .find("a")
        .removeClass("ui-state-hover"),
      a(this).addClass("ui-state-hover"),
      this.className.indexOf("ui-datepicker-prev") !== -1 &&
        a(this).addClass("ui-datepicker-prev-hover"),
      this.className.indexOf("ui-datepicker-next") !== -1 &&
        a(this).addClass("ui-datepicker-next-hover"));
  }
  function f(b, c) {
    a.extend(b, c);
    for (var d in c) null == c[d] && (b[d] = c[d]);
    return b;
  }
  a.extend(a.ui, { datepicker: { version: "1.11.4" } });
  var g;
  return (
    a.extend(c.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (a) {
        return f(this._defaults, a || {}), this;
      },
      _attachDatepicker: function (b, c) {
        var d, e, f;
        (d = b.nodeName.toLowerCase()),
          (e = "div" === d || "span" === d),
          b.id || ((this.uuid += 1), (b.id = "dp" + this.uuid)),
          (f = this._newInst(a(b), e)),
          (f.settings = a.extend({}, c || {})),
          "input" === d
            ? this._connectDatepicker(b, f)
            : e && this._inlineDatepicker(b, f);
      },
      _newInst: function (b, c) {
        var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: e,
          input: b,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: c,
          dpDiv: c
            ? d(
                a(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (b, c) {
        var d = a(b);
        (c.append = a([])),
          (c.trigger = a([])),
          d.hasClass(this.markerClassName) ||
            (this._attachments(d, c),
            d
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp),
            this._autoSize(c),
            a.data(b, "datepicker", c),
            c.settings.disabled && this._disableDatepicker(b));
      },
      _attachments: function (b, c) {
        var d,
          e,
          f,
          g = this._get(c, "appendText"),
          h = this._get(c, "isRTL");
        c.append && c.append.remove(),
          g &&
            ((c.append = a(
              "<span class='" + this._appendClass + "'>" + g + "</span>"
            )),
            b[h ? "before" : "after"](c.append)),
          b.unbind("focus", this._showDatepicker),
          c.trigger && c.trigger.remove(),
          (d = this._get(c, "showOn")),
          ("focus" !== d && "both" !== d) || b.focus(this._showDatepicker),
          ("button" !== d && "both" !== d) ||
            ((e = this._get(c, "buttonText")),
            (f = this._get(c, "buttonImage")),
            (c.trigger = a(
              this._get(c, "buttonImageOnly")
                ? a("<img/>")
                    .addClass(this._triggerClass)
                    .attr({ src: f, alt: e, title: e })
                : a("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      f ? a("<img/>").attr({ src: f, alt: e, title: e }) : e
                    )
            )),
            b[h ? "before" : "after"](c.trigger),
            c.trigger.click(function () {
              return (
                a.datepicker._datepickerShowing &&
                a.datepicker._lastInput === b[0]
                  ? a.datepicker._hideDatepicker()
                  : a.datepicker._datepickerShowing &&
                    a.datepicker._lastInput !== b[0]
                  ? (a.datepicker._hideDatepicker(),
                    a.datepicker._showDatepicker(b[0]))
                  : a.datepicker._showDatepicker(b[0]),
                !1
              );
            }));
      },
      _autoSize: function (a) {
        if (this._get(a, "autoSize") && !a.inline) {
          var b,
            c,
            d,
            e,
            f = new Date(2009, 11, 20),
            g = this._get(a, "dateFormat");
          g.match(/[DM]/) &&
            ((b = function (a) {
              for (c = 0, d = 0, e = 0; e < a.length; e++)
                a[e].length > c && ((c = a[e].length), (d = e));
              return d;
            }),
            f.setMonth(
              b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            f.setDate(
              b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                f.getDay()
            )),
            a.input.attr("size", this._formatDate(a, f).length);
        }
      },
      _inlineDatepicker: function (b, c) {
        var d = a(b);
        d.hasClass(this.markerClassName) ||
          (d.addClass(this.markerClassName).append(c.dpDiv),
          a.data(b, "datepicker", c),
          this._setDate(c, this._getDefaultDate(c), !0),
          this._updateDatepicker(c),
          this._updateAlternate(c),
          c.settings.disabled && this._disableDatepicker(b),
          c.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (b, c, d, e, g) {
        var h,
          i,
          j,
          k,
          l,
          m = this._dialogInst;
        return (
          m ||
            ((this.uuid += 1),
            (h = "dp" + this.uuid),
            (this._dialogInput = a(
              "<input type='text' id='" +
                h +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.keydown(this._doKeyDown),
            a("body").append(this._dialogInput),
            (m = this._dialogInst = this._newInst(this._dialogInput, !1)),
            (m.settings = {}),
            a.data(this._dialogInput[0], "datepicker", m)),
          f(m.settings, e || {}),
          (c = c && c.constructor === Date ? this._formatDate(m, c) : c),
          this._dialogInput.val(c),
          (this._pos = g ? (g.length ? g : [g.pageX, g.pageY]) : null),
          this._pos ||
            ((i = document.documentElement.clientWidth),
            (j = document.documentElement.clientHeight),
            (k =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (l = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [i / 2 - 100 + k, j / 2 - 150 + l])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (m.settings.onSelect = d),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          a.blockUI && a.blockUI(this.dpDiv),
          a.data(this._dialogInput[0], "datepicker", m),
          this
        );
      },
      _destroyDatepicker: function (b) {
        var c,
          d = a(b),
          e = a.data(b, "datepicker");
        d.hasClass(this.markerClassName) &&
          ((c = b.nodeName.toLowerCase()),
          a.removeData(b, "datepicker"),
          "input" === c
            ? (e.append.remove(),
              e.trigger.remove(),
              d
                .removeClass(this.markerClassName)
                .unbind("focus", this._showDatepicker)
                .unbind("keydown", this._doKeyDown)
                .unbind("keypress", this._doKeyPress)
                .unbind("keyup", this._doKeyUp))
            : ("div" !== c && "span" !== c) ||
              d.removeClass(this.markerClassName).empty(),
          g === e && (g = null));
      },
      _enableDatepicker: function (b) {
        var c,
          d,
          e = a(b),
          f = a.data(b, "datepicker");
        e.hasClass(this.markerClassName) &&
          ((c = b.nodeName.toLowerCase()),
          "input" === c
            ? ((b.disabled = !1),
              f.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== c && "span" !== c) ||
              ((d = e.children("." + this._inlineClass)),
              d.children().removeClass("ui-state-disabled"),
              d
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = a.map(this._disabledInputs, function (a) {
            return a === b ? null : a;
          })));
      },
      _disableDatepicker: function (b) {
        var c,
          d,
          e = a(b),
          f = a.data(b, "datepicker");
        e.hasClass(this.markerClassName) &&
          ((c = b.nodeName.toLowerCase()),
          "input" === c
            ? ((b.disabled = !0),
              f.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== c && "span" !== c) ||
              ((d = e.children("." + this._inlineClass)),
              d.children().addClass("ui-state-disabled"),
              d
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = a.map(this._disabledInputs, function (a) {
            return a === b ? null : a;
          })),
          (this._disabledInputs[this._disabledInputs.length] = b));
      },
      _isDisabledDatepicker: function (a) {
        if (!a) return !1;
        for (var b = 0; b < this._disabledInputs.length; b++)
          if (this._disabledInputs[b] === a) return !0;
        return !1;
      },
      _getInst: function (b) {
        try {
          return a.data(b, "datepicker");
        } catch (c) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (b, c, d) {
        var e,
          g,
          h,
          i,
          j = this._getInst(b);
        return 2 === arguments.length && "string" == typeof c
          ? "defaults" === c
            ? a.extend({}, a.datepicker._defaults)
            : j
            ? "all" === c
              ? a.extend({}, j.settings)
              : this._get(j, c)
            : null
          : ((e = c || {}),
            "string" == typeof c && ((e = {}), (e[c] = d)),
            void (
              j &&
              (this._curInst === j && this._hideDatepicker(),
              (g = this._getDateDatepicker(b, !0)),
              (h = this._getMinMaxDate(j, "min")),
              (i = this._getMinMaxDate(j, "max")),
              f(j.settings, e),
              null !== h &&
                void 0 !== e.dateFormat &&
                void 0 === e.minDate &&
                (j.settings.minDate = this._formatDate(j, h)),
              null !== i &&
                void 0 !== e.dateFormat &&
                void 0 === e.maxDate &&
                (j.settings.maxDate = this._formatDate(j, i)),
              "disabled" in e &&
                (e.disabled
                  ? this._disableDatepicker(b)
                  : this._enableDatepicker(b)),
              this._attachments(a(b), j),
              this._autoSize(j),
              this._setDate(j, g),
              this._updateAlternate(j),
              this._updateDatepicker(j))
            ));
      },
      _changeDatepicker: function (a, b, c) {
        this._optionDatepicker(a, b, c);
      },
      _refreshDatepicker: function (a) {
        var b = this._getInst(a);
        b && this._updateDatepicker(b);
      },
      _setDateDatepicker: function (a, b) {
        var c = this._getInst(a);
        c &&
          (this._setDate(c, b),
          this._updateDatepicker(c),
          this._updateAlternate(c));
      },
      _getDateDatepicker: function (a, b) {
        var c = this._getInst(a);
        return (
          c && !c.inline && this._setDateFromField(c, b),
          c ? this._getDate(c) : null
        );
      },
      _doKeyDown: function (b) {
        var c,
          d,
          e,
          f = a.datepicker._getInst(b.target),
          g = !0,
          h = f.dpDiv.is(".ui-datepicker-rtl");
        if (((f._keyEvent = !0), a.datepicker._datepickerShowing))
          switch (b.keyCode) {
            case 9:
              a.datepicker._hideDatepicker(), (g = !1);
              break;
            case 13:
              return (
                (e = a(
                  "td." +
                    a.datepicker._dayOverClass +
                    ":not(." +
                    a.datepicker._currentClass +
                    ")",
                  f.dpDiv
                )),
                e[0] &&
                  a.datepicker._selectDay(
                    b.target,
                    f.selectedMonth,
                    f.selectedYear,
                    e[0]
                  ),
                (c = a.datepicker._get(f, "onSelect")),
                c
                  ? ((d = a.datepicker._formatDate(f)),
                    c.apply(f.input ? f.input[0] : null, [d, f]))
                  : a.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              a.datepicker._hideDatepicker();
              break;
            case 33:
              a.datepicker._adjustDate(
                b.target,
                b.ctrlKey
                  ? -a.datepicker._get(f, "stepBigMonths")
                  : -a.datepicker._get(f, "stepMonths"),
                "M"
              );
              break;
            case 34:
              a.datepicker._adjustDate(
                b.target,
                b.ctrlKey
                  ? +a.datepicker._get(f, "stepBigMonths")
                  : +a.datepicker._get(f, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target),
                (g = b.ctrlKey || b.metaKey);
              break;
            case 36:
              (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target),
                (g = b.ctrlKey || b.metaKey);
              break;
            case 37:
              (b.ctrlKey || b.metaKey) &&
                a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"),
                (g = b.ctrlKey || b.metaKey),
                b.originalEvent.altKey &&
                  a.datepicker._adjustDate(
                    b.target,
                    b.ctrlKey
                      ? -a.datepicker._get(f, "stepBigMonths")
                      : -a.datepicker._get(f, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (b.ctrlKey || b.metaKey) &&
                a.datepicker._adjustDate(b.target, -7, "D"),
                (g = b.ctrlKey || b.metaKey);
              break;
            case 39:
              (b.ctrlKey || b.metaKey) &&
                a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"),
                (g = b.ctrlKey || b.metaKey),
                b.originalEvent.altKey &&
                  a.datepicker._adjustDate(
                    b.target,
                    b.ctrlKey
                      ? +a.datepicker._get(f, "stepBigMonths")
                      : +a.datepicker._get(f, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (b.ctrlKey || b.metaKey) &&
                a.datepicker._adjustDate(b.target, 7, "D"),
                (g = b.ctrlKey || b.metaKey);
              break;
            default:
              g = !1;
          }
        else
          36 === b.keyCode && b.ctrlKey
            ? a.datepicker._showDatepicker(this)
            : (g = !1);
        g && (b.preventDefault(), b.stopPropagation());
      },
      _doKeyPress: function (b) {
        var c,
          d,
          e = a.datepicker._getInst(b.target);
        if (a.datepicker._get(e, "constrainInput"))
          return (
            (c = a.datepicker._possibleChars(
              a.datepicker._get(e, "dateFormat")
            )),
            (d = String.fromCharCode(
              null == b.charCode ? b.keyCode : b.charCode
            )),
            b.ctrlKey || b.metaKey || d < " " || !c || c.indexOf(d) > -1
          );
      },
      _doKeyUp: function (b) {
        var c,
          d = a.datepicker._getInst(b.target);
        if (d.input.val() !== d.lastVal)
          try {
            (c = a.datepicker.parseDate(
              a.datepicker._get(d, "dateFormat"),
              d.input ? d.input.val() : null,
              a.datepicker._getFormatConfig(d)
            )),
              c &&
                (a.datepicker._setDateFromField(d),
                a.datepicker._updateAlternate(d),
                a.datepicker._updateDatepicker(d));
          } catch (e) {}
        return !0;
      },
      _showDatepicker: function (c) {
        if (
          ((c = c.target || c),
          "input" !== c.nodeName.toLowerCase() &&
            (c = a("input", c.parentNode)[0]),
          !a.datepicker._isDisabledDatepicker(c) &&
            a.datepicker._lastInput !== c)
        ) {
          var d, e, g, h, i, j, k;
          (d = a.datepicker._getInst(c)),
            a.datepicker._curInst &&
              a.datepicker._curInst !== d &&
              (a.datepicker._curInst.dpDiv.stop(!0, !0),
              d &&
                a.datepicker._datepickerShowing &&
                a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),
            (e = a.datepicker._get(d, "beforeShow")),
            (g = e ? e.apply(c, [c, d]) : {}),
            g !== !1 &&
              (f(d.settings, g),
              (d.lastVal = null),
              (a.datepicker._lastInput = c),
              a.datepicker._setDateFromField(d),
              a.datepicker._inDialog && (c.value = ""),
              a.datepicker._pos ||
                ((a.datepicker._pos = a.datepicker._findPos(c)),
                (a.datepicker._pos[1] += c.offsetHeight)),
              (h = !1),
              a(c)
                .parents()
                .each(function () {
                  return (h |= "fixed" === a(this).css("position")), !h;
                }),
              (i = { left: a.datepicker._pos[0], top: a.datepicker._pos[1] }),
              (a.datepicker._pos = null),
              d.dpDiv.empty(),
              d.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              a.datepicker._updateDatepicker(d),
              (i = a.datepicker._checkOffset(d, i, h)),
              d.dpDiv.css({
                position:
                  a.datepicker._inDialog && a.blockUI
                    ? "static"
                    : h
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: i.left + "px",
                top: i.top + "px",
              }),
              d.inline ||
                ((j = a.datepicker._get(d, "showAnim")),
                (k = a.datepicker._get(d, "duration")),
                d.dpDiv.css("z-index", b(a(c)) + 1),
                (a.datepicker._datepickerShowing = !0),
                a.effects && a.effects.effect[j]
                  ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k)
                  : d.dpDiv[j || "show"](j ? k : null),
                a.datepicker._shouldFocusInput(d) && d.input.focus(),
                (a.datepicker._curInst = d)));
        }
      },
      _updateDatepicker: function (b) {
        (this.maxRows = 4),
          (g = b),
          b.dpDiv.empty().append(this._generateHTML(b)),
          this._attachHandlers(b);
        var c,
          d = this._getNumberOfMonths(b),
          f = d[1],
          h = 17,
          i = b.dpDiv.find("." + this._dayOverClass + " a");
        i.length > 0 && e.apply(i.get(0)),
          b.dpDiv
            .removeClass(
              "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
            )
            .width(""),
          f > 1 &&
            b.dpDiv
              .addClass("ui-datepicker-multi-" + f)
              .css("width", h * f + "em"),
          b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          b === a.datepicker._curInst &&
            a.datepicker._datepickerShowing &&
            a.datepicker._shouldFocusInput(b) &&
            b.input.focus(),
          b.yearshtml &&
            ((c = b.yearshtml),
            setTimeout(function () {
              c === b.yearshtml &&
                b.yearshtml &&
                b.dpDiv
                  .find("select.ui-datepicker-year:first")
                  .replaceWith(b.yearshtml),
                (c = b.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (a) {
        return (
          a.input &&
          a.input.is(":visible") &&
          !a.input.is(":disabled") &&
          !a.input.is(":focus")
        );
      },
      _checkOffset: function (b, c, d) {
        var e = b.dpDiv.outerWidth(),
          f = b.dpDiv.outerHeight(),
          g = b.input ? b.input.outerWidth() : 0,
          h = b.input ? b.input.outerHeight() : 0,
          i =
            document.documentElement.clientWidth +
            (d ? 0 : a(document).scrollLeft()),
          j =
            document.documentElement.clientHeight +
            (d ? 0 : a(document).scrollTop());
        return (
          (c.left -= this._get(b, "isRTL") ? e - g : 0),
          (c.left -=
            d && c.left === b.input.offset().left
              ? a(document).scrollLeft()
              : 0),
          (c.top -=
            d && c.top === b.input.offset().top + h
              ? a(document).scrollTop()
              : 0),
          (c.left -= Math.min(
            c.left,
            c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0
          )),
          (c.top -= Math.min(
            c.top,
            c.top + f > j && j > f ? Math.abs(f + h) : 0
          )),
          c
        );
      },
      _findPos: function (b) {
        for (
          var c, d = this._getInst(b), e = this._get(d, "isRTL");
          b &&
          ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));

        )
          b = b[e ? "previousSibling" : "nextSibling"];
        return (c = a(b).offset()), [c.left, c.top];
      },
      _hideDatepicker: function (b) {
        var c,
          d,
          e,
          f,
          g = this._curInst;
        !g ||
          (b && g !== a.data(b, "datepicker")) ||
          (this._datepickerShowing &&
            ((c = this._get(g, "showAnim")),
            (d = this._get(g, "duration")),
            (e = function () {
              a.datepicker._tidyDialog(g);
            }),
            a.effects && (a.effects.effect[c] || a.effects[c])
              ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e)
              : g.dpDiv[
                  "slideDown" === c
                    ? "slideUp"
                    : "fadeIn" === c
                    ? "fadeOut"
                    : "hide"
                ](c ? d : null, e),
            c || e(),
            (this._datepickerShowing = !1),
            (f = this._get(g, "onClose")),
            f &&
              f.apply(g.input ? g.input[0] : null, [
                g.input ? g.input.val() : "",
                g,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (a) {
        a.dpDiv
          .removeClass(this._dialogClass)
          .unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (b) {
        if (a.datepicker._curInst) {
          var c = a(b.target),
            d = a.datepicker._getInst(c[0]);
          ((c[0].id === a.datepicker._mainDivId ||
            0 !== c.parents("#" + a.datepicker._mainDivId).length ||
            c.hasClass(a.datepicker.markerClassName) ||
            c.closest("." + a.datepicker._triggerClass).length ||
            !a.datepicker._datepickerShowing ||
            (a.datepicker._inDialog && a.blockUI)) &&
            (!c.hasClass(a.datepicker.markerClassName) ||
              a.datepicker._curInst === d)) ||
            a.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function (b, c, d) {
        var e = a(b),
          f = this._getInst(e[0]);
        this._isDisabledDatepicker(e[0]) ||
          (this._adjustInstDate(
            f,
            c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0),
            d
          ),
          this._updateDatepicker(f));
      },
      _gotoToday: function (b) {
        var c,
          d = a(b),
          e = this._getInst(d[0]);
        this._get(e, "gotoCurrent") && e.currentDay
          ? ((e.selectedDay = e.currentDay),
            (e.drawMonth = e.selectedMonth = e.currentMonth),
            (e.drawYear = e.selectedYear = e.currentYear))
          : ((c = new Date()),
            (e.selectedDay = c.getDate()),
            (e.drawMonth = e.selectedMonth = c.getMonth()),
            (e.drawYear = e.selectedYear = c.getFullYear())),
          this._notifyChange(e),
          this._adjustDate(d);
      },
      _selectMonthYear: function (b, c, d) {
        var e = a(b),
          f = this._getInst(e[0]);
        (f["selected" + ("M" === d ? "Month" : "Year")] = f[
          "draw" + ("M" === d ? "Month" : "Year")
        ] = parseInt(c.options[c.selectedIndex].value, 10)),
          this._notifyChange(f),
          this._adjustDate(e);
      },
      _selectDay: function (b, c, d, e) {
        var f,
          g = a(b);
        a(e).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(g[0]) ||
          ((f = this._getInst(g[0])),
          (f.selectedDay = f.currentDay = a("a", e).html()),
          (f.selectedMonth = f.currentMonth = c),
          (f.selectedYear = f.currentYear = d),
          this._selectDate(
            b,
            this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)
          ));
      },
      _clearDate: function (b) {
        var c = a(b);
        this._selectDate(c, "");
      },
      _selectDate: function (b, c) {
        var d,
          e = a(b),
          f = this._getInst(e[0]);
        (c = null != c ? c : this._formatDate(f)),
          f.input && f.input.val(c),
          this._updateAlternate(f),
          (d = this._get(f, "onSelect")),
          d
            ? d.apply(f.input ? f.input[0] : null, [c, f])
            : f.input && f.input.trigger("change"),
          f.inline
            ? this._updateDatepicker(f)
            : (this._hideDatepicker(),
              (this._lastInput = f.input[0]),
              "object" != typeof f.input[0] && f.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (b) {
        var c,
          d,
          e,
          f = this._get(b, "altField");
        f &&
          ((c = this._get(b, "altFormat") || this._get(b, "dateFormat")),
          (d = this._getDate(b)),
          (e = this.formatDate(c, d, this._getFormatConfig(b))),
          a(f).each(function () {
            a(this).val(e);
          }));
      },
      noWeekends: function (a) {
        var b = a.getDay();
        return [b > 0 && b < 6, ""];
      },
      iso8601Week: function (a) {
        var b,
          c = new Date(a.getTime());
        return (
          c.setDate(c.getDate() + 4 - (c.getDay() || 7)),
          (b = c.getTime()),
          c.setMonth(0),
          c.setDate(1),
          Math.floor(Math.round((b - c) / 864e5) / 7) + 1
        );
      },
      parseDate: function (b, c, d) {
        if (null == b || null == c) throw "Invalid arguments";
        if (((c = "object" == typeof c ? c.toString() : c + ""), "" === c))
          return null;
        var e,
          f,
          g,
          h,
          i = 0,
          j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          k =
            "string" != typeof j
              ? j
              : (new Date().getFullYear() % 100) + parseInt(j, 10),
          l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
          m = (d ? d.dayNames : null) || this._defaults.dayNames,
          n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
          o = (d ? d.monthNames : null) || this._defaults.monthNames,
          p = -1,
          q = -1,
          r = -1,
          s = -1,
          t = !1,
          u = function (a) {
            var c = e + 1 < b.length && b.charAt(e + 1) === a;
            return c && e++, c;
          },
          v = function (a) {
            var b = u(a),
              d =
                "@" === a
                  ? 14
                  : "!" === a
                  ? 20
                  : "y" === a && b
                  ? 4
                  : "o" === a
                  ? 3
                  : 2,
              e = "y" === a ? d : 1,
              f = new RegExp("^\\d{" + e + "," + d + "}"),
              g = c.substring(i).match(f);
            if (!g) throw "Missing number at position " + i;
            return (i += g[0].length), parseInt(g[0], 10);
          },
          w = function (b, d, e) {
            var f = -1,
              g = a
                .map(u(b) ? e : d, function (a, b) {
                  return [[b, a]];
                })
                .sort(function (a, b) {
                  return -(a[1].length - b[1].length);
                });
            if (
              (a.each(g, function (a, b) {
                var d = b[1];
                if (c.substr(i, d.length).toLowerCase() === d.toLowerCase())
                  return (f = b[0]), (i += d.length), !1;
              }),
              f !== -1)
            )
              return f + 1;
            throw "Unknown name at position " + i;
          },
          x = function () {
            if (c.charAt(i) !== b.charAt(e))
              throw "Unexpected literal at position " + i;
            i++;
          };
        for (e = 0; e < b.length; e++)
          if (t) "'" !== b.charAt(e) || u("'") ? x() : (t = !1);
          else
            switch (b.charAt(e)) {
              case "d":
                r = v("d");
                break;
              case "D":
                w("D", l, m);
                break;
              case "o":
                s = v("o");
                break;
              case "m":
                q = v("m");
                break;
              case "M":
                q = w("M", n, o);
                break;
              case "y":
                p = v("y");
                break;
              case "@":
                (h = new Date(v("@"))),
                  (p = h.getFullYear()),
                  (q = h.getMonth() + 1),
                  (r = h.getDate());
                break;
              case "!":
                (h = new Date((v("!") - this._ticksTo1970) / 1e4)),
                  (p = h.getFullYear()),
                  (q = h.getMonth() + 1),
                  (r = h.getDate());
                break;
              case "'":
                u("'") ? x() : (t = !0);
                break;
              default:
                x();
            }
        if (i < c.length && ((g = c.substr(i)), !/^\s+/.test(g)))
          throw "Extra/unparsed characters found in date: " + g;
        if (
          (p === -1
            ? (p = new Date().getFullYear())
            : p < 100 &&
              (p +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (p <= k ? 0 : -100)),
          s > -1)
        )
          for (q = 1, r = s; ; ) {
            if (((f = this._getDaysInMonth(p, q - 1)), r <= f)) break;
            q++, (r -= f);
          }
        if (
          ((h = this._daylightSavingAdjust(new Date(p, q - 1, r))),
          h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r)
        )
          throw "Invalid date";
        return h;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (a, b, c) {
        if (!b) return "";
        var d,
          e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          f = (c ? c.dayNames : null) || this._defaults.dayNames,
          g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (c ? c.monthNames : null) || this._defaults.monthNames,
          i = function (b) {
            var c = d + 1 < a.length && a.charAt(d + 1) === b;
            return c && d++, c;
          },
          j = function (a, b, c) {
            var d = "" + b;
            if (i(a)) for (; d.length < c; ) d = "0" + d;
            return d;
          },
          k = function (a, b, c, d) {
            return i(a) ? d[b] : c[b];
          },
          l = "",
          m = !1;
        if (b)
          for (d = 0; d < a.length; d++)
            if (m)
              "'" !== a.charAt(d) || i("'") ? (l += a.charAt(d)) : (m = !1);
            else
              switch (a.charAt(d)) {
                case "d":
                  l += j("d", b.getDate(), 2);
                  break;
                case "D":
                  l += k("D", b.getDay(), e, f);
                  break;
                case "o":
                  l += j(
                    "o",
                    Math.round(
                      (new Date(
                        b.getFullYear(),
                        b.getMonth(),
                        b.getDate()
                      ).getTime() -
                        new Date(b.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  l += j("m", b.getMonth() + 1, 2);
                  break;
                case "M":
                  l += k("M", b.getMonth(), g, h);
                  break;
                case "y":
                  l += i("y")
                    ? b.getFullYear()
                    : (b.getYear() % 100 < 10 ? "0" : "") + (b.getYear() % 100);
                  break;
                case "@":
                  l += b.getTime();
                  break;
                case "!":
                  l += 1e4 * b.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  i("'") ? (l += "'") : (m = !0);
                  break;
                default:
                  l += a.charAt(d);
              }
        return l;
      },
      _possibleChars: function (a) {
        var b,
          c = "",
          d = !1,
          e = function (c) {
            var d = b + 1 < a.length && a.charAt(b + 1) === c;
            return d && b++, d;
          };
        for (b = 0; b < a.length; b++)
          if (d) "'" !== a.charAt(b) || e("'") ? (c += a.charAt(b)) : (d = !1);
          else
            switch (a.charAt(b)) {
              case "d":
              case "m":
              case "y":
              case "@":
                c += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                e("'") ? (c += "'") : (d = !0);
                break;
              default:
                c += a.charAt(b);
            }
        return c;
      },
      _get: function (a, b) {
        return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b];
      },
      _setDateFromField: function (a, b) {
        if (a.input.val() !== a.lastVal) {
          var c = this._get(a, "dateFormat"),
            d = (a.lastVal = a.input ? a.input.val() : null),
            e = this._getDefaultDate(a),
            f = e,
            g = this._getFormatConfig(a);
          try {
            f = this.parseDate(c, d, g) || e;
          } catch (h) {
            d = b ? "" : d;
          }
          (a.selectedDay = f.getDate()),
            (a.drawMonth = a.selectedMonth = f.getMonth()),
            (a.drawYear = a.selectedYear = f.getFullYear()),
            (a.currentDay = d ? f.getDate() : 0),
            (a.currentMonth = d ? f.getMonth() : 0),
            (a.currentYear = d ? f.getFullYear() : 0),
            this._adjustInstDate(a);
        }
      },
      _getDefaultDate: function (a) {
        return this._restrictMinMax(
          a,
          this._determineDate(a, this._get(a, "defaultDate"), new Date())
        );
      },
      _determineDate: function (b, c, d) {
        var e = function (a) {
            var b = new Date();
            return b.setDate(b.getDate() + a), b;
          },
          f = function (c) {
            try {
              return a.datepicker.parseDate(
                a.datepicker._get(b, "dateFormat"),
                c,
                a.datepicker._getFormatConfig(b)
              );
            } catch (d) {}
            for (
              var e =
                  (c.toLowerCase().match(/^c/)
                    ? a.datepicker._getDate(b)
                    : null) || new Date(),
                f = e.getFullYear(),
                g = e.getMonth(),
                h = e.getDate(),
                i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                j = i.exec(c);
              j;

            ) {
              switch (j[2] || "d") {
                case "d":
                case "D":
                  h += parseInt(j[1], 10);
                  break;
                case "w":
                case "W":
                  h += 7 * parseInt(j[1], 10);
                  break;
                case "m":
                case "M":
                  (g += parseInt(j[1], 10)),
                    (h = Math.min(h, a.datepicker._getDaysInMonth(f, g)));
                  break;
                case "y":
                case "Y":
                  (f += parseInt(j[1], 10)),
                    (h = Math.min(h, a.datepicker._getDaysInMonth(f, g)));
              }
              j = i.exec(c);
            }
            return new Date(f, g, h);
          },
          g =
            null == c || "" === c
              ? d
              : "string" == typeof c
              ? f(c)
              : "number" == typeof c
              ? isNaN(c)
                ? d
                : e(c)
              : new Date(c.getTime());
        return (
          (g = g && "Invalid Date" === g.toString() ? d : g),
          g &&
            (g.setHours(0),
            g.setMinutes(0),
            g.setSeconds(0),
            g.setMilliseconds(0)),
          this._daylightSavingAdjust(g)
        );
      },
      _daylightSavingAdjust: function (a) {
        return a
          ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a)
          : null;
      },
      _setDate: function (a, b, c) {
        var d = !b,
          e = a.selectedMonth,
          f = a.selectedYear,
          g = this._restrictMinMax(a, this._determineDate(a, b, new Date()));
        (a.selectedDay = a.currentDay = g.getDate()),
          (a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth()),
          (a.drawYear = a.selectedYear = a.currentYear = g.getFullYear()),
          (e === a.selectedMonth && f === a.selectedYear) ||
            c ||
            this._notifyChange(a),
          this._adjustInstDate(a),
          a.input && a.input.val(d ? "" : this._formatDate(a));
      },
      _getDate: function (a) {
        var b =
          !a.currentYear || (a.input && "" === a.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(a.currentYear, a.currentMonth, a.currentDay)
              );
        return b;
      },
      _attachHandlers: function (b) {
        var c = this._get(b, "stepMonths"),
          d = "#" + b.id.replace(/\\\\/g, "\\");
        b.dpDiv.find("[data-handler]").map(function () {
          var b = {
            prev: function () {
              a.datepicker._adjustDate(d, -c, "M");
            },
            next: function () {
              a.datepicker._adjustDate(d, +c, "M");
            },
            hide: function () {
              a.datepicker._hideDatepicker();
            },
            today: function () {
              a.datepicker._gotoToday(d);
            },
            selectDay: function () {
              return (
                a.datepicker._selectDay(
                  d,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return a.datepicker._selectMonthYear(d, this, "M"), !1;
            },
            selectYear: function () {
              return a.datepicker._selectMonthYear(d, this, "Y"), !1;
            },
          };
          a(this).bind(
            this.getAttribute("data-event"),
            b[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O = new Date(),
          P = this._daylightSavingAdjust(
            new Date(O.getFullYear(), O.getMonth(), O.getDate())
          ),
          Q = this._get(a, "isRTL"),
          R = this._get(a, "showButtonPanel"),
          S = this._get(a, "hideIfNoPrevNext"),
          T = this._get(a, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(a),
          V = this._get(a, "showCurrentAtPos"),
          W = this._get(a, "stepMonths"),
          X = 1 !== U[0] || 1 !== U[1],
          Y = this._daylightSavingAdjust(
            a.currentDay
              ? new Date(a.currentYear, a.currentMonth, a.currentDay)
              : new Date(9999, 9, 9)
          ),
          Z = this._getMinMaxDate(a, "min"),
          $ = this._getMinMaxDate(a, "max"),
          _ = a.drawMonth - V,
          aa = a.drawYear;
        if ((_ < 0 && ((_ += 12), aa--), $))
          for (
            b = this._daylightSavingAdjust(
              new Date(
                $.getFullYear(),
                $.getMonth() - U[0] * U[1] + 1,
                $.getDate()
              )
            ),
              b = Z && b < Z ? Z : b;
            this._daylightSavingAdjust(new Date(aa, _, 1)) > b;

          )
            _--, _ < 0 && ((_ = 11), aa--);
        for (
          a.drawMonth = _,
            a.drawYear = aa,
            c = this._get(a, "prevText"),
            c = T
              ? this.formatDate(
                  c,
                  this._daylightSavingAdjust(new Date(aa, _ - W, 1)),
                  this._getFormatConfig(a)
                )
              : c,
            d = this._canAdjustMonth(a, -1, aa, _)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                c +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Q ? "e" : "w") +
                "'>" +
                c +
                "</span></a>"
              : S
              ? ""
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                c +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Q ? "e" : "w") +
                "'>" +
                c +
                "</span></a>",
            e = this._get(a, "nextText"),
            e = T
              ? this.formatDate(
                  e,
                  this._daylightSavingAdjust(new Date(aa, _ + W, 1)),
                  this._getFormatConfig(a)
                )
              : e,
            f = this._canAdjustMonth(a, 1, aa, _)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                e +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Q ? "w" : "e") +
                "'>" +
                e +
                "</span></a>"
              : S
              ? ""
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                e +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Q ? "w" : "e") +
                "'>" +
                e +
                "</span></a>",
            g = this._get(a, "currentText"),
            h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P,
            g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g,
            i = a.inline
              ? ""
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(a, "closeText") +
                "</button>",
            j = R
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (Q ? i : "") +
                (this._isInRange(a, h)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    g +
                    "</button>"
                  : "") +
                (Q ? "" : i) +
                "</div>"
              : "",
            k = parseInt(this._get(a, "firstDay"), 10),
            k = isNaN(k) ? 0 : k,
            l = this._get(a, "showWeek"),
            m = this._get(a, "dayNames"),
            n = this._get(a, "dayNamesMin"),
            o = this._get(a, "monthNames"),
            p = this._get(a, "monthNamesShort"),
            q = this._get(a, "beforeShowDay"),
            r = this._get(a, "showOtherMonths"),
            s = this._get(a, "selectOtherMonths"),
            t = this._getDefaultDate(a),
            u = "",
            w = 0;
          w < U[0];
          w++
        ) {
          for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
            if (
              ((z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay))),
              (A = " ui-corner-all"),
              (B = ""),
              X)
            ) {
              if (((B += "<div class='ui-datepicker-group"), U[1] > 1))
                switch (y) {
                  case 0:
                    (B += " ui-datepicker-group-first"),
                      (A = " ui-corner-" + (Q ? "right" : "left"));
                    break;
                  case U[1] - 1:
                    (B += " ui-datepicker-group-last"),
                      (A = " ui-corner-" + (Q ? "left" : "right"));
                    break;
                  default:
                    (B += " ui-datepicker-group-middle"), (A = "");
                }
              B += "'>";
            }
            for (
              B +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                A +
                "'>" +
                (/all|left/.test(A) && 0 === w ? (Q ? f : d) : "") +
                (/all|right/.test(A) && 0 === w ? (Q ? d : f) : "") +
                this._generateMonthYearHeader(
                  a,
                  _,
                  aa,
                  Z,
                  $,
                  w > 0 || y > 0,
                  o,
                  p
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                C = l
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(a, "weekHeader") +
                    "</th>"
                  : "",
                v = 0;
              v < 7;
              v++
            )
              (D = (v + k) % 7),
                (C +=
                  "<th scope='col'" +
                  ((v + k + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  m[D] +
                  "'>" +
                  n[D] +
                  "</span></th>");
            for (
              B += C + "</tr></thead><tbody>",
                E = this._getDaysInMonth(aa, _),
                aa === a.selectedYear &&
                  _ === a.selectedMonth &&
                  (a.selectedDay = Math.min(a.selectedDay, E)),
                F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7,
                G = Math.ceil((F + E) / 7),
                H = X && this.maxRows > G ? this.maxRows : G,
                this.maxRows = H,
                I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)),
                J = 0;
              J < H;
              J++
            ) {
              for (
                B += "<tr>",
                  K = l
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(a, "calculateWeek")(I) +
                      "</td>"
                    : "",
                  v = 0;
                v < 7;
                v++
              )
                (L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""]),
                  (M = I.getMonth() !== _),
                  (N = (M && !s) || !L[0] || (Z && I < Z) || ($ && I > $)),
                  (K +=
                    "<td class='" +
                    ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                    (M ? " ui-datepicker-other-month" : "") +
                    ((I.getTime() === z.getTime() &&
                      _ === a.selectedMonth &&
                      a._keyEvent) ||
                    (t.getTime() === I.getTime() && t.getTime() === z.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (N
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (M && !r
                      ? ""
                      : " " +
                        L[1] +
                        (I.getTime() === Y.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (I.getTime() === P.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((M && !r) || !L[2]
                      ? ""
                      : " title='" + L[2].replace(/'/g, "&#39;") + "'") +
                    (N
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        I.getMonth() +
                        "' data-year='" +
                        I.getFullYear() +
                        "'") +
                    ">" +
                    (M && !r
                      ? "&#xa0;"
                      : N
                      ? "<span class='ui-state-default'>" +
                        I.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (I.getTime() === P.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (I.getTime() === Y.getTime()
                          ? " ui-state-active"
                          : "") +
                        (M ? " ui-priority-secondary" : "") +
                        "' href='#'>" +
                        I.getDate() +
                        "</a>") +
                    "</td>"),
                  I.setDate(I.getDate() + 1),
                  (I = this._daylightSavingAdjust(I));
              B += K + "</tr>";
            }
            _++,
              _ > 11 && ((_ = 0), aa++),
              (B +=
                "</tbody></table>" +
                (X
                  ? "</div>" +
                    (U[0] > 0 && y === U[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : "")),
              (x += B);
          }
          u += x;
        }
        return (u += j), (a._keyEvent = !1), u;
      },
      _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
        var i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = this._get(a, "changeMonth"),
          r = this._get(a, "changeYear"),
          s = this._get(a, "showMonthAfterYear"),
          t = "<div class='ui-datepicker-title'>",
          u = "";
        if (f || !q)
          u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
        else {
          for (
            i = d && d.getFullYear() === c,
              j = e && e.getFullYear() === c,
              u +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              k = 0;
            k < 12;
            k++
          )
            (!i || k >= d.getMonth()) &&
              (!j || k <= e.getMonth()) &&
              (u +=
                "<option value='" +
                k +
                "'" +
                (k === b ? " selected='selected'" : "") +
                ">" +
                h[k] +
                "</option>");
          u += "</select>";
        }
        if ((s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml))
          if (((a.yearshtml = ""), f || !r))
            t += "<span class='ui-datepicker-year'>" + c + "</span>";
          else {
            for (
              l = this._get(a, "yearRange").split(":"),
                m = new Date().getFullYear(),
                n = function (a) {
                  var b = a.match(/c[+\-].*/)
                    ? c + parseInt(a.substring(1), 10)
                    : a.match(/[+\-].*/)
                    ? m + parseInt(a, 10)
                    : parseInt(a, 10);
                  return isNaN(b) ? m : b;
                },
                o = n(l[0]),
                p = Math.max(o, n(l[1] || "")),
                o = d ? Math.max(o, d.getFullYear()) : o,
                p = e ? Math.min(p, e.getFullYear()) : p,
                a.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              o <= p;
              o++
            )
              a.yearshtml +=
                "<option value='" +
                o +
                "'" +
                (o === c ? " selected='selected'" : "") +
                ">" +
                o +
                "</option>";
            (a.yearshtml += "</select>"),
              (t += a.yearshtml),
              (a.yearshtml = null);
          }
        return (
          (t += this._get(a, "yearSuffix")),
          s && (t += (!f && q && r ? "" : "&#xa0;") + u),
          (t += "</div>")
        );
      },
      _adjustInstDate: function (a, b, c) {
        var d = a.drawYear + ("Y" === c ? b : 0),
          e = a.drawMonth + ("M" === c ? b : 0),
          f =
            Math.min(a.selectedDay, this._getDaysInMonth(d, e)) +
            ("D" === c ? b : 0),
          g = this._restrictMinMax(
            a,
            this._daylightSavingAdjust(new Date(d, e, f))
          );
        (a.selectedDay = g.getDate()),
          (a.drawMonth = a.selectedMonth = g.getMonth()),
          (a.drawYear = a.selectedYear = g.getFullYear()),
          ("M" !== c && "Y" !== c) || this._notifyChange(a);
      },
      _restrictMinMax: function (a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max"),
          e = c && b < c ? c : b;
        return d && e > d ? d : e;
      },
      _notifyChange: function (a) {
        var b = this._get(a, "onChangeMonthYear");
        b &&
          b.apply(a.input ? a.input[0] : null, [
            a.selectedYear,
            a.selectedMonth + 1,
            a,
          ]);
      },
      _getNumberOfMonths: function (a) {
        var b = this._get(a, "numberOfMonths");
        return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b;
      },
      _getMinMaxDate: function (a, b) {
        return this._determineDate(a, this._get(a, b + "Date"), null);
      },
      _getDaysInMonth: function (a, b) {
        return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate();
      },
      _getFirstDayOfMonth: function (a, b) {
        return new Date(a, b, 1).getDay();
      },
      _canAdjustMonth: function (a, b, c, d) {
        var e = this._getNumberOfMonths(a),
          f = this._daylightSavingAdjust(
            new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1)
          );
        return (
          b < 0 &&
            f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())),
          this._isInRange(a, f)
        );
      },
      _isInRange: function (a, b) {
        var c,
          d,
          e = this._getMinMaxDate(a, "min"),
          f = this._getMinMaxDate(a, "max"),
          g = null,
          h = null,
          i = this._get(a, "yearRange");
        return (
          i &&
            ((c = i.split(":")),
            (d = new Date().getFullYear()),
            (g = parseInt(c[0], 10)),
            (h = parseInt(c[1], 10)),
            c[0].match(/[+\-].*/) && (g += d),
            c[1].match(/[+\-].*/) && (h += d)),
          (!e || b.getTime() >= e.getTime()) &&
            (!f || b.getTime() <= f.getTime()) &&
            (!g || b.getFullYear() >= g) &&
            (!h || b.getFullYear() <= h)
        );
      },
      _getFormatConfig: function (a) {
        var b = this._get(a, "shortYearCutoff");
        return (
          (b =
            "string" != typeof b
              ? b
              : (new Date().getFullYear() % 100) + parseInt(b, 10)),
          {
            shortYearCutoff: b,
            dayNamesShort: this._get(a, "dayNamesShort"),
            dayNames: this._get(a, "dayNames"),
            monthNamesShort: this._get(a, "monthNamesShort"),
            monthNames: this._get(a, "monthNames"),
          }
        );
      },
      _formatDate: function (a, b, c, d) {
        b ||
          ((a.currentDay = a.selectedDay),
          (a.currentMonth = a.selectedMonth),
          (a.currentYear = a.selectedYear));
        var e = b
          ? "object" == typeof b
            ? b
            : this._daylightSavingAdjust(new Date(d, c, b))
          : this._daylightSavingAdjust(
              new Date(a.currentYear, a.currentMonth, a.currentDay)
            );
        return this.formatDate(
          this._get(a, "dateFormat"),
          e,
          this._getFormatConfig(a)
        );
      },
    }),
    (a.fn.datepicker = function (b) {
      if (!this.length) return this;
      a.datepicker.initialized ||
        (a(document).mousedown(a.datepicker._checkExternalClick),
        (a.datepicker.initialized = !0)),
        0 === a("#" + a.datepicker._mainDivId).length &&
          a("body").append(a.datepicker.dpDiv);
      var c = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof b ||
        ("isDisabled" !== b && "getDate" !== b && "widget" !== b)
        ? "option" === b &&
          2 === arguments.length &&
          "string" == typeof arguments[1]
          ? a.datepicker["_" + b + "Datepicker"].apply(
              a.datepicker,
              [this[0]].concat(c)
            )
          : this.each(function () {
              "string" == typeof b
                ? a.datepicker["_" + b + "Datepicker"].apply(
                    a.datepicker,
                    [this].concat(c)
                  )
                : a.datepicker._attachDatepicker(this, b);
            })
        : a.datepicker["_" + b + "Datepicker"].apply(
            a.datepicker,
            [this[0]].concat(c)
          );
    }),
    (a.datepicker = new c()),
    (a.datepicker.initialized = !1),
    (a.datepicker.uuid = new Date().getTime()),
    (a.datepicker.version = "1.11.4"),
    a.datepicker
  );
});

/*!
 * 6. jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : jQuery);
})(function (a) {
  function b(a) {
    return h.raw ? a : encodeURIComponent(a);
  }
  function c(a) {
    return h.raw ? a : decodeURIComponent(a);
  }
  function d(a) {
    return b(h.json ? JSON.stringify(a) : String(a));
  }
  function e(a) {
    0 === a.indexOf('"') &&
      (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return (
        (a = decodeURIComponent(a.replace(g, " "))), h.json ? JSON.parse(a) : a
      );
    } catch (b) {}
  }
  function f(b, c) {
    var d = h.raw ? b : e(b);
    return a.isFunction(c) ? c(d) : d;
  }
  var g = /\+/g,
    h = (a.cookie = function (e, g, i) {
      if (void 0 !== g && !a.isFunction(g)) {
        if (((i = a.extend({}, h.defaults, i)), "number" == typeof i.expires)) {
          var j = i.expires,
            k = (i.expires = new Date());
          k.setTime(+k + 864e5 * j);
        }
        return (document.cookie = [
          b(e),
          "=",
          d(g),
          i.expires ? "; expires=" + i.expires.toUTCString() : "",
          i.path ? "; path=" + i.path : "",
          i.domain ? "; domain=" + i.domain : "",
          i.secure ? "; secure" : "",
        ].join(""));
      }
      for (
        var l = e ? void 0 : {},
          m = document.cookie ? document.cookie.split("; ") : [],
          n = 0,
          o = m.length;
        n < o;
        n++
      ) {
        var p = m[n].split("="),
          q = c(p.shift()),
          r = p.join("=");
        if (e && e === q) {
          l = f(r, g);
          break;
        }
        e || void 0 === (r = f(r)) || (l[q] = r);
      }
      return l;
    });
  (h.defaults = {}),
    (a.removeCookie = function (b, c) {
      return (
        void 0 !== a.cookie(b) &&
        (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b))
      );
    });
});

/*!
 * 7. jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!(function () {
  "use strict";
  function a(a) {
    function b(b, d) {
      var f,
        p,
        q = b == window,
        r = d && void 0 !== d.message ? d.message : void 0;
      if (
        ((d = a.extend({}, a.blockUI.defaults, d || {})),
        !d.ignoreIfBlocked || !a(b).data("blockUI.isBlocked"))
      ) {
        if (
          ((d.overlayCSS = a.extend(
            {},
            a.blockUI.defaults.overlayCSS,
            d.overlayCSS || {}
          )),
          (f = a.extend({}, a.blockUI.defaults.css, d.css || {})),
          d.onOverlayClick && (d.overlayCSS.cursor = "pointer"),
          (p = a.extend({}, a.blockUI.defaults.themedCSS, d.themedCSS || {})),
          (r = void 0 === r ? d.message : r),
          q && n && c(window, { fadeOut: 0 }),
          r && "string" != typeof r && (r.parentNode || r.jquery))
        ) {
          var s = r.jquery ? r[0] : r,
            t = {};
          a(b).data("blockUI.history", t),
            (t.el = s),
            (t.parent = s.parentNode),
            (t.display = s.style.display),
            (t.position = s.style.position),
            t.parent && t.parent.removeChild(s);
        }
        a(b).data("blockUI.onUnblock", d.onUnblock);
        var u,
          v,
          w,
          x,
          y = d.baseZ;
        (u = a(
          k || d.forceIframe
            ? '<iframe class="blockUI" style="z-index:' +
                y++ +
                ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' +
                d.iframeSrc +
                '"></iframe>'
            : '<div class="blockUI" style="display:none"></div>'
        )),
          (v = a(
            d.theme
              ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' +
                  y++ +
                  ';display:none"></div>'
              : '<div class="blockUI blockOverlay" style="z-index:' +
                  y++ +
                  ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'
          )),
          d.theme && q
            ? ((x =
                '<div class="blockUI ' +
                d.blockMsgClass +
                ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' +
                (y + 10) +
                ';display:none;position:fixed">'),
              d.title &&
                (x +=
                  '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
                  (d.title || "&nbsp;") +
                  "</div>"),
              (x += '<div class="ui-widget-content ui-dialog-content"></div>'),
              (x += "</div>"))
            : d.theme
            ? ((x =
                '<div class="blockUI ' +
                d.blockMsgClass +
                ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' +
                (y + 10) +
                ';display:none;position:absolute">'),
              d.title &&
                (x +=
                  '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' +
                  (d.title || "&nbsp;") +
                  "</div>"),
              (x += '<div class="ui-widget-content ui-dialog-content"></div>'),
              (x += "</div>"))
            : (x = q
                ? '<div class="blockUI ' +
                  d.blockMsgClass +
                  ' blockPage" style="z-index:' +
                  (y + 10) +
                  ';display:none;position:fixed"></div>'
                : '<div class="blockUI ' +
                  d.blockMsgClass +
                  ' blockElement" style="z-index:' +
                  (y + 10) +
                  ';display:none;position:absolute"></div>'),
          (w = a(x)),
          r &&
            (d.theme ? (w.css(p), w.addClass("ui-widget-content")) : w.css(f)),
          d.theme || v.css(d.overlayCSS),
          v.css("position", q ? "fixed" : "absolute"),
          (k || d.forceIframe) && u.css("opacity", 0);
        var z = [u, v, w],
          A = a(q ? "body" : b);
        a.each(z, function () {
          this.appendTo(A);
        }),
          d.theme &&
            d.draggable &&
            a.fn.draggable &&
            w.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });
        var B =
          m &&
          (!a.support.boxModel || a("object,embed", q ? null : b).length > 0);
        if (l || B) {
          if (
            (q &&
              d.allowBodyStretch &&
              a.support.boxModel &&
              a("html,body").css("height", "100%"),
            (l || !a.support.boxModel) && !q)
          )
            var C = i(b, "borderTopWidth"),
              D = i(b, "borderLeftWidth"),
              E = C ? "(0 - " + C + ")" : 0,
              F = D ? "(0 - " + D + ")" : 0;
          a.each(z, function (a, b) {
            var c = b[0].style;
            if (((c.position = "absolute"), a < 2))
              q
                ? c.setExpression(
                    "height",
                    "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" +
                      d.quirksmodeOffsetHack +
                      ') + "px"'
                  )
                : c.setExpression(
                    "height",
                    'this.parentNode.offsetHeight + "px"'
                  ),
                q
                  ? c.setExpression(
                      "width",
                      'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'
                    )
                  : c.setExpression(
                      "width",
                      'this.parentNode.offsetWidth + "px"'
                    ),
                F && c.setExpression("left", F),
                E && c.setExpression("top", E);
            else if (d.centerY)
              q &&
                c.setExpression(
                  "top",
                  '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'
                ),
                (c.marginTop = 0);
            else if (!d.centerY && q) {
              var e = d.css && d.css.top ? parseInt(d.css.top, 10) : 0,
                f =
                  "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " +
                  e +
                  ') + "px"';
              c.setExpression("top", f);
            }
          });
        }
        if (
          (r &&
            (d.theme ? w.find(".ui-widget-content").append(r) : w.append(r),
            (r.jquery || r.nodeType) && a(r).show()),
          (k || d.forceIframe) && d.showOverlay && u.show(),
          d.fadeIn)
        ) {
          var G = d.onBlock ? d.onBlock : j,
            H = d.showOverlay && !r ? G : j,
            I = r ? G : j;
          d.showOverlay && v._fadeIn(d.fadeIn, H), r && w._fadeIn(d.fadeIn, I);
        } else
          d.showOverlay && v.show(),
            r && w.show(),
            d.onBlock && d.onBlock.bind(w)();
        if (
          (e(1, b, d),
          q
            ? ((n = w[0]),
              (o = a(d.focusableElements, n)),
              d.focusInput && setTimeout(g, 20))
            : h(w[0], d.centerX, d.centerY),
          d.timeout)
        ) {
          var J = setTimeout(function () {
            q ? a.unblockUI(d) : a(b).unblock(d);
          }, d.timeout);
          a(b).data("blockUI.timeout", J);
        }
      }
    }
    function c(b, c) {
      var f,
        g = b == window,
        h = a(b),
        i = h.data("blockUI.history"),
        j = h.data("blockUI.timeout");
      j && (clearTimeout(j), h.removeData("blockUI.timeout")),
        (c = a.extend({}, a.blockUI.defaults, c || {})),
        e(0, b, c),
        null === c.onUnblock &&
          ((c.onUnblock = h.data("blockUI.onUnblock")),
          h.removeData("blockUI.onUnblock"));
      var k;
      (k = g
        ? a(document.body).children().filter(".blockUI").add("body > .blockUI")
        : h.find(">.blockUI")),
        c.cursorReset &&
          (k.length > 1 && (k[1].style.cursor = c.cursorReset),
          k.length > 2 && (k[2].style.cursor = c.cursorReset)),
        g && (n = o = null),
        c.fadeOut
          ? ((f = k.length),
            k.stop().fadeOut(c.fadeOut, function () {
              0 === --f && d(k, i, c, b);
            }))
          : d(k, i, c, b);
    }
    function d(b, c, d, e) {
      var f = a(e);
      if (!f.data("blockUI.isBlocked")) {
        b.each(function (a, b) {
          this.parentNode && this.parentNode.removeChild(this);
        }),
          c &&
            c.el &&
            ((c.el.style.display = c.display),
            (c.el.style.position = c.position),
            (c.el.style.cursor = "default"),
            c.parent && c.parent.appendChild(c.el),
            f.removeData("blockUI.history")),
          f.data("blockUI.static") && f.css("position", "static"),
          "function" == typeof d.onUnblock && d.onUnblock(e, d);
        var g = a(document.body),
          h = g.width(),
          i = g[0].style.width;
        g.width(h - 1).width(h), (g[0].style.width = i);
      }
    }
    function e(b, c, d) {
      var e = c == window,
        g = a(c);
      if (
        (b || ((!e || n) && (e || g.data("blockUI.isBlocked")))) &&
        (g.data("blockUI.isBlocked", b),
        e && d.bindEvents && (!b || d.showOverlay))
      ) {
        var h =
          "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
        b ? a(document).bind(h, d, f) : a(document).unbind(h, f);
      }
    }
    function f(b) {
      if (
        "keydown" === b.type &&
        b.keyCode &&
        9 == b.keyCode &&
        n &&
        b.data.constrainTabKey
      ) {
        var c = o,
          d = !b.shiftKey && b.target === c[c.length - 1],
          e = b.shiftKey && b.target === c[0];
        if (d || e)
          return (
            setTimeout(function () {
              g(e);
            }, 10),
            !1
          );
      }
      var f = b.data,
        h = a(b.target);
      return (
        h.hasClass("blockOverlay") && f.onOverlayClick && f.onOverlayClick(b),
        h.parents("div." + f.blockMsgClass).length > 0 ||
          0 === h.parents().children().filter("div.blockUI").length
      );
    }
    function g(a) {
      if (o) {
        var b = o[a === !0 ? o.length - 1 : 0];
        b && b.focus();
      }
    }
    function h(a, b, c) {
      var d = a.parentNode,
        e = a.style,
        f = (d.offsetWidth - a.offsetWidth) / 2 - i(d, "borderLeftWidth"),
        g = (d.offsetHeight - a.offsetHeight) / 2 - i(d, "borderTopWidth");
      b && (e.left = f > 0 ? f + "px" : "0"),
        c && (e.top = g > 0 ? g + "px" : "0");
    }
    function i(b, c) {
      return parseInt(a.css(b, c), 10) || 0;
    }
    a.fn._fadeIn = a.fn.fadeIn;
    var j = a.noop || function () {},
      k = /MSIE/.test(navigator.userAgent),
      l =
        /MSIE 6.0/.test(navigator.userAgent) &&
        !/MSIE 8.0/.test(navigator.userAgent),
      m =
        (document.documentMode || 0,
        a.isFunction(document.createElement("div").style.setExpression));
    (a.blockUI = function (a) {
      b(window, a);
    }),
      (a.unblockUI = function (a) {
        c(window, a);
      }),
      (a.growlUI = function (b, c, d, e) {
        var f = a('<div class="growlUI"></div>');
        b && f.append("<h1>" + b + "</h1>"),
          c && f.append("<h2>" + c + "</h2>"),
          void 0 === d && (d = 3e3);
        var g = function (b) {
          (b = b || {}),
            a.blockUI({
              message: f,
              fadeIn: "undefined" != typeof b.fadeIn ? b.fadeIn : 700,
              fadeOut: "undefined" != typeof b.fadeOut ? b.fadeOut : 1e3,
              timeout: "undefined" != typeof b.timeout ? b.timeout : d,
              centerY: !1,
              showOverlay: !1,
              onUnblock: e,
              css: a.blockUI.defaults.growlCSS,
            });
        };
        g();
        f.css("opacity");
        f.mouseover(function () {
          g({ fadeIn: 0, timeout: 3e4 });
          var b = a(".blockMsg");
          b.stop(), b.fadeTo(300, 1);
        }).mouseout(function () {
          a(".blockMsg").fadeOut(1e3);
        });
      }),
      (a.fn.block = function (c) {
        if (this[0] === window) return a.blockUI(c), this;
        var d = a.extend({}, a.blockUI.defaults, c || {});
        return (
          this.each(function () {
            var b = a(this);
            (d.ignoreIfBlocked && b.data("blockUI.isBlocked")) ||
              b.unblock({ fadeOut: 0 });
          }),
          this.each(function () {
            "static" == a.css(this, "position") &&
              ((this.style.position = "relative"),
              a(this).data("blockUI.static", !0)),
              (this.style.zoom = 1),
              b(this, c);
          })
        );
      }),
      (a.fn.unblock = function (b) {
        return this[0] === window
          ? (a.unblockUI(b), this)
          : this.each(function () {
              c(this, b);
            });
      }),
      (a.blockUI.version = 2.7),
      (a.blockUI.defaults = {
        message: "<h1>Please wait...</h1>",
        title: null,
        draggable: !0,
        theme: !1,
        css: {
          padding: 0,
          margin: 0,
          width: "30%",
          top: "40%",
          left: "35%",
          textAlign: "center",
          color: "#000",
          border: "3px solid #aaa",
          backgroundColor: "#fff",
          cursor: "wait",
        },
        themedCSS: { width: "30%", top: "40%", left: "35%" },
        overlayCSS: { backgroundColor: "#000", opacity: 0.6, cursor: "wait" },
        cursorReset: "default",
        growlCSS: {
          width: "350px",
          top: "10px",
          left: "",
          right: "10px",
          border: "none",
          padding: "5px",
          opacity: 0.6,
          cursor: "default",
          color: "#fff",
          backgroundColor: "#000",
          "-webkit-border-radius": "10px",
          "-moz-border-radius": "10px",
          "border-radius": "10px",
        },
        iframeSrc: /^https/i.test(window.location.href || "")
          ? "javascript:false"
          : "about:blank",
        forceIframe: !1,
        baseZ: 1e3,
        centerX: !0,
        centerY: !0,
        allowBodyStretch: !0,
        bindEvents: !0,
        constrainTabKey: !0,
        fadeIn: 200,
        fadeOut: 400,
        timeout: 0,
        showOverlay: !0,
        focusInput: !0,
        focusableElements: ":input:enabled:visible",
        onBlock: null,
        onUnblock: null,
        onOverlayClick: null,
        quirksmodeOffsetHack: 4,
        blockMsgClass: "blockMsg",
        ignoreIfBlocked: !1,
      });
    var n = null,
      o = [];
  }
  "function" == typeof define && define.amd && define.amd.jQuery
    ? define(["jquery"], a)
    : a(jQuery);
})();
