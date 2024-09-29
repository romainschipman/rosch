import { StandaloneWrapper } from "../wrapper/standalone-wrapper";
import { TableStandalone } from "./components/table.molecules";


const MoleculesPage = () => {

    const components = [{
        id: "rosch-table",
        name: "Rosch Table",
        component: <TableStandalone />
    }];
    return(
        <StandaloneWrapper title="Molecules" components={components}>
        MOLE
        </StandaloneWrapper>
    );
};

export { MoleculesPage };