import { IUser } from '../models';
import { Action } from '../util';
import { MENTOR } from '../constants';

export interface MentorState {
    mentor: IUser | undefined;
}

const initialState: MentorState = {
    mentor: undefined,
};

export function mentorReducer(state = initialState, action: Action<any>): MentorState {
    switch (action.type) {
        case MENTOR.MENTOR_PROFILE_FETCH_OK: {
            return {
                ...state,
                mentor: action.payload,
            };
        }
        default:
            return state;
    }
}
