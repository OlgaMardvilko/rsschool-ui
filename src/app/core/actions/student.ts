import { getStudentProfile } from '../api/student';

export const fetchStudent = () => {
    return async (dispatch: any) => {
        dispatch({
            type: 'FETCHING_STUDENT_PROFILE',
        });

        try {
            const data = await getStudentProfile;
            dispatch({
                type: 'FETCH_STUDENT_PROFILE_OK',
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: 'FETCH_STUDENT_PROFILE_ERROR',
            });
        }
    };
};
