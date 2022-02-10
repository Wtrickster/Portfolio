import Cube from "./components/Cube";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Row, Container } from "./components/Grid";


function App() {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Cube />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  )
}

export default App;