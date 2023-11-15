import { NavLink } from 'react-router-dom'

const DifficultyBar = () => {

  const bsDifficultyCols = 'col-3 col-md-2 col-lg-2 col-xl-1'
  return(
    <nav>
      <div className="row difficulty-button-container text-center justify-content-center">
        <NavLink
          className={bsDifficultyCols}
          to='/minesweeper/beginner'
        >Beginner</NavLink>

        <NavLink
          className={bsDifficultyCols}
          to='/minesweeper/intermediate'
        >Intermediate</NavLink>
        
        <NavLink
          className={bsDifficultyCols}
          to='/minesweeper/extreme'
        >Extreme</NavLink>
        <NavLink
          className={bsDifficultyCols}
          to='/minesweeper/custom'
        >Custom</NavLink>

      </div>
    </nav>
  )
}

export default DifficultyBar