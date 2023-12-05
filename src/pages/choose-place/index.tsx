// index.tsx
import Steps from "@/components/Steps";
import React from "react";
import styles from "./index.module.sass";
import { Tag, Button } from "antd";
import { SiTelegram } from "react-icons/si";
import {
  MdOutlineAccessTime,
  MdCall,
  MdOutlineWhereToVote,
  MdWhereToVote,
  MdConnectWithoutContact,
} from "react-icons/md";
import { css } from "@emotion/css";
import { SvgArrow, SvgArrowDown } from "./svgArrow";
import { FaUserCircle, FaRegUser } from "react-icons/fa";

const handleCallClick = () => {
  const phoneNumber = "(90)000-00-00"; // Replace this with your desired phone number
  window.location.href = `tel:${phoneNumber}`;
};

const handleTelegramClick = () => {
  const telegramLink = "https://t.me/your_telegram_chat"; // Replace with your Telegram chat link
  window.open(telegramLink, "_blank");
};

const ChoosePlace = () => {
  return (
    <>
      <div>
        <Steps />
        <div className={styles.choosePlace}>
          <div>
            <div className={styles.choosePlace__boxInfo}>
              <div className={styles.choosePlace__boxContent}>
                <div className={styles.choosePlace__departure}>
                  <p className={styles.choosePlace__aboutUser}>
                    Diko
                    <FaUserCircle />
                  </p>
                  <p className={styles.choosePlace__region}>
                    Toshkent:
                    <MdOutlineWhereToVote
                      className={css`
                        color: #01c3a7;
                      `}
                    />
                  </p>
                  <p className={styles.choosePlace__TgandTel}>
                    Boglanish
                    <MdConnectWithoutContact
                      className={css`
                        color: #0175c3;
                      `}
                    />
                  </p>
                </div>
                <div className={styles.choosePlace__iconSvgRow}>
                  <SvgArrow />
                </div>
                <div className={styles.choosePlace__arrive}>
                  <p className={styles.choosePlace__userTel}>(90)000-00-00</p>
                  <p className={styles.choosePlace__region}>
                    <MdWhereToVote
                      className={css`
                        color: #0175c3;
                      `}
                    />
                    :Samarqand
                  </p>
                  <div className={styles.choosePlace__media}>
                    <SiTelegram
                      className={css`
                        color: #0175c3;
                        cursor: pointer;
                      `}
                      onClick={handleTelegramClick}
                    />
                    <MdCall
                      className={css`
                        color: #000000;
                        cursor: pointer;
                      `}
                      onClick={handleCallClick}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.choosePlace__boxContent2}>
                <div className={styles.departure2}>
                  <Tag color="success">Avtomobil</Tag>
                  <span className={styles.departure2__carNumber}>01A200AA</span>
                  <div className={styles.departure2__content}>
                    <MdOutlineAccessTime
                      className={css`
                        color: #9c9c9c;
                      `}
                    />
                    <p className={styles.departure2__arriveTime}>
                      Jo'nash vaqtlari mahalliy vaqt bilan ko'rsatilgan.
                    </p>
                  </div>
                  <p className={styles.departure2__time}>13:40pm</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={css`
                margin: 30px 0px;
              `}>
              <h3>Avtomobil(nomi) joyni tanlang</h3>
            </div>
            <div className={styles.choosePlace__contentInfoOrder}>
              <div className={styles.choosePlace__boxInfo2}>
                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    Jami o'rindiqlar
                  </p>
                  <p>4</p>
                </div>
                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    Bosh o'rindiqlar
                  </p>
                  <p>4</p>
                </div>
                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    Band o'rindiqlar
                  </p>
                  <p>0</p>
                </div>
                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>Narxi</p>
                  <p>100,000 so'm</p>
                </div>
              </div>
              <div className={styles.choosePlace__arrowDiv}>
                <p>Rasmdan 4 tagacha joyni tanlang</p>
                <SvgArrowDown />
              </div>
              <div className={styles.choosePlace__carDiv}>
                <img
                  src="../../../images/car-4.png"
                  alt="Car"
                  className={styles.choosePlace__carDivImage}
                />
                
                <Button>
                  <FaRegUser />
                </Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePlace;
