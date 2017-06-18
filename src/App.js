import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => <h1>Hello, World</h1>

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      txt: 'this is the state txt',
      cat: 0,
      currentEvent: '---',
      val: 0
    }
    this.updateTextArea = this.updateTextArea.bind(this);
    this.updateVal = this.updateVal.bind(this);
  }

  componentWillMount(){
    console.log('mounting');
  }

  componentDidMount(){
    console.log('did mount');
  }

  componentWillUnmount(){
    console.log(' unmount');
  }

  updateTextArea(e){
    this.setState({
      currentEvent: e.type
    })
  }
  update (e) {
    this.setState({
      txt: e.target.value
    })
  }

  updateVal(e){
    this.setState({
      val: this.state.val + 1
    })
  }

  render(){
    // let txt = this.props.txt;
    console.log('render');

    return(
      <div>

        {/* <h1>Hello, World</h1> */}
        {/* <p>{txt}</p> */}
        <Title text="Welcome to React" />
        <Button>React</Button>
        <br />
        <Widget update={this.update.bind(this)}/>
        <p>state txt: {this.state.txt}</p>
        <p>cat: {this.state.cat}</p>

        {/* <p>{this.state.currentEvent}</p>
        <textarea
          onKeyPress={this.updateTextArea}
          onCopy={this.updateTextArea}
          onDrag={this.updateTextArea}
          onPaste={this.updateTextArea}
          onFocus={this.updateTextArea}
          onBlur={this.updateTextArea}

          rows="10"
          cols="30"
        /> */}

        <button onClick={this.updateVal}>{this.state.val}</button>


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

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode( document.getElementById('a'))

  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <hr />
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a" ></div>
      </div>
    )
  }
}



const Button = (props) => (
  <button>{props.children}</button>
)

const Widget = (props) => (
  <input
    type="text"
    onChange={props.update}
  />
)

const Title = (props) => (
  <h1>Title: {props.text}</h1>
)

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6 ){
      return new Error(`${propName} was too short`)
    }
  }
}

export default Wrapper;
// export default App;
