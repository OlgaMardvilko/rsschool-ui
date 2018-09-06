import * as React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

type Props = {
    pageName: string;
};

const PagePrint = (props: Props) => (
    <React.Fragment>
        <h2>{props.pageName}</h2>
        <div className="text-right btn-container">
            <Button color="success" size="sm" onClick={() => window.print()}>
                <FontAwesomeIcon icon={faPrint} /> Print
            </Button>
        </div>
    </React.Fragment>
);

export default PagePrint;
