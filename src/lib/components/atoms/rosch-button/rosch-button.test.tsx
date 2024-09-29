import { fireEvent, render, screen } from "@testing-library/react";
import { RoschButton } from "./rosch-button";

jest.mock("../../../utils/generate-font-size/generate-font-size", () => ({
    generateFontSize: jest.fn(() => "16px"),
}));

jest.mock("./helpers/generate-button-color/generate-button-color", () => ({
    generateButtonColor: jest.fn(() => `
    background-color: #007bff;
    color: #ffffff;
    border: 0;
  `),
}));

// Mock RoschText
jest.mock("../rosch-text/rosch-text", () => ({
    RoschText: jest.fn(({ children }) => <span>{children}</span>),
}));

describe("RoschButton", () => {
    test("should render the button with the provided label", () => {
        render(<RoschButton id="submit-button" label="Submit" />);
        const buttonElement = screen.getByText("Submit");
        expect(buttonElement).toBeInTheDocument();
    });

    test("should render the button with custom children", () => {
        render(<RoschButton id="custom-button"><span>Custom Content</span></RoschButton>);
        const buttonElement = screen.getByText("Custom Content");
        expect(buttonElement).toBeInTheDocument();
    });

    test("should call onClick handler when button is clicked", () => {
        const handleClick = jest.fn();
        render(<RoschButton id="clickable-button" label="Submit" onClick={handleClick} />);
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("should not call onClick handler when button is disabled", () => {
        const handleClick = jest.fn();
        render(<RoschButton id="disabled-button" label="Submit" onClick={handleClick} disabled />);
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });

    test("should render the default label if children is not provided", () => {
        render(<RoschButton id="default-label-button" label="Default Label" />);
        const buttonElement = screen.getByText("Default Label");
        expect(buttonElement).toBeInTheDocument();
    });

    test("should render the children instead of label when provided", () => {
        render(<RoschButton id="children-button" label="Label"><span>Children Content</span></RoschButton>);
        const buttonElement = screen.getByText("Children Content");
        expect(buttonElement).toBeInTheDocument();
        expect(screen.queryByText("Label")).not.toBeInTheDocument();
    });

    test("should not throw an error when onClick is not provided", () => {
        render(<RoschButton id="no-click-handler-button" label="No Click Handler" />);
        const buttonElement = screen.getByText("No Click Handler");
        expect(() => fireEvent.click(buttonElement)).not.toThrow();
    });
});
