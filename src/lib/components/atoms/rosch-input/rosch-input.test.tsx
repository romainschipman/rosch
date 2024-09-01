import { fireEvent, render, screen } from "@testing-library/react";
import { RoschInput } from "./rosch-input";
import { generateInputSize } from "./helpers/generate-input-size/generate-input-size";
import { generateInputColor } from "./helpers/generate-input-color/generate-input-color";
import { generateCssProperties } from "../../../utils/generate-css-properties/generate-css-properties";

jest.mock("./helpers/generate-input-size/generate-input-size");
jest.mock("./helpers/generate-input-color/generate-input-color");
jest.mock("../../../utils/generate-css-properties/generate-css-properties");
jest.mock("../rosch-text/rosch-text", () => ({
  RoschText: ({ children } : any) => <p>{children}</p>
}));
describe("Unit test for RoschInput Component", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should render the input with the correct placeholder and correct label", () => {
    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" label="username" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");
    const labelElement = screen.getByText("username");

    expect(inputElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

  test("should handle input value change", () => {
    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");
    
    fireEvent.change(inputElement, { target: { value: "New value" } });
    expect(inputElement).toHaveValue("New value");
  });

  test("should apply the correct size based on generateInputSize", () => {
    (generateInputSize as jest.Mock).mockReturnValue({ height: "40px", width: "100%" });

    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" size="lg" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");

    expect(generateInputSize).toHaveBeenCalled();
    expect(inputElement).toHaveStyle("height: 40px");
    expect(inputElement).toHaveStyle("width: 100%");
  });

  test("should apply the correct color based on generateInputColor", () => {
    (generateInputColor as jest.Mock).mockReturnValue({ color: "black", backgroundColor: "white" });

    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");

    expect(generateInputColor).toHaveBeenCalled();
    expect(inputElement).toHaveStyle("color: black");
    expect(inputElement).toHaveStyle("background-color: white");
  });

  test("should apply custom styles using generateCssProperties", () => {
    (generateCssProperties as jest.Mock).mockReturnValue({ margin: "10px", padding: "5px" });

    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" />);
    const inputElement = screen.getByPlaceholderText("Enter text here");

    expect(generateCssProperties).toHaveBeenCalled();
    expect(inputElement).toHaveStyle("margin: 10px");
    expect(inputElement).toHaveStyle("padding: 5px");
  });

  test("should display an error message when invalid", () => {
    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" error="Error occurred" />);
    const errorMessage = screen.getByText("Error occurred");
    expect(errorMessage).toBeInTheDocument();
  });

  test("should call onChange handler when value changes", () => {
    const handleChange = jest.fn();
    render(<RoschInput id="rosch-input-test" placeholder="Enter text here" onChange={handleChange} />);
    
    const inputElement = screen.getByPlaceholderText("Enter text here");
    fireEvent.change(inputElement, { target: { value: "New value" } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
