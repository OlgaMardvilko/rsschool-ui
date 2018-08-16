import * as React from 'react';
import { Row, Col } from 'reactstrap';

type Props = {
    employmentHistory: string;
    isEPAMEmployee: boolean;
    epamEmail: string;
    epamUpsaId: string;
    yearsInFrontEnd: string;
    isStudiedAtRSSchool: boolean;
    hadMentoringExperience: boolean;
};

const EmploymentHistory = (props: Props) => {
    const {
        employmentHistory,
        isEPAMEmployee,
        epamEmail,
        epamUpsaId,
        hadMentoringExperience,
        isStudiedAtRSSchool,
        yearsInFrontEnd,
    } = props;
    return (
        <React.Fragment>
            <h4 className="badge badge-info">Employment History</h4>
            <Row>
                <Col md="4">Employment History:</Col>
                <Col md="8">{employmentHistory}</Col>
            </Row>
            <Row>
                <Col md="4">Front-end Experience:</Col>
                <Col md="8">{yearsInFrontEnd}</Col>
            </Row>
            <Row>
                <Col md="4">I studied at RS School:</Col>
                <Col md="8">{isStudiedAtRSSchool ? 'Yes' : 'No'}</Col>
            </Row>
            <Row>
                <Col md="4">I was a mentor at RS School:</Col>
                <Col md="8">{hadMentoringExperience ? 'Yes' : 'No'}</Col>
            </Row>
            <Row>
                <Col md="4">Is EPAM employee?</Col>
                <Col md="8">{isEPAMEmployee ? 'Yes' : 'No'}</Col>
            </Row>
            <Row>
                <Col md="4">EPAM Email:</Col>
                <Col md="8">{epamEmail}</Col>
            </Row>
            <Row>
                <Col md="4">EPAM UPSA ID:</Col>
                <Col md="8">{epamUpsaId}</Col>
            </Row>
        </React.Fragment>
    );
};

export default EmploymentHistory;
