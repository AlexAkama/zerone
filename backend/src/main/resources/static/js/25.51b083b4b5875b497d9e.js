webpackJsonp([25], {
    "N9p+": function(e, s, t) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = t("Dd8w"),
            n = t.n(i),
            r = (t("IcnI"), t("NYxO")),
            a = t("UBpT"),
            d = t("CqtB"),
            l = {
                name: "FriendsRequest",
                computed: n()({}, Object(r.c)("profile/friends", ["getResultById"]), {
                    requestFriends: function() {
                        return this.getResultById("request")
                    }
                }),
                methods: n()({}, Object(r.b)("profile/friends", ["apiAddFriends", "apiRequest"])),
                mounted: function() {
                    0 === this.requestFriends.length && this.apiRequest()
                }
            },
            f = {
                render: function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return e.requestFriends.length > 0 ? t("div", {
                        staticClass: "friends-request"
                    }, [t("h4", {
                        staticClass: "friends-request__title"
                    }, [e._v("Заявки в друзья")]), t("ul", {
                        staticClass: "friends-request__list"
                    }, e._l(e.requestFriends, function(s) {
                        return t("li", {
                            key: s.id,
                            staticClass: "friends-request__item"
                        }, [t("div", {
                            staticClass: "friends-request__pic"
                        }, [t("img", {
                            attrs: {
                                src: s.photo,
                                alt: s.first_name
                            }
                        })]), t("router-link", {
                            staticClass: "friends-request__name",
                            attrs: {
                                to: {
                                    name: "ProfileId",
                                    params: {
                                        id: s.id
                                    }
                                }
                            }
                        }, [e._v(e._s(s.first_name + " " + s.last_name))]), t("a", {
                            staticClass: "friends-request__link",
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function(t) {
                                    return t.preventDefault(), e.apiAddFriends(s.id)
                                }
                            }
                        }, [e._v("Добавить")])], 1)
                    }), 0)]) : e._e()
                },
                staticRenderFns: []
            },
            u = t("VU/8")(l, f, !1, null, null, null).exports,
            c = {
                name: "Friends",
                components: {
                    FriendsPossible: a.a,
                    FriendsBlock: d.a,
                    FriendsRequest: u
                },
                data: function() {
                    return {
                        first_name: ""
                    }
                },
                computed: n()({}, Object(r.c)("profile/friends", ["getResultById"]), {
                    friends: function() {
                        var e = this;
                        return 0 === this.first_name.length ? this.getResultById("friends") : this.getResultById("friends").filter(function(s) {
                            return -1 !== s.first_name.toLowerCase().indexOf(e.first_name.toLowerCase()) || -1 !== s.last_name.toLowerCase().indexOf(e.first_name.toLowerCase())
                        })
                    }
                }),
                methods: n()({}, Object(r.b)("profile/friends", ["apiFriends"])),
                beforeRouteEnter: function(e, s, t) {
                    t(function(e) {
                        e.apiFriends()
                    })
                }
            },
            o = {
                render: function() {
                    var e = this,
                        s = e.$createElement,
                        t = e._self._c || s;
                    return t("div", {
                        staticClass: "friends inner-page"
                    }, [t("div", {
                        staticClass: "inner-page__main"
                    }, [t("div", {
                        staticClass: "friends__header"
                    }, [t("h2", {
                        staticClass: "friends__title"
                    }, [e._v("Мои друзья")]), t("div", {
                        staticClass: "friends__search"
                    }, [t("div", {
                        staticClass: "friends__search-icon"
                    }, [t("simple-svg", {
                        attrs: {
                            filepath: "/img/search.svg"
                        }
                    })], 1), t("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.first_name,
                            expression: "first_name"
                        }],
                        staticClass: "friends__search-input",
                        attrs: {
                            placeholder: "Начните вводить имя друга..."
                        },
                        domProps: {
                            value: e.first_name
                        },
                        on: {
                            input: function(s) {
                                s.target.composing || (e.first_name = s.target.value)
                            }
                        }
                    })])]), t("div", {
                        staticClass: "friends__list"
                    }, e._l(e.friends, function(e) {
                        return t("friends-block", {
                            key: e.id,
                            attrs: {
                                friend: "friend",
                                info: e
                            }
                        })
                    }), 1)]), t("div", {
                        staticClass: "inner-page__aside"
                    }, [t("br"), t("friends-request"), t("br"), t("friends-possible")], 1)])
                },
                staticRenderFns: []
            },
            _ = t("VU/8")(c, o, !1, null, null, null);
        s.default = _.exports
    }
});
//# sourceMappingURL=25.51b083b4b5875b497d9e.js.map