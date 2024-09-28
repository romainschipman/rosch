import { useNavigate } from "react-router-dom";
import { RoschButton } from "../../../../lib";
import { HeaderStandaloneStyled } from "./standalone-header.style";

const StandaloneHeader = () => {

    const navigate = useNavigate();

    const redirectTo = (link : string) => {
        navigate(link);
    };

    return (
        <HeaderStandaloneStyled>
            <RoschButton id="rosch-button" label="Atoms" onClick={() => redirectTo("/atoms")} />
            <RoschButton id="rosch-button" label="Molecules" onClick={() => redirectTo("/molecules")} />
            <RoschButton id="rosch-button" label="Organisms" onClick={() => redirectTo("/organisms")} />
            <RoschButton id="rosch-button" label="Params" onClick={() => redirectTo("/params")} />
        </HeaderStandaloneStyled>
    );
};

export { StandaloneHeader };