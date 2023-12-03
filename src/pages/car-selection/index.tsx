import Head from "next/head";
import Steps from "@/components/Steps";
import styles from "./index.module.sass";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "antd";

export default function CarSelection() {
  return (
    <>
      <Head>
        <title>Avtomobil tanlash</title>
      </Head>
      <main>
        <Steps />
        <div className={styles.listofcars}>
          <div className={styles.listofcars__address}>
            <div>
              <CiLocationOn /> | Toshkent
            </div>
            <div>
              <CiLocationOn /> | Samarqand
            </div>
            <div>
              <BsCalendar2Date /> | 03-12-2023
            </div>
          </div>

          <div className={styles.listofcars__taxis}>
            <p>03 dekabr, yakshanba</p>
            <h1>
              <span>
                TOSHKENT <HiArrowLongRight /> SAMARQAND
              </span>{" "}
              boradigan taksilar
            </h1>
          </div>

          <div className={styles.listofcars__cards}>
            <div className={styles.listofcars__card}>
              <div className={styles.listofcars__direction}>
                <p>Toshkent</p>
                <FaArrowRightLong />
                <p>Samarqand</p>
              </div>
              <p>Diko</p>
              <a href="tel: +998995542526">+998995542526</a>
              <a href="#">Telegram</a>
              <p>{"100 000 so'm"}</p>
              <Button>Yuborish</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
