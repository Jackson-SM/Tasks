import React from 'react';

import { LinkGroupContainer } from './styles';

type LinkGroupProps = React.ComponentProps<typeof LinkGroupContainer>;
type LinkGroupPropsCustom = {
  title: string;
};

export default function LinkGroup({
  children,
  title,
  ...props
}: LinkGroupProps) {
  return (
    <LinkGroupContainer {...props}>
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="childrens">{children}</div>
    </LinkGroupContainer>
  );
}
