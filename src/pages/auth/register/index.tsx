import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Form, Input, Button, Alert } from "antd";
import { css } from "@emotion/css";
import styles from "./index.module.sass";
import { useRouter } from "next/router";
import { PatternFormat } from "react-number-format";

type FieldType = {
  name?: string;
  password?: string;
  number?: string;
  sms?: string;
};

const CustomPasswordInput = ({ ...rest }) => {
  return (
    <PatternFormat
      format="+998 (##) ### ## ##"
      allowEmptyFormatting
      customInput={Input}
      {...rest}
    />
  );
};

export default function Register() {
  const [smsActive, setSMSnotActive] = useState<boolean>(false);
  const router = useRouter();

  const onFinish = (values: any) => {
    if (!smsActive) {
      console.log(values);
      setSMSnotActive(true);
    } else {
      console.log("else", values);
      router.push("/");
    }
  };
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <main className={styles.register}>
        <div className={styles.register__form}>
          <div>
            <h2>{"Ro'yxatdan o'tish"}</h2>
            <Alert
              className={styles.register__alert}
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

            <Form.Item<FieldType>
              name="number"
              rules={[
                {
                  required: true,
                  message: "Iltimos raqamingizni kiriting 📞!",
                },
              ]}
            >
              <CustomPasswordInput />
            </Form.Item>

            {smsActive && (
              <Form.Item<FieldType>
                name="sms"
                rules={[
                  {
                    required: true,
                    message: "Iltimos sms kiriting 📩!",
                  },
                ]}
              >
                <Input placeholder={"Smsni kiriting 📩"} />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {smsActive ? "Kirish" : "SMS"}
              </Button>
            </Form.Item>
          </Form>

          <Link
            href="/auth/login"
            className={css`
              text-decoration: none;
              text-align: end;
            `}
          >
            Kirish
          </Link>
        </div>
      </main>
    </>
  );
}
