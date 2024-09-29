import { format } from "date-fns";
import { generateTime } from "./generate-time";



jest.mock("date-fns", () => ({
    format: jest.fn()
}));

describe("Unit test for generateTime", () => {

    beforeEach(() => {
        jest.clearAllMocks();
        (format as jest.Mock).mockReturnValue("10:00:00");
    });

    test("1", () => {
        const time = generateTime(new Date());
        expect(time).toEqual("10:00:00");
    });
});