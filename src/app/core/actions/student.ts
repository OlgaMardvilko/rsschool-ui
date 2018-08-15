import { getStudentProfile } from '../api/student';
import { STUDENT } from '../constants';

export const fetchStudent = () => {
    return async (dispatch: any) => {
        dispatch({
            type: STUDENT.STUDENT_PROFILE_FETCH,
        });

        try {
            const data = await getStudentProfile;
            dispatch({
                type: STUDENT.STUDENT_PROFILE_FETCH_OK,
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: STUDENT.STUDENT_PROFILE_FETCH_FAIL,
            });
        }
    };
};
