import { DropResult } from "@hello-pangea/dnd";

const updateColumnsOnDrag = (result: DropResult, columns: string[]) => {
    const { destination, source } = result;

    if (!destination) return columns;
    if (destination.index === source.index) return columns;

    const updatedColumns = Array.from(columns);
    const [removed] = updatedColumns.splice(source.index, 1);
    updatedColumns.splice(destination.index, 0, removed);

    return updatedColumns;
};

export { updateColumnsOnDrag };