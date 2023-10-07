import React, { useState } from 'react';

type Product = {
    name: string;
    quantity: number;
};

export interface IStore {
    selectedProducts: Product[];
    defaultProducts?: string[];
}

interface IContext {
    context: IStore;
    setContext: (context: IStore) => void;
}

export const defaultProducts = ['Бисквити Милка', 'Кока Кола', 'Пепси', 'Слънчо', 'Мляко', 'Яйца', 'Хляб', 'Масло', 'Сирене', 'Кашкавал', 'Кисело мляко'];

export const GLOBAL_CONTEXT = React.createContext({} as IContext);

const GlobalStore = (props: any) => {
    const { children } = props;

    const [context, setContext] = useState<IStore>({
        defaultProducts: defaultProducts,
        selectedProducts: [] as Product[]
    } as IStore);

    const updateStore = (state = {}) => {
        setContext({
            ...context,
            ...state
        });
    };

    return (
        <GLOBAL_CONTEXT.Provider
            value={{
                context,
                setContext: updateStore
            }}
        >
            {children}
        </GLOBAL_CONTEXT.Provider>
    );
};

export default GlobalStore;
