import { useState } from "react";

export default function ConditionalRendering() {
    const [filter, setFilter] = useState("active");

    const items = [
        {id: 1, name: "Item 1", status: "active"},
        {id: 2, name: "Item 2", status: "inactive"},
        {id: 3, name: "Item 3", status: "active"},
        {id: 4, name: "Item 4", status: "inactive"},
    ];

    const filteredItems = items.filter((items) => items.status === filter);

    return (
        <div>
            <button onClick={() => setFilter("active")}>Show Active</button>
            <button onClick={() => setFilter("inactive")}>Show Inactive</button>
            <ul>
                {filteredItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}