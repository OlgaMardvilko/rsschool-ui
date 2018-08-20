import { ICourseStudent } from '../models';
import { Action } from '../util';
import { STUDENT } from '../constants';

export interface StudentState {
    student: ICourseStudent | undefined;
}

const initialState: StudentState = {
    student: undefined,
};

export function studentReducer(state = initialState, action: Action<any>): StudentState {
    switch (action.type) {
        case STUDENT.STUDENT_PROFILE_FETCH_OK: {
            return {
                ...state,
                student: action.payload,
            };
        }
        default:
            return state;
    }
}
