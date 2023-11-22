import {BrowserRouter, Routes, Route} from "react-router-dom"
import PageTwo from "./pages/pageTwo/pageTwo";
import PageThree  from "./pages/pageThree/pageThree";
import PageFour from "./pages/pageFour/pageFour";
import PageOne from "./pages/pageOne/pageOne";



function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne></PageOne>}></Route>
          <Route path= "/pets/new" element={<PageTwo></PageTwo>}></Route>
          <Route path="/pets/:id" element={<PageThree></PageThree>}></Route>
          <Route path="/pets/:id/edit" element={<PageFour></PageFour>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  
  );
}

export default App;
