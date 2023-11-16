import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import GameLayout from './minesweeper/src/layouts/GameLayout'
import Game from './minesweeper/src/pages/Game'
import { scoreLoader } from './minesweeper/src/pages/ScoreLoader'
import CV from './components/CV'
import AppLayout from './AppLayout'
import BackBtn from './components/BackBtn'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <AppLayout /> }>
      <Route index element={<App />} />
      <Route
        path="/cv"
        element={<CV />} />
      <Route
        path="/minesweeper"
        element={<GameLayout />}>
        <Route path=":difficulty"
          element={<Game />}
          loader={scoreLoader} />
      </Route>
      <Route path="*"
        element={
          <div style={{margin:"2em auto", textAlign: "center"}}>
            <strong>Not found :/</strong>
            <BackBtn language="EN"/>
          </div>
        } 
      />
    </Route>
  )
)

function Router() {
  return (
    <>      
      <RouterProvider router={router} />
    </>
  )
}

export default Router