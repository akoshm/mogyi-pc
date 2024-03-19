import './LandingPage.css'
import Sidebar from "./Sidebar.js"
export default function Landing() {
    return (
        <>
            <div class="parent">
                <div class="container">
                    <Sidebar />
                    <div class="content">
                        <h2 class="text">Content</h2>

                    </div>
                </div>
            </div>
        </>
    )
}