import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../../../contexts/AuthContext";

const Register = () => {
  const { handleManualRegister } = useContext(AuthContextProvider);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const pass = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    const email = e.target.email.value;

    handleManualRegister(email, pass)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(email);
  };
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            onSubmit={handleRegister}
            class="bg-white px-6 py-8 rounded shadow-md text-black w-full"
          >
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 rounded bg-green text-white bg-green-500 hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <Link to="/login">
              <a class="no-underline border-b border-blue text-blue">Log in</a>
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
