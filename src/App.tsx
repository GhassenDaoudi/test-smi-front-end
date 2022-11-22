import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import Brand from './routes/Domain/Brands/Brand';

function App() {
  return (
    <BrowserRouter>
      <main>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="domain">
              <Route path="brand">
                <Route path=":brandId" element={<Brand />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
