
function Items() {
    const fruits = ["Operációs rendszerek",
        "Irodai alkalmazások",
        "PC alkatrészek",
        "Videokártyák",
        "SSD meghajtók",
        "Merevlemezek",
        "Memóriák",
        "Alaplapok",
        "Processzorok",
        "Processzor hűtők",
        "Tápegységek",
        "Számítógépházak",
        "Hálózatok és megfigyelő rendszerek",
        "WiFi routerek"];
    const renderFruits = () => {
        const FruitsList = [];
        for (const fruit of fruits) {
            FruitsList.push(<li class="btn" key={fruit}>{fruit}</li>);
        }
        return <ul>{FruitsList}</ul>;
    };
    return <div>{renderFruits()}</div>;
}
export default Items;
