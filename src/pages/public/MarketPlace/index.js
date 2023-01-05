import Main from "../../../components/layouts/Main";
import Layout from "../../../components/layouts/Layout";
import MarketItemsList from "./MarketContent/MarketItemsList";
import MarketCaregories from "./MarketContent/MarketCategories";
import useProductsStore from "../../../stores/useProductsStore";

function MarketPlace() {
    const setSearch = useProductsStore(state => state.setSearch);

    return (
        <Main css={{ display: 'grid', gridTemplateAreas: 'contentFilter contentMain', gridTemplateColumns: '250px 1fr', gap: 100 }}>
            <Layout css={{ gridArea: 'contentFilter' }}>
                <input type={'text'} onChange={(e) => setSearch(e.target.value)} />
                <MarketCaregories />
            </Layout>
            <Layout css={{ gridArea: 'contentMain' }}>
                <MarketItemsList />
            </Layout>
        </Main>
    );
}

export default MarketPlace;