import { Container } from "../../containers/Container";
import Discount from "./Discount";
import { CardContainerCSS, CardImageCSS, CardNameCSS, CardTagCSS, CardPriceCSS, CardContentCSS } from "./styles";

function Card({ image, name, price, tag, discount }) {
    return (
        <article className={CardContainerCSS()}>
            <Discount discount={discount} />
            <img src={image} alt={name} className={CardImageCSS()} />
            <div className={CardContentCSS()}>
                <Container css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 className={CardNameCSS()}> {name} </h4>
                    <h5 className={CardPriceCSS()}> ${price} </h5>
                </Container>
                <p className={CardTagCSS()}> {tag} </p>
            </div>
        </article>
    );
}

export default Card;