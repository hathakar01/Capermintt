import "./App.css";

import { Routeall } from "./Components/Routes/Route";

function App() {
  return (
    <div className="App">
      <Routeall />
    </div>
  );
}

export default App;










 {/* <BrowserRouter>

     <Sidebar>
      <Routes>
      <Route path="/" element={<Protected Component={Home}/>} />
        <Route path="/about" element={<Protected Component={About}/>} />
        <Route path="/contact" element={<Protected Component={Contact}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Protected Component={Logout}/>} />
      </Routes>
      </Sidebar>
      </BrowserRouter> */}