import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Register () {
    return (
        <Fragment>
<div className="h-[80vh] flex place-content-center">
                <div class="login-container container">
                    <h2 class="login-title">Create Account</h2>

                    <form class="login-form">
                        <div>
                        <label for="name">Name </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            name="name"
                            required
                        />
                        </div>

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
                            Create Account
                        </button>
                    </form>
                    <div className="pt-5">
                        <Link to='/login' className="text-sm bold blue">Login</Link>
                    </div>
                    </div>
                </div>
        </Fragment>
    );
}

export default Register;