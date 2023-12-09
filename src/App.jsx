import React from 'react'
import TextArea from './compo/textArea'
import './App.css'
import Previewer from './compo/previewer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
    this.handleTextareaChange = this.handleTextareaChange.bind(this)
  }
  handleTextareaChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    const sectionStyle = {
      height: '90%',
      width: '100%',
    }
    return (
      <div className='app-div'>
        <h1>Markdown Previewer</h1>
        <div className="section-wrapper">
          <div className="editor-div">
            <h1>Editor</h1>
            <TextArea
              handleInput={this.handleTextareaChange}
              state={this.state}
              className="textArea"
              style={sectionStyle}
            />
          </div>
          <div id="preview" className='editor-div'>
            <h1>Previewer</h1>
            <Previewer
              content={this.state.text}
              className="textArea"
              style={sectionStyle}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
