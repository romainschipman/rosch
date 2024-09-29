import { generateDate } from "./generate-date";
import { enUS, fr } from "date-fns/locale";
import { format } from "date-fns";

jest.mock("date-fns", () => ({
    format: jest.fn(),
}));

describe("Unit test for generateDate", () => {
    const mockFormat = format as jest.Mock;

    beforeEach(() => {
        mockFormat.mockImplementation(() => "01/01/2024");
    });

    test("should formats date with default options", () => {
        const result = generateDate(new Date(2024, 0, 1)); // Jan 1, 2024
        expect(mockFormat).toHaveBeenCalledWith(new Date(2024, 0, 1), "dd/MM/yyyy", { locale: fr });
        expect(result).toBe("01/01/2024");
    });

    test("should formats date with custom format", () => {
        mockFormat.mockImplementation(() => "01 Jan 2024");
        const result = generateDate(new Date(2024, 0, 1), { format: "dd MMM yyyy" });
        expect(mockFormat).toHaveBeenCalledWith(new Date(2024, 0, 1), "dd MMM yyyy", { locale: fr });
        expect(result).toBe("01 Jan 2024");
    });

    test("should formats date with custom locale", () => {
        mockFormat.mockImplementation(() => "01/01/2024");
        const result = generateDate(new Date(2024, 0, 1), { locale: "enUS" });
        expect(mockFormat).toHaveBeenCalledWith(new Date(2024, 0, 1), "dd/MM/yyyy", { locale: enUS });
        expect(result).toBe("01/01/2024");
    });

    test("should formats date with custom format and locale", () => {
        mockFormat.mockImplementation(() => "January 1, 2024");
        const result = generateDate(new Date(2024, 0, 1), { format: "MMMM d, yyyy", locale: "enUS" });
        expect(mockFormat).toHaveBeenCalledWith(new Date(2024, 0, 1), "MMMM d, yyyy", { locale: enUS });
        expect(result).toBe("January 1, 2024");
    });
});
