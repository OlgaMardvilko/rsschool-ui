import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { required } from './parsers-formatters';
import { EXPERIENCE } from '../../reference-data';

class ExperienceForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label>Describe your employment history</Label>
                    <Field name="experience.employmentHistory" component={ReduxFormInput} type="textarea" />
                </FormGroup>
            </div>,

            <div key="2" className="row">
                <label className="col-md-12 field-required">Your Front-end Experience</label>
                <FormGroup className="col-md-12">
                    {EXPERIENCE.map((experience, index) => (
                        <FormGroup className="form-check" key={index}>
                            <label className="form-check-label">
                                <Field
                                    type="radio"
                                    value={experience.name}
                                    name="experience.yearsInFrontEnd"
                                    key={experience.id}
                                    className="form-check-input"
                                    component={ReduxFormInput}
                                    validate={[required]}
                                />
                                {experience.name}
                            </label>
                        </FormGroup>
                    ))}
                </FormGroup>
            </div>,

            <div key="3" className="row">
                <label className="col-md-12 field-required">I studied at the RSSchool</label>
                <FormGroup className="col">
                    <FormGroup className="form-check">
                        <label className="form-check-label">
                            <Field
                                name="experience.isStudiedAtRSSchool"
                                component={ReduxFormInput}
                                type="radio"
                                value="true"
                                validate={[required]}
                            />
                            Yes
                        </label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <label className="form-check-label">
                            <Field
                                name="experience.isStudiedAtRSSchool"
                                component={ReduxFormInput}
                                type="radio"
                                value="false"
                                validate={[required]}
                            />
                            No
                        </label>
                    </FormGroup>
                </FormGroup>
            </div>,

            <div key="4" className="row">
                <label className="col-md-12 field-required">I was a mentor at the RSSchool</label>
                <FormGroup className="col">
                    <FormGroup className="form-check">
                        <label className="form-check-label">
                            <Field
                                name="experience.hadMentoringExperience"
                                component={ReduxFormInput}
                                type="radio"
                                value="true"
                                validate={[required]}
                            />
                            Yes
                        </label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <label className="form-check-label">
                            <Field
                                name="experience.hadMentoringExperience"
                                component={ReduxFormInput}
                                type="radio"
                                value="false"
                                validate={[required]}
                            />
                            No
                        </label>
                    </FormGroup>
                </FormGroup>
            </div>,

            <hr key="5" />,

            <div key="6" className="row">
                <label className="col-md-12">Is EPAM Employee?</label>
                <FormGroup className="col-md-12 form-check-inline">
                    <label className="form-check-label">
                        <Field name="epamDetails.isEPAMEmployee" component={ReduxFormInput} type="checkbox" />
                        Yes, I am
                    </label>
                </FormGroup>
            </div>,

            <div key="7" className="row">
                <FormGroup className="col-md-12">
                    <Label>EPAM Email</Label>
                    <Field
                        component={ReduxFormInput}
                        name="epamDetails.epamEmail"
                        placeholder="Epam Email"
                        type="email"
                    />
                </FormGroup>
            </div>,

            <div key="8" className="row">
                <FormGroup className="col-md-12">
                    <Label>EPAM UPSA ID (if you have one. It should contain 19 digits)</Label>
                    <Field
                        component={ReduxFormInput}
                        pattern="^\d{19}$"
                        name="epamDetails.epamUpsaId"
                        placeholder="Epam ID"
                        type="text"
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default ExperienceForm;
