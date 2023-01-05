import { styled } from "../sititchesConfig";

const ContainerCSS = styled('div', {
})

export function Container({children, css}) {
    return (
        <ContainerCSS css={css}>
            {children}
        </ContainerCSS>
    );
}