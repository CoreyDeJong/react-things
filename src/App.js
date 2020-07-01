import React from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      things : [
        // {
        //   name: 'apple',
        //   type: 'fruit'
        // },
        // {
        //   name: 'banana',
        //   type: 'fruit'
        // }
      ],
      }
    this.thingCreateHandler = this.thingCreateHandler.bind(this);
  }

  // adding items to the setState
  thingCreateHandler(thing){
    //thing is being pulled up from the handlesubmit
    const updatedThings = this.state.things;
    updatedThings.push({name:thing.name})
    
    this.setState({
      things: updatedThings
    })
  }

  render(){
    return (
    <div className="App">
      <Header1 things={this.state.things}/>
      <main>
        <Thinglist things={this.state.things} onThingyCreate={this.thingCreateHandler} />
      </main>
      
      <Footer text="When in doubt, eat chocolate"/>
    </div>
    )  
  }

}


function Thinglist(props){

  // need a function to call when creating a new thing
  // function should be in props

  return (
    <>
    <h2>Thing List:</h2>
      <ul>
      {props.things.map(stuff => <Thing item={stuff} key={stuff.name} />)}
      </ul>
    {/* <button>Create a thing</button> */}
    <ThingForm onThingCreate={props.onThingyCreate} />

  </>
  )
}


//Form, props come from the parent
// just above <ThingForm onThingCreate={props.onThingCreate} />
class ThingForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      thingType: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // showing you what is being typed in the input box
    handleChange(event){
      const newName = event.target.value;
      this.setState({
        name: newName
      })
    }

    handleSubmit(event){
      event.preventDefault();
      this.props.onThingCreate(this.state);
    }

      render(){
        return (

          <form onSubmit={this.handleSubmit}>
            <label>
              Name: 
              <input type="text" value={this.state.name} onChange={this.handleChange}> 
              </input>
            </label>
          </form>
        )
      }
    }


// creates a "I am a ...."
function Thing(props){
  return <li>I am a {props.item.name}</li>
}

// Header
function Header1(props){
  return <h2>There are {props.things.length} things in this list</h2>
}


// Footer
function Footer(props) {
  return <footer><small>{props.text}</small></footer>
}


export default App;
