import { StandaloneWrapper } from "../wrapper/standalone-wrapper";
import { ClockStandalone } from "./components/clock.atoms";
import { DateStandalone } from "./components/date.atoms";
import { TextStandalone } from "./components/text.atoms";
import { ButtonStandalone } from "./components/button.atoms";
import {InputStandalone} from "./components/input.atoms";
import { TimeStandalone } from "./components/time.atoms";
import { CheckboxStandalone } from "./components/checkbox.atoms";
import { UploadFileStandalone } from "./components/upload-file";
import { SelectStandalone } from "./components/select.atoms";

const AtomsPage = () => {
    const components = [{
        id: "rosch-text",
        name: "Rosch Text",
        component: <TextStandalone />
    } , {
        id: "rosch-button",
        name: "Rosch Button",
        component: <ButtonStandalone />
    } , {
        id: "rosch-input",
        name: "Rosch Input",
        component: <InputStandalone />
    } , {
        id: "rosch-select",
        name: "Rosch Select",
        component: <SelectStandalone />
    } , {
        id: "rosch-clock",
        name: "Rosch Clock",
        component: <ClockStandalone />
    }, {
        id: "rosch-date",
        name: "Rosch Date",
        component: <DateStandalone />
    }, {
        id: "rosch-time",
        name: "Rosch Time",
        component: <TimeStandalone />
    }, {
        id: "rosch-checkbox",
        name: "Rosch Checkbox",
        component: <CheckboxStandalone />
    }, {
        id: "rosch-upload-file",
        name: "Rosch Upload File",
        component: <UploadFileStandalone />
    }];

    return(
        <StandaloneWrapper title="Atoms" components={components}>
        </StandaloneWrapper>
    );
};

export { AtomsPage };