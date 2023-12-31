import { useRouteError } from 'react-router-dom'; // {useRouteError} is a hook

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <>
            <h1>Ups, you did it again</h1>
            <p>{error.statusText || error.message}</p>
        </>
    );

}