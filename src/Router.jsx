import { Route, Routes } from 'react-router-dom'
import App from './App'
import Minesweeper from './minesweeper/src/Minesweeper'

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />} />
      <Route
        path="/minesweeper"
        element={<Minesweeper />} />
    </Routes>
  )
}

export default Router