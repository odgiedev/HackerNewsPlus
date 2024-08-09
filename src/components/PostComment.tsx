import {ArrowFatUp, ChatText, CursorClick} from "@phosphor-icons/react";
import { format, formatDistanceToNow } from 'date-fns';
import LinedText from "./LinedText.tsx";
import {getDateInfo} from "../utils/dateUtils.ts";
import Comment from "./Comment.tsx";
import {useSearchParams} from "react-router-dom";

export default function PostComment({postData, allComment}) {
    const {fullDate, hour, relative} = getDateInfo(postData.created_at_i);

    const [param] = useSearchParams();
    const owner = param.get("owner");

    return (
        <div className={"d-flex justify-content-center my-4"}>
            <div className="rounded p-4 text-bg-dark w-80 border border-4 border-primary-subtle" style={{width: "85%"}}>
                <div className="row">
                    <div className={"col-1"}>
                        <h4 className={"fw-bold"}>0.</h4>
                    </div>

                    <div className={"col-11 mb-2"}>
                        <h6 className="fw-bold opacity-75">By <a className={"text-decoration-none text-white"} href={`/user/${owner}`}>{owner}</a> ﹒ {relative}</h6>
                        <a href={postData.url} className="fw-bold h3 text-decoration-none" target={"_blank"}>{postData.story_title}</a> <br />
                        <small className="mb-2 fw-semibold opacity-75">{fullDate} ﹒ {hour} ﹒ <a href={postData.story_url} target={"_blank"} className={"link-light"}> {postData.story_url}</a> </small>
                    </div>

                    <hr />

                    <div className={"row"}>
                        <div className={"col-1"}></div>
                        <a href={postData.story_url} target={"_blank"} className="btn btn-light col-2 me-2 d-flex align-items-center justify-content-center fw-bold">
                            <CursorClick size={20} />
                            <span>Go</span>
                        </a>
                    </div>
                </div>
                <div className={"row"}>
                    <LinedText text={"Comments"} fontSize={"h3"} />

                    {
                        allComment.length > 0
                        &&
                        allComment.map(comment => {
                            return (
                                <Comment key={comment.objectID} commentData={comment}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
