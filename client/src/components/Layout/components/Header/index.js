import { useState, useEffect } from "react";
import dayjs from "dayjs";
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
    const [date, setDate] = useState(dayjs(new Date()));

    useEffect(() => {
        console.log("Choose Date=======:", date);
        console.log("Choose Date=======:", date.format("YYYY-MM-DD"));
    }, [date]);

    return (
        <div className={cx("header")}>
            <div className={cx("title")}>
                <div className={cx("title-welcome")}>Welcome to M Coffee</div>
                <div className={cx("title-content")}>Chosse The Category</div>
            </div>
            <div className={cx("date-picker")}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{
                            width: "50%",
                            "& .MuiInputBase-input": {
                                fontSize: "1.5rem",
                            },
                        }}
                        label="Controlled picker"
                        value={date}
                        onChange={(newValue) => setDate(newValue)}
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
