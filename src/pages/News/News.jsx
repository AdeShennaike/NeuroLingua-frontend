import { useEffect, useState } from 'react';
import { getNews } from '../../services/newsService';
import TranslationSpan from './TranslationSpan'
import NewsContent from './NewsContent';

const News = () => {

  const [news, setNews] = useState(null)
  const [selectedArticle, setSelectedArticle] = useState(0)

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews()
      console.log("got the news")
      setNews(news)
    };
    fetchNews();
  }, []);

  
  return (
    <>
      <div>News</div>
      <NewsContent />
      {news
      ? news.map((a,index) => {
        console.log(a)
        return <NewsContent key={index} content={a.headline} />
      })
      :<h2>Loading the news...</h2>}
    </>
  )
}

export default News