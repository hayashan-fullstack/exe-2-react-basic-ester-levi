import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
    </div>
  )
}
const Header = (props)=> {
  return
  (<h1>{props.course}</h1>)
}
const Content = (props)=> {
  return( 
  props.parts.map(elem => <Part part={[elem.name]}exercises={[elem.exercises]}/>)
  
  )
}
const Part=(props)=>{
  return (
  <p>{props.part}{props.exercises} </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))