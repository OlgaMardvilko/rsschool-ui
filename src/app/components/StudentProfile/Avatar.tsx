import * as React from 'react';

type Props = {
    githubId: string;
};

const Avatar = (props: Props) => {
    const { githubId } = props;
    return (
        <React.Fragment>
            <p className="mb-2">
                <img src={`https://github.com/${githubId}.png`} alt={`${githubId}`} className="avatar" />
            </p>
        </React.Fragment>
    );
};

export default Avatar;
