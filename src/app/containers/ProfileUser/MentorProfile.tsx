import * as React from 'react';
import { IProfile } from '../../core/models/index';
import Mentor from '../../components/ProfileUser/MentorProfile';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers/index';
import { fetchMentor } from '../../core/actions/mentor';
import { getMentorProfile } from '../../core/selectors';

class Index extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchMentor();
    }

    render() {
        return this.props.profile ? (
            <Mentor mentorProfile={this.props.profile} handleApprove={() => {}} handleReject={() => {}} />
        ) : (
            <h2>loading...</h2>
        );
    }
}

type Props = {
    profile: IProfile | undefined;
    fetchMentor: () => void;
};

const mapStateToProps = (state: RootState, props: Props): Props => {
    return {
        ...props,
        profile: getMentorProfile(state),
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
)(Index);
