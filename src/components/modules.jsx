import { Link } from "react-router-dom"
export const Module = () => {
    const modules = [
        {
            text: 'Home',
            path: '/my-notes',
        },
        {
            text: 'Notes',
            path: '/my-notes/notes'
        },
        {
            text: 'Projects',
            path: '/my-notes/projects'
        },
    ]
    const toogleModule = (element) => {
        const elements = document.querySelectorAll('.module')
        console.log({elements})
        elements.forEach(element => {
            if(!element.classList.contains('active'))
                return false
            return element.classList.remove('active')
        })
        element.target.classList.add('active')
    }
    return (
        <ul className="flex">
            {modules.map(module => {
                const active = module.active || ''
                return <li  key={module.text} >
                                <Link to={module.path} onClick={toogleModule} className={"module "+active}>{module.text}</Link>
                            </li>
            })}
        </ul>
    )
}