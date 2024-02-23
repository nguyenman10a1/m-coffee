import Header from "../../../components/Layout/components/Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
    return (
        <div>
            <SideBar />
            <div className="container">
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
