import React, { useState } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

function Counter() {
  const [count, setCount] = useState(0)
  const [isDark,setIsDark]=useState(false)

  const toggleTheme=()=>{
    setIsDark(!isDark)
  }

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

 return (
  <>
    {/* NAVBAR */}
    <Navbar
      expand="lg"
      className={`${isDark ? 'bg-dark navbar-dark' : 'bg-light navbar-light'} shadow`}
    >
      <Container fluid>
        <Button
          variant={isDark ? 'light' : 'dark'}
          onClick={toggleTheme}
          className="ms-auto"
        >
          {isDark ? 'Light' : 'Dark'}
        </Button>
      </Container>
    </Navbar>

    {/* BODY */}
    <div className={isDark ? 'counter-dark' : 'counter-light'}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <Card
          className={`text-center p-5 ${isDark ? 'card-dark' : 'card-light'}`}
          style={{ width: '300px' }}
        >
          <Card.Title>Counter Application</Card.Title>

          <h2 className="my-3">{count}</h2>

          <div className="d-flex justify-content-between">
            <Button variant="success" onClick={increment}>
              Add +
            </Button>

            <Button variant="danger" onClick={decrement} disabled={count === 0}>
              Subtract -
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  </>
)

}

export default Counter
