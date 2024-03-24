
function Cards() {
    const products = [
        "product 0",
        "product 1",
        "product 2",
        "product 3",
        "product 4",
        "product 5",
        "product 6",
        "product 7",
        "product 8",
        "product 9",
    ];

    ;
    const renderProds = () => {
        const prodsList = [];
        for (const prod of products) {
            prodsList.push(<div class="btn" key={prod}>{prod}</div>);
        }
        return <div>{prodsList}</div>;
    };
    return <div class="CardContainer">{renderProds()}</div>;
}
export default Cards;
