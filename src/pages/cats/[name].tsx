import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

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
      <div>
        <div className="mx-auto mb-8 relative aspect-video w-full">
          <Image
            src="/assets/cat.webp"
            alt="cat"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <p className="text-center">정보가 없습니다.</p>
        </div>
      </div>
    );
  }

  const { name, image, description, life_span, origin, weight, wikipedia_url } =
    cat;

  return (
    <div>
      <div className="mx-auto mb-8 relative aspect-video w-full">
        <Image
          src={image.url || '/assets/cat.webp'}
          alt={name}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <p>Name: {name}</p>
        <p>Origin: {origin}</p>
        <p>Life span: {life_span}</p>
        <p>Weight: {weight?.metric}</p>
        <p>Description: {description}</p>
        <p>
          Wikipedia:{' '}
          <Link href={wikipedia_url} className="text-blue-500">
            Look up with Wikipedia
          </Link>
        </p>
      </div>
    </div>
  );
}
