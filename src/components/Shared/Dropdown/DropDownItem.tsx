import {type FC, type ReactNode, useCallback} from 'react';
import cn from 'classnames';
import DivButton from '../Button/DivButton/';
import styles from './Dropdown.module.scss';

export type Item = string;

interface DropDownItemProps {
    key: string;
    onSelect: (item: Item) => void;
    value: Item;
    label: ReactNode;
    selected: Item | undefined;
}

const DropDownItem: FC<DropDownItemProps> = props => {
    const {onSelect, value, label, selected} = props;

    const handleSelect = useCallback(
        (selectedValue: Item) => () => {
            onSelect(selectedValue);
        },
        [onSelect]
    );

    return (
        <DivButton
            onClick={handleSelect(value)}
            className={cn(styles.dropdownItem, {[styles.selectedItem]: selected === value})}
        >
            {label}
        </DivButton>
    );
};

export default DropDownItem;
