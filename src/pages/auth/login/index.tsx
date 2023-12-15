import Head from "next/head";
import styles from "./index.module.sass";
import { Form, Input, Button, Alert } from "antd";
import Link from "next/link";
import { css } from "@emotion/css";
import React from "react";

type FieldType = {
  name?: string;
  password?: string;
};

export default function Login() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <main className={styles.login}>
        <div className={styles.login__form}>
          <div>
            <h2>Tizimga kirish</h2>
            <Alert
              className={styles.login__alert}
              message="Shaxsiy kabinetingizni himoya qilish maqsadida, parolingizni muntazam yangilab turishingizni tavsiya qilamiz."
              type="warning"
            />
          </div>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item<FieldType>
              name="name"
              rules={[
                { required: true, message: "Iltimos ismingizni kiriting 📝!" },
              ]}
            >
              <Input placeholder={"Ismni kiriting 📝"} />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                {
                  required: true,
                  message: "Iltimos parolingizni kiriting 🔓!",
                },
              ]}
            >
              <Input.Password placeholder={"Parolni kiriting 🔓"} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Kirish
              </Button>
            </Form.Item>
          </Form>

          <Link
            href="/auth/register"
            className={css`
              text-decoration: none;
              text-align: end;
            `}
          >
            {"Ro'yxatdan o'tish"}
          </Link>
        </div>
      </main>
    </>
  );
}
