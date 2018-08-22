import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';

class OtherForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="0" className="row">
                <FormGroup className="col-md-12">
                    <Label>Additional Information</Label>
                    <Field name="notes" component={ReduxFormInput} type="textarea" />
                </FormGroup>
            </div>,

            <div key="1" className="row">
                <FormGroup className="col-md-12 form-check-inline">
                    <label className="form-check-label">
                        <Field name="subscribe" component={ReduxFormInput} type="checkbox" />
                        Subscribe to email notifications?
                    </label>
                </FormGroup>
            </div>,
        ];
    }
}

export default OtherForm;
