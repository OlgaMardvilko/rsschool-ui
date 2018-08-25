import * as React from 'react';
import { Row, Col } from 'reactstrap';

type Props = {
    notes: string;
};

const Other = (props: Props) => (
    <React.Fragment>
        <h2 className="badge badge-info">Other</h2>
        <Row>
            <Col md="4">Additional Information:</Col>
            <Col md="8">
                <p>{`${props.notes}`}</p>
            </Col>
        </Row>
    </React.Fragment>
);

export default Other;
