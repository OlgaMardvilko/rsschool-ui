import * as React from 'react';

type University = {
    university: string;
};

type Faculty = {
    faculty: string;
};

type GraduationYear = {
    graduationYear: string;
};

type IsInternshipNeeded = {
    isInternshipNeeded: boolean;
};

type IsWorkNeeded = {
    isWorkNeeded: boolean;
};

type Props = {
    university: University;
    faculty: Faculty;
    graduationYear: GraduationYear;
    isInternshipNeeded: IsInternshipNeeded;
    isWorkNeeded: IsWorkNeeded;
};

const Education = (props: Props) => (
    <React.Fragment>
        <h4 className="badge badge-info">Education</h4>
        <div className="row">
            <div className="col-md-4">University:</div>
            <div className="col-md-8">{`${props.university.university}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Faculty:</div>
            <div className="col-md-8">{`${props.faculty.faculty}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Graduation year:</div>
            <div className="col-md-8">{`${props.graduationYear.graduationYear}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Вам нужна учебная практика в EPAM?</div>
            <div className="col-md-8">{`${props.isInternshipNeeded.isInternshipNeeded}`}</div>
        </div>
        <div className="row">
            <div className="col-md-4">Вам нужно распределение в EPAM после обучения в ВУЗе?</div>
            <div className="col-md-8">{`${props.isWorkNeeded.isWorkNeeded}`}</div>
        </div>
    </React.Fragment>
);

export default Education;
