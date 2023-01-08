import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
        setUserInfo((prev) => {
            return { ...prev, username: value };
        });
        console.log(username);
    };
    //user password
    const handlePassword = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, password: value };
        });
        console.log(password);
    };
    //user confirm password
    const handleconfirmPassword = ({ target: { value } }) => {
        setUserInfo((prev) => {
            return { ...prev, confirmPassword: value };
        });
        console.log(confirmPassword);
    };

    //handle submit
    const handleSubmit = (e) => {
        // e.preventDefault();
        if (username !== '' && password !== '') {
            if (password === confirmPassword) {
                alert(`Congratulations on registering ${username}`);
                // <Alert action severity="success" color="info">
                //     This is a success alert — check it out!
                // </Alert>;
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

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.3)',
                    padding: '2rem',
                    width: '60%',
                    margin: '5rem auto',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
            >
                <div className="input-field">
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        variant="standard"
                        onChange={handleUser}
                        value={username}
                    />
                    {emptyError && username === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )}
                </div>
                <div className="input-field">
                    {/* <TextField
                        required
                        id="standard-required"
                        label="Password"
                        variant="standard"
                        onChange={handlePassword}
                        value={password}
                    />
                    {emptyError && password === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )} */}
                    <FormControl
                        sx={{ m: 1, width: '25ch' }}
                        variant="standard"
                    >
                        <InputLabel htmlFor="standard-adornment-password">
                            Password
                        </InputLabel>
                        <Input
                            value={password}
                            onChange={handlePassword}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {emptyError && password === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )}
                </div>
                <div className="input-field">
                    {/* <TextField
                        required
                        id="standard-required"
                        label="Confirm Password"
                        variant="standard"
                        onChange={handleconfirmPassword}
                        value={confirmPassword}
                    />
                    {emptyError && confirmPassword === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )}
                    {passwordError && password !== confirmPassword && (
                        <Alert variant="outlined" severity="error">
                            Passwords do not match
                        </Alert>
                    )} */}
                    <FormControl
                        sx={{ m: 1, width: '25ch' }}
                        variant="standard"
                    >
                        <InputLabel htmlFor="standard-adornment-password">
                            Confirm Password
                        </InputLabel>
                        <Input
                            value={confirmPassword}
                            onChange={handleconfirmPassword}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {emptyError && confirmPassword === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )}
                    {passwordError && password !== confirmPassword && (
                        <Alert variant="outlined" severity="error">
                            Passwords do not match
                        </Alert>
                    )}
                </div>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={() => handleSubmit()}
                >
                    Register
                </Button>
            </Box>

            {/* <form>
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
                    {passwordError && password !== confirmPassword && (
                        <p>* The passwords do not match</p>
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
            </form> */}
        </>
    );
};

export default RegistrationForm;
