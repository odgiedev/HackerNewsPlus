import {useEffect, useState} from "react";
import Ask from "../components/Ask.tsx";
import {House, SealQuestion} from "@phosphor-icons/react";
import {Axios} from "../libs/axios.ts";
import Nothing from "../components/Nothing.tsx";
import Pagination from "../components/Pagination.tsx";

export default function AskPage() {
    const [allAsk, setAllAsk] = useState([]);

    const [page, setPage] = useState(0)
    const [nbPages, setNbPages] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });

        Axios.get(`/search_by_date?tags=story&page=${page}`)
            .then(data => {
                setAllAsk(data.data.hits);
                setNbPages(data.data.nbPages)
            })
            .catch(() => console.log("An error occurred. Try again later."))
    }, [page])

    return (
        <>
            <div><h1 className={"d-flex align-items-center justify-content-center fw-bold pt-4"}><SealQuestion
                className={"me-1"} size={36}/> ASK</h1></div>

            {
                allAsk.length > 0
                    ?
                    <>
                        {allAsk.map((post, index) => {
                            return (
                                <Ask key={post.story_id} index={index + 1} postData={post}/>
                            )
                        })}

                        <Pagination page={page} setPage={setPage} nbPages={nbPages}/>
                    </>
                    :
                    <Nothing />
            }

        </>
    )
}