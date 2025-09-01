function Header( props ) {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function Content( props ) {
  return (
    <div>
      {props.parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

function Part( props ) {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

function Total( props ) {
  const sum = props.parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App