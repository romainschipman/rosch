import { ReactNode, useState } from "react";
import { RoschTheme, Theme, ThemeColorPalette } from "../../../lib";
import { StandaloneHeader } from "./standalone-header/standalone-header";
import { StandaloneWrapperStyled } from "./standalone-wrapper.style";
import { NotFound } from "./404/not-found";
import classNames from "classnames";

interface Component {
    id: string;
    name: string;
    component: ReactNode | ReactNode[];
}

interface StandaloneWrapperProps {
    children?: ReactNode;
    title: string;
    components?: Component[];
}

const StandaloneWrapper = ({ title, components = [] } : StandaloneWrapperProps) => {

    const [currentComponent, setCurrentComponent] = useState<Component>(components?.[0]);
    const colors : ThemeColorPalette = {
        main: {
            primary: {
                highest: "#57c1ff"
            }
        },
        buttons: {
            primary: {
                default: {
                    color:  "#ffffff",
                    onColor: "#57c1ff"
                },
            
            }
        }
    };

    const theme : Theme = {
        name: "default",
        buttons: {
            radius: "none",
            paddingHorizontal: "xxl",
            paddingVertical: "md"
        },
        inputs: {
            radius: "sm",
            paddingHorizontal: "xs",
            paddingVertical: "sm"
        }
    } as Theme;

    const displayComponent = () => {
        if(currentComponent?.component) {
            return currentComponent.component;
        }
        return <NotFound />;
    };

    return (
        <RoschTheme theme={theme} colors={colors}>
            <StandaloneWrapperStyled>
                <StandaloneHeader />
                <div className="standalone-header-title">{title}</div>
                <div className="standalone-components-slider">
                    {components?.map(component => <div key={component.id} className={classNames("component-item", component.id === currentComponent.id && "component-item__selected")} onClick={() => setCurrentComponent(component)}>{component.name}</div>)}
                </div>
                <div className="standalone-header-body">{displayComponent()}</div>
            </StandaloneWrapperStyled>
        </RoschTheme>
    );
};

export { StandaloneWrapper };