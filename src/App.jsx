import Nav from "./Navbar/Nav";
import Sidebar from "./Sidebar/Sidebar";
import Recommended from "./Recommended/Recommended";
import { ContextProvider } from "./store/store";

function App() {

  return (
    <ContextProvider>
      <div className="app">
        <Sidebar />
        <main className="main-page">
          <Nav />
          <Recommended />
        </main>
      </div>
    </ContextProvider>
  )
}

export default App
