import { useContext } from 'react';
import { GLOBAL_CONTEXT } from '../contexts/GlobalStore';

export const DefaultProducts = () => {
    const { context, setContext } = useContext(GLOBAL_CONTEXT);
    const defaultProducts = context.defaultProducts;

    const handleProductSelect = (product) => {
        const selectedProduct = {
            name: product,
            quantity: 1
        };

        setContext({
            selectedProducts: [...context.selectedProducts, selectedProduct]
        });

        localStorage.setItem('selectedProducts', JSON.stringify(context.selectedProducts));
    };

    return (
        <ul>
            {defaultProducts &&
                defaultProducts.map((product, index) => {
                    return (
                        <li key={index}>
                            <button style={{ margin: '10px', padding: '5px' }} onClick={() => handleProductSelect(product)}>
                                {product}
                            </button>
                        </li>
                    );
                })}
        </ul>
    );
};
