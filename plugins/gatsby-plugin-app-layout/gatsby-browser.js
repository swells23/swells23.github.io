import React from 'react';
import AppLayout from './AppLayout';

export const wrapRootElement = ({ element }) => {
  return <AppLayout>{element}</AppLayout>;
};
