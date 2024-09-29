import { generateTextDecoration } from "./generate-text-decoration";

describe("Unit test for generateTextDecoration", () => {
    test("should return CSS for bold text when `bold` prop is provided", () => {
        const props = { isBold: "true" } as any;
        const result = generateTextDecoration(props);
        expect(result).toBe("font-weight: bold;");
    });

    test("should return CSS for underline text when `underline` prop is provided", () => {
        const props = { isUnderline: "true" } as any;
        const result = generateTextDecoration(props);
        expect(result).toBe("text-decoration: underline;");
    });

    test("should return CSS for uppercase text when `uppercase` prop is provided", () => {
        const props = { isUppercase: "true" } as any;
        const result = generateTextDecoration(props);
        expect(result).toBe("text-transform: uppercase;");
    });

    test("should return combined CSS when `bold`, `underline`, and `uppercase` props are provided", () => {
        const props = { isBold: "true", isUnderline: "true", isUppercase: "true" } as any;
        const result = generateTextDecoration(props);
        expect(result).toBe("font-weight: bold;text-decoration: underline;text-transform: uppercase;");
    });

    test("should return an empty string when no relevant props are provided", () => {
        const props = {};
        const result = generateTextDecoration(props);
        expect(result).toBe("");
    });
});
