import React, { useState } from "react";

const Counter = ({score}) => {

    const increment = () => {
        alert("Lie Detected!")
        // setScore(prevScore => prevScore + 1)
    }
    const decrement = () => {
        alert("Only I Odin can deduct virtue points!")
        // setScore(prevScore => prevScore - 1)
    }
    return (
        <div>
            <h4> Virtue Score: {score}</h4>
            <div className="btn-group">
                <button
                    onClick={decrement}
                    className="btn btn-outline-danger me-2"
                >
                    -
                </button>
                <button
                    onClick={increment}
                    className="btn btn-outline-success"
                >
                    +
                </button>
            </div>



        </div>
    )
}
export default Counter
