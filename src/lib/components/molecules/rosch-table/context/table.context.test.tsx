import React from "react";
import { TableContext, useTableContext } from "./table.context"; // Assurez-vous du bon chemin
import { errorMessages } from "../../../../constants/errors-messages/errors-messages";
import { renderHook } from "@testing-library/react";

describe("Unit test for useTableContext", () => {
    test("should return the table context values when inside TableContext", () => {
        const mockContextValue = {
            customCells: <div>Custom Cell</div>,
            columnsOrder: ["id", "name", "author"],
            enableColumnOrder: true,
        };

        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <TableContext.Provider value={mockContextValue}>
                {children}
            </TableContext.Provider>
        );

        const { result } = renderHook(() => useTableContext(), { wrapper });

        expect(result.current).toEqual(mockContextValue);
    });

    test("should throw an error when used outside of TableContext", () => {
        try {
            renderHook(() => useTableContext());
        } catch (err : any) {
            expect(err.message).toBe(errorMessages.ROSCH_TABLE_CONTEXT_ERROR);

        }

    });
});
