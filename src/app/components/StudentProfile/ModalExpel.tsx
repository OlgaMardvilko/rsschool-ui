import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup } from 'reactstrap';
import { requiredFieldError, requiredFieldSuccess } from 'core/validation';
import ReduxFormInput from 'components/ReduxFormInput';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';

type Props = {
    firstName: string;
    lastName: string;
    toggle: () => void;
};

type State = {
    isOpen: boolean;
};

class ModalExpel extends React.PureComponent<Props & InjectedFormProps<{}, Props>> {
    state: State = {
        isOpen: false,
    };

    render() {
        const { firstName, lastName, toggle, pristine, submitting, handleSubmit } = this.props;
        return (
            <React.Fragment>
                <a href="#" onClick={toggle} className="text-danger">
                    Expel a student
                </a>

                <Modal isOpen={this.state.isOpen} toggle={toggle} centered={true}>
                    <Form onSubmit={handleSubmit}>
                        <ModalHeader toggle={toggle}>
                            <h5> STUDENT EXPULSION</h5>
                        </ModalHeader>
                        <ModalBody>
                            <p>Do you really want to expel {`${firstName} ${lastName}`}</p>
                            <FormGroup>
                                <Field
                                    name="expelReason"
                                    label="Please, explain the reason"
                                    component={ReduxFormInput}
                                    required={true}
                                    type="textarea"
                                    validate={[requiredFieldError]}
                                    warn={requiredFieldSuccess}
                                />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <FormGroup>
                                <Button color="primary" type="submit" disabled={pristine || submitting}>
                                    Yes
                                </Button>{' '}
                                <Button color="secondary" onClick={toggle}>
                                    No
                                </Button>
                            </FormGroup>
                        </ModalFooter>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}
export default reduxForm<{}, Props>({
    form: 'expelForm',
})(ModalExpel);
