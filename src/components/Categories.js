
function Categories() {
    const fruits = ["category 0", "category 1", "category 2", "category 3", "category 4", "category 5", "category 6", "category 7", "category 8", "category 9",];

    const renderFruits = () => {
        const FruitsList = [];
        for (const fruit of fruits) {
            FruitsList.push(<div class="btn" key={fruit}>{fruit}</div>);
        }
        return <div>{FruitsList}</div>;
    };
    return <div class="itemContainer">{renderFruits()}</div>;
}
export default Categories;
