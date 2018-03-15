import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './InputFeedback.scss';

const CN = 'invalid-feedback';

function InputFeedback(props) {
  const { error, className } = props;
  if (!error) {
    return null;
  }
  return (<span className={cx(CN, className)}>{error}</span>);
}


export default InputFeedback;

InputFeedback.defaultProps = {
  className: '',
  error: ''
};

InputFeedback.propTypes = {
  /**
   * className - classes which can be passed from parent
   */
  className: PropTypes.string,
  /**
   * error -  object which contains corresponding errors to particular fields
   */
  error: PropTypes.string
};
