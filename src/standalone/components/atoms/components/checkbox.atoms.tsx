import { RoschCheckbox } from "../../../../lib";
import { useState } from "react";

const CheckboxStandalone = () => {
    const [checked, setChecked] = useState(false);


    return(
        <div>
            <RoschCheckbox id="checkbox-standalone" label="actif" checked={checked} onChange={() => setChecked(!checked)} />
        </div>
    )
};

export { CheckboxStandalone };