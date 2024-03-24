import Categories from "./Categories.js"
function Sidebar() {
    return (<>
        <div class="side">
            <div>
                <h2 class="text">Side</h2>
                <input style={{ margin: "10px" }}></input>
                <Categories />
            </div>

        </div>
    </>)
}
export default Sidebar;
