import type { NextPage } from "next";
import { GetStaticProps } from "next";

type Props = {
  date: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const date = Date();
  return { props: { date }, revalidate: 10 };
};

const SSG: NextPage<Props> = ({ date }) => {
  console.log(date);
  return <div>{date}</div>;
};
export default SSG;
