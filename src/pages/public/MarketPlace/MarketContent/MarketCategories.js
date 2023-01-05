import useProductsQuery from "../../../../hooks/useProductsQuery";
import useProductsStore from "../../../../stores/useProductsStore";
import { Categories } from "../../../../components/generals/Categories";
import { CategoriesTitle } from "../../../../components/generals/Categories/CategoriestTitle";
import CategoriesItem from "../../../../components/generals/Categories/CategoriesItem";

function MarketCaregories() {
    const setCategory = useProductsStore(state => state.setCategory);
    const category = useProductsStore(state => state.category);
    const { data: categoriesList, isLoading } = useProductsQuery('products/categories');

    if (isLoading) {
        return (
            <Categories>
                <CategoriesTitle>
                    categories
                </CategoriesTitle>
                <CategoriesItem category={'loading...'} total={''} />
            </Categories>
        )
    }

    return (
        <Categories>
            <CategoriesTitle>
                categories
            </CategoriesTitle>

            <CategoriesItem category={'all'} total={100} action={() => setCategory('')} focus={category === '' ? true : false} />

            {categoriesList.map((act) => (
                <CategoriesItem key={act} category={act} total={5} action={() => setCategory(act)} focus={act === category ? true : false} />
            ))}
        </Categories>
    );
}

export default MarketCaregories;