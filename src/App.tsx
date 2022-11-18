import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Brand from './routes/Domain/Brands/Brand'




function App() {

  return (
    <BrowserRouter>
      <Routes   >
        <Route path="domain">
          <Route path='brand' >
            <Route path=":brandId" element={<Brand />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
