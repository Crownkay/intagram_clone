import Head from "next/head";
import Header from "../components/Header";
import Feed from '../components/Feed'


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="https://links.papareact.com/jjm" />
      </Head>
      <Header />
      <Feed />
    </div>
  );
}
