import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, InputField } from '../../../components/Form';
import { Text } from '../../../components/Text';

export function FormLogin() {
  const { register, handleSubmit } = useForm();

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <InputField
        textLabel="Email"
        type="email"
        placeholder="example@example.com"
        name="email"
      />
      <InputField
        textLabel="Password"
        type="password"
        placeholder="0987654321j@!"
        name="password"
      />
    </Form>
  );
}
