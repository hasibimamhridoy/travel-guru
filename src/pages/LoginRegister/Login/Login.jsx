import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../../contexts/AuthContext";

const Login = () => {
  const { handleManualLogin } = useContext(AuthContextProvider);

  const location = useLocation()
  console.log(location);
  const fromPath = location.state?.from?.pathname || '/'

  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();

    const pass = e.target.password.value;

    const email = e.target.email.value;

    handleManualLogin(email, pass)
      .then((result) => {
        console.log(result);

        navigate(fromPath)

      })
      .catch((error) => {
        console.log(error);
      });

    console.log(email);
  };
  return (
    <div>
      <div class="w-full h-screen flex my-container gap-5">
        <img
          src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="background"
          class="object-cover rounded-lg object-center h-calc w-7/12"
        />
        <div class="bg-white flex flex-col justify-center h-calc items-center w-5/12 shadow-lg">
          <h1 class="text-3xl font-bold text-orange-500 mb-2">LOGIN</h1>
          <form onSubmit={handleLogin} class="w-1/2 text-center">
            <input
              type="email"
              name="email"
              placeholder="email"
              autocomplete="off"
              class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autocomplete="off"
              class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
            />
            <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">
              Sign In
            </button>

            <div class="text-grey-dark mt-6">
              Dont't have an account?
              <Link to="/register">
                <a class="no-underline border-b border-blue text-blue">
                  Register
                </a>
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
