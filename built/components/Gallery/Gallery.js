"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var react_1 = require("react");
var Gallery_styles_1 = require("./Gallery.styles");
var DATA_MAP = require('../../data/gallery.json');
var Gallery = function (_a) {
    var data = _a.data;
    var getGalleryItems = function () {
        var galleryData = DATA_MAP.GalleryData, gqlGalleryEdges = data.allFile.edges, gqlGalleryNodes = new Map();
        gqlGalleryEdges.forEach(function (item) {
            gqlGalleryNodes.set(item.node.base, item.node);
        });
        return galleryData.map(function (item) {
            var imgSrc = (0, gatsby_plugin_image_1.getImage)(gqlGalleryNodes.get(item.src));
            return (react_1.default.createElement(material_1.Grid, { item: true, key: item.title, md: 6, lg: 4 },
                react_1.default.createElement(material_1.Card, null,
                    react_1.default.createElement(material_1.CardActionArea, null,
                        react_1.default.createElement(gatsby_plugin_image_1.GatsbyImage, { image: imgSrc, alt: item.title }),
                        react_1.default.createElement(material_1.CardContent, null,
                            react_1.default.createElement(material_1.Typography, { gutterBottom: true, variant: 'h5', component: 'h2' }, item.title))),
                    react_1.default.createElement(material_1.CardActions, null,
                        item.githubSrc && (react_1.default.createElement(material_1.Button, { size: 'small', sx: [Gallery_styles_1.default.sourceBtn, Gallery_styles_1.default.githubBtn], href: item.githubSrc, target: '_blank', "aria-label": "".concat(item.title, " github") }, "Github")),
                        item.websiteSrc && (react_1.default.createElement(material_1.Button, { size: 'small', sx: [Gallery_styles_1.default.sourceBtn, Gallery_styles_1.default.websiteBtn], href: item.websiteSrc, target: '_blank', "aria-label": "".concat(item.title, " website") }, "Website")),
                        item.prototypeSrc && (react_1.default.createElement(material_1.Button, { size: 'small', sx: [Gallery_styles_1.default.sourceBtn, Gallery_styles_1.default.prototypeBtn], href: item.prototypeSrc, target: '_blank', "aria-label": "".concat(item.title, " prototype") }, "Prototype"))))));
        });
    };
    return (react_1.default.createElement(material_1.Container, { component: 'section', sx: Gallery_styles_1.default.root },
        react_1.default.createElement(material_1.Grid, { container: true, spacing: 3 }, getGalleryItems())));
};
exports.default = Gallery;
