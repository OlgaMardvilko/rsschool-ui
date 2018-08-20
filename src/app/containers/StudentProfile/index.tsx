import * as React from 'react';
import { IProfile, IUser, IUserBase } from '../../core/models/index';
import Student from '../../components/StudentProfile/index';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers/index';
import { fetchStudent } from '../../core/actions/student';
import { getStudentMentors, getStudentProfile } from '../../core/selectors';

class Index extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchStudent();
    }

    render() {
        return this.props.profile ? (
            <Student handleExpel={() => {}} studentProfile={this.props.profile} mentors={this.props.mentors} />
        ) : (
            <h2>loading...</h2>
        );
    }
}

type Props = {
    profile: IProfile | undefined;
    fetchStudent: () => void;
    mentors: Array<IUser | IUserBase> | undefined;
};

const mapStateToProps = (state: RootState, props: Props): Props => {
    return {
        ...props,
        profile: getStudentProfile(state),
        mentors: getStudentMentors(state),
    };
};

const mapDispatchToProps = (dispatch: any, props: Props): Props => {
    return {
        ...props,
        fetchStudent: () => {
            dispatch(fetchStudent());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);
