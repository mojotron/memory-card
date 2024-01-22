type PropsType = {
  currentScore: number;
  bestScore: number;
  currentLevel: number;
  bestLevel: number;
};

function ScoreBoard({
  currentScore,
  bestScore,
  currentLevel,
  bestLevel,
}: PropsType) {
  return (
    <div>
      <p>
        Score: {currentScore} (Best: {bestScore})
      </p>
      <p>
        Level: {currentLevel} (Best: {bestLevel})
      </p>
    </div>
  );
}

export default ScoreBoard;
