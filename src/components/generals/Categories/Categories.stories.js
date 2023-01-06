import { Categories } from "./index";
import { CategoriesTitle } from "./CategoriestTitle";
import CategoriesItem from "./CategoriesItem";

export default {
    title: 'Components/Generals/Categories/Categories',
    component: Categories,
    decorators: [
        (Story) => {
            return (
                <div style={{ backgroundColor: '#fafafa', width: 300, padding: '20px 25px', paddingBottom: 15, borderRadius: 10 }}>
                    {Story()}
                </div>
            )
        }
    ],
}

export const Default = () => <Categories>
    <CategoriesTitle>
        Categories
    </CategoriesTitle>

    <CategoriesItem category='All' total={123} focus action={() => {}} />
    <CategoriesItem category='Smartphones' total={23} action={() => {}} />
    <CategoriesItem category='Laptops' total={50} action={() => {}} />
    <CategoriesItem category='Fragrances' total={50} action={() => {}} />
</Categories>