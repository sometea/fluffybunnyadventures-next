import type { GetStaticPropsResult, NextPage, NextPageContext } from 'next';
import { Card } from '../components/card';
// import { config } from '../config/config';
// import { writeFile } from 'fs/promises';
import { loadJson } from '../utils/loadJson';

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
  slug: string;
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
  const homePropsRaw = await loadJson<HomeProps>('data/home.json');
  return {
    props: homePropsRaw,
  }
}

// export async function getStaticPropsFromOldServer(): Promise<GetStaticPropsResult<HomeProps>> {
//   const apiResult = await (await fetch(config.apiUrl, {
//     headers: {
//       Authorization: `Bearer ${config.key}`,
//     }
//   })).json();
//   const homeProps = {
//       posts: apiResult.documents
//       .sort((d1: Document, d2: Document) => d2.date - d1.date)
//       .map((document: Document) => ({
//         title: document.title,
//         url: `/${document.slug}`,
//         teaser: document.teaser,
//         image: document.image,
//         date: (new Date(document.date)).toLocaleDateString(),
//       })),
//     };
//   const cleanedHomeProps = { posts: await Promise.all(homeProps.posts.map(downloadImageAndUpdateURL)) };
//   await writeFile(`data/home.json`, JSON.stringify(cleanedHomeProps, null, 2), 'utf-8');
//   return {
//     props: cleanedHomeProps,
//   }
// }

// async function downloadImageAndUpdateURL(card: Card): Promise<Card> {
//   const imageResponse = await fetch(card.image);
//   const imageBuffer = await imageResponse.arrayBuffer();
//   const imageName = card.url.split('/').pop()! + '.jpg';
//   await writeFile(`public/images/home/${imageName}`, Buffer.from(imageBuffer));
//   card.image = `/images/home/${imageName}`;
//   return card;
// }

export default Home;
