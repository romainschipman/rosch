import { RoschDate, RoschTable, RoschText, RowData } from "../../../../lib";
interface User extends RowData{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    birthday: Date;
    active: boolean;
}
const TableStandalone = () => {

    const users : User[] = [
        { id: 1, email: "john.doe@gmail.com", firstName: "john", lastName: "doe", birthday: new Date("1997-10-13"), active: true },
        { id: 2, email: "matt.dupond@gmail.com", firstName: "matt", lastName: "dupond", birthday: new Date("1990-11-03"), active: false },
    ];
    return (
        <>
            <RoschTable data={users} id="rosch-table" columnsOrder={["id", "firstName", "lastName", "email", "birthday", "active"]} >
                <RoschTable.Header columnNames={{
                    id: "Id",
                    firstName: "First name",
                    lastName: "Last name",
                    email: "Mail adress",
                    birthday: "Birthday",
                    active: "Actif"
                }} />
                <RoschTable.Cell <Date> field="birthday" renderElement={(birthday) => {
                    return <RoschDate id="rosch-date" fontSize="sm" dateFormat="dd MMM yyyy" date={birthday} />;
                }} />
                <RoschTable.Cell <boolean> field="active" textAlign="center" renderElement={(isActive) => {
                    return (
                        <RoschText id="rosch-text-active" fontSize="sm">{ isActive ? "🟢": "🔴"} </RoschText>);
                }} />
            </RoschTable>
        </>
    );
};

export { TableStandalone };