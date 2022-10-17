import React from 'react';
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { Text } from '../Text';
import {
  FormContainer,
  Input,
  Label,
  StyledHeaderForm,
  StyledInputField,
  StyledForm,
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

type FormProps = React.ComponentProps<typeof StyledForm>;

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
      <StyledForm {...props}>{children}</StyledForm>
    </FormContainer>
  );
}
