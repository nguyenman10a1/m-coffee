import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx("container")}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SideBar;
