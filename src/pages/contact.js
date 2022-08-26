import { graphql } from 'gatsby';
import React from 'react';
import DefaultTemplate from '../components/layout/DefaultTemplate';
import ContactBand from '../components/ContactBand';

function Contact({ data, location }) {
  return (
    <DefaultTemplate page='Contact' location={location}>
      <ContactBand data={data} />
    </DefaultTemplate>
  );
}

export default Contact;
export const pageQuery = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "data"}, extension: {eq: "pdf"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
