import {} from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => (
    <div className= 'h-screen bg-cover bg-no-repeat bg-center bg-fixed'
    style={{backgroundImage: `url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    <div className="max-w-lg m-auto pt-44 font-myfont">
        <div
            className="bg-white/ backdrop-blur-xl rounded-lg shadow-xl overflow-hidden"
            
        >
            <div className="p-8">
                <h2 className="text-center text-3xl font-extrabold text-black">
                    Hello User!!!
                </h2>
                <p className="mt-4 text-center text-gray-700">Register yourself to continue</p>
                <form method="POST" action="#" className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="name">Username</label>
                            <input
                                placeholder="Username"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                autoComplete="username"
                                type="text"
                                name="name"
                                id="name" />
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="email">Email Address</label>
                            <input
                                placeholder="Email address"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                autoComplete="email"
                                type="email"
                                name="email"
                                id="email" />
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="password">Confirm Password</label>
                            <input
                                placeholder="Confirm Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                type="password"
                                name="password"
                                id="password" />
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-blue-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            <div className="px-8 py-4 bg-white/ backdrop-blur-xl text-center">
                <span className="text-gray-700">Already have an account? </span>
                <NavLink className="font-medium text-blue-500
                hover:text-blue-600" to="/login"
                >Sign in</NavLink>
            </div>
        </div>
    </div>
    </div>

);

export default SignUp;
