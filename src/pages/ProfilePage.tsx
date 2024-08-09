import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import DOMPurify from "dompurify";
import {getDateInfo} from "../utils/dateUtils.ts";
import {Axios} from "../libs/axios.ts";

export default function ProfilePage() {
    const {user} = useParams();

    const [userData, setUserData] = useState([]);

    const [date, setDate] = useState("");

    useEffect(() => {
        Axios.get(`https://hacker-news.firebaseio.com/v0/user/${user}.json`)
            .then(data => {
                console.log(data.data)
                setUserData(data.data);

                const {fullDate} = getDateInfo(data.data.created);

                setDate(fullDate);

            })
            .catch(() => console.log("An error occurred. Try again later."))
    }, []);

    return (
        <>
            <div className={"row justify-content-center align-items-center text-center vh-100"}>
                <div className={"col-10 col-md-7 d-flex flex-column fw-bold bg-dark my-5 rounded border border-4 py-4 bg-gradient-orange"}>
                    <span className={"fw-bold h2 mt-2 mb-4"}>{user}</span>
                    <span className={"mb-2"}>Created At: {date}</span>
                    <span className={"mb-4"}>Karma: {userData.karma}</span>
                    <span>About:</span>
                    <div className={"fw-medium"} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userData.about) }} />
                </div>
            </div>
        </>
    )
}