import { ButtonProps } from './Button.model';

import { Container } from './Button.styles';

export default function Button({ children }: ButtonProps) {
  return <Container>{children}</Container>;
}
