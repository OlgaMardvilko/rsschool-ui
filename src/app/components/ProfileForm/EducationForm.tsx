import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { connect } from 'react-redux';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { EDUCATION_YEARS, EMPTY_FACULTY, UNIVERSITIES, ENGLISH_LEVEL } from '../../reference-data';

function mapStateToProps(state: any) {
    return {
        university: (state.form.profileForm || {}).values
            ? state.form.profileForm.values.primaryEducation.university
            : undefined,
    };
}

class EducationForm extends React.PureComponent<any, any> {
    render() {
        const faculties = this.getFaculties();
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label>Your University</Label>
                    <Field
                        name="primaryEducation.university"
                        placeholder="Your University"
                        component={ReduxFormInput}
                        type="select"
                    >
                        {UNIVERSITIES.map(university => (
                            <option key={university.id} value={university.id}>
                                {university.name}
                            </option>
                        ))}
                    </Field>
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <FormGroup className="col-md-9">
                    <Label>Your Faculty</Label>
                    <Field
                        name="primaryEducation.faculty"
                        placeholder="Your Faculty"
                        component={ReduxFormInput}
                        type="select"
                    >
                        {faculties.map(faculty => (
                            <option key={faculty.id} value={faculty.id}>
                                {faculty.name}
                            </option>
                        ))}
                    </Field>
                </FormGroup>
                <FormGroup className="col-md-3">
                    <Label>Graduation Year</Label>
                    <Field
                        name="primaryEducation.graduationYear"
                        placeholder="Graduation Year"
                        component={ReduxFormInput}
                        type="select"
                    >
                        {EDUCATION_YEARS.map(year => (
                            <option key={year.id} value={year.id}>
                                {year.name}
                            </option>
                        ))}
                    </Field>
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label>Select Your English Level</Label>
                    <Field name="englishLevel" component={ReduxFormInput} type="select">
                        {ENGLISH_LEVEL.map(level => (
                            <option key={level.id} value={level.id}>
                                {level.name}
                            </option>
                        ))}
                    </Field>
                </FormGroup>
            </div>,
            <div key="4" className="row">
                <FormGroup className="col">
                    <FormGroup className="form-check">
                        <Field name="training" component={ReduxFormInput} type="checkbox" />
                        <label className="form-check-label">Вам нужна учебная практика в EPAM?</label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <Field name="careerAssignment" component={ReduxFormInput} type="checkbox" />
                        <label className="form-check-label">
                            Вам нужно распределение в EPAM после обучения в ВУЗе?
                        </label>
                    </FormGroup>
                </FormGroup>
            </div>,
        ];
    }

    private getFaculties() {
        const university = UNIVERSITIES.find((university: any) => university.id === this.props.university);
        return university ? university.faculties : [EMPTY_FACULTY];
    }
}

export default connect(
    mapStateToProps,
    null,
)(EducationForm);
