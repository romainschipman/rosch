import { fireEvent, render, screen } from "@testing-library/react";
import { RoschInput } from "./rosch-input";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";
import { generateInputColor } from "./helpers/generate-input-border-color/generate-input-color";
import { generateInputSize } from "./helpers/generate-input-size/generate-input-size";

jest.mock("../../../utils/generate-css-properties/generate-css-properties", () => ({
  generateCssProperties: jest.fn(() => "mocked-css-properties")
}));

jest.mock("./helpers/generate-input-border-color/generate-input-color", () => ({
  generateInputColor: jest.fn(() => "mocked-input-color")
}));

jest.mock("./helpers/generate-input-size/generate-input-size", () => ({
  generateInputSize: jest.fn(() => "mocked-input-size")
}));

describe("Unit test for RoschInput", () => {
  test("should renders with label and placeholder", () => {
    render(<RoschInput id="input" label="Username" placeholder="Enter your username" />);

    const labelElement = screen.getByText("Username");
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
  });

  test("should calls onChange when input value changes", () => {
    const handleChange = jest.fn();

    render(<RoschInput id="input" label="Username" placeholder="Enter your username" onChange={handleChange} />);

    const inputElement : HTMLInputElement = screen.getByPlaceholderText("Enter your username");
    fireEvent.change(inputElement, { target: { value: "new value" } } );

    screen.getByPlaceholderText("Enter your username").dispatchEvent(new Event("input", { bubbles: true }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("new value");
  });

  test("should renders with disabled state", () => {
    render(<RoschInput id="test" label="Password" placeholder="Enter your password" disabled />);

    const inputElement = screen.getByPlaceholderText("Enter your password");
    expect(inputElement).toBeDisabled();
  });

  test("should applies custom maxLength and type", () => {
    render(<RoschInput id="test" label="PIN" placeholder="Enter your PIN" maxLength={4} type="password" />);

    const inputElement = screen.getByPlaceholderText("Enter your PIN");
    expect(inputElement).toHaveAttribute("maxLength", "4");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  test("should applies mocked CSS properties", () => {
    render(<RoschInput id="test" label="Test Label" placeholder="Test Placeholder" />);

    expect(generateCssProperties).toHaveBeenCalled();
    expect(generateInputColor).toHaveBeenCalled();
    expect(generateInputSize).toHaveBeenCalled();
  });
});
