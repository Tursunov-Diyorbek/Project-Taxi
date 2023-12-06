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
import { FaUserCircle, FaRegUser } from "react-icons/fa";
import Head from "next/head";
import { HiArrowLongRight } from "react-icons/hi2";
import Layout from "@/components/Layout";

const ChoosePlace = () => {
  return (
    <>
      <Head>
        <title>Joy Tanlash</title>
      </Head>
      <main>
        <Layout />
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
                  <HiArrowLongRight />
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
                    />
                    <MdCall
                      className={css`
                        color: #000000;
                        cursor: pointer;
                      `}
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
                      {"Jo'nash vaqtlari mahalliy vaqt bilan ko'rsatilgan."}
                    </p>
                  </div>
                  <p className={styles.departure2__time}>13:40pm</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.choosePlace__contentInfoOrder}>
              <h3>Avtomobil(nomi) joyni tanlang</h3>
              <div className={styles.choosePlace__boxInfo2}>
                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    {"Jami o'rindiqlar"}
                  </p>
                  <p>4</p>
                </div>

                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    {"Bosh o'rindiqlar"}
                  </p>
                  <p>4</p>
                </div>

                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    {"Band o'rindiqlar"}
                  </p>
                  <p>0</p>
                </div>

                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>Narxi</p>
                  <p>100,000 {"so'm"}</p>
                </div>
              </div>
              <div className={styles.choosePlace__carDiv}>
                <img
                  src="../../../Images/car-4.png"
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
      </main>
    </>
  );
};

export default ChoosePlace;
