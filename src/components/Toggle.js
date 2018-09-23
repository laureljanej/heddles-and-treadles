import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({value, onClick, active}) => {
  return (
    <button
      className="toggleBox"
      onClick={onClick}
    >
      {active ? value : ''}
    </button>
  );
};

const { bool, string, func, number, oneOfType } = PropTypes;

Toggle.propTypes = {
  active: bool.isRequired,
  onClick: func.isRequired,
  value: oneOfType([
    string,
    number
  ])
};

export default Toggle;
