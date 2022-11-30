"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var OpenInNew_1 = require("@mui/icons-material/OpenInNew");
var gatsby_1 = require("gatsby");
var prop_types_1 = require("prop-types");
var react_1 = require("react");
var templateMeta_1 = require("../../../data/templateMeta");
var GlobalNav_styles_1 = require("./GlobalNav.styles");
var GlobalNav = function (_a) {
    var location = _a.location;
    var _b = react_1.default.useState(location.pathname), value = _b[0], setValue = _b[1], isMobile = (0, material_1.useMediaQuery)((0, material_1.useTheme)().breakpoints.down('sm')), handleChange = function (evt, newValue) {
        (0, gatsby_1.navigate)(newValue);
        setValue(newValue);
    }, getMenuItems = function () {
        var Component = isMobile ? material_1.BottomNavigationAction : material_1.Tab;
        return templateMeta_1.PAGELIST.map(function (page) {
            return react_1.default.createElement(Component, { key: page.id, "aria-label": page.id, value: page.route, label: page.title });
        });
    };
    return isMobile ?
        (react_1.default.createElement(material_1.BottomNavigation, { component: 'nav', "aria-label": 'navigation', value: value, onChange: handleChange, showLabels: true }, getMenuItems()))
        : (react_1.default.createElement(material_1.AppBar, { position: 'sticky' },
            react_1.default.createElement(material_1.Toolbar, { sx: GlobalNav_styles_1.default.toolbar },
                react_1.default.createElement(material_1.Tabs, { component: 'nav', "aria-label": 'navigation', value: value, onChange: handleChange, textColor: 'inherit', indicatorColor: 'secondary', sx: GlobalNav_styles_1.default.tabs }, getMenuItems()),
                react_1.default.createElement(material_1.Link, { href: 'https://github.com/swells23/swells23.github.io', color: 'secondary', underline: 'hover', target: '_blank' },
                    "View Repository",
                    react_1.default.createElement(OpenInNew_1.default, { sx: GlobalNav_styles_1.default.repoLink })))));
};
GlobalNav.defaultProps = {
    location: {
        pathname: ''
    }
};
GlobalNav.propTypes = {
    location: prop_types_1.default.shape({
        pathname: prop_types_1.default.string
    })
};
exports.default = GlobalNav;
