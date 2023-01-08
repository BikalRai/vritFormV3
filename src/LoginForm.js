import {
    Alert,
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';

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
        setUser((prev) => {
            return { ...prev, username: value };
        });
    };

    const passwordHandle = ({ target: { value } }) => {
        setUser((prev) => {
            return { ...prev, password: value };
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (user.username === 'Sam' && user.password === '1234') {
            setIsLoggedIn(true);
            alert(`Welcome ${user.username}`);
        } else {
            setError(true);
            setIsLoggedIn(false);
        }
    };

    console.log(user);

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
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
            >
                <div className="input-field">
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        variant="standard"
                        defaultValue="Username"
                        onChange={userHandle}
                        value={user.username}
                    />
                    {error && user.username === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )}
                </div>
                <div className="input-field">
                    <FormControl
                        sx={{ m: 1, width: '25ch' }}
                        variant="standard"
                    >
                        <InputLabel htmlFor="standard-adornment-password">
                            Password
                        </InputLabel>
                        <Input
                            value={user.password}
                            onChange={passwordHandle}
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
                    {error && user.password === '' && (
                        <Alert variant="outlined" severity="error">
                            Do not leave field empty
                        </Alert>
                    )}
                </div>
                {/* <div className="input-field">
                    <label>Username: </label>
                    <input
                        type="text"
                        value={user.username}
                        onChange={userHandle}
                    />
                    {error && user.username !== detailUsername && (
                        <p>* No such user</p>
                    )}
                </div> */}
                {/* <div className="input-field">
                    <label>Password: </label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={passwordHandle}
                    />
                </div>
                <button type="button" onClick={() => handleLogin}>
                    Login
                </button> */}
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Box>
        </>
    );
};

export default LoginForm;
