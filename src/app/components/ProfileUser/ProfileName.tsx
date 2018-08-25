import * as React from 'react';

type Name = {
    firstName: string;
    lastName: string;
};

type Props = {
    name: Name;
    nameNative: Name;
};

const ProfileName = (props: Props) => (
    <React.Fragment>
        <h2 className="text-info">{`${props.name.firstName} ${props.name.lastName}`}</h2>
        <p>RU: {`${props.nameNative.firstName} ${props.nameNative.lastName}`}</p>
    </React.Fragment>
);

export default ProfileName;
