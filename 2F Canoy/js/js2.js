! function() {
    "use strict";
    var e, t = {
            56941: function(e, t, r) {
                r.d(t, {
                    default: function() {
                        return Ot
                    }
                });
                var n = r(32735),
                    o = r(60216),
                    i = r.n(o),
                    c = r(53278),
                    a = r(28139),
                    u = r(92891),
                    s = r(62929),
                    l = r(46339);

                function p(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function f(e, t) {
                    return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, f(e, t)
                }

                function d(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = y(e);
                        if (t) {
                            var o = y(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === m(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, r)
                    }
                }

                function y(e) {
                    return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, y(e)
                }

                function m(e) {
                    return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, m(e)
                }
                var h = "object" !== ("undefined" == typeof window ? "undefined" : m(window)),
                    b = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && f(e, t)
                        }(c, e);
                        var t, r, o, i = d(c);

                        function c() {
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), i.apply(this, arguments)
                        }
                        return t = c, (r = [{
                            key: "render",
                            value: function() {
                                var e = "string" == typeof this.props.to ? this.props.to : (0, l.Ep)(this.props.to);
                                if (h) {
                                    var t = new Error("Please redirect");
                                    throw t.path = e, t.type = "REDIRECT_INTERRUPT", t
                                }
                                return this.props.external && !h ? (window.location = e, null) : n.createElement(a.l_, this.props)
                            }
                        }]) && p(t.prototype, r), o && p(t, o), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), c
                    }(n.Component);

                function g(e) {
                    return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, g(e)
                }

                function v() {
                    return v = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                        }
                        return e
                    }, v.apply(this, arguments)
                }

                function O(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function _(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? O(Object(r), !0).forEach((function(t) {
                            w(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function w(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function j(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function E(e, t) {
                    return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, E(e, t)
                }

                function P(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = S(e);
                        if (t) {
                            var o = S(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === g(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, r)
                    }
                }

                function S(e) {
                    return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, S(e)
                }
                b.propTypes = {
                    to: i().string,
                    external: i().bool
                };
                var k = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && E(e, t)
                    }(c, e);
                    var t, r, o, i = P(c);

                    function c(e) {
                        var t;
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), t = i.call(this, e), !e.screenName) throw new Error("screenName is a required property for Page metrics tracking");
                        return t.onRouteChange(), t
                    }
                    return t = c, (r = [{
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.path !== this.props.path && this.onRouteChange()
                        }
                    }, {
                        key: "onRouteChange",
                        value: function() {
                            "undefined" != typeof window && (this.props.scrollToTop && window.scrollTo(0, 0), (0, s.Z)(this.props.screenName, this.props, location, document))
                        }
                    }, {
                        key: "resolveRedirect",
                        value: function() {
                            var e = [];
                            return null != this.props.redirect && (e = Array.isArray(this.props.redirect) ? this.props.redirect : [this.props.redirect]), (0, u.find)(e, (function(e) {
                                return (0, u.result)(e, "if", !1) || !(0, u.result)(e, "unless", !0)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = (0, u.omit)(this.props, "component", "screenName", "scrollToTop", "redirect"),
                                r = this.resolveRedirect(),
                                o = this.props.component;
                            return n.createElement(a.AW, v({}, t, {
                                render: function(t) {
                                    if (r) return n.createElement(b, {
                                        to: "".concat(r.to).concat(e.props.location && e.props.location.search || ""),
                                        external: r.external
                                    });
                                    var i = _(_({}, (0, u.omit)(e.props, "exact", "component", "path", "screenName", "scrollToTop", "redirect")), t);
                                    return n.createElement(o, {
                                        route: i
                                    })
                                }
                            }))
                        }
                    }]) && j(t.prototype, r), o && j(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(n.Component);

                function F(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function R(e, t) {
                    return R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, R(e, t)
                }

                function T(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = C(e);
                        if (t) {
                            var o = C(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === N(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, r)
                    }
                }

                function C(e) {
                    return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, C(e)
                }

                function N(e) {
                    return N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, N(e)
                }
                k.propTypes = _(_({}, a.AW.propTypes), {}, {
                    component: i().oneOfType([i().func, i().element]),
                    screenName: i().string,
                    scrollToTop: i().bool
                });
                var I = "object" !== ("undefined" == typeof window ? "undefined" : N(window)),
                    x = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && R(e, t)
                        }(c, e);
                        var t, r, o, i = T(c);

                        function c(e) {
                            var t;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), void 0 === (t = i.call(this, e)).history && (t.history = I ? (0, l.PP)({
                                initialEntries: [e.location]
                            }) : (0, l.lX)()), t
                        }
                        return t = c, (r = [{
                            key: "render",
                            value: function() {
                                return n.createElement(a.F0, {
                                    history: this.history
                                }, this.props.children)
                            }
                        }]) && F(t.prototype, r), o && F(t, o), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), c
                    }(n.Component),
                    A = r(22113),
                    M = r(93305),
                    D = r(72837),
                    z = r(30582),
                    B = (r(72439), r(78046)),
                    L = r(26087),
                    U = function(e) {
                        var t = e.feature,
                            r = (0, c.v9)((function(e) {
                                return e.activeAnnouncement
                            }));
                        if (null == r) return null;
                        var o = r.ctaLink,
                            i = r.ctaText,
                            a = r.text,
                            u = function() {
                                B.Z.track("ctaClicked", {
                                    type: "banner",
                                    text: i,
                                    pageUrl: window.location.pathname,
                                    destination: o,
                                    feature: t
                                })
                            };
                        return n.createElement("div", {
                            className: "announcement-banner__container"
                        }, n.createElement("div", {
                            className: "announcement-banner__content"
                        }, n.createElement("img", {
                            className: "announcement-banner__icon",
                            alt: "Announcement horn",
                            src: "".concat((0, L.Z)("/img/svg/horn.svg"), "?auto=format")
                        }), n.createElement("a", {
                            className: "announcement-banner__text",
                            href: o,
                            onClick: u,
                            target: "_blank"
                        }, a), n.createElement("span", {
                            className: "announcement-banner__spacer"
                        }), n.createElement("a", {
                            className: "announcement-banner__cta",
                            href: o,
                            onClick: u,
                            target: "_blank"
                        }, i)))
                    },
                    Z = r(59390),
                    q = r(22889),
                    H = r(84038),
                    V = r(62725),
                    G = function(e) {
                        var t = e.category,
                            r = e.type,
                            o = e.name;
                        return n.createElement("a", {
                            href: t.url,
                            onClick: function() {
                                B.Z.track("ctaClicked", {
                                    destination: t.url,
                                    feature: "home",
                                    moduleName: o,
                                    moduleType: r,
                                    pageUrl: window.location.href,
                                    text: t.name,
                                    type: "tile"
                                })
                            },
                            className: "featured-categories-module__category-tile"
                        }, n.createElement("img", {
                            className: "featured-categories-module__category-tile__image",
                            src: "".concat(t.imageUrl, "?w=380&h=238&fm=jpg&auto=compress&fit=crop")
                        }), n.createElement("div", {
                            className: "featured-categories-module__category-tile__title"
                        }, t.name))
                    };
                G.propTypes = {
                    category: (0, o.shape)({
                        name: o.string.isRequired,
                        url: o.string.isRequired,
                        imageUrl: o.string.isRequired
                    }).isRequired,
                    type: o.string.isRequired,
                    name: o.string.isRequired
                };
                var $ = function(e) {
                    var t = e.module;
                    return n.createElement("div", {
                        className: "featured-categories-module"
                    }, n.createElement("h2", null, t.name), n.createElement("div", {
                        className: "featured-categories-module__categories"
                    }, t.categories.map((function(e) {
                        return n.createElement(G, {
                            key: e.name,
                            category: e,
                            type: t.type,
                            name: t.name
                        })
                    }))))
                };
                $.propTypes = {
                    module: o.object.isRequired
                };
                var W = $,
                    K = function(e) {
                        var t = e.module;
                        return n.createElement("div", {
                            className: "home-page__featured-content-module-container"
                        }, n.createElement("img", {
                            className: "home-page__featured-content-module-image",
                            alt: t.imageAlt,
                            src: "".concat(t.imageUrl, "?w=1600&h=860&q=60&fit=crop"),
                            onClick: function() {
                                window.location.href = t.cta.url
                            }
                        }), n.createElement("div", {
                            className: "home-page__featured-content-module-description"
                        }, n.createElement("h2", {
                            className: "home-page__featured-content-module-description-header"
                        }, t.title), n.createElement("p", {
                            className: "home-page__featured-content-module-description-text"
                        }, t.description), n.createElement("a", {
                            href: t.cta.url
                        }, n.createElement("button", {
                            type: "button",
                            className: "home-page__featured-content-module-description-cta pill-link"
                        }, t.cta.text))))
                    },
                    X = r(76290);

                function J(e) {
                    return J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, J(e)
                }

                function Q(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function Y(e, t) {
                    return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, Y(e, t)
                }

                function ee(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = re(e);
                        if (t) {
                            var o = re(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === J(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return te(e)
                        }(this, r)
                    }
                }

                function te(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function re(e) {
                    return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, re(e)
                }

                function ne(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var oe = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && Y(e, t)
                        }(c, e);
                        var t, r, o, i = ee(c);

                        function c(e) {
                            var t;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), ne(te(t = i.call(this, e)), "handleSeeMore", (function() {
                                t.setState({
                                    expanded: !0
                                })
                            })), ne(te(t), "renderProduct", (function(e, r) {
                                var o = 0;
                                return t.props.basketItemsByProductId[e.id] && (o = t.props.basketItemsByProductId[e.id].quantity || 0), n.createElement(X.Z, {
                                    key: r,
                                    product: e,
                                    position: r,
                                    quantityInBasket: o,
                                    isFavorited: -1 !== t.props.favorites.indexOf(e.id),
                                    segmentFeature: t.segmentFeature,
                                    currentFulfillmentDay: t.props.currentFulfillmentDay,
                                    fulfillmentDaySummaries: t.props.fulfillmentDaySummaries
                                })
                            })), ne(te(t), "renderSeeAllFooter", (function() {
                                return (0, u.isString)(t.props.module.seeAllText) && n.createElement("div", null, n.createElement("a", {
                                    href: t.props.module.seeAllUrlDesktop,
                                    className: "product-collection-module__footer__see-all-desktop"
                                }, n.createElement("div", {
                                    className: "product-collection-module__footer__see-all__text"
                                }, t.props.module.seeAllText, " ", ">")))
                            })), t.state = {
                                expanded: !1
                            }, t.segmentFeature = e.segmentFeature, t
                        }
                        return t = c, (r = [{
                            key: "render",
                            value: function() {
                                var e = this.state.expanded ? this.props.module.fullLength : this.props.module.previewLength;
                                if (this.props.module.products.length < 2) return null;
                                var t = this.props.module.products.slice(0, e),
                                    r = this.props.module.products.length > this.props.module.previewLength && !this.state.expanded;
                                return n.createElement("div", {
                                    className: "product-collection-module"
                                }, n.createElement("h2", null, this.props.module.name), n.createElement("div", {
                                    className: "product-collection-module__products"
                                }, t.map(this.renderProduct)), n.createElement("div", {
                                    className: "product-collection-module__footer"
                                }, r ? n.createElement("div", {
                                    className: "product-collection-module__footer__see-more",
                                    onClick: this.handleSeeMore
                                }, n.createElement("span", {
                                    className: "product-collection-module__footer__see-more__icon"
                                }, n.createElement("i", {
                                    className: "icon icon-plus-thick"
                                })), n.createElement("span", {
                                    className: "product-collection-module__footer__see-more__text"
                                }, "See more")) : this.renderSeeAllFooter()))
                            }
                        }]) && Q(t.prototype, r), o && Q(t, o), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), c
                    }(n.Component),
                    ie = (0, c.$j)((function(e) {
                        return e
                    }))(oe),
                    ce = r(40841),
                    ae = r.n(ce),
                    ue = function(e) {
                        var t = e.module;
                        return n.createElement("div", {
                            className: "personalized-home-page__featured-producers-module"
                        }, n.createElement("h2", null, t.name), n.createElement("div", {
                            className: "personalized-home-page__featured-producers-module__grid"
                        }, ["fullbellymarketplace", "froghollow", "stepladdercreamery", "cloversfbay", "foglinefarmsfbay", "momofuku", "theslanteddoor", "pizzeriadelfina", "sonomacountymeatco", "roliroti"].map((function(e) {
                            return n.createElement("a", {
                                key: e,
                                className: ae()("personalized-home-page__featured-producers-module__brand-tile", "brand-image", "brand-".concat(e)),
                                href: "/".concat(e)
                            }, n.createElement("div", {
                                className: "personalized-home-page__featured-producers-module__brand-tile-spacer"
                            }))
                        }))))
                    },
                    se = r(2475),
                    le = r.n(se);

                function pe(e) {
                    return pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, pe(e)
                }

                function fe(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function de(e, t) {
                    return de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, de(e, t)
                }

                function ye(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = he(e);
                        if (t) {
                            var o = he(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === pe(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return me(e)
                        }(this, r)
                    }
                }

                function me(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function he(e) {
                    return he = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, he(e)
                }
                var be = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && de(e, t)
                    }(c, e);
                    var t, r, o, i = ye(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            trackVisibilityChanges: !0
                        }, t.onClick = t.onClick.bind(me(t)), t.onVisibilityChange = t.onVisibilityChange.bind(me(t)), t
                    }
                    return t = c, (r = [{
                        key: "onVisibilityChange",
                        value: function(e) {
                            e && this.state.trackVisibilityChanges && (this._track("Viewed Homepage Feature"), this.setState({
                                trackVisibilityChanges: !1
                            }))
                        }
                    }, {
                        key: "onClick",
                        value: function() {
                            this._track("Clicked Homepage Feature")
                        }
                    }, {
                        key: "_track",
                        value: function(e) {
                            window.metrics.track(e, {
                                feature: {
                                    id: this.props.module.id,
                                    name: this.props.module.name,
                                    type: this.props.module.type
                                },
                                user: {
                                    orderCount: this.props.orderCount
                                }
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.createElement("div", {
                                className: "with-feature-events",
                                onClick: this.onClick
                            }, n.createElement(le(), {
                                active: this.state.trackVisibilityChanges,
                                onChange: this.onVisibilityChange,
                                minTopValue: this.props.visibilityInsetTop,
                                partialVisibility: !0
                            }, this.props.children))
                        }
                    }]) && fe(t.prototype, r), o && fe(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(n.Component);
                be.propTypes = {
                    children: i().node,
                    module: i().shape({
                        id: i().string.isRequired,
                        name: i().string.isRequired,
                        type: i().string.isRequired
                    }).isRequired,
                    orderCount: i().number.isRequired,
                    visibilityInsetTop: i().number
                }, be.defaultProps = {
                    visibilityInsetTop: 150
                };
                var ge = be;

                function ve(e) {
                    return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, ve(e)
                }

                function Oe(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function _e(e, t) {
                    return _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, _e(e, t)
                }

                function we(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = je(e);
                        if (t) {
                            var o = je(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === ve(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, r)
                    }
                }

                function je(e) {
                    return je = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, je(e)
                }
                var Ee = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && _e(e, t)
                    }(c, e);
                    var t, r, o, i = we(c);

                    function c() {
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), i.apply(this, arguments)
                    }
                    return t = c, (r = [{
                        key: "getModuleComponent",
                        value: function(e) {
                            switch (e.type) {
                                case "curated-collection":
                                case "tag-collection":
                                case "subcategory-collection":
                                    return ie;
                                case "featured-content":
                                    return K;
                                case "featured-producers":
                                    return ue;
                                case "featured-categories":
                                    return W;
                                default:
                                    return function() {
                                        return n.createElement("div", null, n.createElement("h2", null, e.name), n.createElement("p", null, "Module ", '"', e.type, '"', " Not implemented yet"))
                                    }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, r = this.getModuleComponent(this.props.module);
                            return n.createElement("div", {
                                "data-score": this.props.module.score,
                                "data-id": this.props.module.id,
                                className: "personalized-home-page__module personalized-home-page__module-".concat(this.props.module.type)
                            }, n.createElement(ge, {
                                module: this.props.module,
                                orderCount: null !== (e = null === (t = this.props.user) || void 0 === t ? void 0 : t.orderCount) && void 0 !== e ? e : 0
                            }, n.createElement("div", {
                                className: "personalized-home-page__module-container"
                            }, n.createElement(r, {
                                module: this.props.module,
                                isLoggedIn: Boolean(this.props.user),
                                segmentFeature: "".concat(this.props.module.type, "-module"),
                                features: this.props.features
                            }))))
                        }
                    }]) && Oe(t.prototype, r), o && Oe(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(n.Component);
                Ee.propTypes = {
                    user: i().object,
                    module: i().object,
                    features: i().array
                };
                var Pe = Ee,
                    Se = r(3766),
                    ke = r(23058),
                    Fe = function(e) {
                        var t = e.children;
                        return n.createElement("div", {
                            className: "home-page__featured-content-carousel",
                            "data-testid": "featured-content-carousel"
                        }, n.createElement(Se.Z, {
                            dots: !0,
                            infinite: !0,
                            autoplaySpeed: 5e3,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: !0,
                            responsive: [{
                                breakpoint: 1300,
                                settings: {
                                    arrows: !1
                                }
                            }],
                            prevArrow: n.createElement(ke.Z, {
                                className: "home-page__featured-content-carousel-arrow",
                                src: "/img/svg/icons/caret-left.svg",
                                alt: "Featured content previous"
                            }),
                            nextArrow: n.createElement(ke.Z, {
                                className: "home-page__featured-content-carousel-arrow",
                                src: "/img/svg/icons/caret-right.svg",
                                alt: "Featured content next"
                            })
                        }, t))
                    },
                    Re = r(18630),
                    Te = r(1593),
                    Ce = r(6723),
                    Ne = r.n(Ce),
                    Ie = r(51570);

                function xe(e, t) {
                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return Ae(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r) return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ae(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            r && (e = r);
                            var n = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, c = !0,
                        a = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return c = e.done, e
                        },
                        e: function(e) {
                            a = !0, i = e
                        },
                        f: function() {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                    }
                }

                function Ae(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n
                }

                function Me(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function De(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Me(Object(r), !0).forEach((function(t) {
                            ze(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Me(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function ze(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var Be = "HOME_PAGE_SET_FOOD_INTERESTS",
                    Le = "HOME_PAGE_CANCEL_FOOD_INTERESTS",
                    Ue = "HOME_PAGE_DISMISS_FOOD_INTERESTS",
                    Ze = "HOME_PAGE_LOADING_FEATURES",
                    qe = "HOME_PAGE_LOADING_FEATURES_SUCCESS",
                    He = "HOME_PAGE_LOADING_FEATURES_FAILURE",
                    Ve = {
                        setFoodInterests: function(e) {
                            var t = e.userId,
                                r = e.sessionId,
                                n = e.interests,
                                o = e.showAllFeatures,
                                i = e.featureFlags;
                            return function(e) {
                                return e({
                                        type: Be,
                                        interests: n
                                    }),
                                    function(e) {
                                        var t = e.userId,
                                            r = e.sessionId,
                                            n = e.interests;
                                        return (0, Ie.uz)("/api/merchandising/update-food-interests", {
                                            body: {
                                                userId: t,
                                                sessionId: r,
                                                interests: n
                                            }
                                        })
                                    }({
                                        userId: t,
                                        sessionId: r,
                                        interests: n
                                    }).then((function() {
                                        return Ve.fetchMerchandisingFeatures({
                                            interests: n,
                                            showAllFeatures: o,
                                            featureFlags: i
                                        })(e)
                                    }))
                            }
                        },
                        cancelFoodInterests: function() {
                            return {
                                type: Le
                            }
                        },
                        dismissFoodInterests: function(e) {
                            var t = e.interests;
                            return {
                                type: Ue,
                                interests: t
                            }
                        },
                        fetchMerchandisingFeatures: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.interests,
                                r = e.showAllFeatures,
                                n = e.featureFlags,
                                o = e.isLoggedIn;
                            return function(e) {
                                return e({
                                        type: Ze
                                    }),
                                    function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = e.interests,
                                            r = e.showAllFeatures,
                                            n = {
                                                isLoggedIn: e.isLoggedIn
                                            };
                                        return t.length && (n.interests = t.join(",")), r && (n.showAllFeatures = "true"), (0, Ie.LK)("/api/merchandising/features?".concat(Ne().param(n)))
                                    }({
                                        interests: t,
                                        showAllFeatures: r,
                                        featureFlags: n,
                                        isLoggedIn: o
                                    }).then((function(t) {
                                        e({
                                            type: qe,
                                            merchandisingFeatures: t
                                        })
                                    })).catch((function(t) {
                                        e({
                                            type: He,
                                            error: t
                                        })
                                    }))
                            }
                        }
                    };

                function Ge(e) {
                    return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, Ge(e)
                }

                function $e(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function We(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? $e(Object(r), !0).forEach((function(t) {
                            et(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function Ke(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function Xe(e, t) {
                    return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, Xe(e, t)
                }

                function Je(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = Ye(e);
                        if (t) {
                            var o = Ye(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === Ge(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return Qe(e)
                        }(this, r)
                    }
                }

                function Qe(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function Ye(e) {
                    return Ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Ye(e)
                }

                function et(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var tt = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && Xe(e, t)
                        }(c, e);
                        var t, r, o, i = Je(c);

                        function c(e) {
                            var t, r;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), et(Qe(r = i.call(this, e)), "handleToggleInterest", (function(e) {
                                var t = e.target.dataset.interest;
                                r.setState((function(e) {
                                    return {
                                        interests: We(We({}, e.interests), {}, et({}, t, !e.interests[t]))
                                    }
                                }))
                            })), et(Qe(r), "handleContinue", (function() {
                                var e = r.props.user ? r.props.user.id : null,
                                    t = r.props.session.id,
                                    n = Object.keys(r.state.interests).filter((function(e) {
                                        return r.state.interests[e]
                                    }));
                                r.props.dispatch(Ve.setFoodInterests({
                                    interests: n,
                                    sessionId: t,
                                    userId: e,
                                    showAllFeatures: r.props.showAllFeatures,
                                    featureFlags: r.props.features
                                })), r.props.onSubmit()
                            })), et(Qe(r), "handleCancel", (function() {
                                r.props.dispatch(Ve.cancelFoodInterests()), r.props.onSubmit()
                            })), et(Qe(r), "handleDismiss", (function() {
                                var e = Object.keys(r.state.interests).filter((function(e) {
                                    return r.state.interests[e]
                                }));
                                Re.Z.setDismissedInterests(), r.props.dispatch(Ve.dismissFoodInterests({
                                    interests: e
                                })), r.props.onSubmit()
                            })), r.state = {
                                interests: null === (t = e.selectedFoodInterests) || void 0 === t ? void 0 : t.reduce((function(e, t) {
                                    return We(We({}, e), {}, et({}, t, !0))
                                }), {})
                            }, r
                        }
                        return t = c, (r = [{
                            key: "render",
                            value: function() {
                                var e = this;
                                return n.createElement(Te.Z, {
                                    className: "personalized-home-page-interests",
                                    onClose: this.handleDismiss
                                }, n.createElement("h3", {
                                    className: "personalized-home-page-interests__heading"
                                }, "What foods are you interested in?"), n.createElement("ul", {
                                    className: "personalized-home-page-interests__list"
                                }, this.props.availableFoodInterests.map((function(t) {
                                    var r = t.label,
                                        o = t.key;
                                    return n.createElement("li", {
                                        key: "interest-".concat(o),
                                        onClick: e.handleToggleInterest,
                                        "data-interest": o,
                                        className: ae()("personalized-home-page-interests__list-item", {
                                            selected: e.state.interests[o]
                                        })
                                    }, r)
                                }))), this.props.userHasFoodInterests ? n.createElement("div", {
                                    className: "personalized-home-page-interests__footer"
                                }, n.createElement("div", {
                                    onClick: this.handleContinue,
                                    className: "personalized-home-page-interests__save"
                                }, "Save"), n.createElement("div", {
                                    onClick: this.handleCancel,
                                    className: "personalized-home-page-interests__cancel"
                                }, "Cancel")) : n.createElement("div", {
                                    className: "personalized-home-page-interests__footer"
                                }, n.createElement("div", {
                                    onClick: this.handleContinue,
                                    className: "personalized-home-page-interests__continue"
                                }, "Continue"), n.createElement("div", {
                                    onClick: this.handleDismiss,
                                    className: "personalized-home-page-interests__dismiss"
                                }, "I", "'", "ll do this later")))
                            }
                        }]) && Ke(t.prototype, r), o && Ke(t, o), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), c
                    }(n.Component),
                    rt = (0, c.$j)((function(e) {
                        return e
                    }))(tt);

                function nt(e) {
                    return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, nt(e)
                }

                function ot(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function it(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ot(Object(r), !0).forEach((function(t) {
                            pt(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ot(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function ct(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function at(e, t) {
                    return at = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, at(e, t)
                }

                function ut(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = lt(e);
                        if (t) {
                            var o = lt(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === nt(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return st(e)
                        }(this, r)
                    }
                }

                function st(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function lt(e) {
                    return lt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, lt(e)
                }

                function pt(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var ft = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && at(e, t)
                    }(c, e);
                    var t, r, o, i = ut(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), pt(st(t = i.call(this, e)), "clearTimeout", (function() {
                            t.timeout && clearTimeout(t.timeout)
                        })), t.renderStaticModule = t.renderStaticModule.bind(st(t)), t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = !1;
                            "true" === new URLSearchParams(window.location.search).get("recently-logged-in") && (e = !0), this.props.dispatch(Ve.fetchMerchandisingFeatures({
                                showAllFeatures: this.props.showAllFeatures,
                                featureFlags: this.props.features,
                                interests: this.props.selectedFoodInterests,
                                isLoggedIn: Boolean(this.props.user)
                            })), this.startTimeout({
                                isRecentlyLoggedIn: e
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.clearTimeout()
                        }
                    }, {
                        key: "startTimeout",
                        value: function(e) {
                            var t, r = this,
                                n = e.isRecentlyLoggedIn;
                            if (null != (null === (t = this.props) || void 0 === t ? void 0 : t.user) && this.props.settings.welcomeFeesPromoEnabled) {
                                var o;
                                if (null !== (o = this.props.user.membership) && void 0 !== o && o.isMember || this.props.user.orderCount > 0 || !n) return;
                                this.timeout = setTimeout((function() {
                                    r.openNoFeesModal()
                                }), 2e3)
                            } else this.props.zipCode || (this.timeout = setTimeout((function() {
                                r.openZipModal()
                            }), 5e3))
                        }
                    }, {
                        key: "goHome",
                        value: function() {
                            var e = this.props.route.history;
                            e.push("/home".concat(e.location.search || ""))
                        }
                    }, {
                        key: "openZipModal",
                        value: function() {
                            this.props.dispatch(q.Nw.openModal({
                                modal: "ZipCodeModal"
                            }))
                        }
                    }, {
                        key: "openNoFeesModal",
                        value: function() {
                            this.props.dispatch(q.Nw.openModal({
                                modal: "SignUpSuccessModal",
                                modalViewed: {
                                    pageUrl: window.location.pathname,
                                    loggedIn: !0,
                                    ctaText: H.s
                                }
                            }))
                        }
                    }, {
                        key: "renderStaticModule",
                        value: function(e, t, r) {
                            return n.createElement("div", {
                                key: "static-module-".concat(r),
                                className: "personalized-home-page__module personalized-home-page__static-module personalized-home-page__module-".concat(e)
                            }, n.createElement("div", {
                                className: "personalized-home-page__module-container"
                            }, n.createElement(t, null)))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            this.props.homepageError && setTimeout((function() {
                                window.location = "/produce"
                            }), 250);
                            var t = this.props.merchandisingFeatures.reduce((function(e, t) {
                                    return "featured-content" === t.type ? e.featuredContentMerchandisingFeatures.push(t) : e.otherMerchandisingFeatures.push(t), e
                                }), {
                                    featuredContentMerchandisingFeatures: [],
                                    otherMerchandisingFeatures: []
                                }),
                                r = t.featuredContentMerchandisingFeatures,
                                o = t.otherMerchandisingFeatures;
                            return n.createElement("div", {
                                className: "personalized-home-page__wrapper"
                            }, n.createElement(A.ZP, null, n.createElement(z.ql, null, n.createElement("title", null, "Organic Grocery Delivery - Meal solutions and grocery items from the Deli, Bakery, Pantry, and more."), n.createElement("meta", {
                                name: "google-signin-client_id",
                                content: this.props.settings.googleAuthenticateClientId
                            }), n.createElement("meta", {
                                name: "description",
                                property: "og:description",
                                content: "Absurdly fresh groceries and meal-kits delivered same day."
                            })), n.createElement(U, {
                                feature: "home"
                            }), n.createElement(V.Z, null), n.createElement("div", {
                                className: "personalized-home-page"
                            }, this.props.merchandisingFeatures.length > 0 && n.createElement("div", {
                                className: "personalized-home-page__modules"
                            }, n.createElement("div", {
                                className: "personalized-home-page__header personalized-home-page__module"
                            }, n.createElement("div", {
                                className: "personalized-home-page__module-container"
                            }, !1)), r.length > 0 && n.createElement(Fe, null, r.map((function(t) {
                                return n.createElement(Pe, {
                                    key: "".concat(t.type, "-").concat(t.slug),
                                    module: t,
                                    user: e.props.user,
                                    features: e.props.features
                                })
                            }))), o.map(function(e) {
                                return n.createElement(Pe, {
                                    key: "".concat(e.type, "-").concat(e.slug),
                                    module: e,
                                    user: this.props.user,
                                    features: this.props.features
                                })
                            }.bind(this))), 0 === this.props.merchandisingFeatures.length || this.props.loadingMerchandisingFeatures ? n.createElement("div", {
                                className: "personalized-home-page__loading"
                            }, n.createElement(Z.Z, null)) : null, this.props.showFoodInterests || this.props.route.showFoodInterests ? n.createElement(rt, {
                                onSubmit: this.goHome.bind(this)
                            }) : null)))
                        }
                    }]) && ct(t.prototype, r), o && ct(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(n.Component);
                ft.propTypes = {
                    dispatch: i().func,
                    features: i().array,
                    homepageError: i().object,
                    loadingMerchandisingFeatures: i().bool,
                    merchandisingFeatures: i().array,
                    route: i().object,
                    selectedFoodInterests: i().array,
                    showAllFeatures: i().bool,
                    showFoodInterests: i().bool,
                    user: i().object,
                    zipCode: i().string
                };
                var dt = (0, c.$j)((function(e, t) {
                    return it(it({}, e), t)
                }))(ft);

                function yt(e) {
                    return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, yt(e)
                }

                function mt(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function ht(e, t) {
                    return ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    }, ht(e, t)
                }

                function bt(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var r, n = gt(e);
                        if (t) {
                            var o = gt(this).constructor;
                            r = Reflect.construct(n, arguments, o)
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" === yt(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(e)
                        }(this, r)
                    }
                }

                function gt(e) {
                    return gt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, gt(e)
                }
                var vt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && ht(e, t)
                    }(c, e);
                    var t, r, o, i = bt(c);

                    function c(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c);
                        var r = "/home";
                        return (t = i.call(this, e)).router = n.createElement(x, {
                            location: t.props.location
                        }, n.createElement(a.rs, null, n.createElement(k, {
                            exact: !0,
                            path: r,
                            component: dt,
                            screenName: "Home"
                        }), n.createElement(k, {
                            path: "".concat(r, "/step/interests"),
                            showFoodInterests: !0,
                            component: dt,
                            screenName: "Home"
                        }))), t
                    }
                    return t = c, o = [{
                        key: "reducer",
                        value: function(e, t) {
                            var r = A.ZP.reducer(e, t);
                            return r = function(e, t) {
                                var r = e;
                                switch (t.type) {
                                    case Be:
                                        r = De(De({}, r), {}, {
                                            selectedFoodInterests: t.interests,
                                            userHasFoodInterests: t.interests.length > 0,
                                            showFoodInterests: !1
                                        });
                                        break;
                                    case Ue:
                                        r = De(De({}, r), {}, {
                                            showFoodInterests: !1,
                                            selectedFoodInterests: t.interests
                                        });
                                        break;
                                    case Le:
                                        r = De(De({}, r), {}, {
                                            showFoodInterests: !1
                                        });
                                        break;
                                    case Ze:
                                        r = De(De({}, r), {}, {
                                            loadingMerchandisingFeatures: !0
                                        });
                                        break;
                                    case qe:
                                        var n, o = t.merchandisingFeatures,
                                            i = o.flatMap((function(e) {
                                                return e.products
                                            })).filter(Boolean),
                                            c = De({}, e.products),
                                            a = xe(i);
                                        try {
                                            for (a.s(); !(n = a.n()).done;) {
                                                var u = n.value;
                                                c[u.id] = u
                                            }
                                        } catch (s) {
                                            a.e(s)
                                        } finally {
                                            a.f()
                                        }
                                        r = De(De({}, r), {}, {
                                            loadingMerchandisingFeatures: !1,
                                            products: c,
                                            merchandisingFeatures: o
                                        });
                                        break;
                                    case He:
                                        r = De(De({}, r), {}, {
                                            loadingMerchandisingFeatures: !1,
                                            merchandisingFeatures: [],
                                            homepageError: t.error
                                        })
                                }
                                return r
                            }(r, t), r = (0, M.I)(r, t), r = (0, D.I6)(r, t)
                        }
                    }], (r = [{
                        key: "render",
                        value: function() {
                            return this.router
                        }
                    }]) && mt(t.prototype, r), o && mt(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(n.Component);
                vt.propTypes = {
                    location: i().string,
                    defaultZipCode: i().string,
                    zipCode: i().string
                }, vt.pageName = !1;
                var Ot = (0, c.$j)((function(e) {
                    return e
                }))(vt)
            }
        },
        r = {};

    function n(e) {
        var o = r[e];
        if (void 0 !== o) return o.exports;
        var i = r[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.m = t, e = [], n.O = function(t, r, o, i) {
            if (!r) {
                var c = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    r = e[l][0], o = e[l][1], i = e[l][2];
                    for (var a = !0, u = 0; u < r.length; u++)(!1 & i || c >= i) && Object.keys(n.O).every((function(e) {
                        return n.O[e](r[u])
                    })) ? r.splice(u--, 1) : (a = !1, i < c && (c = i));
                    if (a) {
                        e.splice(l--, 1);
                        var s = o();
                        void 0 !== s && (t = s)
                    }
                }
                return t
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--) e[l] = e[l - 1];
            e[l] = [r, o, i]
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.hmd = function(e) {
            return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
                enumerable: !0,
                set: function() {
                    throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                }
            }), e
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        }, n.j = 24,
        function() {
            var e = {
                24: 0
            };
            n.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, r) {
                    var o, i, c = r[0],
                        a = r[1],
                        u = r[2],
                        s = 0;
                    if (c.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in a) n.o(a, o) && (n.m[o] = a[o]);
                        if (u) var l = u(n)
                    }
                    for (t && t(r); s < c.length; s++) i = c[s], n.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                    return n.O(l)
                },
                r = self.webpackChunk_goodeggs_entrypoint = self.webpackChunk_goodeggs_entrypoint || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(), n.O(void 0, [374], (function() {
            return n(62599)
        }));
    var o = n.O(void 0, [374], (function() {
        return n(56941)
    }));
    o = n.O(o), (window._goodeggs = window._goodeggs || {}).entrypoint = o.default
}();
//# sourceMappingURL=web_home2_home_app.506e516c47e37ee273c1.js.map