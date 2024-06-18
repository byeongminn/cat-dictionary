import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface Cat {
  name: string;
  image: {
    url: string;
  };
  description: string;
  life_span: string;
  origin: string;
  weight: {
    metric: string;
  };
  wikipedia_url: string;
}

interface Props {
  cat: Cat;
}

export async function getStaticPaths() {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_ENDPOINT}/breeds`,
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  });

  const paths = data.map(({ name }: Cat) => ({
    params: { name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const { name } = params;

  const { data } = await axios({
    method: 'get',
    url: `${process.env.API_ENDPOINT}/breeds/search`,
    params: {
      q: name,
    },
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  });

  return {
    props: {
      cat: data[0] || null,
    },
  };
}

export default function Cat({ cat }: Props) {
  if (!cat) {
    return (
      <Container>
        <ImageWrapper>
          <Image
            src="/assets/cat.webp"
            alt="cat"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Empty>정보가 없습니다.</Empty>
        </ContentWrapper>
      </Container>
    );
  }

  const { name, image, description, life_span, origin, weight, wikipedia_url } =
    cat;

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={image.url || '/assets/cat.webp'}
          alt={name}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </ImageWrapper>
      <ContentWrapper>
        <p>Name: {name}</p>
        <p>Origin: {origin}</p>
        <p>Life span: {life_span}</p>
        <p>Weight: {weight?.metric}</p>
        <p>Description: {description}</p>
        <p>
          Wikipedia: <Link href={wikipedia_url}>Look up with Wikipedia</Link>
        </p>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div``;

const ImageWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;
  aspect-ratio: 4/3;
  width: 31.25rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Empty = styled.p`
  text-align: center;
`;
