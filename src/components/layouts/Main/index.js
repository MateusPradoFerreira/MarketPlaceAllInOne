import { MainCSS } from "./styles";


function Main({css, children}) {
    return (
        <MainCSS css={css}> {children} </MainCSS>
    );
}

export default Main;