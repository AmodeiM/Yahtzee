import React, { useState } from 'react';
import diceOne from '../images/dice1.png';
import diceTwo from '../images/dice2.png';
import diceThree from '../images/dice3.png';
import diceFour from '../images/dice4.png';
import diceFive from '../images/dice5.png';
import diceSix from '../images/dice6.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';


function Player(props) {

    var allDice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    const [firstDice, setFirstDice] = useState({
        pic: diceOne,
        opac: "not-locked"

    })
    const [secondDice, setSecondDice] = useState({
        pic: diceTwo,
        opac: "not-locked"

    })
    const [thirdDice, setThirdDice] = useState({
        pic: diceThree,
        opac: "not-locked"
    })
    const [fourthDice, setFourthDice] = useState({
        pic: diceFour,
        opac: "not-locked"
    })
    const [fifthDice, setFifthDice] = useState({
        pic: diceFive,
        opac: "not-locked"
    })

    const [rollNumber, setRollNumber] = useState(1);
    const [turnNumber, setTurnNumber] = useState(1);
    function getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 6);
        return randomNumber;
    }

    function rollDice() {
        if (firstDice.opac === "not-locked") {
            setFirstDice({
                ...firstDice,
                pic: allDice[getRandomNumber()]
            })
        }
        if (secondDice.opac === "not-locked") {
            setSecondDice({
                ...secondDice,
                pic: allDice[getRandomNumber()]
            })

        }
        if (thirdDice.opac === "not-locked") {
            setThirdDice({
                ...thirdDice,
                pic: allDice[getRandomNumber()]
            })

        }
        if (fourthDice.opac === "not-locked") {
            setFourthDice({
                ...fourthDice,
                pic: allDice[getRandomNumber()]
            })

        }
        if (fifthDice.opac === "not-locked") {
            setFifthDice({
                ...fifthDice,
                pic: allDice[getRandomNumber()]
            })

        }

    }

    function rollDiceButton() {
        if (turnNumber < 14) {
            //check that at least one dice is unlocked so a roll can occur
            if (firstDice.opac === "not-locked" || secondDice.opac === "not-locked" || thirdDice.opac === "not-locked" || fourthDice.opac === "not-locked"
                || fifthDice.opac === "not-locked") {
                //increment roll number
                setRollNumber(rollNumber + 1)
                //last roll of turn, need to unlock all dice after roll and increment turn number
                if (rollNumber > 2) {
                    if (firstDice.opac === "not-locked") {
                        setFirstDice({
                            ...firstDice,
                            pic: allDice[getRandomNumber()]
                        })
                    } else {
                        setFirstDice({
                            ...firstDice,
                            opac: "not-locked"
                        })
                    }
                    if (secondDice.opac === "not-locked") {
                        setSecondDice({
                            ...secondDice,
                            pic: allDice[getRandomNumber()]
                        })
                    } else {
                        setSecondDice({
                            ...secondDice,
                            opac: "not-locked"
                        })
                    }
                    if (thirdDice.opac === "not-locked") {
                        setThirdDice({
                            ...thirdDice,
                            pic: allDice[getRandomNumber()]
                        })
                    } else {
                        setThirdDice({
                            ...thirdDice,
                            opac: "not-locked"
                        })
                    }
                    if (fourthDice.opac === "not-locked") {
                        setFourthDice({
                            ...fourthDice,
                            pic: allDice[getRandomNumber()]
                        })
                    } else {
                        setFourthDice({
                            ...fourthDice,
                            opac: "not-locked"
                        })
                    }
                    if (fifthDice.opac === "not-locked") {
                        setFifthDice({
                            ...fifthDice,
                            pic: allDice[getRandomNumber()]
                        })
                    } else {
                        setFifthDice({
                            ...fifthDice,
                            opac: "not-locked"
                        })
                    }
                    //reset roll number for next turn
                    setRollNumber(1);
                    //increment turn number
                    setTurnNumber(turnNumber + 1);

                } else {
                    rollDice();
                }
            }

        }
    }

    //changes opacity of the dice
    function unlockAllDice() {
        setFirstDice({
            ...firstDice,
            opac: "not-locked"
        })
        setSecondDice({
            ...secondDice,
            opac: "not-locked"
        })
        setThirdDice({
            ...thirdDice,
            opac: "not-locked"
        })
        setFourthDice({
            ...fourthDice,
            opac: "not-locked"
        })
        setFifthDice({
            ...fifthDice,
            opac: "not-locked"
        })
    }

    return (
        <Container className='player'>
            <h1 className='player-name'>{props.name}</h1>
            <Row>
                <Col><h2><Badge bg="secondary">Turn #{turnNumber}</Badge></h2></Col>
                {/* Button if user wants to end turn before using all 3 rolls */}
                <Col className="end-turn"><Button variant="dark" onClick={() => {
                    if (turnNumber < 14) {
                        setRollNumber(1)
                        setTurnNumber(turnNumber + 1)
                        unlockAllDice()
                    }

                }}><Badge bg="secondary">End Turn</Badge></Button></Col>
            </Row>
            <Row>
                <Col className='dice-images'>
                    <img src={firstDice.pic} className={firstDice.opac} onClick={() => {
                        if (firstDice.opac === "not-locked") {
                            setFirstDice({
                                ...firstDice,
                                opac: "locked"
                            })
                        } else {
                            setFirstDice({
                                ...firstDice,
                                opac: "not-locked"
                            })
                        }
                    }} alt="dice"></img>
                    <img src={secondDice.pic} className={secondDice.opac} onClick={() => {
                        if (secondDice.opac === "not-locked") {
                            setSecondDice({
                                ...secondDice,
                                opac: "locked"
                            })
                        } else {
                            setSecondDice({
                                ...secondDice,
                                opac: "not-locked"
                            })
                        }
                    }} alt="dice"></img>
                    <img src={thirdDice.pic} className={thirdDice.opac} onClick={() => {
                        if (thirdDice.opac === "not-locked") {
                            setThirdDice({
                                ...thirdDice,
                                opac: "locked"
                            })
                        } else {
                            setThirdDice({
                                ...thirdDice,
                                opac: "not-locked"
                            })
                        }
                    }} alt="dice"></img>
                    <img src={fourthDice.pic} className={fourthDice.opac} onClick={() => {
                        if (fourthDice.opac === "not-locked") {
                            setFourthDice({
                                ...fourthDice,
                                opac: "locked"
                            })
                        } else {
                            setFourthDice({
                                ...fourthDice,
                                opac: "not-locked"
                            })
                        }
                    }} alt="dice"></img>
                    <img src={fifthDice.pic} className={fifthDice.opac} onClick={() => {
                        if (fifthDice.opac === "not-locked") {
                            setFifthDice({
                                ...fifthDice,
                                opac: "locked"
                            })
                        } else {
                            setFifthDice({
                                ...fifthDice,
                                opac: "not-locked"
                            })
                        }
                    }} alt="dice"></img>
                    <Button className="roll-button" variant="dark" size="lg" onClick={rollDiceButton}>Roll 🎲 <Badge bg="secondary">{4 - rollNumber} rolls left</Badge></Button>
                </Col>
            </Row>
        </Container>
    )

}
export default Player;