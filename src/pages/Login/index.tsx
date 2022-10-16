import React from 'react';

import { FormContainer, HeaderForm } from '../../components/Form';
import { FormLogin } from './FormLogin';
import { LoginContainer } from './styles';

export function Login() {
  return (
    <LoginContainer>
      <FormContainer>
        <HeaderForm />
        <FormLogin />
      </FormContainer>
    </LoginContainer>
  );
}
