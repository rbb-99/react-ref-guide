// domain.com/news/newsId

import { useRouter } from "next/router";

const NewsDetails = () => {
  const router = useRouter();
  // console.log(router.query.newsId);

  // send a request to backend API to fetch news item with newsId

  return <h1>NewsDetails</h1>;
};

export default NewsDetails;
