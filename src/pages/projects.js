import { graphql } from 'gatsby';
import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { Gallery } from '../components/Projects';

function Projects({ data, location }) {
  return (
    <DefaultTemplate headTitle="Projects" location={location}>
      <Gallery data={data} />
    </DefaultTemplate>
  );
}

export default Projects;
export const pageQuery = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "images/gallery"}}) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(transformOptions: {fit: FILL}, aspectRatio: 1.7778)
          }
        }
      }
    }
  }
`;
