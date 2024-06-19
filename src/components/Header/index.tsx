import { useRouter } from 'next/router';
import styled from 'styled-components';

export const Header = () => {
  const { query } = useRouter();

  return (
    <Container>
      <Title>{query.name || 'CATS'}</Title>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1rem;
  padding-block: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;
