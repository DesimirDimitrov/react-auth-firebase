import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { DefaultProducts } from '../components/DefaultProducts';
import GlobalStore from '../contexts/GlobalStore';
import { SelectedProducts } from '../components/SelectedProducts';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props: IHomePageProps) => {
    const auth = getAuth();

    return (
        <div>
            <GlobalStore>
                <p>Home Page (Protected by Firebase!)</p>
                <DefaultProducts />
                <SelectedProducts />
                <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
            </GlobalStore>
        </div>
    );
};

export default HomePage;
