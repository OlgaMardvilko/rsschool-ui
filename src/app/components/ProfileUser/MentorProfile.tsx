import * as React from 'react';
import { IProfile } from '../../core/models';
import { Col, Jumbotron, Row } from 'reactstrap';
import ProfileName from './ProfileName';
import Contacts from './Contacts';
import Personal from './Personal';
import Avatar from './Avatar';

type Props = {
    mentorProfile: IProfile;
};

const MentorProfile = (props: Props) => {
    return (
        <Jumbotron className="mt-2">
            <Row>
                <Col md="3">
                    <Avatar githubId={props.mentorProfile.githubId} />
                </Col>
                <Col md="9">
                    <ProfileName
                        name={{
                            firstName: props.mentorProfile.firstName,
                            lastName: props.mentorProfile.lastName,
                        }}
                        nameNative={{
                            firstName: props.mentorProfile.firstNameNative,
                            lastName: props.mentorProfile.lastNameNative,
                        }}
                    />

                    <hr />

                    <Personal
                        dateOfBirth={props.mentorProfile.dateOfBirth}
                        gender={props.mentorProfile.gender}
                        tShirtSize={props.mentorProfile.tShirtSize}
                    />

                    <hr />

                    <Contacts
                        contacts={{
                            phone: props.mentorProfile.contacts.phone,
                            emails: props.mentorProfile.contacts.emails,
                            skype: props.mentorProfile.contacts.skype,
                            telegram: props.mentorProfile.contacts.telegram,
                            other: props.mentorProfile.contacts.other,
                        }}
                    />

                    <hr />
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default MentorProfile;
