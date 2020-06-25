import React from 'react';
import FormInput from '../components/form-input';
import CustomButton from '../components/custom-button.component';

const LoginPage = () => {
  return (
    <form>
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
  );
};

export default LoginPage;
