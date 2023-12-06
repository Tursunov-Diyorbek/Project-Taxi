import styles from "./index.module.sass";
import { css } from "@emotion/css";
import { Space, Select, DatePicker, Button } from "antd";
import { CiCalendarDate, CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import type { DatePickerProps } from "antd";

export default function HomePage() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.homePage__filter}>
          <div className={styles.homePage__header}>
            <div className={styles.homePage__headerText}>
              <h3>Chipta xarid qilish</h3>
              <p>
                {
                  "Poyezd chiptasini xarid qilish uchun yo'nalish va sanani tanlang"
                }
              </p>
            </div>
          </div>
          <div className={styles.homePage__direction}>
            <Space>
              <div>
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
                  defaultValue="uzb"
                  onChange={handleChange}
                  options={[
                    {
                      value: "uzb",
                      label: <span>Uzb</span>,
                    },
                    {
                      value: "rus",
                      label: <span>Rus</span>,
                    },
                  ]}
                  showSearch
                  bordered={false}
                />
              </div>
              <FaLongArrowAltRight style={{ fontSize: 25 }} />
              <div>
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
                  defaultValue="uzb"
                  onChange={handleChange}
                  showSearch
                  bordered={false}
                  options={[
                    {
                      value: "uzb",
                      label: <span>Uzb</span>,
                    },
                    {
                      value: "rus",
                      label: <span>Rus</span>,
                    },
                  ]}
                />
              </div>
              <div>
                <CiCalendarDate />
                <Space>
                  <DatePicker onChange={onChange} />
                </Space>
              </div>
              <Button type="primary">
                <CiSearch />
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}
