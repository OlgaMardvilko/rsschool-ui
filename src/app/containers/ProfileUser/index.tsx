import * as React from 'react';
import { IUser, IUserBase } from '../../core/models';
import Mentor from '../../components/ProfileUser/MentorProfile';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers/index';
import { fetchMentor } from '../../core/actions/mentor';
import { getUserProfile, getStudentMentors, getUserRole } from '../../core/selectors';
import Student from '../../components/ProfileUser/StudentProfile';

class UserProfile extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchMentor();
    }

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
    fetchMentor: () => void;
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

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
        fetchMentor: () => {
            dispatch(fetchMentor());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserProfile);
