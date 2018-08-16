import * as React from 'react';
import { Row, Col } from 'reactstrap';

// type Task = {
//     title: string;
//     score: number;
//     maxScore: number;
//     studentComment?: string;
//     mentorComment?: string;
// };

// type Props = {
//     tasks: Task[];
// };

const tasks = [
    {
        id: 1,
        title: 'Stage #1 score',
        score: 56,
        maxScore: 200,
        mentorComment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Mauris ac elit lacus. In a lorem eu nulla luctus ullamcorper.',
    },
    {
        id: 2,
        title: 'Presentation',
        score: 55,
        maxScore: 100,
        studentComment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Mauris ac elit lacus. In a lorem eu nulla luctus ullamcorper.',
    },
    {
        id: 3,
        title: 'Codewars',
        score: 76,
        maxScore: 100,
        mentorComment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Mauris ac elit lacus. In a lorem eu nulla luctus ullamcorper.',
    },
    {
        id: 4,
        title: 'Match-Match game',
        score: 83,
        maxScore: 120,
        studentComment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Mauris ac elit lacus. In a lorem eu nulla luctus ullamcorper.',
        mentorComment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
             Mauris ac elit lacus. In a lorem eu nulla luctus ullamcorper.',
    },
];

const TaskProgress = () => (
    <React.Fragment>
        <h4 className="badge badge-info">Task progress</h4>
        {tasks.map(task => (
            <Row key={task.id}>
                <Col md="4">
                    <p className="text-primary">{task.title}</p>
                </Col>
                <Col md="8">
                    <p>
                        Score:
                        <span className="badge badge-primary">
                            {' '}
                            {task.score} out of {task.maxScore}
                        </span>
                    </p>
                    {task.studentComment ? (
                        <React.Fragment>
                            <h6>Student comment</h6>
                            <p>{task.studentComment}</p>
                        </React.Fragment>
                    ) : null}
                    {task.mentorComment ? (
                        <React.Fragment>
                            <h6>Mentor comment</h6>
                            <p>{task.mentorComment}</p>
                        </React.Fragment>
                    ) : null}
                </Col>
            </Row>
        ))}
    </React.Fragment>
);

export default TaskProgress;
