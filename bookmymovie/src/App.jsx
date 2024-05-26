import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Main from './Components/Main';
import { Routes, Route } from 'react-router-dom';
import Movie from './Components/MovieDetail/Moviedetails';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Main />}> </Route>
          <Route path='movie/:id' element={<Movie/>}> </Route>
        </Routes>

      </div>
    </>
  )
}

export default App
