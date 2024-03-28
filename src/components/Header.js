import Search from './Search';

function Header({submitHandle, setSearchText, searchText}) {

    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">FinProF8 - Danar Perkasa</a>
                <Search submitHandle={submitHandle} setSearchText={setSearchText} searchText={searchText} />
            </div>
        </nav>
    )
}

export default Header;