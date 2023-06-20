import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Form,  Activities } from "./views";
//, Edit  NotFound,
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();

  // const showComponents = () => {
  //   if (location.pathname === "/home" ||
  //   location.pathname === "/create" ||
  //   location.pathname === "/activities" ||
  //   location.pathname.includes("/edit/") ||
  //   location.pathname.includes("/detail/")) {
  //     return true
  //   }
  //   return false
  // };
  
  return (
    <div className="App">
      {/* {showComponents() &&
      <NavBar />} */}
        {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/create" element={<Form />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */}
        {/* <Route path='*' element={<NotFound />}/> */}
      </Routes>
   </div>
  );
}

export default App;