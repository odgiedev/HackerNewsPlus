import {SmileySad} from "@phosphor-icons/react";

export default function NotFoundPage() {
    return (
        <a href="/" className="d-flex justify-content-center align-items-center vh-100 w-100 text-center text-decoration-none">
            <div>
                <SmileySad size={70} />
                <span className="d-block mt-2 fw-bold fs-2">Page not found.</span>
            </div>
        </a>
    );
}