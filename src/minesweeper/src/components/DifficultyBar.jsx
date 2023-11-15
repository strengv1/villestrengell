import { NavLink } from 'react-router-dom'

const DifficultyBar = () => {
  const commonStyle = {marginInline: "0.5em"}
  // const bsDifficultyCols = 'col-3 col-md-2 col-lg-2 col-xl-1'
  return(
    <nav>
      <div style={{textAlign:"center"}}>
        <NavLink
          to='/minesweeper/beginner'
          style={commonStyle}
        >Beginner</NavLink>
         | 
        <NavLink
          to='/minesweeper/intermediate'
          style={commonStyle}
        >Intermediate</NavLink>
        |
        <NavLink
          to='/minesweeper/extreme'
          style={commonStyle}
        >Extreme</NavLink>
        |
        <NavLink
          to='/minesweeper/custom'
          style={commonStyle}
        >Custom</NavLink>

      </div>
    </nav>
  )
}

export default DifficultyBar