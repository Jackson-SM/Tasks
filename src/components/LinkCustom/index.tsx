import React from 'react';

import { LinkCustomComponent } from './styles';

type LinkCustomProps = React.ComponentProps<typeof LinkCustomComponent>;

export function LinkCustom({ children, ...props }: LinkCustomProps) {
  return <LinkCustomComponent {...props}>{children}</LinkCustomComponent>;
}
