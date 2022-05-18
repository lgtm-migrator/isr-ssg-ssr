import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";

type Props = {
  date: string;
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async () => {
  const date = Date();
  return { props: { date } };
};

const SSRCSR: NextPage<Props> = ({ date }) => {
  const [state, setState] = useState(date);
  console.log(date);
  console.log(state);
  return (
    <>
      <div>{date}</div>
      <div>{state}</div>
      <button onClick={() => setState(Date())}>Update</button>
    </>
  );
};

export default SSRCSR;
