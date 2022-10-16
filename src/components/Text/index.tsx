import React from 'react';

import { StyleText } from './style';

type TextVariantProps = React.ComponentProps<typeof StyleText>;

export function Text({ children, ...props }: TextVariantProps) {
  return <StyleText {...props}>{children}</StyleText>;
}
