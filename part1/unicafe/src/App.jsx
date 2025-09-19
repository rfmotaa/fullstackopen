import { useState } from 'react'

function StatisticLine( props ) {
  const { text, value, percent} = props
  
  return (
    <tr>
      <th>{text} </th>
      <th>{value}</th>
      <th>{percent}</th>
    </tr>
  )
}

function Statistics( props ) {
  const { good, neutral, bad } = props
  let all = good + neutral + bad
  let sum = good - bad

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={sum / all} />
        <StatisticLine text="positive" value={good / all * 100} percent="%"/>
      </table>
    </div>
  )
}

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

function App() {
  const [ nums, setNums ] = useState({
    good: 0, neutral: 0, bad: 0
  })

  return (
    <div>
      <h1>give feedback</h1>
      
      <Button onClick={() => setNums({ ...nums, good: nums.good + 1})} text="good" />
      <Button onClick={() => setNums({ ...nums, neutral: nums.neutral + 1})} text="neutral" />
      <Button onClick={() => setNums({ ...nums, bad: nums.bad + 1})} text="bad" />

      <Statistics good={nums.good} neutral={nums.neutral} bad={nums.bad} />
    </div>
  )
}

export default App
