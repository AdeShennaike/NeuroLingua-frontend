import NewsContent from "./NewsContent"

const Article = (props) => {

  const { content } = props

  return (
    <div>
      <NewsContent displayClass="news-headline" content={content.headline} />
      <NewsContent displayClass="news-author" content={content.author} />
      <NewsContent displayClass="news-date" content={content.date} />
      {content.content.map((section, index) => {
        return <NewsContent key={index} displayClass="news-paragraph" content={section} />
      })}
      <div style={{ height: "100px" }}></div>
    </div>
  )
}

export default Article