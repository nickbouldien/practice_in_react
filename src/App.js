import React from 'react';


// const App = () => <h1>Hello, World</h1>

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update (e) {
    this.setState({
      txt: e.target.value
    })
  }

  render(){
    let txt = this.props.txt;
    return(
      <div>
        {/* <h1>Hello, World</h1> */}
        {/* <p>{txt}</p> */}
        <input
          type="text"
          onChange={this.update.bind(this)}\
        />
        <p>state txt: {this.state.txt}</p>
        <p>cat: {this.state.cat}</p>

      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}














export default App;
