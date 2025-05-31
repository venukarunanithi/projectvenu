import Login from "./Auth/Login"
import Signup from "./Auth/Signup"
import { Navbar } from "./components/Navbar"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import Home from "./pages/Home"
import Todos from "./pages/Todos"


function App() {
  
  return (
    <>
      <h1> Hello World</h1>
      <Navbar/>
      <Todos/>
      <Login/>
      <Signup/>
      {/* <home/>
      <About></About>
      <Contact></Contact> */}
    </>
  )
}

export default App
