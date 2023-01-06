import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/auth";
import { FlexContainer } from "../../../containers/FlexContainer";
import { Button } from "../../../generals/Button";
import { UserName } from "./UserName";
import SVGlogout from "../../../../resources/svg/logout.svg"
import SVGShoppingCart from "../../../../resources/svg/ShoppingCart.svg"

function Authenticated() {
    const { authenticated, user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login')
    }

    if (!authenticated) {
        return (
            <FlexContainer>
                <Button style={'icon'} onClick={() => navigate('/cart')} color={'none'} >
                    <img src={SVGShoppingCart} alt='icon' />
                </Button>
                <Button css={{ marginLeft: 35 }} onClick={() => navigate('/login')} >login</Button>
            </FlexContainer>
        )
    };

    return (
        <FlexContainer>
            <Button style={'icon'} onClick={() => navigate('/cart')} color={'none'} >
                <img src={SVGShoppingCart} alt='icon' />
            </Button>

            <Button css={{ marginLeft: 35 }} style={'icon'} onClick={onLogout} color={'none'} >
                <img src={SVGlogout} alt='icon' />
            </Button>

            <UserName css={{ marginLeft: 25 }}> {user.firstName} {user.lastName.substr(0, 1)}. </UserName>

            <Button css={{ width: 50, height: 50, borderRadius: 100, marginLeft: 15 }} style={'icon'} color={'darkGrey'} onClick={() => navigate('/profile')}>
                <img src={user.image} alt='icon' />
            </Button>
        </FlexContainer>
    );
}

export default Authenticated;