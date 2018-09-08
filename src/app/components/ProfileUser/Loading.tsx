import * as React from 'react';

type Props = {
    isLoading: boolean;
    children: JSX.Element;
};

const Loading = (props: Props) => {
    const { isLoading, children } = props;
    if (isLoading) {
        return <h2>loading...</h2>;
    }
    return children;
};

export default Loading;
