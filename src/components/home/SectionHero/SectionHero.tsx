import Button from '../../global/Form/Button/Button';

import { SectionHeroProps } from './SectionHero.model';

import {
  Container,
  Left,
  Title,
  Description,
  ContainerButton,
  Right,
} from './SectionHero.styles';

export default function SectionHero({
  id,
  invert,
  title,
  description,
  image,
  button1,
  button2,
}: SectionHeroProps) {
  return (
    <Container id={id}>
      {!invert ? (
        <>
          <Left>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {button1 && (
              <ContainerButton>
                <Button type="button">{button1}</Button>
                {button2 && (
                  <Button
                    type="button"
                    secondary
                    style={{ marginLeft: '1rem' }}
                  >
                    {button2}
                  </Button>
                )}
              </ContainerButton>
            )}
          </Left>
          <Right>
            <img src={image} alt="Banner" />
          </Right>
        </>
      ) : (
        <>
          <Right>
            <img src={image} alt="Banner" />
          </Right>
          <Left>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {button1 && (
              <ContainerButton>
                <Button type="button">{button1}</Button>
                {button2 && (
                  <Button
                    type="button"
                    secondary
                    style={{ marginLeft: '1rem' }}
                  >
                    {button2}
                  </Button>
                )}
              </ContainerButton>
            )}
          </Left>
        </>
      )}
    </Container>
  );
}
