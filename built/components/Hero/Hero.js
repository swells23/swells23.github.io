"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("@emotion/react");
var material_1 = require("@mui/material");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var templateMeta_1 = require("../../data/templateMeta");
var Hero_styles_js_1 = require("./Hero.styles.js");
var Hero = function (_a) {
    var classes = _a.classes, data = _a.data, props = __rest(_a, ["classes", "data"]);
    var styles = (0, Hero_styles_js_1.default)({ theme: (0, material_1.useTheme)(), props: props }), heroImg = (0, gatsby_plugin_image_1.getImage)(data.file);
    return ((0, react_1.jsx)(material_1.Box, { sx: styles.root },
        (0, react_1.jsx)(gatsby_plugin_image_1.GatsbyImage, { css: styles.heroImg, image: heroImg, alt: templateMeta_1.MAIN_IMAGES.hero.alt, objectFit: 'fill' }),
        (0, react_1.jsx)(material_1.Grid, { sx: styles.heroTextWrapper, container: true },
            (0, react_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6, md: 4 },
                (0, react_1.jsx)(material_1.Typography, { variant: 'h4', component: 'p', color: 'secondary' }, "Stephen Wells"),
                (0, react_1.jsx)("hr", { className: styles.heroTextDivider }),
                (0, react_1.jsx)(material_1.Typography, { variant: 'h6', component: 'p', color: 'secondary' }, "Front End Web Development Raleigh, NC")))));
};
Hero.defaultProps = {
    navDiff: '3rem',
    mobileNavDiff: '3.5rem'
};
exports.default = Hero;
