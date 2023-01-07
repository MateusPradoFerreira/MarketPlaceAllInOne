import { HeaderCSS } from "./Styles";
import { Container } from "../../containers/Container";
import { FlexContainer } from "../../containers/FlexContainer";
import Logo from "../../generals/Logo";
import logoImg from "../../../resources/images/log.png";
import NavBar from "../../generals/NavBar";
import Partition from "../../generals/Partition";
import Authenticated from "./authenticated";

function Header() {
    

    const itemsList = [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Market Place', href: '/marketplace' },
        { id: 3, name: 'About', href: '/about' },
    ]

    return (
        <header className={HeaderCSS()}>
            <Container css={{ layout: 1200, height: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <FlexContainer>
                    <Logo src={logoImg} alt="logo" name="AllInOne" vertical />
                    <Partition left={40} right={40} />
                    <NavBar itemsList={itemsList} />
                </FlexContainer>

                <Authenticated />

            </Container>
        </header>
    );
}

export default Header;