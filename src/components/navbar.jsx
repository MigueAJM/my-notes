import '../resources/css/components/navbar.css'
import { NavbarNav } from './navbar.nav'

export const Navbar = props => {
    const logo = props.logo || '{@MigueAJM}'
    const my_web =  'https://migueajm.github.io/migueljimenezweb/'
    return (
        <nav className="navbar navbar-expand-lg navbar__bg">
            <div className="container-fluid">
                <a className="navbar-brand __logo__" href={my_web}>{logo}</a>
                <a className="navbar-brand " href={my_web}>Welcome</a>
                <NavbarNav/>
            </div>
        </nav>
    )
}