import React, { useState } from 'react';

export type DefaultProduct = {
    id: number;
    name: string;
};

export type Product = {
    id: number;
    name: string;
    quantity: number;
};

export interface IStore {
    selectedProducts: Product[];
    defaultProducts?: DefaultProduct[];
}

interface IContext {
    context: IStore;
    setContext: (context: IStore) => void;
}

export const defaultProducts = [
    {
        id: 1,
        name: 'Хляб'
    },
    {
        id: 2,
        name: 'Прясно Мляко'
    },
    {
        id: 3,
        name: 'Яйца'
    },
    {
        id: 4,
        name: 'Кисело Мляко'
    },
    {
        id: 5,
        name: 'Бисквити Милка'
    }
] as DefaultProduct[];

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
