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
                    university={{ university: props.student.primaryEducation.university }}
                    faculty={{ faculty: props.student.primaryEducation.faculty }}
                    graduationYear={{ graduationYear: props.student.primaryEducation.graduationYear }}
                    isInternshipNeeded={{ isInternshipNeeded: props.student.isInternshipNeeded }}
                    isWorkNeeded={{ isWorkNeeded: props.student.isWorkNeeded }}
                />
            </div>
        </div>
    );
};

export default StudentProfile;
