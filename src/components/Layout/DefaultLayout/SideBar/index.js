import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import config from "../../../../config";

import Menu, { MenuItem } from "./Menu";
import {
    HomeIcon,
    MenuIcon,
    StatisticIcon,
    OrderIcon,
    SettingIcon,
    LogoutIcon,
} from "../../../../components/Icons/Icons";

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx("sidebar")}>
            <div className={cx("shopname")}>M COFFEE</div>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Menu" to={config.routes.menu} icon={<MenuIcon />} />
                <MenuItem title="Statistic" to={config.routes.statistic} icon={<StatisticIcon />} />
                <MenuItem title="Orders" to={config.routes.orders} icon={<OrderIcon />} />
                <MenuItem title="Settings" to={config.routes.settings} icon={<SettingIcon />} />
                <MenuItem title="Logout" to={config.routes.logout} icon={<LogoutIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;
