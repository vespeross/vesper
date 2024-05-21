import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center text-center h-screen items-center">
            <div className="font-mono">
                <p>WUPS, PAGE NOT FOUND</p>
                <Link to={"/dashboard"}>GO HOME?</Link>
            </div>
            <div className="fixed bottom-10">
                <p>VESPER TECHNOLOGIES</p>
            </div>

        </div>
    )
}
