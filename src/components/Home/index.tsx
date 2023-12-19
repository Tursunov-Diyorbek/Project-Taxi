import styles from "./index.module.sass";
import { Select, DatePicker, Button } from "antd";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import type { DatePickerProps } from "antd";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Loading from "@/components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTelegram } from "react-icons/fa";
import { GetStaticPropsContext } from "next";

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const t = useTranslations();
  const router = useRouter();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const search = () => {
    setLoading(true);
    router.push("/car-selection");
  };

  return (
    <>
      <ToastContainer />
      {loading && <Loading />}
      <div className={styles.homePage}>
        <div className={styles.homePage__filter}>
          <div className={styles.homePage__header}>
            <div className={styles.homePage__headerText}>
              <h3>Express Go</h3>
              <p>{t("Bizda xammasi qulay va hamyonbop")}</p>
            </div>
          </div>
          <div className={styles.homePage__direction}>
            <div className={styles.homePage__select}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9498 6.05026C14.2161 3.31658 9.78392 3.31658 7.05026 6.05026L7.05026 6.05026C4.31659 8.78392 4.31658 13.2161 7.05024 15.9498C7.05025 15.9498 7.05025 15.9498 7.05026 15.9498L11.2937 20.1932C11.684 20.5835 12.3159 20.5836 12.7067 20.1928L16.9498 15.9498C16.9498 15.9498 16.9498 15.9498 16.9498 15.9498C19.6834 13.2161 19.6834 8.7839 16.9498 6.05026ZM5.63604 4.63604C9.15076 1.12132 14.8493 1.12132 18.364 4.63604L18.364 4.63605C21.8786 8.15077 21.8786 13.8493 18.364 17.364L18.364 17.364L14.1209 21.607C12.9495 22.7784 11.0514 22.7793 9.87949 21.6074L9.87948 21.6074L5.63606 17.364L5.63604 17.364C2.12132 13.8493 2.12132 8.15076 5.63604 4.63604"
                  fill="#01C3A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 9C10.8954 9 10 9.89542 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89542 13.1046 9 12 9ZM8 11C8 8.79088 9.7908 7 12 7C14.2092 7 16 8.79088 16 11C16 13.2092 14.2092 15 12 15C9.79082 15 8 13.2092 8 11Z"
                  fill="#292B3F"
                />
              </svg>
              <Select
                onChange={handleChange}
                showSearch
                bordered={false}
                className={styles.homePage__where}
                placeholder={t("Qayerdan")}
                options={[
                  {
                    value: "toshkent",
                    label: <span>Toshkent</span>,
                  },
                  {
                    value: "samarqand",
                    label: <span>Samarqand</span>,
                  },
                  {
                    value: "buxoro",
                    label: <span>Buxoro</span>,
                  },
                  {
                    value: "navoiy",
                    label: <span>Navoiy</span>,
                  },
                  {
                    value: "andijon",
                    label: <span>Andijon</span>,
                  },
                  {
                    value: "xorazm",
                    label: <span>Xorazm</span>,
                  },
                  {
                    value: "jizzax",
                    label: <span>Jizzax</span>,
                  },
                  {
                    value: "qashqadaryo",
                    label: <span>Qashqadaryo</span>,
                  },
                  {
                    value: "surxondaryo",
                    label: <span>Surxondaryo</span>,
                  },
                  {
                    value: "farg'ona",
                    label: <span>{"Farg'ona"}</span>,
                  },
                  {
                    value: "namangan",
                    label: <span>Namangan</span>,
                  },
                  {
                    value: "sirdaryo",
                    label: <span>Sirdaryo</span>,
                  },
                ]}
              />
            </div>
            <div className={styles.homePage__select}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9498 6.05026C14.2161 3.31658 9.78392 3.31658 7.05026 6.05026L7.05026 6.05026C4.31659 8.78392 4.31658 13.2161 7.05024 15.9498C7.05025 15.9498 7.05025 15.9498 7.05026 15.9498L11.2937 20.1932C11.684 20.5835 12.3159 20.5836 12.7067 20.1928L16.9498 15.9498C16.9498 15.9498 16.9498 15.9498 16.9498 15.9498C19.6834 13.2161 19.6834 8.7839 16.9498 6.05026ZM5.63604 4.63604C9.15076 1.12132 14.8493 1.12132 18.364 4.63604L18.364 4.63605C21.8786 8.15077 21.8786 13.8493 18.364 17.364L18.364 17.364L14.1209 21.607C12.9495 22.7784 11.0514 22.7793 9.87949 21.6074L9.87948 21.6074L5.63606 17.364L5.63604 17.364C2.12132 13.8493 2.12132 8.15076 5.63604 4.63604"
                  fill="#01C3A7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 9C10.8954 9 10 9.89542 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89542 13.1046 9 12 9ZM8 11C8 8.79088 9.7908 7 12 7C14.2092 7 16 8.79088 16 11C16 13.2092 14.2092 15 12 15C9.79082 15 8 13.2092 8 11Z"
                  fill="#292B3F"
                />
              </svg>
              <Select
                onChange={handleChange}
                showSearch
                bordered={false}
                className={styles.homePage__where}
                placeholder={t("Qayerga")}
                options={[
                  {
                    value: "toshkent",
                    label: <span>Toshkent</span>,
                  },
                  {
                    value: "navoiy",
                    label: <span>Navoiy</span>,
                  },
                  {
                    value: "buxoro",
                    label: <span>Buxoro</span>,
                  },
                  {
                    value: "samarqand",
                    label: <span>Samarqand</span>,
                  },
                  {
                    value: "andijon",
                    label: <span>Andijon</span>,
                  },
                  {
                    value: "xorazm",
                    label: <span>Xorazm</span>,
                  },
                  {
                    value: "jizzax",
                    label: <span>Jizzax</span>,
                  },
                  {
                    value: "qashqadaryo",
                    label: <span>Qashqadaryo</span>,
                  },
                  {
                    value: "surxondaryo",
                    label: <span>Surxondaryo</span>,
                  },
                  {
                    value: "farg'ona",
                    label: <span>{"Farg'ona"}</span>,
                  },
                  {
                    value: "namangan",
                    label: <span>Namangan</span>,
                  },
                  {
                    value: "sirdaryo",
                    label: <span>Sirdaryo</span>,
                  },
                ]}
              />
            </div>
            <div className={styles.homePage__select}>
              <CiCalendarDate style={{ fontSize: 20 }} />
              <DatePicker
                onChange={onChange}
                bordered={false}
                placeholder={t("Ketish vaqti")}
                className={styles.homePage__where}
                format={"DD.MM.YYYY"}
              />
            </div>
            <Button type="primary" onClick={search}>
              <CiSearch style={{ fontSize: 19 }} />
            </Button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>
          <p>© Express Go 2023</p>
          <a href="https://t.me/Front_End_DeveIoper" target="_blank">
            <FaTelegram /> {t("Biz bilan bog'lanish")}
          </a>
        </div>
      </footer>
    </>
  );
}
