import { useState } from 'react'
import './App.css'
import { marked } from 'marked'



function App() {

  const [ editorText, setEditorText ] = useState(
    `# Lawal's Solution\n\n## Markdown Previewer\n\n\`<div>This is a block of code</div>\`\n\n \`\`\`\n\nlet x = 1;\nlet y = 2;\nlet z = x+ y;\n\n\`\`\` 
    \n\n* mango\n* banana
    > Follow who know road
    ![git](https://th.bing.com/th/id/OIP.S1Sza7Ozb1fkihoDHogj5AHaHa?pid=ImgDet&rs=1)\n\n~~This text is striked~~\n\n**Feel free to add yours**\n\n[github](github.com/lawielas)`
  )

  const handleChange = (e) => {
    setEditorText(e.target.value)
  }

  // const markdown = marked.parse(editorText, {breaks: true})
  const markdown = () => {
    const rawMarkUp = marked(editorText, {breaks: true})
    return { __html: rawMarkUp}
  }

  return (
    <div>
      <div>
        <textarea name="" id="editor" cols="40" rows="12" value={editorText} onChange={handleChange}></textarea>
      </div>
      <div id="preview" dangerouslySetInnerHTML={markdown()}>

      </div>
    </div>
  )
}

export default App
