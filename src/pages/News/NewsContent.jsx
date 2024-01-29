import TranslationSpan from "./TranslationSpan"
import React from "react"

const NewsContent = (props) => {

  const { content, displayClass } = props

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
    <div className={displayClass}>
      {parseContent(content)}
    </div>
  )
}

export default NewsContent