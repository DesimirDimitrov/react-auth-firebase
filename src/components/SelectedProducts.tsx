import { useContext } from 'react';
import { GLOBAL_CONTEXT, Product } from '../contexts/GlobalStore';

export const SelectedProducts = () => {
    const { context, setContext } = useContext(GLOBAL_CONTEXT);
    const selectedProducts = getSelectedProducts();
    function getSelectedProducts() {
        if (!localStorage.getItem('selectedProducts')) {
            return [];
        }

        const products = localStorage.getItem('selectedProducts');
        return products ? JSON.parse(products) : ([] as Product[]);
    }

    const handleEmptyBasket = () => {
        setContext({
            selectedProducts: []
        });

        localStorage.setItem('selectedProducts', JSON.stringify([]));
    };

    return (
        <div>
            {selectedProducts &&
                selectedProducts.map((product, index) => {
                    return (
                        <div key={index}>
                            <h3>
                                {product.name} ({product.quantity})
                            </h3>
                        </div>
                    );
                })}
            <button style={{ margin: '10px', padding: '5px' }} onClick={handleEmptyBasket}>
                Изпразни кошницата
            </button>
        </div>
    );
};
