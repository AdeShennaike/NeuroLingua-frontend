import { useState } from "react"

const TranslationSpan = (props) => {

  const { content } = props

  console.log(content)

  const parsedContent = content.split('|')
  const foreignContent = parsedContent[0].split(':')[1]
  const englishContent = parsedContent[1].split(':')[1]
  
  const [revealed, setRevealed] = useState(false)
  const [animationClass, setAnimationClass] = useState('')

  const toggleReveal = () => {
    setRevealed(!revealed)
    setAnimationClass('animate')
  }

  const handleAnimationEnd = () => {
    setAnimationClass('')
  }

  return (
    <span onClick={toggleReveal}
    className={`translation-span ${animationClass}`}
    onAnimationEnd={handleAnimationEnd}
    >
      {revealed ? englishContent : foreignContent}
    </span>
  )
}

export default TranslationSpan