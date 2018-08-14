import { IProfile } from '../models';
import { Action } from '../util';

export interface StudentState {
    studentProfile: IProfile | undefined;
}

const initialState: StudentState = {
    studentProfile: undefined,
};

export function studentReducer(state = initialState, action: Action<any>): StudentState {
    switch (action.type) {
        case 'FETCH_STUDENT_PROFILE_OK': {
            return {
                ...state,
                studentProfile: action.payload,
            };
        }
        default:
            return state;
    }
}
