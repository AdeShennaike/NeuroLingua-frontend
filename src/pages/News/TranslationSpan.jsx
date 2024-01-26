import { useState } from "react"

const TranslationSpan = (props) => {

  const { content } = props

  console.log(content)

  const parsedContent = content.split('|');
  const foreignContent = parsedContent[0].split(':')[1]
  const englishContent = parsedContent[1].split(':')[1]
  
  const [revealed, setRevealed] = useState(false)

  const toggleReveal = () => setRevealed(!revealed)

  return (
    <span onClick={toggleReveal} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
      {revealed ? englishContent : foreignContent}
    </span>
  )
}

export default TranslationSpan