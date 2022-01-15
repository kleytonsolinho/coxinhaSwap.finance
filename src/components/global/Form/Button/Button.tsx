import { ButtonProps } from './Button.model';

import { Container } from './Button.styles';

export default function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>;
}
