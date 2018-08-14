import * as React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup } from 'reactstrap';
import { requiredFieldError, requiredFieldSuccess } from 'core/validation';
import ReduxFormInput from 'components/ReduxFormInput';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';

type Props = {
    firstName: string;
    lastName: string;
};

type State = {
    isOpen: boolean;
};

class ModalExpel extends React.PureComponent<Props & InjectedFormProps<{}, Props>> {
    state: State = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        const { firstName, lastName, pristine, submitting, handleSubmit } = this.props;
        return (
            <React.Fragment>
                <Button onClick={this.toggle} color="link" className="text-danger">
                    Expel a student
                </Button>

                <Modal isOpen={this.state.isOpen} toggle={this.toggle} centered={true}>
                    <Form onSubmit={handleSubmit(this.toggle)}>
                        <ModalHeader toggle={this.toggle}>STUDENT EXPULSION</ModalHeader>
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
                                <Button color="secondary" type="submit" disabled={pristine || submitting}>
                                    Yes
                                </Button>{' '}
                                <Button color="primary" onClick={this.toggle}>
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
