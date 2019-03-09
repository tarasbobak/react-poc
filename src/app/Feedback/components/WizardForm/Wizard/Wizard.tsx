import React, { ReactChildren } from 'react';
import PropTypes from 'prop-types';
import { Formik, FormikActions, FormikProps } from 'formik';
import styles from './Wizard.module.scss';

export interface FormValues {
  firstName: string;
  lastName: string;
  email?: string;
  favoriteColor?: string;
}

interface WizardProps {
  children: any;
  initialValues: {
    firstName: string;
    lastName: string;
    email: string;
    favoriteColor: string;
  };
  onSubmit: (values: FormValues) => void;
}

interface WizardState {
  page: number;
  values: FormValues;
}

class Wizard extends React.Component<WizardProps, WizardState> {
  public static Page({ children }: any) {
    return children;
  }

  constructor(props: WizardProps) {
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

  public next(values: FormValues) {
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));
  }

  public previous() {
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
  }

  public validate(values: FormValues) {
    const activePage: any = React.Children.toArray(this.props.children)[this.state.page];

    return activePage.props.validate ? activePage.props.validate(values) : {};
  }

  public handleSubmit = (values: FormValues, bag: FormikActions<FormValues>) => {
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

  public render() {
    const { values } = this.state;

    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validate={this.validate}
        onSubmit={this.handleSubmit}
        render={this.formikRenderHandler}
      />
    );
  }

  private formikRenderHandler = ({ handleSubmit, isSubmitting }: FormikProps<FormValues>) => {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
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
    );
  }
}

export default Wizard;
