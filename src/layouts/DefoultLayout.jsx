import { Outlet } from "react-router-dom";
import HeaderNav from "../complements/HeaderNav";
import FooterNav from "../complements/FooterNav";

const DefaultLayout = () => {
  return (
    <>
    <header>
      <HeaderNav />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <FooterNav />
    </footer>
    </>
  )
}

export default DefaultLayout