import Image from 'next/image';

interface Props {
  imgUrl: string;
  name: string;
  width?: number;
  height?: number;
}

export const Card = ({ imgUrl, width = 300, height = 225, name }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg shadow-lg transition-transform hover:-translate-y-2">
        <Image
          style={{ width: '100%', aspectRatio: '4/3' }}
          className="rounded-t-lg object-cover"
          src={imgUrl}
          alt={name}
          width={width}
          height={height}
          priority
        />
        <h1 className="font-semibold text-xl leading-10 text-gray-900">
          {name}
        </h1>
      </div>
    </>
  );
};
