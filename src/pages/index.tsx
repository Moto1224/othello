import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    const maybeTurnables: { x: number; y: number }[] = [];

    for (let n: number = 1; n < 8; n++) {
      if (board[y + n][x] === 3 - turnColor) {
        maybeTurnables.push({ x, y: y + n });
      }
      else if (board[y + n][x] === turnColor) {
        for (const turnable of maybeTurnables) {
          newBoard turnable = turnColor;
        }
      }
    }
    if (board[y + 4][x] === turnColor) {
      if (board[y + 1][x] === 3 - turnColor) newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      setTurnColor(3 - turnColor);

      if (board[y + 2][x] === 3 - turnColor) newBoard[y + 2][x] = turnColor;

      if (board[y + 3][x] === 3 - turnColor) newBoard[y + 3][x] = turnColor;
    }
    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  style={{
                    background: color === 1 ? '#000' : '#fff',
                  }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};
export default Home;
