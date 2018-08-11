import * as React from 'react';

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
        <h4 className="badge badge-info">Education</h4>
        <div className="row">
            <div className="col-md-4">University:</div>
            <div className="col-md-8">{`${props.primaryEducation.university}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Faculty:</div>
            <div className="col-md-8">{`${props.primaryEducation.faculty}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Graduation year:</div>
            <div className="col-md-8">{`${props.primaryEducation.graduationYear}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Вам нужна учебная практика в EPAM?</div>
            <div className="col-md-8">{`${props.isInternshipNeeded}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Вам нужно распределение в EPAM после обучения в ВУЗе?</div>
            <div className="col-md-8">{`${props.isWorkNeeded}`}</div>
        </div>
    </React.Fragment>
);

export default Education;
