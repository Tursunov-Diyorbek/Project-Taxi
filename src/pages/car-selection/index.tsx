import Head from "next/head";
import Steps from "@/components/Steps";
import styles from "./index.module.sass";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "antd";
import Layout from "@/components/Layout";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import { useState } from "react";
import Loading from "@/components/Loading";

export default function CarSelection() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations();
  const nowDate = new Date();

  const send = () => {
    setLoading(true);
    router.push("/choose-place");
  };

  return (
    <>
      <Head>
        <title>{t("Avtomobil tanlash")}</title>
      </Head>
      <main>
        <Layout />
        <Steps />
        {loading && <Loading />}
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
            <p>{dayjs(nowDate).format("DD - MMMM - YYYY")}</p>
            <h1>
              <span>
                {t("TOSHKENT")} <HiArrowLongRight /> {t("SAMARQAND")}
              </span>{" "}
              {t("boradigan taksilar")}
            </h1>
          </div>

          <div className={styles.listofcars__cards}>
            <div className={styles.listofcars__card}>
              <div className={styles.listofcars__direction}>
                <p>Toshkent</p>
                <FaArrowRightLong />
                <p>Samarqand</p>
              </div>
              <div className={styles.listofcars__nineHundredpx}>
                <p>Ism</p>
                <p>Diko</p>
              </div>
              <div className={styles.listofcars__nineHundredpx}>
                <p>Telefon raqam</p>
                <a href="tel: +998995542526">+998995542526</a>
              </div>
              <div className={styles.listofcars__nineHundredpx}>
                <p>Telegram</p>
                <a href="#">
                  <FaTelegramPlane style={{ fontSize: 17 }} />
                </a>
              </div>
              <div className={styles.listofcars__nineHundredpx}>
                <p>Narx</p>
                <p>
                  {Intl.NumberFormat("en-En").format(100000)} {t("so'm")}
                </p>
              </div>
              <Button type={"primary"} onClick={send}>
                {t("Yuborish")}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../messages/${context.locale}.json`))
        .default,
    },
  };
}
