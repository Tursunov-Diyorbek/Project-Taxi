import Head from "next/head";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Steps from "@/components/Steps";
import styles from "./index.module.sass";
import { Form, Input, Button } from "antd";

type FieldType = {
  surname?: string;
  name?: string;
  number?: string;
  sms?: string;
};

export default function Confirmation() {
  const [smsActive, setSMSnotActive] = useState<boolean>(false);

  const onFinish = (values: any) => {
    if (!smsActive) {
      console.log(values);
      setSMSnotActive(true);
    } else {
      console.log("else", values);
    }
  };

  return (
    <>
      <Head>
        <title>Tasdiqlash</title>
      </Head>
      <main>
        <Layout />
        <Steps />
        <div className={styles.confirmation}>
          <div className={styles.confirmation__form}>
            <h2>Tasdiqlash</h2>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item<FieldType>
                label="Familya"
                name="surname"
                rules={[
                  { required: true, message: "Please input your Surname!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Ism"
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Raqam"
                name="number"
                rules={[
                  { required: true, message: "Please input your Number!" },
                ]}
              >
                <Input />
              </Form.Item>
              {smsActive && (
                <Form.Item<FieldType>
                  label="Sms"
                  name="sms"
                  rules={[
                    { required: true, message: "Please input your SMS!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              )}
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {smsActive === false ? "SMS" : "Tasdiqlash"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
