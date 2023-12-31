import { useContext } from 'react';
import { DefaultProduct, GLOBAL_CONTEXT, Product } from '../contexts/GlobalStore';

export const DefaultProducts = () => {
    const { context, setContext } = useContext(GLOBAL_CONTEXT);
    const defaultProducts = context.defaultProducts;

    const handleProductSelect = (product: DefaultProduct) => {
        const productAlreadySelected = productExists(product);

        if (productAlreadySelected) {
            const selectedProduct = context.selectedProducts.find((selectedProduct) => selectedProduct.id === product.id);
            selectedProduct!.quantity += 1;
            setContext({
                selectedProducts: [...context.selectedProducts]
            });

            localStorage.setItem('selectedProducts', JSON.stringify([...context.selectedProducts]));
        } else {
            const selectedProduct = {
                id: product.id,
                name: product.name,
                quantity: 1
            } as Product;

            setContext({
                selectedProducts: [...context.selectedProducts, selectedProduct]
            });

            localStorage.setItem('selectedProducts', JSON.stringify([...context.selectedProducts, selectedProduct]));
        }
    };

    function productExists(product: DefaultProduct) {
        return context.selectedProducts.some((selectedProduct) => {
            if (selectedProduct.id === product.id) {
                return selectedProduct;
            } else {
                return false;
            }
        });
    }

    return (
        <ul>
            {defaultProducts &&
                defaultProducts.map((product) => {
                    return (
                        <li key={product.id}>
                            <button style={{ margin: '10px', padding: '5px' }} onClick={() => handleProductSelect(product)}>
                                {product.name}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
};
