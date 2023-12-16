import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Steps from "@/components/Steps";
import styles from "./index.module.sass";
import { Button, Result } from "antd";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Confirmation() {
  const router = useRouter();
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("Tasdiqlash")}</title>
      </Head>
      <main>
        <Layout />
        <Steps />
        <div className={styles.confirmation}>
          <Result
            status="success"
            title={t("Tabriklayman muvaffaqiyatli yakunlandi!")}
            extra={[
              <Button type="primary" onClick={() => router.push("/")}>
                {t("Bosh sahifaga qaytish")}
              </Button>,
            ]}
          />
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
