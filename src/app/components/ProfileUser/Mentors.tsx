import * as React from 'react';
import { IUser, IUserBase } from '../../core/models';

type Props = {
    mentors: Array<IUserBase | IUser> | undefined;
};

const Mentors = (props: Props) => {
    const { mentors } = props;
    return (
        <React.Fragment>
            {mentors
                ? mentors.map(mentor => (
                      <p key={mentor._id}>
                          Mentor: <a href="#">{mentor._id}</a>
                      </p>
                  ))
                : null}
        </React.Fragment>
    );
};

export default Mentors;
