import FooterBar from "../data/footerBar"
import { NavLink } from 'react-router-dom'

function FooterNav() {
  return (
        <section className="container container-nav">
          <nav className="navbar navbar-expand-lg navbar-light navBar">   
            <ul className="navbar-nav">
              {FooterBar.map(item => 
                <li className="nav-item" key={item.id}>
                  <NavLink to={item.url} className="navlink">{item.name}</NavLink>
                  <img src={item.icon} alt=""/>
                </li>
                )}
            </ul>
          </nav>
        </section>
      )
}

export default FooterNav