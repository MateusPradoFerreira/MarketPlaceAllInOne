import { DiscountCSS } from "./styles";
import SVGDiscount from "../../../../resources/svg/Discount.svg"

function Discount({ discount }) {
    return (
        <div className={DiscountCSS()}>
            <img src={SVGDiscount} alt={'perc'} />
            <p> {discount}% </p>
        </div>
    );
}

export default Discount;