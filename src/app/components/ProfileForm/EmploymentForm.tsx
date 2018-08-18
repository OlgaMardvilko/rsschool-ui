import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { emailFormatter, emailParser } from './parsers-formatters';
import { EXPERIENCE } from '../../reference-data';

class ExperienceForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label>Describe your employment history</Label>
                    <Field name="employmentHistory" component={ReduxFormInput} type="textarea" />
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <label className="col-md-12 field-required">Your Front-end Experience</label>
                <FormGroup className="col-md-12">
                    {EXPERIENCE.map((experience, index) => (
                        <FormGroup className="form-check" key={index}>
                            <input
                                type="radio"
                                value={experience.name}
                                name="expireance.yearsInFrontEnd"
                                key={experience.id}
                                className="form-check-input"
                                defaultChecked={index === 0}
                            />
                            <label className="form-check-label">{experience.name}</label>
                        </FormGroup>
                    ))}
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <label className="col-md-12 field-required">I studied at the RSSchool</label>
                <FormGroup className="col">
                    <FormGroup className="form-check">
                        <Field name="ex-student" component={ReduxFormInput} type="radio" value="yes" />
                        <label className="form-check-label">Yes</label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <Field name="ex-student" component={ReduxFormInput} type="radio" value="no" />
                        <label className="form-check-label">No</label>
                    </FormGroup>
                </FormGroup>
            </div>,
            <div key="4" className="row">
                <label className="col-md-12 field-required">I was a mentor at the RSSchool</label>
                <FormGroup className="col">
                    <FormGroup className="form-check">
                        <Field name="ex-mentor" component={ReduxFormInput} type="radio" value="yes" />
                        <label className="form-check-label">Yes</label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <Field name="ex-mentor" component={ReduxFormInput} type="radio" value="no" />
                        <label className="form-check-label">No</label>
                    </FormGroup>
                </FormGroup>
            </div>,
            <div key="5" className="row">
                <label className="col-md-12">Is EPAM Employee?</label>
                <FormGroup className="col-md-12 form-check-inline">
                    <Field name="training" component={ReduxFormInput} type="checkbox" />
                    <label className="form-check-label">Yes, I am</label>
                </FormGroup>
            </div>,
            <div key="6" className="row">
                <FormGroup className="col-md-12">
                    <Label>EPAM Email</Label>
                    <Field
                        component={ReduxFormInput}
                        format={emailFormatter}
                        name="epamEmail"
                        parse={emailParser}
                        placeholder="Epam Email"
                        type="email"
                    />
                </FormGroup>
            </div>,
            <div key="7" className="row">
                <FormGroup className="col-md-12">
                    <Label>EPAM UPSA ID (if you have one. It should contain 19 digits) </Label>
                    <Field
                        component={ReduxFormInput}
                        pattern="^\d{19}$"
                        name="epamID"
                        placeholder="Epam ID"
                        type="text"
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default ExperienceForm;
