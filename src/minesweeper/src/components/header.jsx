

const Header = ({ width, height, mineCount, functions }) => {

  const [setWidth, setHeight, setMineCount, initializeGrid] = functions
  return (
    <div className="header">
      <h1>Minesweeper</h1>

      <label htmlFor="width">Grid width</label>
      <input
        value={width}
        onChange={e => setWidth(Number(e.target.value))}
        type="text"
        id="width"
      />

      <label htmlFor="height">Grid height</label>
      <input
        value={height}
        onChange={e => setHeight(Number(e.target.value))}
        type="text"
        id="height"
      />

      <label htmlFor="mineCount">Mine count</label>
      <input
        value={mineCount}
        onChange={e => setMineCount(Number(e.target.value))}
        type="text"
        id="mineCount"
      />

      <button
        onClick={initializeGrid}
        > New Game </button>
    </div>
  )
}
export default Header