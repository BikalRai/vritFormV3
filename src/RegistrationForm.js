import React, { useEffect, useState } from 'react';

const RegistrationForm = ({ setIsRegistered, setUserDetail, userDetail }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [emptyError, setEmptyError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { username, password, confirmPassword } = userInfo;

    //user handle
    const handleUser = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, username: value });
        console.log(username);
    };
    //user password
    const handlePassword = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, password: value });
        console.log(password);
    };
    //user confirm password
    const handleconfirmPassword = ({ target: { value } }) => {
        setUserInfo({ ...userInfo, confirmPassword: value });
        console.log(confirmPassword);
    };

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            if (password === confirmPassword) {
                alert(`Congratulations on registering ${username}`);
                setEmptyError(false);
                setPasswordError(false);
                setIsRegistered(true);

                setUserDetail({ ...userInfo });
            } else {
                setPasswordError(true);
            }
        } else {
            setEmptyError(true);
        }
    };

    useEffect(() => {
        console.log('wow');
    }, []);

    console.log(userInfo);
    console.log(userDetail, 'inreg');

    return (
        <>
            <form>
                <div className="input-field">
                    <label>Username: </label>
                    <input type="text" value={username} onChange={handleUser} />
                    {emptyError && username === '' && (
                        <p>* Field must not be empty</p>
                    )}
                </div>
                <div className="input-field">
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    {emptyError && password === '' && (
                        <p>* Field must not be empty</p>
                    )}
                </div>
                <div className="input-field">
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleconfirmPassword}
                    />
                    {emptyError && confirmPassword === '' && (
                        <p>* Field must not be empty</p>
                    )}
                    {passwordError && password !== confirmPassword && (
                        <p>* The passwords do not match</p>
                    )}
                </div>
                <button onClick={handleSubmit}>Register</button>
            </form>
        </>
    );
};

export default RegistrationForm;
