import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faCoins, faUsers } from "@fortawesome/free-solid-svg-icons";
import { LineChart } from "@mui/x-charts/LineChart";
import Cappuccino from "../../assets/images/cappuccino.png";
import Latte from "../../assets/images/latte.png";
import Frappuccino from "../../assets/images/frappe.png";
import Mocha from "../../assets/images/mocha.png";
import MilkCoffee from "../../assets/images/milkcoffee.png";

import classNames from "classnames/bind";
import styles from "./Statistic.module.scss";

const cx = classNames.bind(styles);

const xLabels = ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];

const ordersData = [80, 60, 140, 100, 230, 90, 155, 135, 150, 90, 190, 120];

const handleCountCustomer = () => {
    console.log("More info handleCountCustomer");
};

const handleCountOrder = () => {
    console.log("More info handleCountOrder");
};

const handleCountEarning = () => {
    console.log("More info handleCountEarning");
};

function Statistic() {
    return (
        <div className={cx("statistic-page")}>
            <div className={cx("num-data-wrapper")}>
                <div className={cx("num-data")}>
                    <div className={cx("num-name")}>Total order</div>
                    <div className={cx("num-info")}>
                        <div className={cx("num-order")}>100</div>
                        <FontAwesomeIcon className={cx("num-icon")} icon={faFileInvoice} />
                    </div>
                    <button className={cx("info-btn")} onClick={handleCountOrder}>
                        More info
                    </button>
                </div>
                <div className={cx("num-data")}>
                    <div className={cx("num-name")}>Total earning</div>
                    <div className={cx("num-info")}>
                        <div className={cx("num-order")}>$1510</div>
                        <FontAwesomeIcon className={cx("num-icon")} icon={faCoins} />
                    </div>
                    <button className={cx("info-btn")} onClick={handleCountEarning}>
                        More info
                    </button>
                </div>
                <div className={cx("num-data")}>
                    <div className={cx("num-name")}>Customer</div>
                    <div className={cx("num-info")}>
                        <div className={cx("num-order")}>2023</div>
                        <FontAwesomeIcon className={cx("num-icon")} icon={faUsers} />
                    </div>
                    <button className={cx("info-btn")} onClick={handleCountCustomer}>
                        More info
                    </button>
                </div>
            </div>
            <div className={cx("graph-data-wrapper")}>
                <div className={cx("graph")}>
                    <div className={cx("graph-title")}>
                        <div className={cx("graph-name")}>Sales Analytics</div>
                        <div className={cx("graph-see-btn")}>See all</div>
                    </div>
                    <LineChart
                        className={cx("graph-content")}
                        xAxis={[{ scaleType: "point", data: xLabels }]}
                        series={[
                            {
                                data: ordersData,
                                area: true,
                                color: "#ddb6a6",
                            },
                        ]}
                        width={830}
                        height={350}
                        sx={{ marginRight: "-30px" }}
                    />
                </div>
                <div className={cx("trend")}>
                    <div className={cx("trend-title")}>
                        <div className={cx("trend-title-name")}>Most ordered</div>
                        <div className={cx("trend-title-btn")}>See all</div>
                    </div>
                    <div className={cx("trend-content")}>
                        <img src={Cappuccino} alt="Cappuccino" className={cx("coffee-img")}></img>
                        <div className={cx("trend-info")}>
                            <div className={cx("trend-name")}>Cappuccino</div>
                            <div className={cx("trend-price")}>$2</div>
                        </div>
                        <div className={cx("trend-quantity")}>240</div>
                    </div>
                    <div className={cx("trend-content")}>
                        <img src={Latte} alt="Latte" className={cx("coffee-img")}></img>
                        <div className={cx("trend-info")}>
                            <div className={cx("trend-name")}>Latte</div>
                            <div className={cx("trend-price")}>$2</div>
                        </div>
                        <div className={cx("trend-quantity")}>240</div>
                    </div>
                    <div className={cx("trend-content")}>
                        <img src={Frappuccino} alt="Frappuccino" className={cx("coffee-img")}></img>
                        <div className={cx("trend-info")}>
                            <div className={cx("trend-name")}>Frappuccino</div>
                            <div className={cx("trend-price")}>$2</div>
                        </div>
                        <div className={cx("trend-quantity")}>240</div>
                    </div>
                    <div className={cx("trend-content")}>
                        <img src={Mocha} alt="Mocha" className={cx("coffee-img")}></img>
                        <div className={cx("trend-info")}>
                            <div className={cx("trend-name")}>Mocha</div>
                            <div className={cx("trend-price")}>$2</div>
                        </div>
                        <div className={cx("trend-quantity")}>240</div>
                    </div>
                    <div className={cx("trend-content")}>
                        <img src={MilkCoffee} alt="MilkCoffee" className={cx("coffee-img")}></img>
                        <div className={cx("trend-info")}>
                            <div className={cx("trend-name")}>Milk coffee</div>
                            <div className={cx("trend-price")}>$2</div>
                        </div>
                        <div className={cx("trend-quantity")}>240</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
