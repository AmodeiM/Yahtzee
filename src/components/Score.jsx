import React from 'react';
import Table from 'react-bootstrap/Table';

function Score() {
    return (<div className='scorecard'>
        <Table bordered striped size='sm' >
            <thead>
                <tr>
                    <th></th>
                    <th>Scorecard</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='category'>Ones</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Twos</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Threes</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Fours</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Fives</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Sixes</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Sum</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Bonus</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Three of a kind</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Four of a kind</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Full House</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Small Straight</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Large Straight</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Chance</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Yahtzee</td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td className='category'>Total Score</td>
                    <td><input></input></td>
                </tr>
            </tbody>
        </Table>
    </div>


    )
}

export default Score;