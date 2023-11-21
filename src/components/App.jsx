import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
    const [items, setItems] = useState([]);

    function onAddNewItem(newItem) {
        setItems((items) => [...items, newItem]);
    }

    function onDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function onToggleItem(id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
    }

    function onClearItems() {
        const confirm = window.confirm("Are you sure?");
        if (confirm) {
            setItems(() => []);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddNewItem={onAddNewItem} />
            <PackingList onClearItems={onClearItems} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} items={items} />
            <Stats items={items} />
        </div>
    );
}

export default App;
