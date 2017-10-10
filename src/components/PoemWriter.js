import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      inText: "",
      isVisible: true
    };
  }

  checkIfGood = (cont) =>{

    let sentences = cont.split(". ")
    let count = sentences.map((sentence) => {
      let wordNum = sentence.split(" ").length
      return wordNum
    })
     if (sentences.length === 3 && count[0] === 5 && count[1] === 3 && count[2] === 5){
       this.setState({
         isVisible: false
       })
     }
     else{
       this.setState({
         isVisible: true
       })
     }

  }

  handleChange = (e) => {
    let cont = e.target.value
      this.setState({
        inText: e.target.value
      })
      this.checkIfGood(cont)
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.inText}
          onChange={this.handleChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          {this.state.isVisible ? "This poem is not written in the right structure!" : null}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
