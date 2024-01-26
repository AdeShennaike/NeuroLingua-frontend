import TranslationSpan from "./TranslationSpan"
import React from "react"

const NewsContent = (props) => {

  const { content } = props

  const content_example = "{zh:巨大的|en:Gigantic} {zh:海浪|en:waves} swamped parts of a key {zh:美国军事设施|en:US military facility} in the middle of the {zh:太平洋|en:Pacific Ocean} last weekend, causing damage that will take months to repair, according to a {zh:美国军方|en:US Army} report."

  console.log(content)
  if(content == null) { return <p>...</p>}

  const parseContent = (contentString) => {
    const regex = /\{\w+:[^|]+\|en:[^}]+\}/g;
    let elements = [];
    let lastIndex = 0;

    contentString.replace(regex, (match, offset) => {
      console.log(match)
      elements.push(contentString.slice(lastIndex, offset));
      elements.push(<TranslationSpan key={offset} content={match.slice(1, -1)} />);
      lastIndex = offset + match.length;
    })

    elements.push(contentString.slice(lastIndex));
    console.log(elements)
    return elements;
  }

  return (
    <div>
      {parseContent(content)}
    </div>
  )
}

export default NewsContent