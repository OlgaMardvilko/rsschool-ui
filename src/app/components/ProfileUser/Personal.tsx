import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { Gender } from '../../core/models';

type Props = {
    dateOfBirth: string;
    gender: Gender;
    tShirtSize: string;
};

const Personal = (props: Props) => {
    const { dateOfBirth, gender, tShirtSize } = props;
    return (
        <React.Fragment>
            <h4 className="badge badge-info">Personal information</h4>
            <Row>
                <Col md="4">Birth date:</Col>
                <Col md="8">{dateOfBirth}</Col>
            </Row>
            <Row>
                <Col md="4">Gender:</Col>
                <Col md="8">{gender}</Col>
            </Row>
            <Row>
                <Col md="4">T-shirt size</Col>
                <Col md="8">{tShirtSize}</Col>
            </Row>
        </React.Fragment>
    );
};

export default Personal;
