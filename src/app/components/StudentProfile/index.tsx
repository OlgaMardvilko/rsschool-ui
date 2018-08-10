import * as React from 'react';
import { IProfile } from '../../core/models';
import ProfileName from './ProfileName';

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
            </div>
        </div>
    );
};

export default StudentProfile;
