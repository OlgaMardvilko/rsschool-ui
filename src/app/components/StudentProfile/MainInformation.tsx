import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// TODO: add props for rating block, change rating with props
type Props = {
    englishLevel: string;
    city: string;
    githubName: string;
};

const MainInformation = (props: Props) => (
    <React.Fragment>
        <hr />
        <div className="row text-center mt-5">
            <div className="col-sm">
                <p>Rating</p>
                <h3>
                    22<small>/343</small>
                </h3>
            </div>
        </div>
        <div className="row text-center mt-5">
            <div className="col-sm">
                <p>English Level</p>
                <h3>{`${props.englishLevel}`}</h3>
            </div>
        </div>
        <div className="row text-center mt-5">
            <div className="col-sm">
                <p>City</p>
                <h3>{`${props.city}`}</h3>
            </div>
        </div>
        <div className="row text-center mt-5">
            <div className="col-sm">
                <p>
                    <a href={`https://github.com/${props.githubName}`}>{`${props.githubName}`}</a>
                </p>
                <h3>
                    <a href={`https://github.com/${props.githubName}`}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </h3>
            </div>
        </div>
        <hr />
    </React.Fragment>
);

export default MainInformation;
