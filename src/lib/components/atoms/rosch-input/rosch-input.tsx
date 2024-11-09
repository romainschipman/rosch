import { FormEvent, FunctionComponent, LegacyRef } from "react";
import classNames from "classnames";
import { RoschInputStyled, RoschInputStyledProps } from "./rosch-input.style";
import { RoschText } from "../rosch-text/rosch-text";

/**
 * Props for the `RoschInput` component.
 * 
 * Extends `RoschInputStyledProps` to include additional properties such as `inputRef`, `label`, `onChange`, and `placeholder`.
 * 
 * @interface RoschInputProps
 * @extends {RoschInputStyledProps}
 * 
 * @property {RefObject<HTMLInputElement>} [inputRef] - A reference to the underlying input element.
 * @property {string} [label] - Optional label text displayed above the input.
 * @property {(value: string) => void} [onChange] - Optional callback function triggered when the input value changes.
 * @property {string} [placeholder] - Optional placeholder text displayed inside the input when it is empty.
 * @property {string} [value] - The input value.
 * @property {"text" | "password"} [type="text"] - The type of input field, determining the nature of the data expected.
 * @property {number} [maxLength=255] - Optional maximum number of characters allowed in the input.
 * @property {string} [name] - Optional name attribute for the input element, used for form submission.
 */
export interface RoschInputProps extends RoschInputStyledProps {
  /**
   * A reference to the underlying input element.
   */
  inputRef?: LegacyRef<HTMLInputElement>;
  /**
   * Optional label text displayed above the input.
   */
  label?: string;
  /**
   *  Optional callback function triggered when the input value changes.
   * @param value
   * @returns void;
   */
  onChange?: (value: string | number) => void;
  /**
   * The input value.
   */
  value?: string | number;
  /**
   * Optional placeholder text displayed inside the input when it is empty.
   */
  placeholder?: string;
  /**
   * The type of input field, determining the nature of the data expected.
   * 
   * @type {"text" | "password"}
   * @default "text"
   */
  type?: "text" | "password" | "number";
  /**
    * Optional maximum number of characters allowed in the input.
    * 
    * @default 255
    */
  maxLength?: number;

  /**
   * Optional name attribute for the input element, used for form submission.
   */
  name?: string;
  /*
  * Optional to render the input as textarea.
   */
  textarea?: boolean;

}

/**
 * `RoschInput` is a functional component that renders a styled input field with optional label and placeholder.
 * It supports read-only and disabled states, and provides a callback for handling changes to the input value.
 * 
 * The input field's styles are defined by the `RoschInputStyled` component, which is responsible for handling the appearance based on the provided props.
 * 
 * @param {RoschInputProps} props - The properties passed to the input component.
 * 
 * @example
 * ```tsx
 * <RoschInput
 *   label="Username"
 *   placeholder="Enter your username"
 *   onChange={(value) => console.log(value)}
 * />
 * ```
 * 
 * @example
 * ```tsx
 * <RoschInput
 *   label="Password"
 *   placeholder="Enter your password"
 *   disabled
 * />
 * ```
 * 
 * @returns {JSX.Element} A JSX element rendering a styled input field with optional label and placeholder.
 */
const RoschInput: FunctionComponent<RoschInputProps> = (props) => {

    const {
        onChange,
        placeholder,
        label,
        name,
        inputRef,
        type = "text",
        maxLength = 255,
        value,
        textarea = false,
        ...styledProps
    } = props;

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e.currentTarget.value);
        }
    };

    return (
        <RoschInputStyled
            {...styledProps}
        >
            {label && <RoschText className="rosch__input__label" id="label-input" fontSize="sm">{label}</RoschText>}
            {textarea ?
                <textarea
                    className={classNames("rosch__input")}
                    maxLength={maxLength}
                    name={name}
                    value={value}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                :
                <input
                    ref={inputRef}
                    type={type}
                    className={classNames("rosch__input")}
                    maxLength={maxLength}
                    name={name}
                    value={value}
                    readOnly={props.readOnly}
                    disabled={props.disabled}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
            }
            <RoschText className="rosch__input__label" id="label-input" fontSize="xs">{props.error ?? ""}</RoschText>
        </RoschInputStyled>

    );
};

export { RoschInput };