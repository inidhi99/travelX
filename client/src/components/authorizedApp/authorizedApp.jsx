import NavbarComponent from "../navbarComponent/NavbarComponent"
import Header from "../header/Header"
import Main from "../main/Main"
import NavbarComponent from "../navbarComponent/NavbarComponent"

function authorizedApp() {
  return (
    <>
    <Header/>
    <h3>Youre currently not logged in, feel free to check it out</h3>
    <Main/>
    <NavbarComponent/>
    </>
  )
}

export default authorizedApp