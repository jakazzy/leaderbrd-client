import React from 'react';

const LoginPage = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </label>
            </div>
            <button
              type="submit"
              value="Log In"
              className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            >
              {' '}
              Submit
            </button>
          </form>

          <div className="text-center pt-12 pb-12">
            <p>
              Dont have an account?
              <a href="register.html" className="underline font-semibold">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
