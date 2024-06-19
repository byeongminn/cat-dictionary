import { useRouter } from 'next/router';

export const Header = () => {
  const { query } = useRouter();

  return (
    <div className="mb-4 py-8">
      <h1 className="font-semibold text-5xl text-center">
        {query.name || 'CATS'}
      </h1>
    </div>
  );
};
