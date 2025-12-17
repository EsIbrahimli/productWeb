import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Detail from './pages/detail'
import Menu from './pages/menu'
import NotFound from './pages/notfound'



function App() {


  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/menu/:id' element={<Detail />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  )
}

export default App
