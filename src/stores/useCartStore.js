import create from "zustand";

const useProductsStore = create(
    (set) => ({
        productsOnCart: [],
        setProductsOnCart: (productsOnCart) => {
            set(() => ({
                productsOnCart: productsOnCart,
            }))
        },
    })
)

export default useProductsStore;