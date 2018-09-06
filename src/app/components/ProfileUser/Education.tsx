import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { classNames } from 'core/styles';
const cn = classNames(require('./index.scss'));

type PrimaryEducation = {
    university: string;
    faculty: string;
    graduationYear: number;
    [key: string]: any;
};

type Props = {
    primaryEducation: PrimaryEducation;
    isInternshipNeeded: boolean;
    isWorkNeeded: boolean;
};

const Education = (props: Props) => (
    <React.Fragment>
        <h2 className="badge badge-info">Education</h2>
        {Object.keys(props.primaryEducation).map(item => {
            return (
                <Row key={item.toString()}>
                    <Col md="4" className={cn('capital')}>
                        {item}:
                    </Col>
                    <Col md="8">{props.primaryEducation[item]}</Col>
                </Row>
            );
        })}
        <Row>
            <Col md="4">Вам нужна учебная практика в EPAM?</Col>
            <Col md="8">{props.isInternshipNeeded ? 'Да' : 'Нет'}</Col>
        </Row>
        <Row>
            <Col md="4">Вам нужно распределение в EPAM после обучения в ВУЗе?</Col>
            <Col md="8">{props.isWorkNeeded ? 'Да' : 'Нет'}</Col>
        </Row>
    </React.Fragment>
);

export default Education;
