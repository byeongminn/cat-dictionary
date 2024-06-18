import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  imgUrl: string;
  name: string;
  width?: number;
  height?: number;
}

export const Card = ({ imgUrl, width = 300, height = 200, name }: Props) => {
  return (
    <Container>
      <CardImage
        src={imgUrl}
        alt={name}
        width={width}
        height={height}
        priority
      />
      <Name>{name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const CardImage = styled(Image)`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  object-fit: cover;
`;

const Name = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 2.5rem;
  color: #191919;
`;
