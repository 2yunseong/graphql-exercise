import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./routes/Movies";
import Movie from "./routes/Movie";
import Location from "./routes/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/location' element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
