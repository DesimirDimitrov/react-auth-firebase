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
                        <span>{product.name}</span>
                        <span>{product.quantity}</span>
                    </div>
                );
            })}
            <button onClick={handleEmptyBasket}>Изпразни кошницата</button>
        </div>
    );
};
