import {Routes, Route} from 'react-router-dom'

import './App.css'
import {Home} from './pages'
import {MainLayout} from './layouts'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
