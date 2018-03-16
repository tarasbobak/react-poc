import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import styles from './Wizard.scss';

class Wizard extends React.Component {
  static Page({ children }) {
    return children;
  }

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.validate = this.validate.bind(this);
  }

  next(values) {
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));
  }

  previous() {
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
  }

  validate(values) {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];

    return activePage.props.validate ? activePage.props.validate(values) : {};
  }

  handleSubmit(values, bag) {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;

    if (isLastPage) {
      return onSubmit(values);
    }
    this.next(values);
    bag.setSubmitting(false);

    return false;
  }

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button type="button" onClick={this.previous}>
                  « Previous
                </button>
              )}

              {!isLastPage && <button type="submit">Next »</button>}
              {isLastPage && (
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              )}
            </div>

            <pre className={styles['form-state-preview']}>
              <code>{JSON.stringify(values, null, 4)}</code>
            </pre>
          </form>
        )}
      />
    );
  }
}

Wizard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  initialValues: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    favoriteColor: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Wizard;
