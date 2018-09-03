import { RootState } from '../reducers';

export const getUserProfile = (state: RootState) => {
    if (state.user && state.user.profile) {
        return state.user.profile;
    }
    return;
};

export const getStudentMentors = (state: RootState) => {
    if (state.student.student) {
        return state.student.student.mentors;
    }
    return;
};

export const getUserRole = (state: RootState) => {
    if (state.user.participations && state.user.participations[0] && state.user.participations[0].role) {
        return state.user.participations[0].role;
    }
    return;
};

export function isAnyPartLoaded({ router, ...state }: any) {
    for (const key in state) {
        if (!!state[key].isLoading) {
            return true;
        }
    }
    return false;
}
