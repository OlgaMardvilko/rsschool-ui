import * as React from 'react';
import { Button } from 'reactstrap';
import { InjectedFormProps, reduxForm } from 'redux-form';
import ContactsForm from './ContactsForm';
import EducationForm from './EducationForm';
import NamesForm from './NamesForm';
import OtherForm from './OtherForm';
import EmploymentForm from './EmploymentForm';

const ProfileForm = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h5>PERSONAL INFORMATION</h5>
            <NamesForm />

            <h5>CONTACTS</h5>
            <ContactsForm />

            <h5>EDUCATION</h5>
            <EducationForm />

            <h5>EMPLOYMENT HISTORY</h5>
            <EmploymentForm />

            <h5>OTHER</h5>
            <OtherForm />

            <div className="row text-center">
                <div className="form-group col-md-12">
                    <Button color="success" type="submit" disabled={pristine || submitting}>
                        Save Information
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'profileForm',
})(ProfileForm);
