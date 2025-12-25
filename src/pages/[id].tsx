import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import { config } from "../config/config";
import { writeFile } from "fs/promises";

interface PostProps {
  title: string;
  body: string;
}

const Post: NextPage<PostProps> = ({
  title,
  body,
}) => <div className="prose lg:prose-xl p-6">
  <h2>{ title }</h2>
  <div dangerouslySetInnerHTML={{__html: body}} />
</div>

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<PostProps>> {
  const { id } = context.params!;
  const post = await (await fetch(`${config.apiUrl}/?slug=${id}`, {
    headers: {
      Authorization: `Bearer ${config.key}`,
    }
  })).json();
  const props = {
      title: post.title,
      body: post.body,
      pictures: post.pictures,
    };
  await writeFile(`data/posts/${id}.json`, JSON.stringify(props, null, 2), 'utf-8');
  return {
    props,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await (await fetch(config.apiUrl, {
    headers: {
      Authorization: `Bearer ${config.key}`,
    }
  })).json();
  const paths = posts.documents.map((post: any) => ({ params: { id: post.slug || post.id } }));
  await writeFile(`data/paths.json`, JSON.stringify(paths, null, 2), 'utf-8');
  return {
    paths,
    fallback: false,
  };
}

export default Post;