import * as React from 'react';
import { Button, Jumbotron } from 'reactstrap';
import { InjectedFormProps, reduxForm } from 'redux-form';
import NamesForm from './NamesForm';
import ContactsForm from './ContactsForm';
import EmploymentForm from './EmploymentForm';
import MentoringForm from './MentoringForm';
import OtherForm from './OtherForm';

const MentorProfileForm = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div>
            <h2>Mentor Profile</h2>
            <p className="form-text text-muted">
                Please, provide valid info. It's needed to our HRs to get in touch with you.
            </p>

            <hr className="mt-5" />

            <form onSubmit={handleSubmit} className="mt-5">
                <h5>PERSONAL INFORMATION</h5>
                <Jumbotron>
                    <NamesForm />
                </Jumbotron>

                <h5>CONTACTS</h5>
                <Jumbotron>
                    <ContactsForm />
                </Jumbotron>

                <h5>EMPLOYMENT HISTORY</h5>
                <Jumbotron>
                    <EmploymentForm />
                </Jumbotron>

                <h5>MENTORING</h5>
                <Jumbotron>
                    <MentoringForm />
                </Jumbotron>

                <h5>OTHER</h5>
                <Jumbotron>
                    <OtherForm />
                </Jumbotron>

                <div className="row text-center">
                    <div className="form-group col-md-12">
                        <Button color="success" type="submit" disabled={pristine || submitting}>
                            Save Information
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'profileForm',
})(MentorProfileForm);
