import { RoschText } from "../../../../lib";


const TextStandalone = () => {
    return(
        <>
            <RoschText id="rosch-text-1" colorVariant="danger" isUppercase={true}>Hello World</RoschText>
            <RoschText id="rosch-text-2" >Hello World</RoschText>
            <RoschText id="rosch-text-3" isBold={true} fontSize="xs">Hello World</RoschText>
        </>
    );
};

export { TextStandalone };