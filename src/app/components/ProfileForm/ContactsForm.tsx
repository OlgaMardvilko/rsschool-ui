import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { emailFormatter, emailParser, required } from './parsers-formatters';

class ContactsForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="contacts_phone" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">Phone (in the form +375 XX XXX-XX-XX)</Label>
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">+375 </InputGroupAddon>
                        <Field
                            name="phone"
                            pattern="(\+?\d[- .]*){9,12}"
                            placeholder="29 111-11-11"
                            component={ReduxFormInput}
                            type="tel"
                            validate={[required]}
                        />
                    </InputGroup>
                </FormGroup>
            </div>,

            <div key="contacts_emails" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">Email</Label>
                    <Field
                        component={ReduxFormInput}
                        format={emailFormatter}
                        name="emails"
                        parse={emailParser}
                        placeholder="Email"
                        type="email"
                        validate={[required]}
                    />
                </FormGroup>
            </div>,

            <div key="contacts_skype" className="row">
                <FormGroup className="col-md-12">
                    <Label>You nickname at Skype</Label>
                    <Field component={ReduxFormInput} name="contacts.skype" placeholder="ivan.ivanov" type="text" />
                </FormGroup>
            </div>,

            <div key="contacts_telegram" className="row">
                <FormGroup className="col-md-12">
                    <Label>You nickname at Telegram</Label>
                    <Field component={ReduxFormInput} name="contacts.telegram" placeholder="@ivan.ivanov" type="text" />
                </FormGroup>
            </div>,

            <div key="contacts_other" className="row">
                <FormGroup className="col-md-12">
                    <Label>Other contact</Label>
                    <Field
                        component={ReduxFormInput}
                        name="contacts.other"
                        placeholder="Messenger name: @nickname"
                        type="text"
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default ContactsForm;
