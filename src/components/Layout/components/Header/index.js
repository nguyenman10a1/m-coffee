// import { useState } from "react";
// import DatePicker from "react-datepicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AvatarImg from "../../../../assets/images/avatar.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    // const [startDate, setDate] = useState(new Date());
    // const today = new Date();

    // const selectDateHandler = (d) => {
    //     setDate(d);
    // };

    return (
        <div className={cx("header")}>
            <div className={cx("title")}>
                <div className={cx("title-welcome")}>Welcome to M Coffee</div>
                <div className={cx("title-content")}>Chosse The Category</div>
            </div>
            <div className={cx("date-picker")}>
                {/* <DatePicker
                    dateFormat="yyyy/MM/dd"
                    selected={startDate}
                    onChange={selectDateHandler}
                    minDate={today}
                    todayButton={"Today"}
                /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{
                            width: "50%",
                            "& .MuiInputBase-input": {
                                fontSize: "1.5rem",
                            },
                        }}
                    />
                </LocalizationProvider>
            </div>
            <div className={cx("info")}>
                {/* <FontAwesomeIcon className={cx("avatar")} icon={faUser} /> */}
                <img src={AvatarImg} alt="avatar" className={cx("avatar")}></img>
                <div className={cx("account")}>
                    <div className={cx("account-role")}>Admin</div>
                    <div className={cx("account-name")}>Nguyen Man</div>
                </div>
                <FontAwesomeIcon icon={faBell} className={cx("bell")} />
            </div>
        </div>
    );
}

export default Header;
