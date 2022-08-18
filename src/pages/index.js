import { graphql } from 'gatsby';
import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { Leadspace } from '../components/Homepage';

function Homepage({ data, location }) {
  return (
    <DefaultTemplate headTitle='Home' location={location}>
      <Leadspace data={data} />
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
