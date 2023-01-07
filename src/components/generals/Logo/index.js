import { FlexContainer } from "../../containers/FlexContainer";
import { LogoCSS, LogoNameCSS } from "./styles";

function Logo({ src, alt, name, vertical }) {
    return (
        <FlexContainer css={vertical ? {} : { flexDirection: 'column', justifyContent: 'center' }}>
            <LogoCSS src={src} alt={alt} />
            <LogoNameCSS vertical={vertical}>{name}</LogoNameCSS>
        </FlexContainer>
    )
}

export default Logo;