import * as React from 'react';
import { classNames } from 'core/styles';
const cn = classNames(require('./index.scss'));

type Props = {
    githubId: string;
};

const Avatar = (props: Props) => {
    const { githubId } = props;
    return (
        <React.Fragment>
            <p className="mb-2">
                <img src={`https://github.com/${githubId}.png`} alt={`${githubId}`} className={cn('avatar')} />
            </p>
        </React.Fragment>
    );
};

export default Avatar;
