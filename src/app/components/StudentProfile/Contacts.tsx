import * as React from 'react';

// TODO: what type of props do emails have?
type Contacts = {
    phone: string;
    emails: Array<{ value: string; type: string | undefined }>;
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
        <div className="row">
            <div className="col-md-4">Phone:</div>
            <div className="col-md-8">{`${props.contacts.phone}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Email:</div>
            <div className="col-md-8">{`${props.contacts.emails}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Skype:</div>
            <div className="col-md-8">{`${props.contacts.skype}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Telegram:</div>
            <div className="col-md-8">{`${props.contacts.telegram}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Other messenger</div>
            <div className="col-md-8">{`${props.contacts.other}`}</div>
        </div>
        <hr />
    </React.Fragment>
);

export default Contacts;
