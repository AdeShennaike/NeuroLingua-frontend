import NewsContent from "./NewsContent"

const Article = (props) => {

  const { content } = props

  return (
    <div className="news-article">
      <NewsContent displayClass="news-headline" content={content.headline} />
      <NewsContent displayClass="news-author" content={content.author} />
      <NewsContent displayClass="news-date" content={content.date} />
      {content.content.map((section, index) => {
        return <NewsContent key={index} className="news-paragraph" content={section} />
      })}
    </div>
  )
}

export default Article