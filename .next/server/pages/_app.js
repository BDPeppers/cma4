"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/icons-material/Instagram"
const Instagram_namespaceObject = require("@mui/icons-material/Instagram");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Facebook"
const Facebook_namespaceObject = require("@mui/icons-material/Facebook");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/YouTube"
const YouTube_namespaceObject = require("@mui/icons-material/YouTube");
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_namespaceObject);
;// CONCATENATED MODULE: external "google-map-react"
const external_google_map_react_namespaceObject = require("google-map-react");
var external_google_map_react_default = /*#__PURE__*/__webpack_require__.n(external_google_map_react_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Room"
const Room_namespaceObject = require("@mui/icons-material/Room");
var Room_default = /*#__PURE__*/__webpack_require__.n(Room_namespaceObject);
;// CONCATENATED MODULE: ./src/components/features/Map/Map.tsx




const API_KEY = process.env.GOOGLE_MAP_API_KEY;
function CmaMarker(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx((Room_default()), {
        style: {
            fontSize: "2.5rem",
            color: "#F8234D"
        }
    }));
}
//Gym coordinates
const defaultMapProps = {
    center: {
        lat: 32.611931,
        lng: -83.678253
    },
    zoom: 13
};
class CmaMap extends external_react_.Component {
    render() {
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                height: "30rem",
                width: "100vw"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_google_map_react_default()), {
                bootstrapURLKeys: {
                    key: "AIzaSyCsp9_jlm4odj6ub2wxf7iS3RhrDM2pVbM"
                },
                defaultCenter: defaultMapProps.center,
                defaultZoom: defaultMapProps.zoom,
                draggable: false,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CmaMarker, {
                    lat: 32.611931,
                    lng: -83.678253
                })
            })
        }));
    }
}


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/navigation/Footer/Footer.tsx








function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CmaMap, {
                center: defaultMapProps.center,
                zoom: defaultMapProps.zoom
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "cma-footer blk-bg",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "cma-footer-wrapper",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cma-footer long-footer-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "footer-header",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "header",
                                        children: "CMAFITNESS"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "footer-tagline",
                                    children: "We provide a new experience in fitness! Fall in love with the lifestyle and have fun in the process."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cma-staff-hours footer-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "footer-header header",
                                    children: "Staff Hours"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Mon - Thur:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "9:00AM - 1:00PM"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "4:00PM - 8:00PM"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Fri - Sat:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "9:00AM - 1:00PM"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Sun:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Closed"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cma-staff-hours footer-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "footer-header header",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "header",
                                            children: "CMA"
                                        }),
                                        " Kidz Care Hours"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Mon - Thur:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "9:00AM - 1:00PM"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "4:00PM - 8:00PM"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Fri - Sat:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "9:00AM - 1:00PM"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Sun:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Closed"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cma-contact footer-box",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "footer-header header",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Phone:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "478-333-1376"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "Email:"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "info@cmafitness.fit"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-box location",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "footer-header header",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "header",
                                            children: "CMA"
                                        }),
                                        "Fitness"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "198 S Houston Lake Rd Suite D"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "footer-sub-header header",
                                    children: "The Dungeon"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: "198 S Houston Lake Rd Suite E"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-social long-footer-box",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((YouTube_default()), {
                                            className: "social-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.youtube.com/channel/UC-_H7sCOzwr_gHzMok8lgJw/videos",
                                                children: "CMA Fitness"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Facebook_default()), {
                                            className: "social-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.facebook.com/fitwithchan/",
                                                children: "@fitwithchan"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                                            className: "social-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.instagram.com/cmafitness/",
                                                children: "@cmafitness"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                                            className: "social-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.instagram.com/cma_the_dungeon/",
                                                children: "@cma_the_dungeon"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Instagram_default()), {
                                            className: "social-icon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "https://www.instagram.com/scorpiondoll77/",
                                                children: "Meet the owner!"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/material/List"
const List_namespaceObject = require("@mui/material/List");
var List_default = /*#__PURE__*/__webpack_require__.n(List_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItem"
const ListItem_namespaceObject = require("@mui/material/ListItem");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/ListItemText"
const ListItemText_namespaceObject = require("@mui/material/ListItemText");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MenuRounded"
const MenuRounded_namespaceObject = require("@mui/icons-material/MenuRounded");
var MenuRounded_default = /*#__PURE__*/__webpack_require__.n(MenuRounded_namespaceObject);
;// CONCATENATED MODULE: ./src/components/navigation/Navbar/MobileNav/MobileNav.tsx










function MobileNav(props) {
    const [state, setState] = external_react_.useState({
        right: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
            });
        }
    ;
    const list = (anchor)=>{
        var ref;
        /*#__PURE__*/ return jsx_runtime_.jsx((Box_default()), {
            sx: {
                width: 250
            },
            role: "presentation",
            onClick: toggleDrawer(anchor, false),
            onKeyDown: toggleDrawer(anchor, false),
            children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                children: (ref = props.navLinks) === null || ref === void 0 ? void 0 : ref.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        button: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/${link}`,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                primary: link
                            })
                        })
                    }, link)
                )
            })
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mobile-nav",
        children: [
            "right"
        ].map((anchor)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        className: "mobile-menu-btn blk-bg",
                        "aria-label": "Menu Button",
                        onClick: toggleDrawer(anchor, true),
                        style: {
                            fontSize: "2rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((MenuRounded_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                        anchor: anchor,
                        open: state[anchor],
                        onClose: toggleDrawer(anchor, false),
                        children: list(anchor)
                    })
                ]
            }, anchor)
        )
    }));
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/navigation/Navbar/NavigationBar.tsx





function NavigationBar(props) {
    var ref;
    return(/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar blk-bg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "nav-wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "company-nav-header",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "company-nav-header-name header",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/Home",
                            passHref: true,
                            children: "CMAFITNESS"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "desktop-nav-links",
                    children: [
                        (ref = props.navLinks) === null || ref === void 0 ? void 0 : ref.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                className: "blk-bg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: `/${link}`,
                                    passHref: true,
                                    children: link
                                })
                            }, link)
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                            className: "yt-bg nav-header-btn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "https://secure.peakpayment.com/8821/join/?o_club_url=8821",
                                children: "Join Now"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mobile-nav-links",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                        navLinks: props.navLinks
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/navigation/Layout/Layout.tsx




var links = [
    'Home',
    'About'
];
function Layout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {
                navLinks: links
            }),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(7702)));
module.exports = __webpack_exports__;

})();