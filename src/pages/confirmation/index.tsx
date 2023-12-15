import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Steps from "@/components/Steps";
import styles from "./index.module.sass";
import { Button, Result } from "antd";
import { useRouter } from "next/router";

export default function Confirmation() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tasdiqlash</title>
      </Head>
      <main>
        <Layout />
        <Steps />
        <div className={styles.confirmation}>
          <Result
            status="success"
            title="Tabriklayman muvaffaqiyatli yakunlandi!"
            extra={[
              <Button type="primary" onClick={() => router.push("/")}>
                Bosh menyuga qaytish
              </Button>,
            ]}
          />
        </div>
      </main>
    </>
  );
}
