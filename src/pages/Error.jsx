import { useRouteError } from "react-router-dom";

export default function Error() {
    let error = useRouteError();

    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    );
}
