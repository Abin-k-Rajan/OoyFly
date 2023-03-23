import axios from "axios";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { api_url } from "../../common";

function Register () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = (event) => {
        const url = `${api_url}/user/create-user`
        axios.post(url,
            {
                email: email,
                username: name,
                password: password
            }).then(res => {
                if (res.status == 200) {
                    alert('User Added, please Login')
                } else {
                    alert('Error adding User')
                }
            })
        event.preventDefault()
    }
    return (
        <Fragment>
            <div className="h-[80vh] flex place-content-center">
                <div class="login-container container">
                    <h2 class="login-title">Create Account</h2>

                    <form class="login-form" onSubmit={createUser}>
                        <div>
                        <label for="name">Name </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            name="name"
                            required
                            onChange={(event) => setName(event.target.value)}
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
                            onChange={(event) => setEmail(event.target.value)}
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
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        </div>

                        <input class="btn btn--form mt-5" type="submit" value="Create Account" />
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