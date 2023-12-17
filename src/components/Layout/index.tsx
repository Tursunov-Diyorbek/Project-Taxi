import styles from "./index.module.sass";
import { css } from "@emotion/css";
import { Space, Select } from "antd";
import { PiUserCircleLight } from "react-icons/pi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Layout() {
  const t = useTranslations();
  const router = useRouter();
  const { locale, locales, push } = useRouter();
  const pathname = usePathname();

  const changeLanguage = (value: string) => {
    if (pathname === "/") {
      push("/", undefined, { locale: value });
    } else if (pathname === "/car-selection") {
      push("/car-selection", undefined, { locale: value });
    } else if (pathname === "/choose-place") {
      push("/choose-place", undefined, { locale: value });
    } else if (pathname === "/confirmation") {
      push("/confirmation", undefined, { locale: value });
    } else if (pathname === "/taxi-page") {
      push("/taxi-page", undefined, { locale: value });
    }
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
            cursor: pointer;
          `}
          onClick={() => router.push("/")}
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
              defaultValue={locale}
              onChange={changeLanguage}
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
            {t("Kirish")}
          </Link>
        </div>
      </div>
    </div>
  );
}
