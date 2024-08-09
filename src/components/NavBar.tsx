import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {House, MagnifyingGlass, SealQuestion, SortDescending} from "@phosphor-icons/react";

export default function NavBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();

        navigate(`/?search=${search}`)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img height={46} alt={"Logo"} src={"/HN.png"}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="/"><House size={24} className={"me-1"}/> Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="/?type=new"><SortDescending size={24} className={"me-1"}/> New</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center" href="/ask"><SealQuestion size={24} className={"me-1"}/> Ask</a>

                        </li>
                    </ul>
                    <form onSubmit={handleSearch} className="d-flex align-items-center" role="search">
                        <MagnifyingGlass size={28} className={"me-1"} />
                        <input onChange={(event) => setSearch(event.target.value)} className="form-control me-2"
                               placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </div>
        </nav>
    );
}