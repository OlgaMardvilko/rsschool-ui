import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { required } from './parsers-formatters';
import { QUANTITY } from '../../reference-data';

class MentoringForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <label className="col-md-12 field-required">What stages would you like to be as a mentor?</label>
                <FormGroup className="col">
                    <FormGroup className="form-check">
                        <label className="form-check-label">
                            <Field
                                name="mentoring.amountStages"
                                component={ReduxFormInput}
                                type="radio"
                                value="1"
                                validate={[required]}
                            />
                            Only second (≈ 15 weeks)
                        </label>
                    </FormGroup>
                    <FormGroup className="form-check">
                        <label className="form-check-label">
                            <Field
                                name="mentoring.amountStages"
                                component={ReduxFormInput}
                                type="radio"
                                value="2"
                                validate={[required]}
                            />
                            Second & Third (≈ 22 weeks)
                        </label>
                    </FormGroup>
                </FormGroup>
            </div>,

            <div key="2" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">How many students do you want to mentor?</Label>
                    <Field
                        className="form-control"
                        name="mentoring.amountStudents"
                        type="select"
                        component={ReduxFormInput}
                        validate={[required]}
                    >
                        {QUANTITY.map(quantity => (
                            <option key={quantity.id} value={quantity.name}>
                                {quantity.name}
                            </option>
                        ))}
                    </Field>
                </FormGroup>
            </div>,

            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">
                        If you want to mentor students with another colleague together, write his/her name and surname?
                    </Label>
                    <Field
                        type="text"
                        name="mentoring.colleague"
                        component={ReduxFormInput}
                        placeholder="Ivan Ivanov"
                        validate={[required]}
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default MentoringForm;
