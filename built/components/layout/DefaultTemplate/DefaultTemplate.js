"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
var GlobalNav_1 = require("../../pattern/GlobalNav");
var DefaultTemplate_styles_1 = require("./DefaultTemplate.styles");
var DefaultTemplate = function (_a) {
    var children = _a.children, page = _a.page, location = _a.location;
    var isMobile = (0, material_1.useMediaQuery)((0, material_1.useTheme)().breakpoints.down('sm')), pageTitle = page && "".concat(page, " | ");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_1.Helmet, null,
            react_1.default.createElement("title", null, "".concat(pageTitle, "swells23's Portfolio")),
            react_1.default.createElement("meta", { name: 'viewport', content: 'initial-scale=1, width=device-width' })),
        !isMobile && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(GlobalNav_1.default, { location: location }),
            children)),
        isMobile && (react_1.default.createElement(material_1.Box, { sx: DefaultTemplate_styles_1.default.mobileWrapper },
            children,
            react_1.default.createElement(GlobalNav_1.default, { location: location })))));
};
DefaultTemplate.defaultProps = {
    page: ''
};
DefaultTemplate.propTypes = {
    page: prop_types_1.default.string
};
exports.default = DefaultTemplate;
