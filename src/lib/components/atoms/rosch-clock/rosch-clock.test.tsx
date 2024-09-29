import { render, screen } from "@testing-library/react";
import { RoschClock, RoschClockProps } from "./rosch-clock";
import { generateTime } from "../../../utils/generate-time/generate-time";
import { act } from "react";

jest.mock("../../../utils/generate-time/generate-time", () => ({
    generateTime: jest.fn(),
}));

jest.useFakeTimers();

describe("Unit test for RoschClock", () => {
    const mockGenerateTime = generateTime as jest.Mock;

    const setup = (props?: Partial<RoschClockProps>) => {
        return render(<RoschClock id="test-clock" {...props} />);
    };

    beforeEach(() => {
        mockGenerateTime.mockImplementation(() => "12:00:00");

    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.clearAllMocks();
    });

    test(" should displays the initial time with the default format", () => {
        setup();
        const clockElement = screen.getByText("12:00:00");
        expect(clockElement).toBeInTheDocument();
        expect(clockElement.tagName).toBe("SPAN"); // Checks that it is a styled text element
    });

    test("should displays the time with a custom format", () => {
        mockGenerateTime.mockImplementation(() => "12:00");
        setup({ timeFormat: "HH:mm" });
        expect(screen.getByText("12:00")).toBeInTheDocument();
    });

    test("should updates the time every second", () => {
        setup();

        // Check the initial time
        expect(screen.getByText("12:00:00")).toBeInTheDocument();

        // Simulate interval update
        mockGenerateTime.mockImplementation(() => "12:00:01");
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText("12:00:01")).toBeInTheDocument();

        mockGenerateTime.mockImplementation(() => "12:00:02");
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        expect(screen.getByText("12:00:02")).toBeInTheDocument();
    });

    test("should clears the interval when the component unmounts", () => {
        const { unmount } = setup();
        unmount();

        // Verify that the interval is cleared
        jest.advanceTimersByTime(1000);
        expect(mockGenerateTime).toHaveBeenCalledTimes(1); // Interval should not be called after unmount
    });
});
