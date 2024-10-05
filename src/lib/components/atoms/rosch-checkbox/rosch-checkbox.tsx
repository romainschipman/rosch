import { ChangeEventHandler, FunctionComponent } from "react";
import { RoschCheckboxStyled, RoschCheckboxStyledProps } from "./rosch-checkbox.style";

export interface RoschCheckboxProps extends RoschCheckboxStyledProps {
    label: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

const RoschCheckbox : FunctionComponent<RoschCheckboxProps> = ({ id, label, checked = false, onChange = () => {} }) => {
    const handleChange :ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        onChange(target.checked);
    };

    return (
        <RoschCheckboxStyled id={id}>
            <label htmlFor={`input-checkbox-${id}`}>{label}</label>
            <input id={`input-checkbox-${id}`} checked={checked} onChange={handleChange} className="checkbox__input" type="checkbox" />
        </RoschCheckboxStyled>
    );
};

export { RoschCheckbox };