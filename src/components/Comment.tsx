import DOMPurify from 'dompurify';
import {getDateInfo} from "../utils/dateUtils.ts";

export default function Comment({commentData}) {
    const {hour, relative} = getDateInfo(commentData.created_at_i);

    return (
        <div className={"my-4 overflow-hidden"}>
            <h5 className={"fw-bold"}>{commentData.author} ﹒ {relative} ﹒ {hour}</h5>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(commentData.comment_text) }} />
        </div>
    )
}


