import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Api } from '../../../api/api';
import logo from '../../../assets/images/vite.svg';
import { Button } from '../../../components/Button';
import {
  FooterForm,
  Form,
  HeaderForm,
  InputField,
} from '../../../components/Form';
import { Box, FormContainer } from '../../../components/Form/styles';
import { Text } from '../../../components/Text';
import { useAuth } from '../../../hooks/useAuth';

export function FormRegister() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const { isLoading, signIn } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const signUp = async (name: string, email: string, password: string) => {
    const { data } = await Api.post('/users', { name, email, password });

    return console.log(data);
  };

  return (
    <FormContainer>
      <HeaderForm title="Register Form" logo={logo} />

      <Form
        onSubmit={handleSubmit((data) =>
          signUp(data.name, data.email, data.password),
        )}
      >
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <InputField
              {...field}
              textLabel="Name"
              type="text"
              placeholder="Richard Mccurly"
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <InputField
              {...field}
              textLabel="Email"
              type="email"
              placeholder="example@example.com"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <InputField
              {...field}
              textLabel="Password"
              type="password"
              placeholder="0987654321j@!"
            />
          )}
        />
        <Button type="submit">
          Continue <ArrowRightIcon />
        </Button>
      </Form>
      <FooterForm>
        <Text size="sm" as="span">
          already have an account?
        </Text>
        <Text as="a" href="/login" hoverColor="primary">
          Sign In
        </Text>
      </FooterForm>
    </FormContainer>
  );
}
