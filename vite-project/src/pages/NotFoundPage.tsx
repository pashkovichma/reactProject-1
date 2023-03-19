import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1>404</h1>
            <Link to="/">GO TO MAIN PAGE</Link>
        </>
    );
}

export default NotFoundPage;