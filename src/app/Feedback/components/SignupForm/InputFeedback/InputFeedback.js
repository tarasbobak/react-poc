import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './InputFeedback.scss';

const CN = styles['invalid-feedback'];

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
