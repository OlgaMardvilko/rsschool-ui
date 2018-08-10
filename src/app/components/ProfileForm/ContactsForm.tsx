import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { emailFormatter, emailParser } from './parsers-formatters';

class ContactsForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="0" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">Phone (in the form 8-XXX-XXX-XX-XX)</Label>
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">8-</InputGroupAddon>
                        <Field
                            name="phone"
                            pattern="(\+?\d[- .]*){9,13}"
                            placeholder="111-111-11-11"
                            component={ReduxFormInput}
                            type="tel"
                        />
                    </InputGroup>
                </FormGroup>
            </div>,
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">Email</Label>
                    <Field
                        component={ReduxFormInput}
                        format={emailFormatter}
                        name="emails"
                        parse={emailParser}
                        placeholder="Email"
                        type="email"
                    />
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <FormGroup className="col-md-12">
                    <Label>You nickname at Skype</Label>
                    <Field component={ReduxFormInput} name="skypeNickname" placeholder="ivan.ivanov" type="text" />
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label>You nickname at Telegram</Label>
                    <Field component={ReduxFormInput} name="telegramName" placeholder="@ivan.ivanov" type="text" />
                </FormGroup>
            </div>,
            <div key="4" className="row">
                <FormGroup className="col-md-12">
                    <Label>Other contact</Label>
                    <Field
                        component={ReduxFormInput}
                        name="otherContact"
                        placeholder="Messenger name: @nickname"
                        type="text"
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default ContactsForm;
