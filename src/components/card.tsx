import Link from "next/link";

interface CardProps {
  title: string;
  date: string;
  teaser: string;
  imageUrl: string;
  postUrl: string;
  landscape?: boolean
}

export const Card: React.FC<CardProps> = ({
  title,
  date,
  teaser,
  imageUrl,
  postUrl,
  landscape = false,
}) => {
  const containerColSpan = landscape ? 'md:col-span-2' : 'md:col-span-1';
  return <Link href={postUrl}><a className={`block border-gray-400 border-2 border-opacity-25 rounded-md shadow-lg p-8 ${containerColSpan}`} >
    <div className={landscape ? 'md:hidden' : ''} >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <h3 className="text-lg text-gray-400 mb-4">{date}</h3>
      <img className="block m-h-image mb-8 ml-auto mr-auto" src={imageUrl} alt={title} />
      <p>{teaser}</p>
    </div>
    <div className={landscape ? 'hidden md:flex' : 'hidden'} >
      <img className="block mb-4 ml-auto mr-auto" src={imageUrl} alt={title} />
      <div className="flex-grow pl-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <h3 className="text-lg text-gray-400 mb-4">{date}</h3>
        <p>{teaser}</p>
      </div>
    </div>
  </a>
  </Link>;
}