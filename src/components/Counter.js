import React, { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
    const [score, setScore] = useState(initialValue)

    const increment = () => {
        setScore(prevScore => prevScore + 1)
    }
    const decrement = () => {
        setScore(prevScore => prevScore - 1)
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
