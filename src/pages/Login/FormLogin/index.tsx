import React from 'react';

import { Form, Input, InputField, Label } from '../../../components/Form';

type FormTypes = React.ComponentProps<typeof Form>;

export function FormLogin(props: FormTypes) {
  return (
    <Form {...props}>
      <InputField>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" placeholder="example@example.com" />
      </InputField>
      <InputField>
        <Label htmlFor="passowrd">Password:</Label>
        <Input type="password" placeholder="example33jj!" />
      </InputField>
    </Form>
  );
}
