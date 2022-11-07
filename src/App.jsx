import {Routes, Route} from 'react-router-dom'

import './App.css'
import {About, Contact, Home} from './pages'
import {MainLayout} from './layouts'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route index element={<Contact />} />
          <Route index element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
