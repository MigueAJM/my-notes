import { Module } from "./modules"

export const Navbar = props => {
    const theme = props.theme
    const action = props.action
    const navbar = {
        logo: {
            text: props.logo || '{@MigueAJM}',
            path: 'https://migueajm.github.io/migueljimenezweb'
        },
        social: [
            {
                text: 'github',
                path: 'https://github.com/MigueAJM'
            },
            {
                text: 'linkedin',
                path: 'https://linkedin.com/migueajm'
            },
            {
                text: 'twitter',
                path: 'https://twitter.com/MigueAJM'
            },
            {
                text: theme.icon,
                path: '#toogle-theme',
                event: action
            }
        ]
    }
    return (
        <nav>
            <div className='grid grid-col3-justify-center'>
                <a href={navbar.logo.path} className="navbar-brand">
                    {navbar.logo.text}
                </a>
                <Module/>
                <div className="flex flex-end">
                    { navbar.social.map( social_network  => {
                        return <a key={social_network.text} className="icon" href={social_network.path} onClick={social_network?.event}>
                            <i className={"bi bi-" + social_network.text}></i>
                        </a>
                    })}
                </div>
            </div>
        </nav>
    )
}