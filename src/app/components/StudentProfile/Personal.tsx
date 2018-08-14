import * as React from 'react';
import { Row, Col } from 'reactstrap';

type Props = {
    birth: string;
    gender: string;
    tShirt: string;
};

const Personal = (props: Props) => {
    const { birth, gender, tShirt } = props;
    return (
        <React.Fragment>
            <h4 className="badge badge-info">Personal information</h4>
            <Row>
                <Col md="4">Birth date:</Col>
                <Col md="8">{birth}</Col>
            </Row>
            <Row>
                <Col md="4">Gender:</Col>
                <Col md="8">{gender}</Col>
            </Row>
            <Row>
                <Col md="4">T-shirt size</Col>
                <Col md="8">{tShirt}</Col>
            </Row>
        </React.Fragment>
    );
};

export default Personal;
