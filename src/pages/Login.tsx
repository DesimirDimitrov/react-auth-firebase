import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignIn = (e: FormEvent) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // navigate to home page
                navigate('/');
            })
            .catch((error) => {
                // Handle errors
                console.log(error);
            });
    };

    const handleSignUp = (e: FormEvent) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                // Handle errors
                console.log(error);
            });
    };
    return (
        <div>
            <form>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={handleSignUp}>Sign Up</button>
            </form>
        </div>
    );
};

export default LoginPage;
