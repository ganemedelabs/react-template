import Logo from "../components/Logo.tsx";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="relative flex h-screen items-center justify-center font-sans">
            <div className="absolute h-80 w-80 bg-[#6d1b1b] blur-[10rem]" />
            <div className="z-10 flex flex-col gap-3">
                <Logo rotate={false} />
                <h1 className="text-center">Not Found!</h1>
                <p className="text-center">
                    Go back <Link to="/">home</Link>.
                </p>
            </div>
        </div>
    );
}
