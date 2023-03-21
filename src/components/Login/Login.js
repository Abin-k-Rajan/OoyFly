import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './login.scss'


function Login() {
    return (
        <Fragment>
            <div className="h-[80vh] flex place-content-center">
                <div class="container">
                    <h2 class="login-title">Log in</h2>

                    <form class="login-form">
                        <div>
                        <label for="email">Email </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="me@example.com"
                            name="email"
                            required
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
        </Fragment>
    );
}

export default Login;