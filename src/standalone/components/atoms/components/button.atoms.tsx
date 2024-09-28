import { RoschButton } from "../../../../lib";


const ButtonStandalone = () => {
    return (
        <>
            <RoschButton id="rosch-button" radius="xxl" onClick={() => alert("Clicked")}>
        Click Me
            </RoschButton>
            <RoschButton id="rosch-button" colorVariant="danger" onClick={() => alert("Clicked")}>
        Cancel
            </RoschButton>
        </>
    );
};

export { ButtonStandalone };