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

    const handleDeleteSelectedProduct = (product: Product) => {
        const newSelectedProducts = selectedProducts.filter((product: Product) => product.id === selectedProducts.id);

        setContext({
            selectedProducts: newSelectedProducts
        });

        localStorage.setItem('selectedProducts', JSON.stringify(newSelectedProducts));
    };

    return (
        <div>
            {selectedProducts &&
                selectedProducts.map((product: Product) => {
                    return (
                        <div key={product.id}>
                            <h3>
                                {product.name} ({product.quantity}){' '}
                                <button
                                    onClick={() => {
                                        handleDeleteSelectedProduct(product);
                                    }}
                                >
                                    Изтрий
                                </button>
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
