import ArticlePreview from "./ArticlePreview"

const NewsList = (props) => {

  const { news, handleSelect } = props

  return (
    <div>
      <div>News</div>
      {news
      ? news.map((a,index) => {
        console.log(a)
        return <ArticlePreview key={index} content={a.headline} displayClass="news-headline" handleSelect={() => handleSelect(a)} />
      })
      :<h2>Loading the news...</h2>}
    </div>
  )
}

export default NewsList