import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import GlobalStore from '../contexts/GlobalStore';
import { Tabs } from '../components/tab/Tabs';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props: IHomePageProps) => {
    const auth = getAuth();

    return (
        <div>
            <GlobalStore>
                <p>Home Page (Protected by Firebase!)</p>
                <Tabs />
                {/* <DefaultProducts />
                <SelectedProducts /> */}
                <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
            </GlobalStore>
        </div>
    );
};

export default HomePage;
