import { ChangeEventHandler, FunctionComponent } from "react";
import { RoschText } from "../rosch-text/rosch-text";
import { RoschSelectStyled, RoschSelectStyledProps } from "./rosch-select.style";
import classNames from "classnames";


export interface Options {
    name: string;
    label: string;
}
export interface RoschSelectProps extends RoschSelectStyledProps{
    options: Options[];
    selected?: string | string[];
    onChange?: (value: string | string[]) => void;
    label?: string;
    error?: string;
    disabled?: boolean;
}

const RoschSelect : FunctionComponent<RoschSelectProps> = (props) => {

    const {
        label,
        options,
        onChange,
        selected,
        error,
        className,
        ...styledProps
    } = props;

    const isMultiple =Array.isArray(selected);

    const renderOptions = () => {
        return options.map(opt => (
            <option key={opt.name} value={opt.name}>{opt.label}</option>
        ));
    };

    const handleChange : ChangeEventHandler<HTMLSelectElement> = (e) => {
        const { value } = e.target;
        if(!onChange) {
            return;
        }
        if(isMultiple) {
            if(selected.some(s => s === value)) {
                const selectedFilters = selected.filter(s => s !== value);
                onChange(selectedFilters);
            } else {
                onChange([...selected, value]);
            }
        } else {
            if(selected === value) {
                onChange("");
            } else onChange(value);
        }
    };

    return (
        <RoschSelectStyled
            {...styledProps}
        >
            {label && <RoschText className="rosch__select__label" id="label-select" fontSize="sm">{label}</RoschText>}
            <select
                value={selected}
                className={classNames("rosch__select", className)}
                disabled={props.disabled}
                onChange={handleChange}
                multiple={isMultiple}
            >
                {!isMultiple && <option value={undefined}></option>}
                {renderOptions()}
            </select>
            <RoschText className="rosch__select__label" id="label-select" fontSize="xs">{error ?? ""}</RoschText>
        </RoschSelectStyled>
    );
};

export { RoschSelect };