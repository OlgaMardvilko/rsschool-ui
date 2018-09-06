import * as React from 'react';
import { IProfile, IUser, IUserBase } from '../../core/models';
import { Col, Jumbotron, Row } from 'reactstrap';
import PagePrint from './PagePrint';
import ModalExpel from './ModalExpel';
import ProfileName from './ProfileName';
import MainStudent from './MainStudent';
import Contacts from './Contacts';
import Education from './Education';
import Other from './Other';
import Personal from './Personal';
import Avatar from './Avatar';
import EmploymentHistory from './EmploymentHistory';
import TaskProgress from './TaskProgress';
import Mentors from './Mentors';

// TODO: add props for rating block MainInformation, change this block with props
type Props = {
    studentProfile: IProfile;
    handleExpel: () => void;
    mentors: Array<IUserBase | IUser> | undefined;
};

const StudentProfile = (props: Props) => {
    return (
        <React.Fragment>
            <main className="container">
                <PagePrint pageName="Student Profile" />
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
                            <Mentors mentors={props.mentors} />

                            <hr />

                            <MainStudent
                                englishLevel={props.studentProfile.englishLevel}
                                city={props.studentProfile.city}
                                githubName={props.studentProfile.githubId}
                            />

                            <hr />

                            <Personal
                                dateOfBirth={props.studentProfile.dateOfBirth}
                                gender={props.studentProfile.gender}
                                tShirtSize={props.studentProfile.tShirtSize}
                            />

                            <hr />

                            <Contacts
                                contacts={{
                                    phone: props.studentProfile.phone,
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
                                    faculty: props.studentProfile.primaryEducation.faculty,
                                    graduationYear: props.studentProfile.primaryEducation.graduationYear,
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
            </main>
        </React.Fragment>
    );
};

export default StudentProfile;
