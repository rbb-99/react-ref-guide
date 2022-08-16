// domain.com/news

import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>News</h1>
      <ul>
        <Link href="/news/grt">
          <li>Nextjs is a great framework</li>
        </Link>
        <li>Something else </li>
      </ul>
    </>
  );
};

export default News;
