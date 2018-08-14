import * as React from 'react';
import { IProfile } from '../../core/models/index';
import Student from '../../components/StudentProfile/index';
import { connect } from 'react-redux';
import { RootState } from 'core/reducers/index';
import { fetchStudent } from '../../core/actions/student';

class Index extends React.Component<Props, any> {
    componentDidMount() {
        this.props.fetchStudent();
    }

    render() {
        return this.props.studentProfile ? (
            <Student handleExpel={() => {}} studentProfile={this.props.studentProfile} />
        ) : (
            <h2>loading...</h2>
        );
    }
}

type Props = {
    studentProfile: IProfile | undefined;
    fetchStudent: () => void;
};

const mapStateToProps = (state: RootState, props: Props): Props => {
    return {
        ...props,
        studentProfile: state.student.studentProfile,
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
