import { LayoutCSS } from "./styles";


function Layout({css, children, gridArea}) {
    return (
        <LayoutCSS css={{...css, gridArea: gridArea }}> {children} </LayoutCSS>
    );
}

export default Layout;