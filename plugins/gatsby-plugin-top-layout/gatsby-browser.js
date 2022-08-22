/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import DefaultTemplate from './DefaultTemplate';

export const wrapRootElement = ({ element }) => {
  return <DefaultTemplate>{element}</DefaultTemplate>;
};
