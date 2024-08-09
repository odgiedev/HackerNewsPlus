export default function Footer() {
    return (
        <div className={"bg-dark fw-bold py-4"}>
            <footer className="d-flex justify-content-center align-items-center">
                <span>{new Date().getFullYear()}</span>
                <span>&copy;&nbsp;</span>
                <span>by <a target={"_blank"} href="https://github.com/odgiedev" className="text-white text-decoration-none">ODGIEDEV.</a></span>
            </footer>
            <p style={{width: "80%"}} className={"text-center mt-4 mx-auto text-uppercase"}>This website is just a fan-made redesign of <a href={"https://www.ycombinator.com/"} target={"_blank"} className={"link-light text-decoration-none"}>YCombinator's</a> <a href={"https://news.ycombinator.com/"} target={"_blank"} className={"link-light text-decoration-none"}>Hacker News</a>. All data shown is the same as the original website.</p>
        </div>
    );
}
