import { SocialNetwork } from "./social.network"

export const NavbarNav = () => { 
    const style_ul = {
        '--bs-scroll-height': '100px'
    }
    const social_network = [
        {
            icon: 'bi bi-github',
            tooltip: 'github',
            href: 'https://github.com/MigueAJM/'
        },
        {
            icon: 'bi bi-linkedin',
            tooltip: 'linkedin',
            href: 'https://www.linkedin.com/in/migueajm/'
        },
        {
            icon: 'bi bi-twitter',
            tooltip: 'twitter',
            href: 'https://twitter.com/MigueAJM/'
        }
    ]
    return (
        <>
            <ul className="navbar-nav  navbar-nav-scroll" style={style_ul}>
                { social_network.map( social => {
                    return (
                        <li className="nav-item {social.icon}">
                            <SocialNetwork
                                icon={social.icon}
                                tooltip={social.tooltip}
                                href={social.href}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}