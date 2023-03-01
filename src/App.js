import "bootstrap/dist/css/bootstrap.min.css";
import Scorecard from "./components/Scorecard.jsx";
import Header from "./components/Header.jsx";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";
import Player from "./components/Player.jsx";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <Player name="Player 1" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
