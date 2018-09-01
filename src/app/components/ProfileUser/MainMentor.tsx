import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { YearsInFrontEnd } from '../../core/models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// TODO: add props for status block, change status with props
type Props = {
    yearsInFrontEnd?: YearsInFrontEnd;
    city: string;
    githubName: string;
};

const MainMentor = (props: Props) => {
    const { yearsInFrontEnd, city, githubName } = props;
    return (
        <React.Fragment>
            <Row className="text-center mt-5">
                <Col sm="3">
                    <p>Status</p>
                    <h3>need approval</h3>
                </Col>
                <Col sm="3">
                    <p>Experience</p>
                    <h3>{yearsInFrontEnd}</h3>
                </Col>
                <Col sm="3">
                    <p>City</p>
                    <h3>{city}</h3>
                </Col>
                <Col sm="3">
                    <p>
                        <a href={`https://github.com/${githubName}`}>{`${props.githubName}`}</a>
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

export default MainMentor;
