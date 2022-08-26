import { graphql } from 'gatsby';
import React from 'react';
import DefaultTemplate from '../components/layout/DefaultTemplate';
import Hero from '../components/Hero';

function Homepage({ data, location }) {
  return (
    <DefaultTemplate page='Home' location={location}>
      <Hero data={data} />
    </DefaultTemplate>
  );
}

export default Homepage;
export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "images/homepage-background.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
