import Main from "../../../components/layouts/Main";
import Layout from "../../../components/layouts/Layout";
import MarketItemsList from "./MarketContent/MarketItemsList";
import MarketCaregories from "./MarketContent/MarketCategories";
import useProductsStore from "../../../stores/useProductsStore";
import SearchBar from "../../../components/generals/SearchBar";
import { Button } from "../../../components/generals/Button";
import { MarketTitle } from "./MarketContent/MarketTitle";

function MarketPlace() {
    const setSearch = useProductsStore(state => state.setSearch);
    const setCategory = useProductsStore(state => state.setCategory);
    const category = useProductsStore(state => state.category);

    return (
        <Main css={{ display: 'grid', gridTemplateAreas: 'contentFilter contentMain', gridTemplateColumns: '250px 1fr', gap: 100 }}>
            <Layout css={{ gridArea: 'contentFilter' }}>
                <SearchBar onChange={(e) => setSearch(e.target.value)} placeholder={'search'} css={{ marginBottom: 30 }} />
                <MarketCaregories />
                <Button onClick={() => setCategory('')} color={'cyan'} css={{ marginTop: 30, width: '100%' }}> RESET FILTER </Button>
            </Layout>
            <Layout css={{ gridArea: 'contentMain' }}>
                <MarketTitle>{category === '' ? 'All' : category.replace('-', ' ') }</MarketTitle>
                <MarketItemsList />
            </Layout>
        </Main>
    );
}

export default MarketPlace;