import { Navbar } from "../components/navbar";
export const Header = (props) => {
    const action = props.action
    const theme = props.theme
    return (
       <>
        <Navbar logo="{@MigueAJM}" action={action} theme={theme}/>
       </>
    )
}