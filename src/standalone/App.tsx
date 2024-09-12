import { RowData } from "../lib/components/molecules/rosch-table/rosch-table-row/rosch-table-row";
import { RoschButton, RoschTable, RoschText, RoschTheme } from "../lib";

/**
 * App Component
 * @returns The app component
 */
const App = () => {

  interface Autor {
    id: number,
    firstName: string,
    lastName: string
  }

  interface Book extends RowData {
    id: number,
    name: string;
    author: Autor
    isActive: boolean
  }

  const columnNames = {
    id: "Id",
    name: "Nom du livre",
    author: "Auteur",
    isActive: "Actif",
  };

  const myData : Book[] = [{
    id: 1,
    name: "Harry Potter 1",
    author: {
      id: 1,
      firstName: "Romain",
      lastName: "Schipman",
    },
    isActive: true,
  },{
    id: 2,
    name: "Harry Potter 2",
    author: {
      id: 1,
      firstName: "Jean Claude",
      lastName: "Vandamme"
    },
    isActive: false,
  }];




  return (
    <RoschTheme>
      <div style={{ display: "flex", alignItems : "center", justifyContent : "center", marginTop: "50px" }}>
        <RoschTable
          id="fiuerj"
          data={[...myData]}
          columnsOrder={["id", "name", "author", "isActive", "actions"]}
          enableColumnOrder={true}
        >
          <RoschTable.Header columnNames={columnNames} />
          <RoschTable.Cell <Autor> field="author" renderElement={(value) => (
            <RoschText fontSize="sm" id={`value-${value.id}`}>{`${value.firstName} ${value.lastName}`}</RoschText>
          )} />
          <RoschTable.Cell <boolean> field="isActive" renderElement={(isActive) => (
            isActive ? 
              <div style={{ width : "10px", height: "10px", borderRadius: "100px", backgroundColor : "green", margin: "auto" }}></div>
              :
              <div style={{ width : "10px", height: "10px", borderRadius: "100px", backgroundColor : "red", margin: "auto" }}></div>
          )} />
          <RoschTable.Cell <Book> field="actions" renderElement={(value) => (
            <div style={{ display: "flex", gap : "1rem" }}>
              <RoschButton id="button" onClick={() => console.log("validate",value.id)} size="sm" colorVariant="success" />
              <RoschButton id="button" onClick={() => console.log("delete",value.id)} size="sm" colorVariant="danger" label="Supprimer" />
            </div>
          )} />
        </RoschTable>
      
      </div>
    </RoschTheme>
  );
  
};

export default App;
