import { RoschSelect } from "../../../../lib";
import { useState } from "react";


const SelectStandalone = () => {
    const [selected1, setSelected1] = useState<string>("");
    const [selected2, setSelected2] = useState<string[]>([]);

    const options = [{
        name: "collection-silver",
        label: "Collection Argent"
    },{
        name: "collection-or",
        label: "Collection Or"
    },{
        name: "collection-diamond",
        label: "Collection Diamants"
    }];

    const handleChange1 = (value: string | string[]) => {
        if(typeof value === "string") {
            setSelected1(value);
        }
    };

    const handleChange2 = (value: string | string[]) => {
        if(typeof value !== "string") {
            setSelected2(value);
        }
    };

    return (
        <>
            <RoschSelect 
                id="rosch__select__standalone"
                selected={selected1}
                onChange={handleChange1}
                options={options}
                label={"Collections"} />
            <RoschSelect
                id="rosch__select__standalone"
                selected={selected2}
                onChange={handleChange2}
                options={options}
                label={"Collections"} />
        </>
    );
};

export { SelectStandalone };