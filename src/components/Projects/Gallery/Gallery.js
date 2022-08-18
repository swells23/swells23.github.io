import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Container,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styles from './Gallery.styles';

const DATA_MAP = require('../../../data/gallery.json');

const Gallery = ({ data }) => {
    const classes = makeStyles(styles)(),
        getGalleryItems = () => {
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
                        <Card>
                            <CardActionArea>
                                <GatsbyImage image={imgSrc} alt={item.title} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {item.githubSrc && (
                                    <Button size='small' className={classes.githubBtn} href={item.githubSrc} target='_blank' aria-label={`${item.title} github`}>
                                        Github
                                    </Button>
                                )}
                                {item.websiteSrc && (
                                    <Button size='small' className={classes.websiteBtn} href={item.websiteSrc} target='_blank' aria-label={`${item.title} website`}>
                                        Website
                                    </Button>
                                )}
                                {item.prototypeSrc && (
                                    <Button size='small' className={classes.prototypeBtn} href={item.prototypeSrc} target='_blank' aria-label={`${item.title} prototype`}>
                                        Prototype
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        };

    return (
        <Container component='section' className={classes.root}>
            <Grid container spacing={3}>
                {getGalleryItems()}
            </Grid>
        </Container>
    );
};

export default Gallery;