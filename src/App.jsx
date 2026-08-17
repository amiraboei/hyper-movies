import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default App
