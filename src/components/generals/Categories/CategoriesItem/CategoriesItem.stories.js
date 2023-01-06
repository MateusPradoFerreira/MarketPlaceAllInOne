import CategoriesItem from "./index";

export default {
    title: 'Components/Generals/Categories/CategoriesItem',
    component: CategoriesItem,
    decorators: [
        (Story) => {
            return (
                <div style={{backgroundColor: '#fafafa', width: 300, padding: '10px 25px', paddingBottom: 15, borderRadius: 10}}>
                    {Story()}
                </div>
            )
        }
    ],
}

export const Default = {
    args: {
        category: 'all', 
        total: 234, 
        focus: false, 
        action: () => { console.log('click') },
    }
}