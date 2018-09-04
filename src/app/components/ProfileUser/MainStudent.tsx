import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// TODO: add props for rating block, change rating with props
type Props = {
    englishLevel: string;
    city: string;
    githubName: string;
};

const MainInformation = (props: Props) => {
    const { englishLevel, city, githubName } = props;
    return (
        <React.Fragment>
            <Row className="text-center mt-5">
                <Col sm="3">
                    <p>Rating</p>
                    <h3>
                        22<small>/343</small>
                    </h3>
                </Col>
                <Col sm="3">
                    <p>English Level</p>
                    <h3>{englishLevel}</h3>
                </Col>
                <Col sm="3">
                    <p>City</p>
                    <h3>{city}</h3>
                </Col>
                <Col sm="3">
                    <p>
                        <a href={`https://github.com/${githubName}`}>{githubName}</a>
                    </p>
                    <h3>
                        <a href={`https://github.com/${githubName}`}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </h3>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default MainInformation;
