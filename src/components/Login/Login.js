import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import { api_url } from "../../common";
import './login.scss'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAuth, setUser, auth, user } = useAuth();

    const navigate = useNavigate()

    const submitLogin = (event) => {
        const url = `${api_url}/user/login`
        axios.post(url, {
            email: email,
            password: password
        }).then(res => {
            if (res.status == 200) {
                alert('User Logged in')
                const user = res.data[0]
                setUser(user)
                setAuth(true)
                navigate('/profile')
            }
        }).catch(err => {
            alert('UserName or Password not valid')
        })
        event.preventDefault()
    }

    const logout = () => {
        setUser(null)
        setAuth(false)
    }

    return (
        <Fragment>
            {
                auth == true ? 
                <div className="h-[80vh] flex place-content-center">
                        <div class="login-container container">
                            <h2 class="login-title">Hello {user.username}!!</h2>
                                <div className="login-form">
                                <button class="btn btn--form mt-5" onClick={logout} value="Log in">
                                    LogOut
                                </button>
                                </div>
                            </div>
                        </div>
                :
                    <div className="h-[80vh] flex place-content-center">
                        <div class="login-container container">
                            <h2 class="login-title">Log in</h2>

                            <form class="login-form" onSubmit={submitLogin}>
                                <div>
                                <label for="email">Email </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="me@example.com"
                                    name="email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                </div>

                                <div>
                                <label for="password">Password </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>

                                <button class="btn btn--form mt-5" type="submit" value="Log in">
                                    Log in
                                </button>
                            </form>
                            <div className="pt-5">
                                <Link to='/register' className="text-sm bold blue">Create Account</Link>
                            </div>
                            </div>
                        </div>
            }
        </Fragment>
    );
}

export default Login;