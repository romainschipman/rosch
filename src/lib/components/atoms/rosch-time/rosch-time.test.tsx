import { render, screen } from "@testing-library/react";
import { RoschTime, RoschTimeProps } from "./rosch-time";
import { generateTime } from "../../../utils/generate-time/generate-time";

jest.mock("../../../utils/generate-time/generate-time", () => ({
    generateTime: jest.fn(),
}));

describe("Unit test for RoschTime", () => {
    const mockGenerateTime = generateTime as jest.Mock;

    const setup = (props?: Partial<RoschTimeProps>) => {
        return render(<RoschTime id="rosch-time" time={new Date()} {...props} />);
    };

    beforeEach(() => {
        mockGenerateTime.mockImplementation(() => "14:30");
    });

    test("displays the generated time with the default format", () => {
        setup();
        const timeElement = screen.getByText("14:30");
        expect(timeElement).toBeInTheDocument();
        expect(timeElement.tagName).toBe("SPAN"); // Ensures it renders in a styled text element
    });

    test("displays the time with a custom format", () => {
        mockGenerateTime.mockImplementation(() => "2:30 PM");
        setup({ timeFormat: "HH:mm:ss"});
        expect(screen.getByText("2:30 PM")).toBeInTheDocument();
    });

    test("uses the provided time", () => {
        const customTime = new Date(2024, 8, 29, 10, 15); // 10:15 AM, September 29, 2024
        mockGenerateTime.mockImplementation(() => "10:15");
        setup({ time: customTime });
        expect(screen.getByText("10:15")).toBeInTheDocument();
    });

    test("applies the correct locale", () => {
        mockGenerateTime.mockImplementation(() => "14h30");
        setup({ timeLocale: "fr" });
        expect(screen.getByText("14h30")).toBeInTheDocument();
    });
});
