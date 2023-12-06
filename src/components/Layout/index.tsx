import styles from "./index.module.sass";
import { css } from "@emotion/css";
import { Space, Select } from "antd";
import { usePathname } from "next/navigation";

export default function Layout() {
  const pathname = usePathname();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
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
        <div>
          <img src="" alt="logo" />
        </div>
        <div>
          <Space wrap>
            <Select
              defaultValue="uzb"
              onChange={handleChange}
              options={[
                {
                  value: "uzb",
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
                  value: "rus",
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
                        className={css`
                          width: 15px;
                          height: 15px;
                          border-radius: 3px;
                        `}
                      />{" "}
                      Rus
                    </span>
                  ),
                },
              ]}
            />
          </Space>
        </div>
      </div>
    </div>
  );
}
