import { useState } from "react";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {
    const [newPasswordVisible, setNewPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const toggleNewPasswordVisible = () => {
        setConfirmPasswordVisible(!newPasswordVisible)
    }

    const toggleConfirmPasswordVisible = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible)

    }
    return (
    <div className= 'h-screen bg-cover bg-no-repeat bg-center bg-fixed'
    style={{backgroundImage: `url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    <div className="max-w-lg m-auto pt-44 font-myfont">
        <div
            className="bg-white/ backdrop-blur-xl rounded-lg shadow-xl overflow-hidden"
            
        >
            <div className="p-8">
                <h2 className="text-center text-3xl font-extrabold text-black ">
                    Reset Your Password
                </h2>
                <p className="mt-4 text-center text-gray-700">Be Creative. Set a password that is easy to remember and hard to guess</p>
                <form method="POST" action="#" className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            {/* <label className="sr-only" htmlFor="password">New Password</label> */}
                            <input
                                placeholder="New Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                type="password"
                                name="new-pass"
                                id="new-pass" />
                        </div>
                        <div className="mt-4">
                            {/* <label className="sr-only" htmlFor="password">Re Enter New Password</label> */}
                            <input
                                placeholder="Confirm Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                type="password"
                                name="new-pass"
                                id="new-pass" />
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-blue-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                        >
                            Set Password
                        </button>
                    </div>
                </form>
            </div>
            <div className="px-8 py-4 bg-white/ backdrop-blur-xl text-center">
                <span className="text-gray-700">Dont have an account? </span>
                <NavLink className="font-medium text-blue-500
                hover:text-blue-600" to="/signup"
                >Sign up</NavLink>
            </div>
        </div>
    </div>
    </div>
    )
};

export default ForgetPassword;
