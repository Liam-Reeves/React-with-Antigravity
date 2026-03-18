import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Box from './Box.jsx'
import "./index.css"

function App() {
  return(
    <>
    <div className="card-container">
      <Header />
      <Food />
      <Footer />
      <Card />
      <Button />
      <Box />
    </div>
    </>
  )
}

export default App
