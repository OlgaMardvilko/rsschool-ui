import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { CITIES, SHIRT_SIZE, GENDER } from '../../reference-data';
import { required } from './parsers-formatters';

class NamesForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">First Name (as it appears on your passport)</Label>
                    <Field
                        name="firstName"
                        placeholder="First Name"
                        component={ReduxFormInput}
                        type="text"
                        validate={[required]}
                    />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label className="field-required">Last Name (as it appears on your passport)</Label>
                    <Field
                        name="lastName"
                        placeholder="Last Name"
                        component={ReduxFormInput}
                        type="text"
                        validate={[required]}
                    />
                </FormGroup>
            </div>,

            <div key="2" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">First Name (in Russian)</Label>
                    <Field
                        name="firstNameNative"
                        placeholder="First Name"
                        component={ReduxFormInput}
                        type="text"
                        validate={[required]}
                    />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label className="field-required">Last Name (in Russian)</Label>
                    <Field
                        name="lastNameNative"
                        placeholder="Last Name"
                        component={ReduxFormInput}
                        type="text"
                        validate={[required]}
                    />
                </FormGroup>
            </div>,

            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label>City</Label>
                    <Field name="city" type="select" component={ReduxFormInput}>
                        {CITIES.map(city => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </Field>
                </FormGroup>
            </div>,

            <div key="4" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">Birth Date</Label>
                    <Field
                        name="dateOfBirth"
                        placeholder="12-08-1997"
                        component={ReduxFormInput}
                        type="text"
                        validate={[required]}
                    />
                </FormGroup>
            </div>,

            <div key="5" className="row">
                <label className="col-md-12 field-required">Gender</label>
                <FormGroup className="col-md-12">
                    {GENDER.map((gender, index) => (
                        <FormGroup className="form-check-inline" key={index}>
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    value={gender.name}
                                    name="gender"
                                    key={gender.id}
                                    className="form-check-input"
                                    component={ReduxFormInput}
                                    validate={[required]}
                                />
                                {gender.name}
                            </label>
                        </FormGroup>
                    ))}
                </FormGroup>
            </div>,

            <div key="6" className="row">
                <label className="col-md-12 field-required">T-Shirt Size</label>
                <FormGroup className="col-md-12">
                    {SHIRT_SIZE.map((shirtSize, index) => (
                        <FormGroup className="form-check-inline" key={index}>
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    value={shirtSize.name}
                                    name="tShirtSize"
                                    key={shirtSize.id}
                                    className="form-check-input"
                                    component={ReduxFormInput}
                                    validate={[required]}
                                />
                                {shirtSize.name}
                            </label>
                        </FormGroup>
                    ))}
                </FormGroup>
            </div>,
        ];
    }
}

export default NamesForm;
