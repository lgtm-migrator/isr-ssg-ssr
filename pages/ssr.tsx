import type { NextPage } from "next";
import { GetServerSideProps } from "next";

type Props = {
  date: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async () => {
  const date = Date();
  return { props: { date } };
};

const SSR: NextPage<Props> = ({ date }) => {
  console.log(date);
  return <div>{date}</div>;
};
export default SSR;
