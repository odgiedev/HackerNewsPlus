import {useEffect, useState} from "react";
import PostComment from "../components/PostComment.tsx";
import {Axios} from "../libs/axios.ts";
import {getDateInfo} from "../utils/dateUtils.ts";
import {useParams, useSearchParams} from "react-router-dom";
import {CursorClick} from "@phosphor-icons/react";
import LinedText from "../components/LinedText.tsx";
import Comment from "../components/Comment.tsx";
import Nothing from "../components/Nothing.tsx";
import Pagination from "../components/Pagination.tsx";

export default function CommentPage() {
    const [allComment, setAllComment] = useState([])

    const [postData, setPost] = useState([]);

    const [date, setDate] = useState([]);

    const [page, setPage] = useState(0)
    const [nbPages, setNbPages] = useState(0);

    const {story_id} = useParams();

    const [param] = useSearchParams();

    const owner = param.get("owner");

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        Axios.get(`/search?tags=comment,story_${story_id}&page=${page}`)
            .then(data => {
                setAllComment(data.data["hits"]);

                setPost(data.data["hits"][0])

                setNbPages(data.data.nbPages)

                const {fullDate, hour, relative} = getDateInfo(data.data["hits"][0].created_at_i);

                setDate([fullDate, hour, relative])

            })
            .catch(() => console.log("An error occurred. Try again later."))
    }, [page]);

    return (
        <>
            {
                allComment.length > 0
                    ?
                    <div className={"d-flex justify-content-center my-4"}>
                        <div className="rounded p-4 text-bg-dark w-80 border border-4 border-primary-subtle"
                             style={{width: "85%"}}>
                            <div className="row">
                                <div className={"col-1"}>
                                    <h4 className={"fw-bold"}>0.</h4>
                                </div>

                                <div className={"col-11 mb-2 overflow-hidden"}>
                                    <h6 className="fw-bold opacity-75">By <a className={"text-decoration-none text-white"} href={`/user/${owner}`}>{owner}</a> ﹒ {date[2]}
                                    </h6>
                                    <a href={postData.url} className="fw-bold h3 text-decoration-none"
                                       target={"_blank"}>{postData.story_title}</a> <br/>
                                    <small className="mb-2 fw-semibold opacity-75">{date[0]} ﹒ {date[1]} ﹒ <a
                                        href={postData.story_url} target={"_blank"}
                                        className={"link-light"}> {postData.story_url}</a> </small>
                                </div>

                                <hr/>

                                <div className={"row"}>
                                    <div className={"col-1"}></div>

                                    <a href={postData.story_url} target={"_blank"}
                                       className="btn btn-light col-4 col-md-2 me-2 d-flex align-items-center justify-content-center fw-bold">
                                        <CursorClick size={20}/>
                                        <span>Go</span>
                                    </a>
                                </div>
                            </div>
                            <div className={"row"}>
                                <LinedText text={"Comments"} fontSize={"h3"}/>

                                {
                                    allComment.length > 0
                                        ?
                                        <>
                                            {allComment.map(comment => {
                                                return (
                                                    <Comment key={comment.objectID} commentData={comment}/>
                                                )
                                            })}
                                            <Pagination page={page} setPage={setPage} nbPages={nbPages}/>
                                        </>
                                        :
                                        <Nothing/>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <Nothing/>
            }
        </>
    );
}