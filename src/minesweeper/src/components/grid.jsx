import Tile from './tile.jsx'

const Grid = ({ grid, functions }) => {


  return (
    <div className="board">
      {grid.map( row => { 
        return row.map( tile => <Tile key={tile.id} tile={tile} functions={functions}/> )
      })}
    </div>
  )
}

export default Grid