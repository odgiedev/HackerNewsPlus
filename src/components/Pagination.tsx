export default function Pagination({page, setPage, nbPages}) {
    return (
        <nav className={"d-flex justify-content-center"}>
            <ul className="pagination">
                <li className="page-item">
                    <button
                        onClick={() => {
                            if (page >= 1) {
                                setPage(page - 1)
                            }
                        }}
                        className="page-link text-light bg-dark" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li className="page-item">
                    <button onClick={() => setPage(0)} className="page-link text-light bg-dark">1
                    </button>
                </li>
                <li className="page-item">
                    <button onClick={() => {
                        if ((nbPages - 1) > 0) setPage(1)
                    }} className="page-link text-light bg-dark">2
                    </button>
                </li>
                <li className="page-item">
                    <button onClick={() => {
                        if ((nbPages - 1) > 1) setPage(2)
                    }} className="page-link text-light bg-dark">3
                    </button>
                </li>
                <li className="page-item">
                    <button
                        onClick={() => {
                            if (page <= (nbPages - 2)) {
                                setPage(page + 1)
                            }
                        }}
                        className="page-link text-light bg-dark" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}