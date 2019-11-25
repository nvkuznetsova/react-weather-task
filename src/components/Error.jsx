import React from 'react';
import PropTypes from 'prop-types';

export const Error = (props) => {
  return (
    <div className="error">{props.message}</div>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}