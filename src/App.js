import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function App() {
    const [userDetail, setUserDetail] = useState({
        username: '',
        password: '',
    });

    const [isRegistered, setIsregisterd] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            {isRegistered ? (
                isLoggedIn ? (
                    <Dashboard />
                ) : (
                    <LoginForm
                        userDetail={userDetail}
                        setIsLoggedIn={setIsLoggedIn}
                    />
                )
            ) : (
                <RegistrationForm
                    setIsRegistered={setIsregisterd}
                    setUserDetail={setUserDetail}
                    userDetail={userDetail}
                />
            )}
        </div>
    );
}

export default App;
