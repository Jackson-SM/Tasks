import React from 'react';

import { LinkCustomComponent } from './styles';

type LinkCustomProps = React.ComponentProps<typeof LinkCustomComponent> &
  LinkCustomPropsModified;
type LinkCustomPropsModified = {
  text: string;
};

export function LinkCustom({ children, text, ...props }: LinkCustomProps) {
  return (
    <LinkCustomComponent {...props}>
      {children}
      <span>{text}</span>
    </LinkCustomComponent>
  );
}
