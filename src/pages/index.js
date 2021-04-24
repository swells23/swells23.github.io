import React from 'react';
import { DefaultTemplate } from '../components/layout';
import { Leadspace } from '../components/Homepage';

function Homepage(props) {
  const { location } = props;

  return (
    <DefaultTemplate headTitle="Home" location={location}>
      <Leadspace />
    </DefaultTemplate>
  );
}

export default Homepage;
