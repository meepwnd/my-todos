import React from 'react';

class Test extends React.Component {
  state = { 
    option: ''
   }
  onGetNews = () => {
    console.log('0')
  }
  
  onSubmit = e => {
    e.preventDefault()
    console.log('123')
  }
  render() {
    return(
      <>
      <p>test</p>
      <form onSubmit={this.onSubmit}>
        <input value={this.state.option} onChange={(e) => this.setState({option: e.target.value})}/>
      </form>
      <button onClick={this.onGetNews} type="submit">+</button>
      </>
      
    );
  }
}


export default Test;