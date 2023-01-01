import { useState } from 'react'
import { Footer } from "../layouts/footer"
import { Header } from "../layouts/header"

export const Main = (props) => {
    const [theme, setTheme] = useState({
        theme: 'dark',
        icon: 'sun'
    })

    const toogleTheme = () => {
        const body = document.querySelector('body')
        if(theme.theme === 'light'){
            body.setAttribute('data-theme', 'dark')
            setTheme({
                theme: 'dark',
                icon: 'sun'
            })
            return console.info('toogle-theme: dark')
        }
        body.setAttribute('data-theme', 'light')
        setTheme({
            theme: 'light',
            icon: 'sun-fill'
        })
        return console.info('toogle-theme: light')
    }
    return (
        <div>
            <Header action={toogleTheme} theme={theme} />
                {props.component}
            <Footer/>
        </div>
    )
}