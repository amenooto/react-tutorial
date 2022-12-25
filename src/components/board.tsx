import Square from "./square";
import {useState} from "react";
import square from "./square";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const status = `Next Player: ${xIsNext ? 'X' : 'O'}`

    const handleClick = (val:number) => {
        const item = squares.slice();
        item[val] = xIsNext ? 'X' : 'O'
        setSquares(item)
        setXisNext(!xIsNext)
    }
    const renderSquare = (val:number) => {
        return <Square result={squares[val]} value={val} event={handleClick}/>
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}
export default Board