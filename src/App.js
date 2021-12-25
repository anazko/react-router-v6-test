import { Link, Route, Routes } from "react-router-dom"
import { MainLayout } from "./Layout/MainLayout"
import {  Blog } from "./Pages/Blog"
import { Home } from "./Pages/Home";
import { SinglePost } from "./Pages/SinglePost";
import { About } from './Pages/About'
import { EditPost } from "./Pages/EditPost";
import { SinglePostLayout } from "./Layout/SinglePostLayout"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <MainLayout /> }>
            <Route index element={ <Home/> } />
            <Route path="blog" element={ <Blog /> } />
            <Route path="blog/posts/:id" element={ <SinglePostLayout /> } >
              <Route index element={ <SinglePost /> } />
              <Route path="edit" element={ <EditPost /> } />
            </Route>
            <Route path="about" element={ <About /> } />
          </Route>     
          <Route path="*" element={<div>404</div>} />  
        </Routes>
    </div>
  );
}

export default App;
