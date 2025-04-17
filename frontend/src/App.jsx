import './styles/app.scss';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound';
import EditOrder from './pages/EditOrder';
import NewOrder from './pages/NewOrder';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/orders/:id/edit' element={<EditOrder />} />
          <Route path='/new-order' element={<NewOrder />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
