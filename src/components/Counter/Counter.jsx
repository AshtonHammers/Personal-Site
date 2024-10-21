import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
        console.log("COUNT: " + count)

        return () => console.log('Clean up of method')
  }, [count])

  return (
    <div className="counter">
        <h1>Count: {count}</h1>
        <Button variant="success" onClick={() => setCount(count + 1)}>Increase</Button>
        <Button variant="danger" onClick={() => setCount(count - 1)}>Decrease</Button>
    </div>
  )
}