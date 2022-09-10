import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Create Next App</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="description" content="fluffy bunny adventures" />
    </Head>

    <div className="bg-gray-200 min-w-full flex items-center p-6">
      <img className="block flex-grow-0 mr-4" src="/images/bunny.svg" width="50px" height="50px" alt="bunny" />
      <a className="block flex-grow-0" href="/"><h1 className="text-3xl font-bold">fluffy bunny adventures</h1></a>
      <div className="flex-grow"></div>
      {/* {%- for page in collections.pages -%} */}
      <a className="block flex-grow-0" href="{{ page.url }}">About</a>
      {/* {%- endfor -%} */}
    </div>

    <Component {...pageProps} />

    <div className="min-w-full bg-gray-200 p-6">(C) 2020 David Dasenbrook. contact: info at beamtime dot net.</div>
  </>
}

export default MyApp
