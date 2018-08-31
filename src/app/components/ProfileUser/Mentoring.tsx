import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { AmountStages } from '../../core/models';

type Props = {
    amountStages?: AmountStages;
    amountStudents?: number;
    colleague?: string;
};

const Mentoring = (props: Props) => {
    const { amountStages, amountStudents, colleague } = props;
    return (
        <React.Fragment>
            <h4 className="badge badge-info">Mentoring</h4>
            <Row>
                <Col md="4">What stages would you like to be as a mentor?</Col>
                <Col md="8">{amountStages}</Col>
            </Row>
            <Row>
                <Col md="4">How many students do you want to mentor?</Col>
                <Col md="8">{amountStudents}</Col>
            </Row>
            <Row>
                <Col md="4">
                    If you want to mentor students with another colleague together, write his/her name and surname?
                </Col>
                <Col md="8">{colleague}</Col>
            </Row>
        </React.Fragment>
    );
};

export default Mentoring;
