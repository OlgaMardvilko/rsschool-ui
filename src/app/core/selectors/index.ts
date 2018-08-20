
import { RootState } from '../reducers';

export const getStudentProfile = (state: RootState) => {
    if (state.student.student && state.student.student.user) {
        return state.student.student.user.profile;
    }
    return;
};

export const getStudentMentors = (state: RootState) => {
    if (state.student.student) {
        return state.student.student.mentors;
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

