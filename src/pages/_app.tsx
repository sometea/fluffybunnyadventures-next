import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>fluffy bunny adventures</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="description" content="fluffy bunny adventures" />
    </Head>

    <div className="bg-gray-200 min-w-full flex items-center p-6">
      <img className="block flex-grow-0 mr-4" src="/images/bunny.svg" width="50px" height="50px" alt="bunny" />
      <Link href="/"><a className="block flex-grow-0"><h1 className="text-3xl font-bold">fluffy bunny adventures</h1></a></Link>
      <div className="flex-grow"></div>
      {/* {%- for page in collections.pages -%} */}
      <Link href="/about"><a className="block flex-grow-0">About</a></Link>
      {/* {%- endfor -%} */}
    </div>
    <div className="max-w-screen-xl ml-auto mr-auto">
      <Component {...pageProps} />
    </div>
    <div className="min-w-full bg-gray-200 p-6">(C) 2020-2022 David Dasenbrook. contact: info at beamtime dot net.</div>
  </>
}

export default MyApp
