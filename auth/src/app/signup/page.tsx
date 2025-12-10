"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
//import { axios } from "axios";

export default function SignUp() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input
                className="p-4 border border-gray-300"
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username">
            </input>

            <label htmlFor="email">email</label>
            <input
                className="p-4 border border-gray-300"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email">
            </input>

            <label htmlFor="password">password</label>
            <input
                className="p-4 border border-gray-300"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password">
            </input>
            <br />

            <button
                onClick={onSignup}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none">
                Signup
            </button>
            <Link href="/login">Already a member? Log In</Link>
        </div>

    );
}