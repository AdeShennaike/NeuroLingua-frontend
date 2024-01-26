import NewsContent from "./NewsContent"

const ArticlePreview = (props) => {

  const { content, handleSelect } = props

  if(content == null) { return <p>...</p>}

  return (
    <>
      <div className="news-article-preview" style={{ padding: "10px", backgroundColor: "grey" }}>
        <NewsContent content={content} displayClass="news-preview-headline"/>
        <div onClick={handleSelect} class="news-article-select-button">READ</div>
      </div>
    </>
  )
}

export default ArticlePreview