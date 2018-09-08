import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { getGithubName } from 'core/helpers/userProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// TODO: add props for status block, change status with props
type Props = {
    firstColTitle: string;
    firstColValueOne: any;
    firstColValueTwo: any;
    secondColTitle: string;
    secondColValue: any;
    city: string;
    githubName: string;
};

const MainInformation = (props: Props) => {
    const {
        firstColTitle,
        firstColValueOne,
        firstColValueTwo,
        secondColTitle,
        secondColValue,
        city,
        githubName,
    } = props;
    return (
        <React.Fragment>
            <Row className="text-center mt-5">
                <Col sm="3">
                    <p>{firstColTitle}</p>
                    <h3>
                        {firstColValueOne}
                        <small>{firstColValueTwo}</small>
                    </h3>
                </Col>
                <Col sm="3">
                    <p>{secondColTitle}</p>
                    <h3>{secondColValue}</h3>
                </Col>
                <Col sm="3">
                    <p>City</p>
                    <h3>{city}</h3>
                </Col>
                <Col sm="3">
                    <p>
                        <a href={getGithubName(githubName)}>{githubName}</a>
                    </p>
                    <h3>
                        <a href={getGithubName(githubName)}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </h3>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default MainInformation;
