import UserProfileForm from 'components/ProfileForm';
import { fetchUserProfile, updateUserProfile } from 'core/actions';
import { IProfile } from 'core/models';
import { RootState } from 'core/reducers';
import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import MentorProfileForm from '../../components/ProfileForm/MentorProfileForm';

type ProfileProps = {
    load: () => void;
    submit: (formData: any) => void;
    formData: any;
    isAdmin: any;
};

const mapStateToProps = (state: RootState, props: ProfileProps): ProfileProps => {
    return {
        ...props,
        formData: state.user.profile,
        isAdmin: state.user.isAdmin,
    };
};

const mapDispatchToProps = (dispatch: any, props: ProfileProps): ProfileProps => {
    return {
        ...props,

        submit: (data: IProfile) => {
            dispatch(updateUserProfile(data));
        },
        load: () => {
            dispatch(fetchUserProfile());
        },
    };
};

class Profile extends React.Component<ProfileProps> {
    componentDidMount() {
        this.props.load();
    }

    handleSubmit = (formData: any) => {
        this.props.submit(formData);
    };

    render() {
        if (this.props.isAdmin) {
            return <MentorProfileForm initialValues={this.props.formData} onSubmit={this.handleSubmit} />;
        }

        return <UserProfileForm initialValues={this.props.formData} onSubmit={this.handleSubmit} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
