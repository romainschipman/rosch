import { RoschInput } from "../../../../lib";

const InputStandalone = () => {
    return (
        <>
            <RoschInput id="rosch-input"  label="test" error="couldn't be empty" />
            <RoschInput id="rosch-text-standalone" label="username" value="johndoe" disabled={true}/>
            <RoschInput id="rosch-input"  label="password" type="password" value="zzz" />
            <RoschInput id="rosch-input" textarea={true} label="password" type="password" value="zzz" />
        </>
    );
};

export { InputStandalone };