import * as React from 'react';
import { IProfile } from '../../core/models';
import { Jumbotron, Row, Col } from 'reactstrap';
import ModalExpel from './ModalExpel';
import ProfileName from './ProfileName';
import MainInformation from './MainInformation';
import Contacts from './Contacts';
import Education from './Education';
import Other from './Other';
import Personal from './Personal';
import Avatar from './Avatar';
import EmploymentHistory from './EmploymentHistory';
import TaskProgress from './TaskProgress';

// TODO: add props for rating block MainInformation, change this block with props
type Props = {
    studentProfile: IProfile;
    handleExpel: () => void;
};

const StudentProfile = (props: Props) => {
    return (
        <Jumbotron className="mt-2">
            <Row>
                <Col md="3">
                    <Avatar githubId={props.studentProfile.githubId} />
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

                    <hr />

                    <MainInformation
                        englishLevel={props.studentProfile.englishLevel}
                        city={props.studentProfile.city}
                        githubName={props.studentProfile.githubId}
                    />

                    <hr />

                    <Personal
                        dateOfBirth={props.studentProfile.dateOfbirth}
                        gender={props.studentProfile.gender}
                        tShirtSize={props.studentProfile.tShirtSize}
                    />

                    <hr />

                    <Contacts
                        contacts={{
                            phone: props.studentProfile.contacts.phone,
                            emails: props.studentProfile.contacts.emails,
                            skype: props.studentProfile.contacts.skype,
                            telegram: props.studentProfile.contacts.telegram,
                            other: props.studentProfile.contacts.other,
                        }}
                    />

                    <hr />

                    <Education
                        primaryEducation={{
                            university: props.studentProfile.primaryEducation.university,
                            graduationYear: props.studentProfile.primaryEducation.graduationYear,
                            faculty: props.studentProfile.primaryEducation.faculty,
                        }}
                        isInternshipNeeded={props.studentProfile.isInternshipNeeded}
                        isWorkNeeded={props.studentProfile.isWorkNeeded}
                    />

                    <hr />

                    <EmploymentHistory
                        employmentHistory={props.studentProfile.employmentHistory}
                        epamEmail={props.studentProfile.epamDetails.epamEmail}
                        epamUpsaId={props.studentProfile.epamDetails.epamUpsaId}
                        isEPAMEmployee={props.studentProfile.epamDetails.isEPAMEmployee}
                        yearsInFrontEnd={props.studentProfile.experience.yearsInFrontEnd}
                        isStudiedAtRSSchool={props.studentProfile.experience.isStudiedAtRSSchool}
                        hadMentoringExperience={props.studentProfile.experience.hadMentoringExperience}
                    />

                    <hr />

                    <Other notes={props.studentProfile.notes} />

                    <hr />

                    <TaskProgress />
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default StudentProfile;
