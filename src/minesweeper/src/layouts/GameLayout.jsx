import { Outlet, Link } from "react-router-dom";
import DifficultyBar from "../components/DifficultyBar"

import './../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function GameLayout() {
  return(
    <div className="root-layout">   
      <header>
        <Link to='/'
            style={{
              position:"fixed",
              left:"20px",
              top:"10px",
              width:"fit-content",
              fontSize:"1.3em",
              color:"blue",
              backgroundColor: "rgba(255,255,255,0.7)"
            }}>
            Back
          </Link>
        <div className="row mt-5 mb-3 text-center">
          <h1>Miinaharava</h1>
          <h3>Choose the difficulty:</h3>
        </div>
        <DifficultyBar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}