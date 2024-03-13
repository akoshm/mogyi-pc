import './LandingPage.css'

import Sidebar from "./Sidebar.js"
import Content from "./Content.js"
import Header from "./Header.js"


export default function Landing() {
    return (
        <>
            <div class="parent">
                <Header />
                <div class="container">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </>
    )
}