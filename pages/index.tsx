import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="ssg">
          <a>SSG</a>
        </Link>
      </li>
      <li>
        <Link href="ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="isr">
          <a>ISR</a>
        </Link>
      </li>
      <li>
        <Link href="ssr-csr">
          <a>SSR+CSR</a>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
