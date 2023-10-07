import { useContext } from 'react';
import { GLOBAL_CONTEXT } from '../contexts/GlobalStore';

export const DefaultProducts = () => {
    const { context, setContext } = useContext(GLOBAL_CONTEXT);
    const defaultProducts = context.defaultProducts;

    console.log('context', context);

    const handleProductSelect = (product) => {
        const selectedProduct = {
            name: product,
            quantity: 1
        };

        console.log('selectedProduct', selectedProduct);

        setContext({
            selectedProducts: [...context.selectedProducts, selectedProduct]
        });
    };

    return (
        <ul>
            {defaultProducts &&
                defaultProducts.map((product, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => handleProductSelect(product)}>{product}</button>
                        </li>
                    );
                })}
        </ul>
    );
};
