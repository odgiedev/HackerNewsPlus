import Post from "../components/Post.tsx";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Ghost, Globe, House, MagnifyingGlass, SortDescending} from "@phosphor-icons/react";
import {Axios} from "../libs/axios.ts";
import Nothing from "../components/Nothing.tsx";
import Pagination from "../components/Pagination.tsx";

export default function PostPage() {
    const [param] = useSearchParams();

    const type = param.get("type");

    const search = param.get("search");

    const [allPost, setAllPost] = useState([])

    const [title, setTitle] = useState(<Globe size={32}/>);

    const [page, setPage] = useState(0)
    const [nbPages, setNbPages] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        if (type === "new") {
            setTitle(<div><h1 className={"d-flex align-items-center justify-content-center fw-bold mt-4"}>
                <SortDescending className={"me-1"} size={36}/> NEW</h1></div>)

            Axios.get(`/search_by_date?tags=story&page=${page}`)
                .then(data => {
                    setAllPost(data.data.hits);
                    setNbPages(data.data.nbPages)
                })
                .catch(() => console.log("An error occurred. Try again later."))
        } else if (search) {
            setTitle(<div><h1 className={"d-flex align-items-center justify-content-center fw-bold mt-4"}>
                <MagnifyingGlass className={"me-1"} size={34}/> SEARCH</h1></div>)

            Axios.get(`/search_by_date?query=${search}&tags=story&page=${page}`)
                .then(data => {
                    setAllPost(data.data.hits);
                })
                .catch(() => console.log("An error occurred. Try again later."))
        } else {
            setTitle(<div><h1 className={"d-flex align-items-center justify-content-center fw-bold pt-4"}><House
                className={"me-1"} size={36}/> HOME</h1></div>)

            Axios.get(`/search?tags=front_page&page=${page}`)
                .then(data => {
                    setAllPost(data.data.hits);
                })
                .catch(() => console.log("An error occurred. Try again later."))
        }
    }, [type, search, page]);
    return (
        <div>
            {title}
            {
                allPost.length > 0
                    ?
                    <>
                        {allPost.map((post, index) => {
                            return (
                                <Post key={post.story_id} index={index + 1} postData={post}/>
                            )
                        })}
                        <Pagination page={page} setPage={setPage} nbPages={nbPages}/>
                    </>
                    :
                    <Nothing />
            }
        </div>
    );
}