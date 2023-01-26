import "bootstrap/dist/css/bootstrap.min.css";
import Scorecard from "./components/Scorecard";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Player from "./components/Player";


function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Player name="Player 1" />
          </Col>
          <Col>
            <Player name="Player 2" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Scorecard />
          </Col>
          <Col>
            <Scorecard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
