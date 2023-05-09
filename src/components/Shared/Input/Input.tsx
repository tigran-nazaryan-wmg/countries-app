import {type FC, type ChangeEvent} from 'react';
import cn from "classnames";
import styles from "./Input.module.scss";

interface InputProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    disabled: boolean
}

const Input: FC<InputProps> = ({value, onChange, placeholder, disabled}) => {
    return (
        <input
            type="text"
            className={cn(styles.inputField, {[styles.disabled]: disabled})}
            value={value}
            onChange={onChange} placeholder={placeholder}
        />
    );
};

export default Input;