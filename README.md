# react-localstorage-hoc
A higher order function that wrap react components and saves it's state in persistent storage. Similar to [react-localstorage](https://github.com/STRML/react-localstorage) but implemented as a [higher order component](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)

## Usage
`npm install marklundin/react-localstorage-hoc`

```
import persist from 'react-localstorage-hoc'

class Counter extends React.Component{
  
  render(){
    
    let { counter } = this.state
  
    return <div 
      onClick={ e => this.setState({counter:counter+1 })}>{'Clicked ' + counter + ' times'}</div>
  }
}

export default persist( Counter )
```
