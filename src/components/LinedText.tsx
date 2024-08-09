export default function LinedText({ text, fontSize }) {
    return (
        <div className="lined-title my-5">
            <span className={fontSize}>{text}</span>
        </div>
    );
}
