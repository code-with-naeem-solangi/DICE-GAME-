import React, { useState } from "react";
import "./App.css"

function DiceGame() {
    const [PLAYER1, setP1] = useState({
        name: "IMRAN",
        score: 0,
        active: true,
    })
    const [PLAYER2, setP2] = useState({
        name: "QASIM",
        score: 0,
        active: false,
    })

    const [rolDice, newDiceValue] = useState(0)
    const DiceRoll = () => {
        const randNum = Math.floor(Math.random() * 11)
        newDiceValue(randNum)
    

       
          
         
        if (PLAYER1.active) {
            setP1({
                ...PLAYER1,
                score: PLAYER1.score + randNum,
                active: randNum !== 0,
                
                
            })
            setP2({
                ...PLAYER2,
                active: randNum == 0
            })
        } else if (PLAYER2.active) {
            setP2({
                ...PLAYER2,
                score: PLAYER2.score + randNum,
                active: randNum !== 0
            })
        } else {
            if (PLAYER1.score > PLAYER2.score) {
                alert(
                    `${PLAYER1.name} IS WON BY ${PLAYER1.score - PLAYER2.score} RUNS`
                )
                newDiceValue(0)
                setP1(
                    {
                        ...PLAYER1,
                        score: 0,
                        active:true
                    })
                setP2({
                    ...PLAYER2,
                    score: 0,
                    active:false
                })
            } else if (PLAYER1.score === PLAYER2.score) {
                alert("OPPS GAME DRAW")
                newDiceValue(0)
                setP1(
                    {
                        ...PLAYER1,
                        score: 0,
                        active:true
                    })
                setP2({
                    ...PLAYER2,
                    score: 0,
                    active:false
                })
            }
            else {
                alert(
                    `${PLAYER2.name} IS WON BY ${PLAYER2.score - PLAYER1.score} RUNS`
                )
                newDiceValue(0)
                setP1(
                    {
                        ...PLAYER1,
                        score: 0,
                        active:true
                    })
                setP2({
                    ...PLAYER2,
                    score: 0,
                    active:false
                    
                })

            }
        }
    }

    const reasart = () => {
        alert("ALL SCORE IS CLEAR")
        newDiceValue(0)
        setP1(
            {
                ...PLAYER1,
                score: 0,
                active: true,

            })
        setP2({
            ...PLAYER2,
            score: 0,
            active: false,

        })
    }



    return (
        <div className="container">
            <h1>DICE GAME</h1>

            <div className="Players">
                <div className="p1">
                    <h1>{PLAYER1.name}</h1>
                    <h1>{PLAYER1.score}</h1>
                </div>


                <div className="rool">
                    <h1>{rolDice}</h1>
                    <button onClick={DiceRoll} className="dice"><b>ROLL DICE</b></button>
                    <br></br>
                    <button className="spechail" onClick={reasart}><b>RESTART</b></button>
                </div>

                <div className="p2">
                    <h1>{PLAYER2.name}</h1>
                    <h1>{PLAYER2.score}</h1>
                </div>

            </div>


        </div>



    )
}
export default DiceGame;