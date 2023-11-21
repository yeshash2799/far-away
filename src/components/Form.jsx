import { useState } from "react";

const nums = Array.from({ length: 20 }, (_, i) => i + 1);

function Form({ onAddNewItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleFormSubmit(e) {
        e.preventDefault();

        if (!description) {
            return null;
        }

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        };

        onAddNewItem(newItem);

        setDescription(() => "");
        setQuantity(() => 1);
    }

    function handleDescriptionChange(e) {
        setDescription(() => e.target.value);
    }

    function handleSelectChange(e) {
        setQuantity(() => Number(e.target.value));
    }

    return (
        <form className="add-form" onSubmit={(e) => handleFormSubmit(e)}>
            <h3>What do you need for your trip?</h3>
            <select value={quantity} onChange={(e) => handleSelectChange(e)}>
                {nums.map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Items..." value={description} onChange={(e) => handleDescriptionChange(e)} />
            <button>Add</button>
        </form>
    );
}

export default Form;
