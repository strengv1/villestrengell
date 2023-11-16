import { useOutlet } from "react-router-dom";
import BackBtn from './../../../components/BackBtn'
import DifficultyBar from "../components/DifficultyBar"

import './../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function GameLayout() {
  const Outlet = useOutlet()
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
        {Outlet ||
        <div style={{textAlign:"center", paddingTop:"1em"}}>
          Select a difficulty to start
          <br /><br />
          Beginner: 9x9, 10 mines<br />
          Intermediate: 16x16, 40 mines<br />
          Extreme: 30x16, 99 mines
          <br /><br />
          Note: The initial loading take be around ~30 seconds due to me using a free server provider and their cold load isn&apos;t the fastest.
        </div>}
      </main>
    </div>
  )
}