import {type FC, type ChangeEvent, useState, useRef, useCallback} from 'react';
import cn from 'classnames';
import DropDownItem from "./DropDownItem";
import DivButton from "../Button/DivButton";
import Conditional from "../Conditional";
import styles from './Dropdown.module.scss';

interface DropdownProps {
    onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    options: { value: string; label: string }[];
    className?: string;
}

const Dropdown: FC<DropdownProps> = props => {
    const {options, value, name, onSelect, className} = props;
    const dropDownRef = useRef(null);
    const [show, setShow] = useState(false);

    const selectedOptionLabel = options.find(option => option.value === value)?.label;

    const handleItemSelect = useCallback(
        (item: string) => {
            // @ts-ignore
            onSelect({target: {name, value: item}});
            setShow(false);
        },
        [name, onSelect]
    );

    const handleLabelClick = useCallback(() => {
        setShow(prev => !prev);
    }, []);

    return (
        <div className={cn(styles.dropdown, className)} ref={dropDownRef}>
            <DivButton className={styles.selected} onClick={handleLabelClick}>
                {selectedOptionLabel}
                <i className={cn(styles.dropdownArrow, {[styles.dropdownArrowUp as string]: show})}/>
            </DivButton>
            <Conditional cond={show}>
                <div className={styles.dropdownItemContainer}>
                    {options.map(option => {
                        return (
                            <DropDownItem
                                key={option.value}
                                onSelect={handleItemSelect}
                                label={option.label}
                                value={option.value}
                                selected={value}
                            />
                        );
                    })}
                </div>
            </Conditional>
        </div>
    );
};

export default Dropdown;