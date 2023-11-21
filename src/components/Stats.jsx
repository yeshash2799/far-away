function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>Start adding some items to your list</em>
            </footer>
        );
    }

    const numItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((packedItems / numItems) * 100) || 0;

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You have packed everything"
                    : `You have ${numItems} items in your list, and you have already packed ${packedItems} (${percentage}%)`}
            </em>
        </footer>
    );
}

export default Stats;
