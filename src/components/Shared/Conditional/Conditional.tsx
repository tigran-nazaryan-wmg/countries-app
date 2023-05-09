import {type FC, type ReactNode} from 'react';

interface ConditionalProps {
    cond: boolean | undefined;
    children: ReactNode
}

const Conditional: FC<ConditionalProps> = props => {
    const {cond, children} = props;

    if (cond && children) {
        return <>{children}</>;
    }

    return <></>;
};

export default Conditional;