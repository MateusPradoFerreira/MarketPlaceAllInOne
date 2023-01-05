import { FlexContainer } from "../../containers/FlexContainer";
import { LogoCSS, LogoNameCSS } from "./styles";

function Logo({src, alt, name}) {
    return (
        <FlexContainer>
            <img src={src} alt={alt} className={LogoCSS()} />
            <h1 className={LogoNameCSS()}>{name}</h1>
        </FlexContainer>
    )
}

export default Logo;