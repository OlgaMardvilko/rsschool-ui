import * as React from 'react';
import { getGithubAvatar } from 'core/helpers/userProfile';
import { classNames } from 'core/styles';
const cn = classNames(require('./index.scss'));

type Props = {
    githubId: string;
};

const Avatar = (props: Props) => {
    const { githubId } = props;
    return (
        <p className="mb-2">
            <img src={getGithubAvatar(githubId)} alt={githubId} className={cn('avatar')} />
        </p>
    );
};

export default Avatar;
