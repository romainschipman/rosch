import { render } from "@testing-library/react";
import { RoschText } from "./rosch-text";

describe("Unit test for RoschText", () => {
    test("should renders the text content passed as children", () => {
        const { getByText } = render(<RoschText id="test-text">Test Text</RoschText>);
        expect(getByText("Test Text")).toBeInTheDocument();
    });

    test("should applies the bold styling when the bold prop is provided", () => {
        const { getByText } = render(<RoschText id="bold-text" isBold={true}>Bold Text</RoschText>);
        const element = getByText("Bold Text");
        expect(element).toHaveStyle("font-weight: bold;");
    });

    test("should applies the font size when the fontSize prop is provided", () => {
        const { getByText } = render(<RoschText id="large-text" fontSize="lg">Large Text</RoschText>);
        const element = getByText("Large Text");
        expect(element).toHaveStyle("font-size: 1.25rem;");
    });

    test("should applies multiple styles when multiple props are provided", () => {
        const { getByText } = render(
            <RoschText id="styled-text" isBold={true} fontSize="lg" isUnderline={true}>
        Styled Text
            </RoschText>
        );
        const element = getByText("Styled Text");
        expect(element).toHaveStyle("font-weight: bold;");
        expect(element).toHaveStyle("font-size: 1.25rem;");
        expect(element).toHaveStyle("text-decoration: underline;");
    });

    test("should renders with default styles when no styling props are provided", () => {
        const { getByText } = render(<RoschText id="default-styled-text">Default Styled Text</RoschText>);
        const element = getByText("Default Styled Text");
        expect(element).toBeInTheDocument();
    });
});
