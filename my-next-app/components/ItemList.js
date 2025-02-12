import React, { useState} from "react";

const ItemList = () => {
    const [items, setItems] = useState(["Drake", "Tory Lanez", "A Boogie"]);
    const [newItem, setNewItem] = useState("");
    const [showOnlyA, setShowOnlyA] = useState(false);

    // Add Item to the list
    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    // Delete Item from the list
    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    // Filter items
    const filteredItems = showOnlyA
    ? items.filter((item) => item.startsWith("A"))
    : items;

    return (
        <div>
            <h2>Item List</h2>

            {/* Input field for adding Items */}
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter new item"
            />
                <button onClick={addItem}>Add Item</button>

            {/* Checkbox for filtering */}
        <div>
            <input
                type="checkbox"
                checked={showOnlyA}
                onChange={() => setShowOnlyA(!showOnlyA)}
            />
            <label>Show Only Items Starting with 'A'</label>
        </div>

        {/* Display the list */}
        <ul>
            {filteredItems.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteItem(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default ItemList;