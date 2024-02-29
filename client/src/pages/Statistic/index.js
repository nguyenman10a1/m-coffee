import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice, faCoins, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush } from "recharts";

import Cappuccino from "../../assets/images/cappuccino.png";
// import Latte from "../../assets/images/latte.png";
// import Frappuccino from "../../assets/images/frappe.png";
// import Mocha from "../../assets/images/mocha.png";
// import Milkcoffee from "../../assets/images/milkcoffee.png";

import classNames from "classnames/bind";
import styles from "./Statistic.module.scss";

const cx = classNames.bind(styles);

const handleCountCustomer = () => {
    console.log("More info handleCountCustomer");
};

const handleCountOrder = () => {
    console.log("More info handleCountOrder");
};

const handleCountEarning = () => {
    console.log("More info handleCountEarning");
};

function handleGraphData(inputData) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const numberOfDaysInMonth = new Date(year, month, 0).getDate();

    const graphData = [];

    for (let day = 1; day <= numberOfDaysInMonth; day++) {
        const formattedDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}`;
        graphData.push(formattedDate);
    }

    console.log("inputData======", inputData);

    const resultArray = graphData.map((day) => {
        const matchingData = inputData.find((item) => {
            const formattedDate = new Date(item.sale_date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
            });
            console.log("formattedDate======", formattedDate);
            return formattedDate === day;
        });

        return {
            name: day,
            vnd: matchingData ? matchingData.daily_revenue : 0,
        };
    });
    console.log("resultArray======", resultArray);

    return resultArray;
}

function Statistic() {
    const [orders, setOrders] = useState();
    const [dailyIncome, setDailyIncome] = useState();
    const [numberOfCustomers, setNumberOfCustomers] = useState();
    const [mostOrdered, setMostOrdered] = useState();
    const [graphData, setGraphData] = useState([]);

    //get number of orders
    useEffect(() => {
        fetch("http://localhost:4000/api/orders")
            .then((response) => response.json())
            .then((data) => {
                setOrders(data.number_of_orders);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    //get daily income
    useEffect(() => {
        fetch("http://localhost:4000/api/orders/income")
            .then((response) => response.json())
            .then((data) => {
                setDailyIncome(data.daily_income);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    //get number of customer
    useEffect(() => {
        fetch("http://localhost:4000/api/customers")
            .then((response) => response.json())
            .then((data) => {
                setNumberOfCustomers(data.number_of_customers);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    //get trending coffee
    useEffect(() => {
        fetch("http://localhost:4000/api/orders/most-ordered")
            .then((response) => response.json())
            .then((data) => {
                setMostOrdered(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:4000/api/orders/month-revenue")
            .then((response) => response.json())
            .then((data) => {
                const graphDataHandled = handleGraphData(data);
                setGraphData(graphDataHandled);
                console.log("graphDataHandled==", graphDataHandled);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className={cx("statistic-page")}>
            <div className={cx("num-data-wrapper")}>
                <div className={cx("num-data")}>
                    <div className={cx("num-name")}>Total order</div>
                    <div className={cx("num-info")}>
                        <div className={cx("num-order")}>{orders ? orders : 0}</div>
                        <FontAwesomeIcon className={cx("num-icon")} icon={faFileInvoice} />
                    </div>
                    <button className={cx("info-btn")} onClick={handleCountOrder}>
                        More info
                    </button>
                </div>
                <div className={cx("num-data")}>
                    <div className={cx("num-name")}>Total earning</div>
                    <div className={cx("num-info")}>
                        <div className={cx("num-order")}>{dailyIncome ? dailyIncome : 0}</div>
                        <FontAwesomeIcon className={cx("num-icon")} icon={faCoins} />
                    </div>
                    <button className={cx("info-btn")} onClick={handleCountEarning}>
                        More info
                    </button>
                </div>
                <div className={cx("num-data")}>
                    <div className={cx("num-name")}>Customer</div>
                    <div className={cx("num-info")}>
                        <div className={cx("num-order")}>{numberOfCustomers ? numberOfCustomers : 0}</div>
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
                    {graphData ? (
                        <ResponsiveContainer width="100%" height={360}>
                            <AreaChart
                                width={700}
                                height={360}
                                data={graphData}
                                margin={{
                                    top: 10,
                                    right: 50,
                                    left: 30,
                                    bottom: 10,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="vnd" stroke="#e7d1c9" fill="#e7d1c9" />
                                <Brush
                                    dataKey="name"
                                    width={"100%"}
                                    height={30}
                                    startIndex={10}
                                    endIndex={19}
                                    stroke="#aa715a"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={cx("trend")}>
                    <div className={cx("trend-title")}>
                        <div className={cx("trend-title-name")}>Most ordered</div>
                        <div className={cx("trend-title-btn")}>See all</div>
                    </div>
                    <>
                        {mostOrdered ? (
                            mostOrdered.map(function (item) {
                                return (
                                    <div className={cx("trend-content")} key={item.id}>
                                        <img src={Cappuccino} alt="beverage" className={cx("coffee-img")}></img>
                                        <div className={cx("trend-info")}>
                                            <div className={cx("trend-name")}>{item.product_name}</div>
                                            <div className={cx("trend-price")}>{item.total_revenue}</div>
                                        </div>
                                        <div className={cx("trend-quantity")}>{item.total_sold}</div>
                                    </div>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
