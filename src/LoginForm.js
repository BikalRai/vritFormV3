import React, { useState } from 'react';

const LoginForm = ({
    userDetail: { username: detailUsername, password: detailPassword },
    setIsLoggedIn,
}) => {
    console.log(detailUsername, 'user');
    console.log(detailPassword, 'pass');
    console.log(setIsLoggedIn, 'func');
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(false);

    // const { username, password } = user;

    const userHandle = ({ target: { value } }) => {
        setUser({ ...user, username: value });
    };

    const passwordHandle = ({ target: { value } }) => {
        setUser({ ...user, password: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (
            user.username === detailUsername &&
            user.password === detailPassword
        ) {
            setIsLoggedIn(true);
            alert(`Welcome ${user.username}`);
        } else {
            setError(true);
            setIsLoggedIn(false);
        }
    };
    return (
        <>
            <form>
                <div className="input-field">
                    <label>Username: </label>
                    <input
                        type="text"
                        value={user.username}
                        onChange={userHandle}
                    />
                    {error && user.username !== detailUsername && (
                        <p>* No such user</p>
                    )}
                </div>
                <div className="input-field">
                    <label>Password: </label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={passwordHandle}
                    />
                </div>
                <button type="button" onClick={() => handleLogin}>
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
