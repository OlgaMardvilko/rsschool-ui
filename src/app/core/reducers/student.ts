import { IProfile } from '../models';
import { Action } from '../util';
import { STUDENT } from '../constants';

export interface StudentState {
    studentProfile: IProfile | undefined;
}

const initialState: StudentState = {
    studentProfile: undefined,
};

export function studentReducer(state = initialState, action: Action<any>): StudentState {
    switch (action.type) {
        case STUDENT.STUDENT_PROFILE_FETCH_OK: {
            return {
                ...state,
                studentProfile: action.payload,
            };
        }
        default:
            return state;
    }
}
