import {ArrowFatUp, ChatText, CursorClick} from "@phosphor-icons/react";
import { format, formatDistanceToNow } from 'date-fns';
import {getDateInfo} from "../utils/dateUtils.ts";

export default function Ask({postData, index}) {
    const {fullDate, hour, relative} = getDateInfo(postData.created_at_i);

    return (
        <div className={"d-flex justify-content-center my-4"}>
            <div className="rounded p-4 text-bg-dark w-80 border border-4 border-success-subtle" style={{width: "85%"}}>
                <div className="row">
                    <div className={"col-1"}>
                        <h4 className={"fw-bold"}>{index}.</h4>
                    </div>

                    <div className={"col-11 mb-2"}>
                        <h6 className="fw-bold opacity-75">By <a className={"text-decoration-none text-white"} href={`/user/${postData.author}`}>{postData.author}</a> ﹒ {relative}</h6>
                        <span className={"h3"}>{postData.title}</span> <br />
                        <small className="mb-2 fw-semibold opacity-75">{fullDate} ﹒ {hour}</small>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
