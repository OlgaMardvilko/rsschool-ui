import * as React from 'react';
import { IProfile } from '../../core/models';
import ProfileName from './ProfileName';
import Education from './Education';

type Props = {
    student: IProfile;
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
