import {type ReactNode, forwardRef} from 'react';
import cn from 'classnames';
import styles from './DivButton.module.scss';

interface DivButtonProps {
    children: ReactNode;
    className?: string;
    onClick: () => any;
}

const DivButton = forwardRef<HTMLDivElement, DivButtonProps>(({children, className, ...rest}, ref) => {
    return (
        <div ref={ref} className={cn(styles.container, className)} {...rest} role="button" tabIndex={-1}>
            {children}
        </div>
    );
});

export default DivButton;
