import NewsContent from "./NewsContent"

const ArticlePreview = (props) => {

  const { content, handleSelect } = props

  if(content == null) { return <p>...</p>}

  return (
    <>
      <div className="news-article-preview" >
        <NewsContent content={content} displayClass="news-preview-headline"/>
        <div onClick={handleSelect} className="news-article-select-button">READ</div>
      </div>
    </>
  )
}

export default ArticlePreview