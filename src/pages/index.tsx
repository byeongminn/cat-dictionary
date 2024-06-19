import { Card } from '@/components';
import axios from 'axios';
import Link from 'next/link';

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
    <>
      <div className="grid gap-6 justify-center grid-cols-card-1 md:grid-cols-card-2 lg:grid-cols-card-3">
        {cats.map(({ id, image, name }) => (
          <Link href={`/cats/${name}`} key={id}>
            <Card imgUrl={image?.url || '/assets/cat.webp'} name={name} />
          </Link>
        ))}
      </div>
    </>
  );
}
