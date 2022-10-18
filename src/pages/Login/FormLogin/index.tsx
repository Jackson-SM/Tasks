import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

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

export function FormLogin() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isLoading, signIn } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <FormContainer>
      <HeaderForm title="Login Form" logo={logo} />
      <Text
        color="tertiary"
        size="md"
        as="span"
        css={{ alignSelf: 'center', padding: '$md', fontFamily: 'Nunito' }}
      >
        Loggin your account
      </Text>
      <Form
        onSubmit={handleSubmit((data) => signIn(data.email, data.password))}
      >
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
        <Box>
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
          <Text
            as="a"
            href="/register"
            hoverColor="primary"
            css={{ width: 'max-content', alignSelf: 'end' }}
          >
            Forgot your password?
          </Text>
        </Box>
        <Button type="submit">
          Continue <ArrowRightIcon />
        </Button>
      </Form>
      <FooterForm>
        <Text size="sm" as="span">
          Not registred?
        </Text>
        <Text as="a" href="/register" hoverColor="primary">
          Sign In
        </Text>
      </FooterForm>
    </FormContainer>
  );
}
