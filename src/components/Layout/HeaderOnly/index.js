import Header from "../../../components/Layout/components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <div className="container">
                <Header />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
