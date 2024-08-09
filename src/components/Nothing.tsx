import {Ghost} from "@phosphor-icons/react";

export default function Nothing() {
    return (
        <div className={"d-flex flex-column align-items-center justify-content-center text-danger"} style={{height: "70vh"}}>
            <Ghost size={36}/>
            <h3 className={"fw-bold"}>NOTHING YET</h3>
        </div>
    )
}