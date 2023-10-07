import { useContext } from 'react';
import { GLOBAL_CONTEXT } from '../contexts/GlobalStore';

export const SelectedProducts = () => {
    const { context, setContext } = useContext(GLOBAL_CONTEXT);
    const selectedProducts = context.selectedProducts;

    const handleEmptyBasket = () => {
        setContext({
            selectedProducts: []
        });
    };

    return (
        <div>
            {selectedProducts.map((product, index) => {
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
