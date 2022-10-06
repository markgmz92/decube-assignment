import React, {useState} from 'react'

export default function Home() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const decrementCounter = () => {
    if(counter !== 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <div>
      <h1>Hello World</h1>
      <div className='counter-div'>
        <button type='button' onClick={incrementCounter}>Increment</button>
        <button type='button' onClick={decrementCounter}>Decrement</button>
        <h1>{counter}</h1>
      </div>

    </div>
  )
}
