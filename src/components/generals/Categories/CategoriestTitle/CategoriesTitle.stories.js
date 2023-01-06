import { CategoriesTitle } from "./index";

export default {
    title: 'Components/Generals/Categories/CategoriesTitle',
    component: CategoriesTitle,
    decorators: [
        (Story) => {
            return (
                <div style={{backgroundColor: '#fafafa', width: 300, padding: 25, borderRadius: 10}}>
                    {Story()}
                </div>
            )
        }
    ],
}

export const Default = {
    args: {
        children: 'categories',
    }
}