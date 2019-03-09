import React from 'react';
import cx from 'classnames';
import styles from './InputFeedback.module.scss';

const CN = styles['invalid-feedback'];

interface InputFeedbackProps {
  className?: string;
  error?: string;
}

const InputFeedback: React.SFC<InputFeedbackProps> = props => {
  const { error, className } = props;

  if (!error) {
    return null;
  }
  return <span className={cx(CN, className)}>{error}</span>;
};

InputFeedback.defaultProps = {
  className: '',
  error: ''
};

export default InputFeedback;
