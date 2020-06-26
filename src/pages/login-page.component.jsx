import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/form-input';
import CustomButton from '../components/custom-button.component';

const LoginPage = () => {
  return (
    <div className="container mx-auto h-screen">
      <form className="w-1/2 mx-auto rounded border border-gray-400 shadow-lg my-20 px-8">
        <div>
          <h1 className=" text-2xl text-center text-gray-700 font-bold mb-2">
            Admin Log in
          </h1>
        </div>
        <FormInput
          type="email"
          forName="email"
          id="email"
          placeholder="email@gmail.com"
          label="email"
        />
        <FormInput
          type="password"
          forName="pwd"
          id="pwd"
          placeholder="............"
          label="password"
        />
        <Link
          className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
          to="/forgot"
        >
          Forgot Password?
        </Link>
        <CustomButton />
      </form>
    </div>
  );
};

export default LoginPage;
