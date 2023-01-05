import { Container } from "../../../../components/containers/Container";
import { Link } from "react-router-dom";
import Card from "../../../../components/generals/Card";
import useProductsStore from "../../../../stores/useProductsStore";
import useProductsQuery from "../../../../hooks/useProductsQuery";

function MarketItemsList() {
    const search = useProductsStore(state => state.search);
    const category = useProductsStore(state => state.category);

    const ategoryPath = (category === '' || search !== '' ? `/products/search?q=${search}` : `/products/category/${category.toLowerCase()}`)
    const { data, isLoading } = useProductsQuery(ategoryPath);

    if (isLoading) {
        return (
            <Container>
                loading...
            </Container>
        )
    }

    return (
        <Container css={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 50 }}>
            {data?.products.map((product) => (
                <Link key={product.id} to={`/marketplace/${product.id}`} style={{ textDecoration: 'none' }} >
                    <Card image={product.thumbnail} name={product.title} tag={product.brand} price={product.price} discount={Math.round(product.discountPercentage)} />
                </Link>
            ))}

            {data.products.length === 0 ? <p>no results</p> : ''}
        </Container>
    );
}

export default MarketItemsList;