import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { NewsBanner } from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import { NewsList } from "../../components/NewsList/NewsList";
import { Skeleton } from "../../components/Skeleton/Skeleton";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 1 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      {!isLoading ? <NewsList news={news} /> : <Skeleton type={"list"} count={10} />}
    </main>
  );
};
