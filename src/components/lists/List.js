import ListItem from "./ListItem";

function List({ items, view }) {
    const ListClass = `grid grid-cols-1 gap-8 ${
        view === "project" || view === "demo"
            ? "text-3xl"
            : "xl:grid-cols-4 lg:grids-cols-3 md:grid-cols-2"
    }`;

    return (
        <div className={ListClass}>
            {items.map((item, index) => {
                return (
                    <ListItem
                        key={item.id}
                        item={item}
                        view={view}
                        showDivider={items.length !== index + 1}
                    />
                );
            })}
        </div>
    );
}

export default List;
