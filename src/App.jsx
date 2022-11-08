import {Routes, Route} from 'react-router-dom'

import './App.css'
import {About, Contact, Home, Offer} from './Pages'
import {MainLayout} from './Layouts'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path={'contact'} element={<Contact />} />
          <Route path={'about'} element={<About />} />
          <Route path={'offer'} element={<Offer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
