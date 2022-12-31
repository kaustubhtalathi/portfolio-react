function ListItem({ item, view, showDivider }) {
    if (item) {
        if (view === "project") {
            return (
                <div className="flex flex-col text-center w-full">
                    <div className="">{item.title}</div>
                    <div className="mt-0 mb-0 ml-auto mr-auto">
                        <figure>
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                width="940"
                            />
                        </figure>
                    </div>
                    {showDivider && <div className="divider"></div>}
                </div>
            );
        } else if (view === "demo") {
            return (
                <div className="flex flex-col text-center w-full">
                    <div className="">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={item.url}
                            className="link link-neutral"
                        >
                            {item.title}
                        </a>
                    </div>
                    {showDivider && <div className="divider"></div>}
                </div>
            );
        }

        return (
            <div className="card shadow-md compact side bg-base-100">
                <div className="flex-col items-center space-x-4 card-body">
                    <div>
                        <figure>
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                width="200"
                            />
                        </figure>
                    </div>
                    <div>
                        <p className="card-title text-center">{item.title}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
