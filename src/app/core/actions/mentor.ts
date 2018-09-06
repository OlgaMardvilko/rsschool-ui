import { getMentorProfile, mentorData } from '../api/mentor';
import { MENTOR } from '../constants';

export const fetchMentor = () => {
    return async (dispatch: any) => {
        dispatch({
            type: MENTOR.MENTOR_PROFILE_FETCH,
        });

        try {
            const data = await getMentorProfile(mentorData);
            dispatch({
                type: MENTOR.MENTOR_PROFILE_FETCH_OK,
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: MENTOR.MENTOR_PROFILE_FETCH_FAIL,
            });
        }
    };
};
