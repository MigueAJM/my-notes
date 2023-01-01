import { useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div id="error_page" className="grid grid-justify-center">
            <div>
                <i className="bi bi-exclamation-diamond"></i>
                <h1> Not found</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    )
}