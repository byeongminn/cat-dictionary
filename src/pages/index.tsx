import { Card } from '@/components';
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';

interface Cat {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

interface Props {
  cats: Array<Cat>;
}

export async function getStaticProps() {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_ENDPOINT}/breeds`,
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  });

  return {
    props: {
      cats: data,
    },
  };
}

export default function Home({ cats }: Props) {
  return (
    <Container>
      <CatList>
        {cats.map(({ id, image, name }) => (
          <Cat key={id}>
            <Link href={`/cats/${name}`}>
              <Card imgUrl={image?.url || '/assets/cat.webp'} name={name} />
            </Link>
          </Cat>
        ))}
      </CatList>
    </Container>
  );
}

const Container = styled.div``;

const CatList = styled.ul`
  display: grid;
  grid-gap: 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(3, 18.75rem);

  @media ${({ theme }) => theme.laptop} {
    grid-template-columns: repeat(2, 18.75rem);
  }

  @media ${({ theme }) => theme.tablet} {
    grid-template-columns: 18.75rem;
  }
`;

const Cat = styled.li``;
