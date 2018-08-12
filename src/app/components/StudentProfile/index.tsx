import * as React from 'react';
import { IProfile, IFeedRecord } from '../../core/models';
import ProfileName from './ProfileName';
import Education from './Education';
import MainInformation from './MainInformation';

// TODO: add props for rating block MainInformation, change this block with props
type Props = {
    student: IProfile;
    user: IFeedRecord;
};

const StudentProfile = (props: Props) => {
    return (
        <div className="jumbotron mt-2">
            <div className="col-md-9">
                <ProfileName
                    name={{ firstName: props.student.firstName, lastName: props.student.lastName }}
                    nameNative={{
                        firstName: props.student.firstNameNative,
                        lastName: props.student.lastNameNative,
                    }}
                />
                <MainInformation
                    englishLevel={props.student.englishLevel}
                    city={props.student.city}
                    githubName={props.user.userId}
                />
                <Education
                    primaryEducation={{
                        university: props.student.primaryEducation.university,
                        graduationYear: props.student.primaryEducation.graduationYear,
                        faculty: props.student.primaryEducation.faculty,
                    }}
                    isInternshipNeeded={props.student.isInternshipNeeded}
                    isWorkNeeded={props.student.isWorkNeeded}
                />
            </div>
        </div>
    );
};

export default StudentProfile;
