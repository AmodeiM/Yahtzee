import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Dice from "./Dice";
import RollCounter from "./RollCounter";
import TurnCounter from "./TurnCounter";
import Scorecard from "./Scorecard";
import { useEffect } from "react";

function Player() {
    const [rollCount, setRollCount] = useState(0);
    const [turnCount, setTurnCount] = useState(0);
    const [scorecard, setScorecard] = useState({
        aces: Array(13).fill(null), //easy
        twos: Array(13).fill(null), //easy
        threes: Array(13).fill(null), //easy
        fours: Array(13).fill(null), //easy
        fives: Array(13).fill(null), //easy
        sixes: Array(13).fill(null), //easy
        threeOak: Array(13).fill(null), // hard
        fourOak: Array(13).fill(null), // hard
        fullHouse: Array(13).fill(null), // hard
        smallStraight: Array(13).fill(null), //medium
        largeStraight: Array(13).fill(null), //medium
        yahtzee: Array(13).fill(null), //easy
    });
    const [playerState, setPlayerState] = useState({
        dice: [
            { id: 1, side: 1, locked: false },
            { id: 2, side: 1, locked: false },
            { id: 3, side: 1, locked: false },
            { id: 4, side: 1, locked: false },
            { id: 5, side: 1, locked: false },
        ],
    });

    function matchIsOver(turnCount) {
        return turnCount >= 13;
    }

    useEffect(() => {
        if (rollCount === 3) {
            setRollCount(0);
            setTurnCount(turnCount + 1);
        }
        if (matchIsOver(turnCount)) {
            setRollCount(0);
            setTurnCount(0);
        }
        // this is where the issue will be completed
        // this returns the element of each score array that corresponds to the current turn
        const CATEGORY_SCORING_FUNCTIONS = {
            aces: (dice) => dice.filter((d) => d.side === 1).length,
            twos: (dice) => dice.filter((d) => d.side === 2).length * 2,
            threes: (dice) => dice.filter((d) => d.side === 3).length * 3,
            fours: (dice) => dice.filter((d) => d.side === 4).length * 4,
            fives: (dice) => dice.filter((d) => d.side === 5).length * 5,
            sixes: (dice) => dice.filter((d) => d.side === 6).length * 6,
            threeOak: (dice) => {
                let sortedDice = dice.map(d => d.side).sort()
                var count = 0
                for (let i = 0; i < sortedDice.length; i++) {
                    for (let j = 0; j < sortedDice.length; j++) {
                        if (sortedDice[i] === sortedDice[j]) {
                            count += 1;
                        }
                    }
                }
                if (count >= 3) {
                    let sum = sortedDice.reduce((a, b) => a + b)
                    return sum
                }
            },
            fourOak: (dice) => {
                let sortedDice = dice.map(d => d.side).sort()
                var count = 0
                for (let i = 0; i < sortedDice.length; i++) {
                    for (let j = 0; j < sortedDice.length; j++) {
                        if (sortedDice[i] === sortedDice[j]) {
                            count += 1;
                        }
                    }
                }
                if (count >= 4) {
                    let sum = sortedDice.reduce((a, b) => a + b)
                    return sum;
                }
            },
            fullHouse: (dice) => {
                let sortedDice = dice.map(d => d.side).sort()
                if ((sortedDice[0] === sortedDice[1] && sortedDice[2] === sortedDice[4] && sortedDice[0] != sortedDice[2]) || (sortedDice[0] === sortedDice[2] && sortedDice[3] === sortedDice[4] && sortedDice[0] != sortedDice[3])) {
                    return 25;
                }
            },
            smallStraight: (dice) => {
                var minDice = Math.min(...dice.map(d => d.side))
                if (dice.map(d => d.side).includes(minDice + 1) && (dice.map(d => d.side).includes(minDice + 2)) && (dice.map(d => d.side).includes(minDice + 3))) return 30
            },
            largeStraight: (dice) => {
                var minDice = Math.min(...dice.map(d => d.side))
                if (dice.map(d => d.side).includes(minDice + 1) && (dice.map(d => d.side).includes(minDice + 2)) && (dice.map(d => d.side).includes(minDice + 3) && (dice.map(d => d.side).includes(minDice + 4)))) return 40
            },
            yahtzee: (dice) => {
                if (dice.filter((d) => d.side === dice[0].side).length === 5) {
                    return 100;
                }
            }

        };

        Object.entries(scorecard).reduce((newScorecard, [category, scores]) => {
            newScorecard[category] = scores;
            newScorecard[category][turnCount] = CATEGORY_SCORING_FUNCTIONS[category](
                playerState.dice
            );
            return newScorecard;
        }, {});

        //setScorecard(newScorecard);
    }, [rollCount]);

    function getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        return randomNumber;
    }

    const toggleDiceLock = (id) => {
        let newDice = [...playerState.dice];
        const diceToChange = newDice.find((die) => die.id === id);
        diceToChange.locked = !diceToChange.locked;
        setPlayerState({ dice: newDice });
    };

    const diceList = playerState.dice.map((die) => (
        <Dice
            id={die.id}
            side={die.side}
            locked={die.locked}
            key={die.id}
            toggleLock={toggleDiceLock}
        />
    ));

    const rollDice = () => {
        if (rollCount > 3) return false;
        if (turnCount > 13) return false;

        setPlayerState({
            dice: [...playerState.dice].map((d) => ({
                ...d,
                side: d.locked ? d.side : getRandomNumber(),
            })),
        });
        setRollCount(rollCount + 1);
    };

    return (
        <div>
            <Row>
                <Col>
                    {diceList}
                    <button onClick={rollDice}>Roll</button>
                    <RollCounter rollCount={rollCount} />
                    <TurnCounter turnCount={turnCount} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Scorecard scorecard={scorecard} />
                </Col>
            </Row>
        </div>
    );
}
export default Player;
