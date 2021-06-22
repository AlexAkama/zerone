webpackJsonp([9], {
    hl9Z: function(i, t) {},
    tJ7h: function(i, t, e) {
        "use strict";
        var s = e("Dd8w"),
            o = e.n(s),
            n = e("NYxO"),
            a = {
                name: "ProfileInfo",
                components: {
                    Modal: e("/o5o").a
                },
                props: {
                    me: Boolean,
                    online: Boolean,
                    blocked: Boolean,
                    friend: Boolean,
                    info: Object,
                    youBlocked: Boolean
                },
                data: function() {
                    return {
                        modalShow: !1,
                        modalText: "",
                        modalType: "deleteFriend"
                    }
                },
                computed: o()({}, Object(n.c)("profile/dialogs", ["dialogs"]), {
                    statusText: function() {
                        return this.online ? "онлайн" : "не в сети"
                    },
                    blockedText: function() {
                        return this.blocked ? "Пользователь заблокирован" : "Заблокировать"
                    },
                    btnVariantInfo: function() {
                        return this.blocked ? {
                            variant: "red",
                            text: "Разблокировать"
                        } : this.friend ? {
                            variant: "red",
                            text: "Удалить из друзей"
                        } : {
                            variant: "white",
                            text: "Добавить в друзья"
                        }
                    },
                    getAge: function() {
                        return i = this.info.ages, t = ["год", "года", "лет"], e = (i = Math.abs(i) % 100) % 10, i > 10 && i < 20 ? t[2] : e > 1 && e < 5 ? t[1] : 1 === e ? t[0] : t[2];
                        var i, t, e
                    }
                }),
                methods: o()({}, Object(n.b)("users/actions", ["apiBlockUser", "apiUnblockUser"]), Object(n.b)("profile/friends", ["apiAddFriends", "apiDeleteFriends"]), Object(n.b)("profile/dialogs", ["createDialogWithUser", "apiLoadAllDialogs"]), Object(n.b)("users/info", ["apiInfo"]), {
                    blockedUser: function() {
                        this.blocked || (this.modalText = "Вы уверены, что хотите заблокировать пользователя " + this.info.fullName, this.modalShow = !0, this.modalType = "block")
                    },
                    profileAction: function() {
                        var i = this;
                        if (!this.blocked) return this.friend ? (this.modalText = "Вы уверены, что хотите удалить пользователя " + this.info.fullName + " из друзей?", this.modalShow = !0, void(this.modalType = "deleteFriend")) : void this.apiAddFriends(this.info.id).then(function() {
                            i.apiInfo(i.$route.params.id)
                        });
                        this.apiUnblockUser(this.$route.params.id).then(function() {
                            i.apiInfo(i.$route.params.id)
                        })
                    },
                    closeModal: function() {
                        this.modalShow = !1
                    },
                    onConfirm: function() {
                        var i = this;
                        "block" !== this.modalType ? this.apiDeleteFriends(this.$route.params.id).then(function() {
                            i.apiInfo(i.$route.params.id), i.closeModal()
                        }) : this.apiBlockUser(this.$route.params.id).then(function() {
                            i.apiInfo(i.$route.params.id), i.closeModal()
                        })
                    },
                    onSentMessage: function() {
                        if (this.blocked) return !1;
                        this.$router.push({
                            name: "Im",
                            query: {
                                userId: this.info.id
                            }
                        })
                    }
                })
            },
            l = {
                render: function() {
                    var i = this,
                        t = i.$createElement,
                        e = i._self._c || t;
                    return "Доступ к профилю ограничен пользователем" === i.info.fullName ? e("div", {
                        staticClass: "profile-info"
                    }, [e("div", {
                        staticClass: "profile-info__pic"
                    }, [e("div", {
                        staticClass: "profile-info__img",
                        class: {
                            offline: !i.online && !i.me
                        }
                    }, [e("img", {
                        attrs: {
                            src: i.info.photo,
                            alt: i.info.fullName
                        }
                    })])]), e("div", {
                        staticClass: "profile-info__main"
                    }, [i.me ? e("router-link", {
                        staticClass: "edit",
                        attrs: {
                            to: {
                                name: "Settings"
                            }
                        }
                    }, [e("simple-svg", {
                        attrs: {
                            filepath: "/img/edit.svg"
                        }
                    })], 1) : i._e(), e("div", {
                        staticClass: "profile-info__header"
                    }, [e("h1", {
                        staticClass: "profile-info__name"
                    }, [i._v(i._s(i.info.fullName))])])], 1)]) : i.info ? e("div", {
                        staticClass: "profile-info"
                    }, [e("div", {
                        staticClass: "profile-info__pic"
                    }, [e("div", {
                        staticClass: "profile-info__img",
                        class: {
                            offline: !i.online && !i.me
                        }
                    }, [e("img", {
                        attrs: {
                            src: i.info.photo,
                            alt: i.info.fullName
                        }
                    })]), i.me ? i._e() : e("div", {
                        staticClass: "profile-info__actions"
                    }, [i.youBlocked ? e("div", {
                        staticClass: "profile-info__actions__you-blocked"
                    }, [e("span", {
                        staticClass: "profile-info__you-blocked"
                    }, [i._v("Пользователь вас заблокировал")])]) : e("div", {
                        staticClass: "profile-info__actions__you-not-blocked"
                    }, [e("button-hover", {
                        attrs: {
                            disable: i.blocked
                        },
                        nativeOn: {
                            click: function(t) {
                                return i.onSentMessage(t)
                            }
                        }
                    }, [i._v("Написать сообщение")]), e("button-hover", {
                        staticClass: "profile-info__add",
                        attrs: {
                            variant: i.btnVariantInfo.variant,
                            bordered: "bordered"
                        },
                        nativeOn: {
                            click: function(t) {
                                return i.profileAction(t)
                            }
                        }
                    }, [i._v(i._s(i.btnVariantInfo.text))])], 1)])]), e("div", {
                        staticClass: "profile-info__main"
                    }, [i.me ? e("router-link", {
                        staticClass: "edit",
                        attrs: {
                            to: {
                                name: "Settings"
                            }
                        }
                    }, [e("simple-svg", {
                        attrs: {
                            filepath: "/img/edit.svg"
                        }
                    })], 1) : e("span", {
                        staticClass: "profile-info__blocked",
                        class: {
                            blocked: i.blocked
                        },
                        on: {
                            click: i.blockedUser
                        }
                    }, [i._v(i._s(i.blockedText))]), e("div", {
                        staticClass: "profile-info__header"
                    }, [e("h1", {
                        staticClass: "profile-info__name"
                    }, [i._v(i._s(i.info.fullName))]), e("span", {
                        staticClass: "user-status",
                        class: {
                            online: i.online, offline: !i.online
                        }
                    }, [i._v(i._s(i.statusText))])]), e("div", {
                        staticClass: "profile-info__block"
                    }, [e("span", {
                        staticClass: "profile-info__title"
                    }, [i._v("Дата рождения:")]), i.info.birth_date ? e("span", {
                        staticClass: "profile-info__val"
                    }, [i._v(i._s(i._f("moment")(i.info.birth_date, "D MMMM YYYY")) + " (" + i._s(i.info.ages) + " " + i._s(i.getAge) + ")")]) : e("span", {
                        staticClass: "profile-info__val"
                    }, [i._v("не заполнено")])]), e("div", {
                        staticClass: "profile-info__block"
                    }, [e("span", {
                        staticClass: "profile-info__title"
                    }, [i._v("Телефон:")]), i.info.phone ? e("a", {
                        staticClass: "profile-info__val",
                        attrs: {
                            href: "tel:" + i.info.phone
                        }
                    }, [i._v(i._s(i._f("phone")(i.info.phone)))]) : e("a", {
                        staticClass: "profile-info__val"
                    }, [i._v("не заполнено")])]), e("div", {
                        staticClass: "profile-info__block"
                    }, [e("span", {
                        staticClass: "profile-info__title"
                    }, [i._v("Страна, город:")]), i.info.country ? e("span", {
                        staticClass: "profile-info__val"
                    }, [i._v(i._s(i.info.country.title) + ", " + i._s(i.info.city.title))]) : e("span", {
                        staticClass: "profile-info__val"
                    }, [i._v("не заполнено")])]), e("div", {
                        staticClass: "profile-info__block"
                    }, [e("span", {
                        staticClass: "profile-info__title"
                    }, [i._v("О себе:")]), i.info.about ? e("span", {
                        staticClass: "profile-info__val"
                    }, [i._v(i._s(i.info.about))]) : e("span", {
                        staticClass: "profile-info__val"
                    }, [i._v("не заполнено")])])], 1), e("modal", {
                        model: {
                            value: i.modalShow,
                            callback: function(t) {
                                i.modalShow = t
                            },
                            expression: "modalShow"
                        }
                    }, [i.modalText ? e("p", [i._v(i._s(i.modalText))]) : i._e(), e("template", {
                        slot: "actions"
                    }, [e("button-hover", {
                        nativeOn: {
                            click: function(t) {
                                return t.preventDefault(), i.onConfirm(t)
                            }
                        }
                    }, [i._v("Да")]), e("button-hover", {
                        attrs: {
                            variant: "red",
                            bordered: "bordered"
                        },
                        nativeOn: {
                            click: function(t) {
                                return i.closeModal(t)
                            }
                        }
                    }, [i._v("Отмена")])], 1)], 2)], 1) : i._e()
                },
                staticRenderFns: []
            };
        var r = e("VU/8")(a, l, !1, function(i) {
            e("hl9Z")
        }, null, null);
        t.a = r.exports
    },
    xX9V: function(i, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = e("Dd8w"),
            o = e.n(s),
            n = e("UBpT"),
            a = e("tJ7h"),
            l = e("0Hd5"),
            r = e("NYxO"),
            f = {
                name: "ProfileId",
                components: {
                    FriendsPossible: n.a,
                    ProfileInfo: a.a,
                    NewsBlock: l.a
                },
                data: function() {
                    return {
                        loading: !1
                    }
                },
                computed: o()({}, Object(r.c)("users/info", ["getUsersInfo", "getWallPosted"])),
                methods: o()({}, Object(r.b)("users/info", ["userInfoId"])),
                created: function() {
                    this.userInfoId(this.$route.params.id)
                }
            },
            c = {
                render: function() {
                    var i = this,
                        t = i.$createElement,
                        e = i._self._c || t;
                    return i.getUsersInfo ? e("div", {
                        staticClass: "profile inner-page"
                    }, [e("div", {
                        staticClass: "inner-page__main"
                    }, [e("div", {
                        staticClass: "profile__info"
                    }, [e("profile-info", {
                        attrs: {
                            info: i.getUsersInfo,
                            blocked: i.getUsersInfo.is_blocked,
                            friend: i.getUsersInfo.is_friend,
                            online: i.getUsersInfo.is_onlined,
                            youBlocked: i.getUsersInfo.are_you_blocked,
                            me: i.getUsersInfo.is_me
                        }
                    })], 1), "Доступ к профилю ограничен" === i.getUsersInfo.first_name ? e("div", {
                        staticClass: "profile__news"
                    }) : i.getUsersInfo.are_you_blocked ? i._e() : e("div", {
                        staticClass: "profile__news"
                    }, [e("div", {
                        staticClass: "profile__tabs"
                    }, [e("span", {
                        staticClass: "profile__tab active"
                    }, [i._v("Публикации " + i._s(i.getUsersInfo.first_name) + " (" + i._s(i.getWallPosted.length) + ")")])]), e("div", {
                        staticClass: "profile__news-list"
                    }, i._l(i.getWallPosted, function(i) {
                        return e("news-block", {
                            key: i.id,
                            attrs: {
                                info: i
                            }
                        })
                    }), 1)])]), e("div", {
                        staticClass: "inner-page__aside"
                    }, [e("friends-possible")], 1)]) : i._e()
                },
                staticRenderFns: []
            },
            d = e("VU/8")(f, c, !1, null, null, null);
        t.default = d.exports
    }
});
//# sourceMappingURL=9.0267719910bd99cd2a3d.js.map