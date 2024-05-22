import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
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
  const [turnColor, setTurnColor] = useState(1);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = JSON.parse(JSON.stringify(board));
    if (newBoard[y][x] === 0) {
      if (newBoard[y + 1] !== undefined && newBoard[y + 1][x] === 3 - turnColor) {
        newBoard[y][x] = turnColor;
        setBoard(newBoard);
        setTurnColor(3 - turnColor);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x * 20}-${y}`} onClick={() => clickHandler(x, y)}>
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
