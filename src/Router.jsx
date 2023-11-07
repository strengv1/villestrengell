import { Route, Routes } from 'react-router-dom'
import App from './App'
import Minesweeper from './minesweeper/src/Minesweeper'
import CV from './components/CV'

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />} />
      <Route
        path="/minesweeper"
        element={<Minesweeper />} />
      <Route
        path="/cv"
        element={<CV />} />
    </Routes>
  )
}

export default Router