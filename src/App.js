import "bootstrap/dist/css/bootstrap.min.css";
import Scorecard from "./components/Scorecard";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Player from "./components/Player";
import Dice from "./components/Dice";
import PlayerTest from "./components/PlayerTest";
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Player name={prompt("Player 1, what is your name?")} />
          </Col>
          <Col>
            <Player name={prompt("Player 2, what is your name?")} />
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
