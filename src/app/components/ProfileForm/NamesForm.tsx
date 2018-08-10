import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { CITIES, SHIRT_SIZE } from '../../reference-data';

class NamesForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">First Name (as it appears on your passport)</Label>
                    <Field name="firstName" placeholder="First Name" component={ReduxFormInput} type="text" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label className="field-required">Last Name (as it appears on your passport)</Label>
                    <Field name="lastName" placeholder="Last Name" component={ReduxFormInput} type="text" />
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">First Name (in Russian)</Label>
                    <Field name="firstNameNative" placeholder="First Name" component={ReduxFormInput} type="text" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label className="field-required">Last Name (in Russian)</Label>
                    <Field name="lastNameNative" placeholder="Last Name" component={ReduxFormInput} type="text" />
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label>City</Label>
                    <Field name="city" type="select" component={ReduxFormInput}>
                        <option value="">(Empty)</option>
                        {CITIES.map(city => <option key={city.id}>{city.name}</option>)}
                    </Field>
                </FormGroup>
            </div>,
            <div key="4" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">Birth Date</Label>
                    <Field name="birthDate" placeholder="12-08-1997" component={ReduxFormInput} type="text" />
                </FormGroup>
            </div>,
            <div key="5" className="row">
                <label className="col-md-12 field-required">Gender</label>
                <FormGroup className="col">
                    <FormGroup className="form-check-inline">
                        <Field name="sex" component={ReduxFormInput} type="radio" value="male" />
                        <label className="form-check-label">Male</label>
                    </FormGroup>
                    <FormGroup className="form-check-inline">
                        <Field name="sex" component={ReduxFormInput} type="radio" value="female" />
                        <label className="form-check-label">Female</label>
                    </FormGroup>
                </FormGroup>
            </div>,
            <div key="6" className="row">
                <label className="col-md-12 field-required">T-Shirt Size</label>
                <FormGroup className="col-md-12">
                    {SHIRT_SIZE.map(shirtSize => (
                        <FormGroup className="form-check-inline">
                            <input
                                type="radio"
                                value={shirtSize.name}
                                name="sizeTshirt"
                                key={shirtSize.id}
                                className="form-check-input"
                            />
                            <label className="form-check-label">{shirtSize.name}</label>
                        </FormGroup>
                    ))}
                </FormGroup>
            </div>,
        ];
    }
}

export default NamesForm;
