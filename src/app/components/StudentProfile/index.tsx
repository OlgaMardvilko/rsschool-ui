import * as React from 'react';
import { IProfile, IFeedRecord } from '../../core/models';
import { Jumbotron, Row, Col } from 'reactstrap';
import ModalExpel from './ModalExpel';
import ProfileName from './ProfileName';
import MainInformation from './MainInformation';
import Contacts from './Contacts';
import Education from './Education';
import Other from './Other';

// TODO: add props for rating block MainInformation, change this block with props
type Props = {
    studentProfile: IProfile;
    userId: IFeedRecord;
    handleExpel: () => void;
};

const StudentProfile = (props: Props) => {
    return (
        <Jumbotron className="mt-2">
            <Row>
                <Col md="3">
                    <ModalExpel
                        firstName={props.studentProfile.firstName}
                        lastName={props.studentProfile.lastName}
                        onSubmit={props.handleExpel}
                    />
                </Col>
                <Col md="9">
                    <ProfileName
                        name={{
                            firstName: props.studentProfile.firstName,
                            lastName: props.studentProfile.lastName,
                        }}
                        nameNative={{
                            firstName: props.studentProfile.firstNameNative,
                            lastName: props.studentProfile.lastNameNative,
                        }}
                    />
                    <MainInformation
                        englishLevel={props.studentProfile.englishLevel}
                        city={props.studentProfile.city}
                        githubName={props.userId.userId}
                    />
                    <Contacts
                        contacts={{
                            phone: props.studentProfile.contacts.phone,
                            emails: props.studentProfile.contacts.emails,
                            skype: props.studentProfile.contacts.skype,
                            telegram: props.studentProfile.contacts.telegram,
                            other: props.studentProfile.contacts.other,
                        }}
                    />
                    <Education
                        primaryEducation={{
                            university: props.studentProfile.primaryEducation.university,
                            graduationYear: props.studentProfile.primaryEducation.graduationYear,
                            faculty: props.studentProfile.primaryEducation.faculty,
                        }}
                        isInternshipNeeded={props.studentProfile.isInternshipNeeded}
                        isWorkNeeded={props.studentProfile.isWorkNeeded}
                    />
                    <Other notes={props.studentProfile.notes} />
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default StudentProfile;
