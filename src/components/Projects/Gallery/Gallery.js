import { Grid } from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const DATA_MAP = require('../../../../data/gallery.json');

const Gallery = ({ data }) => {
    const getGalleryItems = () => {
        const galleryData = DATA_MAP.GalleryData,
            gqlGalleryEdges = data.allFile.edges,
            gqlGalleryNodes = new Map();

        gqlGalleryEdges.forEach(item => {
            gqlGalleryNodes.set(item.node.base, item.node);
        });

        return galleryData.map(item => {
            const imgSrc = getImage(gqlGalleryNodes.get(item.src));

            return (
                <Grid item key={item.title} md={6} lg={4}>
                    <GatsbyImage image={imgSrc} alt={item.title} />
                </Grid>
            )
        })
    };

    return (
        <Grid container spacing={3}>
            {getGalleryItems()}
        </Grid>
    );
};

Gallery.defaultProps = {
    navDiff: '3rem',
    mobileNavDiff: '3.5rem'
};

export default Gallery;