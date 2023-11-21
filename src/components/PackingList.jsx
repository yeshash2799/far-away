import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState("input");

    function handleSortChange(e) {
        setSortBy(() => e.target.value);
    }

    let sortedItems;

    if (sortBy === "input") {
        sortedItems = items;
    }

    if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }

    if (sortBy === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item {...item} key={item.id} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => handleSortChange(e)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description order</option>
                    <option value="packed">Sort by packed order</option>
                </select>
                <button onClick={() => onClearItems()}>Clear</button>
            </div>
        </div>
    );
}

export default PackingList;
