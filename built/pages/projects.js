"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageQuery = void 0;
var gatsby_1 = require("gatsby");
var react_1 = require("react");
var DefaultTemplate_1 = require("../components/layout/DefaultTemplate");
var Gallery_1 = require("../components/Gallery");
function Projects(_a) {
    var data = _a.data, location = _a.location;
    return (react_1.default.createElement(DefaultTemplate_1.default, { page: 'Projects', location: location },
        react_1.default.createElement(Gallery_1.default, { data: data })));
}
exports.default = Projects;
exports.pageQuery = (0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query {\n    allFile(filter: {relativeDirectory: {eq: \"images/gallery\"}}) {\n      edges {\n        node {\n          base\n          childImageSharp {\n            gatsbyImageData(transformOptions: {fit: FILL}, aspectRatio: 1.7778)\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query {\n    allFile(filter: {relativeDirectory: {eq: \"images/gallery\"}}) {\n      edges {\n        node {\n          base\n          childImageSharp {\n            gatsbyImageData(transformOptions: {fit: FILL}, aspectRatio: 1.7778)\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
