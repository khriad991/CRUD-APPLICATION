import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllUserPage from "./pages/AllUserPage";
import AddUserPage from "./pages/AddUserPage";
import EditPage from "./pages/EditPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/add' element={<AddUserPage/>}/>
            <Route path='/all' element={<AllUserPage/>}/>
            <Route path="/edit/:id" element={<EditPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
