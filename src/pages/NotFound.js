import { TbError404 } from "react-icons/tb";

function NotFound() {
    return (
        <div className="flex flex-col items-center gap-10">
            <div>
                <TbError404 className="text-6xl" />
            </div>
            <div>404 Not Found</div>
        </div>
    );
}

export default NotFound;
