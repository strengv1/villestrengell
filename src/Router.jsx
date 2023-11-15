import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import GameLayout from './minesweeper/src/layouts/GameLayout'
import Game, { scoreLoader } from './minesweeper/src/pages/Game'
import CV from './components/CV'
import AppLayout from './AppLayout'

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