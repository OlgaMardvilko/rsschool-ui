import './index.scss';
import * as React from 'react';
import { IProfile } from '../../core/models';
import { Col, Jumbotron, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import PagePrint from './PagePrint';
import ProfileName from './ProfileName';
import MainMentor from './MainMentor';
import Contacts from './Contacts';
import Personal from './Personal';
import Avatar from './Avatar';
import Other from './Other';
import EmploymentHistory from './EmploymentHistory';
import Mentoring from './Mentoring';

type Props = {
    mentorProfile: IProfile;
    handleReject: () => void;
    handleApprove: () => void;
};

const MentorProfile = (props: Props) => {
    return (
        <React.Fragment>
            <main className="container">
                <PagePrint namePage="Mentor Profile" />
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

                            <MainMentor
                                yearsInFrontEnd={props.mentorProfile.experience.yearsInFrontEnd}
                                city={props.mentorProfile.city}
                                githubName={props.mentorProfile.githubId}
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
                                    phone: props.mentorProfile.phone,
                                    emails: props.mentorProfile.contacts.emails,
                                    skype: props.mentorProfile.contacts.skype,
                                    telegram: props.mentorProfile.contacts.telegram,
                                    other: props.mentorProfile.contacts.other,
                                }}
                            />

                            <hr />

                            <EmploymentHistory
                                employmentHistory={props.mentorProfile.employmentHistory}
                                epamEmail={props.mentorProfile.epamDetails.epamEmail}
                                epamUpsaId={props.mentorProfile.epamDetails.epamUpsaId}
                                isEPAMEmployee={props.mentorProfile.epamDetails.isEPAMEmployee}
                                yearsInFrontEnd={props.mentorProfile.experience.yearsInFrontEnd}
                                isStudiedAtRSSchool={props.mentorProfile.experience.isStudiedAtRSSchool}
                                hadMentoringExperience={props.mentorProfile.experience.hadMentoringExperience}
                            />

                            <hr />

                            <Mentoring
                                amountStages={props.mentorProfile.mentoring.amountStages}
                                amountStudents={props.mentorProfile.mentoring.amountStudents}
                                colleague={props.mentorProfile.mentoring.colleague}
                            />

                            <hr />

                            <Other notes={props.mentorProfile.notes} />
                        </Col>
                    </Row>
                </Jumbotron>
            </main>
            <div className="text-right">
                <Button color="danger" onClick={props.handleReject}>
                    <FontAwesomeIcon icon={faBan} /> Reject
                </Button>{' '}
                <Button color="success" onClick={props.handleApprove}>
                    <FontAwesomeIcon icon={faCheck} /> Approve
                </Button>
            </div>
        </React.Fragment>
    );
};

export default MentorProfile;
