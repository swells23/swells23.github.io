"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var react_1 = require("@emotion/react");
var material_1 = require("@mui/material");
var ContactBand_styles_1 = require("./ContactBand.styles");
var ContactBand = function (_a) {
    var _b, _c, _d;
    var data = _a.data;
    var resumeRef = (_d = (_c = (_b = data.allFile) === null || _b === void 0 ? void 0 : _b.edges[0]) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.publicURL;
    return ((0, react_1.jsx)(material_1.Container, { component: 'section', sx: ContactBand_styles_1.default.root },
        (0, react_1.jsx)(material_1.Typography, { variant: 'h3', component: 'h1', color: 'primary', gutterBottom: true }, "Get in touch"),
        (0, react_1.jsx)(material_1.Typography, { variant: 'h6', component: 'h2', color: 'primary', gutterBottom: true }, "This is how you can reach me."),
        (0, react_1.jsx)("hr", { css: ContactBand_styles_1.default.contactRefWrapper }),
        (0, react_1.jsx)(material_1.Grid, { sx: ContactBand_styles_1.default.contactRefWrapper, container: true, spacing: 4 },
            (0, react_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6 },
                (0, react_1.jsx)(material_1.Paper, { sx: ContactBand_styles_1.default.paper },
                    (0, react_1.jsx)(material_1.Typography, { align: 'center' },
                        (0, react_1.jsx)(material_1.Typography, { component: 'span', color: 'secondary' }, "Email: "),
                        "wells.sn2@gmail.com"))),
            (0, react_1.jsx)(material_1.Grid, { item: true, xs: 12, sm: 6 },
                (0, react_1.jsx)(material_1.Paper, { sx: ContactBand_styles_1.default.paper },
                    (0, react_1.jsx)(material_1.Typography, { align: 'center' },
                        (0, react_1.jsx)(material_1.Typography, { component: 'span', color: 'secondary' }, "Phone: "),
                        "(919) 827-3421"))),
            resumeRef && ((0, react_1.jsx)(material_1.Grid, { sx: ContactBand_styles_1.default.viewResumeWrapper, item: true, xs: 12 },
                (0, react_1.jsx)(material_1.Button, { variant: 'contained', color: 'secondary', size: 'large', href: resumeRef, target: '_blank' }, "Download Resume"))))));
};
exports.default = ContactBand;
