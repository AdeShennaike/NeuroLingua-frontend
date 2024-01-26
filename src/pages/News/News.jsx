import { useEffect, useState } from 'react'

import { getNews } from '../../services/newsService'
import NewsList from './NewsList'
import Article from './Article'

import './News.css'

const News = () => {

  const [news, setNews] = useState(null)
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews()
      console.log("got the news")
      setNews(news)
    };
    fetchNews();
  }, []);

 if(!news) { return <h2>Loading the news...</h2>}

  const handleSelect = (article) => {
    const displayArticle = () => {
      console.log(article)
      setSelectedArticle(article)
    }
    displayArticle()
  }
  
  return (
    <div>
      <div>News</div>
      {selectedArticle
      ? <Article content={selectedArticle} />
      : <NewsList news={news} handleSelect={handleSelect}/>}
    </div>
  )
}

export default News