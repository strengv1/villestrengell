import { Outlet } from "react-router-dom";
import BackBtn from './../../../components/BackBtn'
import DifficultyBar from "../components/DifficultyBar"

import './../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function GameLayout() {
  return(
    <div className="root-layout">   
      <header>
        <BackBtn language="EN" />
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