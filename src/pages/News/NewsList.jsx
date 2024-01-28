import ArticlePreview from "./ArticlePreview"

const NewsList = (props) => {

  const { news, handleSelect } = props

  return (
    <div>
      {news
      ? news.map((a,index) => {
        return <ArticlePreview key={index} content={a.headline} displayClass="news-headline" handleSelect={() => handleSelect(a)} />
      })
      :<h2>Loading the news...</h2>}
    </div>
  )
}

export default NewsList