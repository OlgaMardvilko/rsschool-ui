import * as React from 'react';
import { Row, Col } from 'reactstrap';

// TODO: what type of props do emails have?
type Contacts = {
    phone: string;
    emails: string;
    skype: string;
    telegram: string;
    other: string;
};

type Props = {
    contacts: Contacts;
};

const Contacts = (props: Props) => (
    <React.Fragment>
        <h4 className="badge badge-info">Contact information</h4>
        <Row>
            <Col md="4">Phone:</Col>
            <Col md="8">{`${props.contacts.phone}`}</Col>
        </Row>
        <Row>
            <Col md="4">Email:</Col>
            <Col md="8">{`${props.contacts.emails}`}</Col>
        </Row>
        <Row>
            <Col md="4">Skype:</Col>
            <Col md="8">{`${props.contacts.skype}`}</Col>
        </Row>
        <Row>
            <Col md="4">Telegram:</Col>
            <Col md="8">{`${props.contacts.telegram}`}</Col>
        </Row>
        <Row>
            <Col md="4">Other messenger</Col>
            <Col md="8">{`${props.contacts.other}`}</Col>
        </Row>
        <hr />
    </React.Fragment>
);

export default Contacts;
