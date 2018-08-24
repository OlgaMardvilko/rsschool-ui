import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { classNames } from 'core/styles';
const cn = classNames(require('./index.scss'));

type Contacts = {
    phone: string;
    emails: string;
    skype: string;
    telegram: string;
    other: string;
    [key: string]: any;
};

type Props = {
    contacts: Contacts;
};

const Contacts = (props: Props) => (
    <React.Fragment>
        <h4 className="badge badge-info">Contact information</h4>

        {Object.keys(props.contacts).map(contact => {
            return (
                <React.Fragment key={contact.toString()}>
                    <Row>
                        <Col md="4" className={cn('capital')}>
                            {contact}:
                        </Col>
                        <Col md="8">{props.contacts[contact]}</Col>
                    </Row>
                </React.Fragment>
            );
        })}
    </React.Fragment>
);

export default Contacts;
