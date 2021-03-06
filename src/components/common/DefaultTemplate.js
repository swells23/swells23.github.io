import React from 'react';

const DefaultTemplate = props => {
    const { children } = props;

    return (
        <div>{children}</div>
    )
}

export default DefaultTemplate;