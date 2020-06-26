import React from 'react';
import FormInput from '../components/form-input';
import CustomButton from '../components/custom-button.component';

const LoginPage = () => {
  return (
    <div className="container mx-auto h-screen">
      <form className="w-1/2 mx-auto rounded border border-gray-400 shadow-lg my-20">
        <div>
          <h1 className=" text-2xl font-bold">Admin Sign in</h1>
          <div>
            <span className="text-gray-600 text-sm">Dont have an account?</span>
            <span className="text-gray-700 text-sm font-semibold">Sign up</span>
          </div>
        </div>
        <FormInput
          for="email"
          id="email"
          placeholder="email@gmail.com"
          label="email"
        />
        <FormInput
          for="pwd"
          id="pwd"
          placeholder="............"
          label="password"
        />
        <CustomButton />
      </form>
    </div>
  );
};

export default LoginPage;
