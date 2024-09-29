import { render, screen } from "@testing-library/react";
import { RoschDate, RoschDateProps } from "./rosch-date";
import { generateDate } from "../../../utils/generate-date/generate-date";

jest.mock("../../../utils/generate-date/generate-date", () => ({
    generateDate: jest.fn(),
}));

describe("Unit test for RoschDate", () => {
    const mockGenerateDate = generateDate as jest.Mock;

    const setup = (props?: Partial<RoschDateProps>) => {
        return render(<RoschDate id="test-date" {...props} />);
    };

    beforeEach(() => {
        mockGenerateDate.mockImplementation(() => "01/01/2024");
    });

    test("should displays the generated date with the default format", () => {
        setup();
        const dateElement = screen.getByText("01/01/2024");
        expect(dateElement).toBeInTheDocument();
        expect(dateElement.tagName).toBe("SPAN"); // Ensures it's a styled text element
    });

    test("should displays the date with a custom format", () => {
        mockGenerateDate.mockImplementation(() => "1 sept. 2024");
        setup({ dateFormat: "dd MMM yyyy" });
        expect(screen.getByText("1 sept. 2024")).toBeInTheDocument();
    });

    test("should uses the provided date instead of the current date", () => {
        const customDate = new Date(2023, 5, 15); // June 15, 2023
        mockGenerateDate.mockImplementation(() => "15/06/2023");
        setup({ date: customDate });
        expect(screen.getByText("15/06/2023")).toBeInTheDocument();
    });

    test("should applies the correct locale", () => {
        mockGenerateDate.mockImplementation(() => "15 juin 2023");
        setup({ locale: "fr" });
        expect(screen.getByText("15 juin 2023")).toBeInTheDocument();
    });
});
