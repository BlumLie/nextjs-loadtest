import { GetServerSideProps } from "next";

export default function Home() {
  return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const start = new Date().getTime();
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const endOfFetch = new Date().getTime();

  const data = await res.json();
  const endOfJson = new Date().getTime();

  console.log("Request took " + (endOfFetch - start) + " ms");
  console.log("Json took " + (endOfJson - endOfFetch) + " ms");

  return {
    props: { data },
  };
};
