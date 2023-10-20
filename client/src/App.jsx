import Header from "./components/Header"
import Main from "./components/Main"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="w-full h-screen bg-gray-800">
      <NavBar />
      <Header />
      <Main />
    </div>
  )
}

export default App
