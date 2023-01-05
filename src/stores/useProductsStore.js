import create from "zustand";

const useProductsStore = create(
    (set) => ({
        search: '',
        setSearch: (search) => {
            set(() => ({
                search: search,
            }))
        },
        category: '',
        setCategory: (category) => {
            set(() => ({
                category: category,
            }))
        },
    })
)

export default useProductsStore;