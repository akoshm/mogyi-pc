import Sidebar from "./Sidebar";
import Cards from "./Cards.js";
function Shop() {
    return (<>
        <h2 class="text">Shop</h2>
        <div class="container">
            <Sidebar />
            <div class="content">
                <Cards />
            </div>
        </div>

    </>)
}
export default Shop;
