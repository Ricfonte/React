import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ListMovie } from "./pages/listMovie/listMovie";
import { AddMovie } from "./pages/addMovie/addMovie";
import { ViewMovie } from "./pages/viewMovie/viewMovie";
import { AddReview } from "./pages/addReview/addReview";
import { LoginUser } from "./pages/loginUser/loginUser";


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" element= {<LoginUser></LoginUser>}></Route>
            <Route path="/movies" element= {<ListMovie></ListMovie>}></Route>
            <Route path="/movies/new" element= {<AddMovie></AddMovie>}></Route>
            <Route path="/movies/:id" element= {<ViewMovie></ViewMovie>}></Route>
            <Route path="/movies/:id/review" element= {<AddReview></AddReview>}></Route>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
