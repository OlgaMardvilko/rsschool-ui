import * as React from 'react';
import { IUser, IUserBase } from '../../core/models';
import Mentor from '../../components/ProfileUser/MentorProfile';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers/index';
import { getUserProfile, getStudentMentors, getUserRole } from '../../core/selectors';
import Student from '../../components/ProfileUser/StudentProfile';

class UserProfile extends React.Component<Props, any> {
    render() {
        if (this.props.role === 'mentor') {
            return this.props.profile ? (
                <Mentor mentorProfile={this.props.profile} handleApprove={() => {}} handleReject={() => {}} />
            ) : (
                <h2>loading...</h2>
            );
        }
        return this.props.profile ? (
            <Student handleExpel={() => {}} studentProfile={this.props.profile} mentors={this.props.mentors} />
        ) : (
            <h2>loading...</h2>
        );
    }
}

type Props = {
    profile: any;
    role: any;
    mentors: Array<IUser | IUserBase> | undefined;
};

const mapStateToProps = (state: RootState, props: Props): Props => {
    return {
        ...props,
        profile: getUserProfile(state),
        role: getUserRole(state),
        mentors: getStudentMentors(state),
    };
};

export default connect(
    mapStateToProps,
    null,
)(UserProfile);
