import Sidebar from "./Sidebar";
import Items from "./Items.js";
function Shop() {
    return (<>
        <div class="header">
            <h2 class="text">Shop</h2>
            <div class="container">
                <Sidebar />
                <div class="content"><Items /></div>
            </div>

        </div>
    </>)
}
export default Shop;
