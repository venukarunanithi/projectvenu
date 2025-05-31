import { Navbar } from "./components/Navbar"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import Home from "./pages/home"
import Todos from "./pages/Todos"


function App() {
  
  return (
    <>
      <h1> Hello World</h1>
      <Navbar/>
      <Todos/>
      {/* <home/>
      <About></About>
      <Contact></Contact> */}
    </>
  )
}

export default App
