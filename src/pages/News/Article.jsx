import NewsContent from "./NewsContent"

const Article = (props) => {

  const { article } = props

  return (
    <div className="news-article">
      <NewsContent content={article.category} />
      <NewsContent content={article.headline} />
      <NewsContent content={article.author} />
      <NewsContent content={article.date} />
      <NewsContent content={article.content[0]} />
    </div>
  )
}

export default Article