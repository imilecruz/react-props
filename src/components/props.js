import React from 'react';
import '../App.css';

class Props extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      jovens: null
    }
  }

  modificando = (estudantes) => {
    this.setState({
      jovens: estudantes 
    })
  }

  render () {
    return (
      <div className="App">
        <button onClick={() => this.modificando('bento')}>clica</button>
        <button onClick={() => this.modificando('zeca')}>clica</button>
        <button onClick={() => this.modificando('juca')}>clica</button>
        <p>{this.state.jovens}</p>
      </div>
    );

  }
}

export default Props;
