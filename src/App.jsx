import CartContainer from "./components/CartContainer"
import { ContextProvider } from "./components/Context"
import ItemDetail from "./components/ItemDetail"
import NavBar from "./components/NavBar"

function App() {

  return (
    <ContextProvider>
      <NavBar />
      <ItemDetail />
    </ContextProvider>
  )
}

export default App
