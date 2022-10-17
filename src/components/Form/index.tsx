import React from 'react';
import { useForm } from 'react-hook-form';

import logo from '../../assets/images/vite.svg';
import { Button } from '../Button';
import { Text } from '../Text';
import {
  FormContainer,
  Input,
  Label,
  StyledHeaderForm,
  StyledInputField,
  StyledForm,
  StyledFooterForm,
} from './styles';

type InputFieldProps = React.ComponentProps<typeof Input> &
  InputFieldPropsCustom;
type InputFieldPropsCustom = {
  textLabel?: string;
  name: string;
};

type HeaderFormProps = React.ComponentProps<typeof StyledHeaderForm> &
  HeaderFormCustom;
type HeaderFormCustom = {
  title?: string;
  logo?: string;
};

type FooterFormProps = React.ComponentProps<typeof StyledFooterForm>;

type FormProps = React.ComponentProps<typeof StyledForm>;

export function FooterForm({ children, ...props }: FooterFormProps) {
  return <StyledFooterForm {...props}>{children}</StyledFooterForm>;
}

export function HeaderForm({ title, logo, ...props }: HeaderFormProps) {
  return (
    <StyledHeaderForm {...props}>
      {logo && <img src={logo} alt={title} />}
      {title && <Text>{title}</Text>}
    </StyledHeaderForm>
  );
}

export function InputField({ textLabel, name, ...props }: InputFieldProps) {
  const { register } = useForm();

  return (
    <StyledInputField>
      {textLabel && <Label htmlFor={name}>{textLabel}</Label>}
      <Input {...props} {...register(name)} />
    </StyledInputField>
  );
}

export function Form({ children, ...props }: FormProps) {
  return (
    <FormContainer>
      <HeaderForm title="Login Form" logo={logo} />
      <StyledForm {...props}>
        {children}
        <Button>Continue </Button>
      </StyledForm>
      <FooterForm>
        <Text size="sm">Not registred?</Text>
      </FooterForm>
    </FormContainer>
  );
}
