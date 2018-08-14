import * as React from 'react';
import { Row, Col } from 'reactstrap';

type PrimaryEducation = {
    university: string;
    faculty: string;
    graduationYear: string;
};

type Props = {
    primaryEducation: PrimaryEducation;
    isInternshipNeeded: boolean;
    isWorkNeeded: boolean;
};

const Education = (props: Props) => (
    <React.Fragment>
        <h2 className="badge badge-info">Education</h2>
        <Row>
            <Col md="4">University:</Col>
            <Col md="8">{`${props.primaryEducation.university}`}</Col>
        </Row>
        <Row>
            <Col md="4">Faculty:</Col>
            <Col md="8">{`${props.primaryEducation.faculty}`}</Col>
        </Row>
        <Row>
            <Col md="4">Graduation year:</Col>
            <Col md="8">{`${props.primaryEducation.graduationYear}`}</Col>
        </Row>
        <Row>
            <Col md="4">Вам нужна учебная практика в EPAM?</Col>
            <Col md="8">{props.isInternshipNeeded ? 'Да' : 'Нет'}</Col>
        </Row>
        <Row>
            <Col md="4">Вам нужно распределение в EPAM после обучения в ВУЗе?</Col>
            <Col md="8">{props.isWorkNeeded ? 'Да' : 'Нет'}</Col>
        </Row>
        <hr />
    </React.Fragment>
);

export default Education;
