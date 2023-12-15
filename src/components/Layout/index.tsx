import styles from "./index.module.sass";
import { css } from "@emotion/css";
import { Space, Select, Button, Typography } from "antd";
import { usePathname } from "next/navigation";
import { PiUserCircleLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Layout() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={css`
        background-color: #fff;
        box-shadow: 0 14px 15px -5px rgba(43, 43, 43, 0.2);
        border-radius: 10px;
      `}
    >
      <div className={styles.layout}>
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 10px;
          `}
        >
          <img src="" alt="logo" />
          <h2 style={{ margin: 0 }}>Taxi</h2>
        </div>
        <div
          className={css`
            display: flex;
            align-items: center;
            gap: 20px;
          `}
        >
          <Space wrap>
            <Select
              defaultValue={"uz"}
              onChange={changeLng}
              options={[
                {
                  value: "uz",
                  label: (
                    <span
                      className={css`
                        display: flex;
                        align-items: center;
                        gap: 5px;
                      `}
                    >
                      <img
                        src="../../../Images/Flag_of_Uzbekistan.svg.png"
                        alt="Uzb"
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "3px",
                        }}
                      />{" "}
                      Uzb
                    </span>
                  ),
                },
                {
                  value: "ru",
                  label: (
                    <span
                      className={css`
                        display: flex;
                        align-items: center;
                        gap: 5px;
                      `}
                    >
                      <img
                        src="../../../Images/Flag_of_Russia.svg.png"
                        alt="Uzb"
                        style={{
                          width: "15px",
                          height: "15px",
                          borderRadius: "3px",
                        }}
                      />{" "}
                      Rus
                    </span>
                  ),
                },
              ]}
            />
          </Space>
          <Link
            href="/auth/login"
            className={css`
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 5px;
              color: #707070;
            `}
          >
            <PiUserCircleLight />
            {/*{t("Kirish")}*/}
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
}
