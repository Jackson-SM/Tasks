import React from 'react';

import { StyledButton } from './styles';

type ButtonProps = React.ComponentProps<typeof StyledButton>;

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
