import {ArrowFatUp, ChatText, CursorClick} from "@phosphor-icons/react";
import { format, formatDistanceToNow } from 'date-fns';
import {getDateInfo} from "../utils/dateUtils.ts";

export default function Post({postData, index}) {
    const {fullDate, hour, relative} = getDateInfo(postData.created_at_i);

    return (
        <div className={"d-flex justify-content-center my-4"}>
            <div className="rounded p-4 text-bg-dark w-80 border border-4 border-black" style={{width: "85%"}}>
                <div className="row">
                    <div className={"col-1 d-flex justify-content-center"}>
                        <span className={"fw-bold fs-4 "}>{index}.</span>
                    </div>

                    <div className={"col-11 mb-2 overflow-hidden"}>
                        <h6 className="fw-bold opacity-75">By <a className={"text-decoration-none text-white"} href={`/user/${postData.author}`}>{postData.author}</a> ﹒ {relative}</h6>
                        <a href={postData.url} className="fw-bold h3 text-decoration-none" target={"_blank"}>{postData.title}</a> <br />
                        <small className="mb-2 fw-semibold opacity-75">{fullDate} ﹒ {hour} ﹒ <a href={postData.url} target={"_blank"} className={"link-light"}> {postData.url}</a> </small>
                    </div>

                    <hr />

                    <div className={"row"}>
                        <div className={"col-1"}></div>
                        <button type="button" className="btn btn-success col-2 me-2 d-flex align-items-center justify-content-center fw-bold">
                            <ArrowFatUp size={18} className={"me-1"} /> <span className={"d-none d-md-block"}>{postData.points}</span>
                        </button>
                        <a href={`/comments/${postData.story_id}?owner=${postData.author}`} type="button" className="btn btn-primary col-2 me-2 d-flex align-items-center justify-content-center fw-bold">
                            <ChatText size={18} className={"me-1"} /> <span className={"d-none d-md-block"}>{postData.num_comments}</span>
                        </a>
                        <a href={postData.url} target={"_blank"} className="btn btn-light col-2 me-2 d-flex align-items-center justify-content-center fw-bold">
                            <CursorClick size={20} />
                            <span className={"d-none d-md-block"}>Go</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
