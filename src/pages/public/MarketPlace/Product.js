import { useParams } from "react-router-dom";
import Main from "../../../components/layouts/Main";
import useProductsQuery from "../../../hooks/useProductsQuery";

function Product() {
    const params = useParams();
    const ID = params['*'];
    const { data: product, isLoading } = useProductsQuery(`/products/${ID}`);

    if (isLoading) {
        return (
            <Main>
                loading...
            </Main>
        )
    }

    return (
        <Main>
            {product.title}
        </Main>
    );
}

export default Product;