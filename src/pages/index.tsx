import type { GetStaticPropsResult, NextPage, NextPageContext } from 'next';
import { Card } from '../components/card';
import { config } from '../config/config';

interface Card {
  title: string;
  body?: string;
  url: string;
  image: string;
  teaser: string;
  date: string;
}

interface Document {
  id: string;
  title: string;
  updatedBy: string;
  teaser: string;
  image: string;
  date: number;
}

interface HomeProps {
  posts: Card[];
}

const Home: NextPage<HomeProps> = ({
  posts,
}) => {
  return (
    <div className="m-16 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-16">
      {posts.map((post, index) =>
        <Card key={`card-${index}`} title={post.title} teaser={post.teaser} date={post.date} postUrl={post.url} imageUrl={post.image} landscape={index === 0} />)}
    </div>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  const apiResult = await (await fetch(config.apiUrl, {
    headers: {
      Authorization: `Bearer ${config.key}`,
    }
  })).json();
  return {
    props: {
      posts: apiResult.documents.map((document: Document) => ({
        title: document.title,
        url: `/${document.id}`,
        teaser: document.teaser,
        image: document.image,
        date: (new Date(document.date)).toLocaleDateString(),
      })),
    },
  }
}

export default Home;
