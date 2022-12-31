import '../resources/css/layouts/footer.css'
export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className='text-center'>
            <p>Building by: <a href='github.com/MigueAJM'>@MigueAJM | &copy;2022 - {year}</a></p>
        </footer>
    )
}