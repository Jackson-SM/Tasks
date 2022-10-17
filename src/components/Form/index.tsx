import React from 'react';

import { Text } from '../Text';
import {
  StyledInput,
  Label,
  StyledHeaderForm,
  StyledInputField,
  StyledForm,
  StyledFooterForm,
} from './styles';

type InputFieldProps = React.ComponentProps<typeof StyledInput> &
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
      {title && <Text size="lg">{title}</Text>}
    </StyledHeaderForm>
  );
}

export const InputField = React.forwardRef(
  ({ textLabel, name, ...props }: InputFieldProps, ref) => {
    return (
      <StyledInputField>
        {textLabel && <Label htmlFor={name}>{textLabel}</Label>}
        <StyledInput {...props} />
      </StyledInputField>
    );
  },
);

export function Form({ children, ...props }: FormProps) {
  return <StyledForm {...props}>{children}</StyledForm>;
}
