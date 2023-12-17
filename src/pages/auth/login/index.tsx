import Head from "next/head";
import styles from "./index.module.sass";
import { Form, Input, Button, Alert } from "antd";
import Link from "next/link";
import { css } from "@emotion/css";
import React from "react";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

type FieldType = {
  name?: string;
  password?: string;
};

export default function Login() {
  const t = useTranslations();
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>{t("Tizimga kirish")}</title>
      </Head>
      <main className={styles.login}>
        <div className={styles.login__form}>
          <div>
            <h2>{t("Tizimga kirish")}</h2>
            <Alert
              className={styles.login__alert}
              message={t(
                "Shaxsiy kabinetingizni himoya qilish maqsadida, parolingizni muntazam yangilab turishingizni tavsiya qilamiz",
              )}
              type="warning"
            />
          </div>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item<FieldType>
              name="name"
              rules={[
                {
                  required: true,
                  message: t("Iltimos ismingizni kiriting", { icon: "📝!" }),
                },
              ]}
            >
              <Input placeholder={t("Ismni kiriting", { icon: "📝" })} />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                {
                  required: true,
                  message: t("Iltimos parolingizni kiriting", { icon: "🔓!" }),
                },
              ]}
            >
              <Input.Password
                placeholder={t("Parolni kiriting", { icon: "🔓" })}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {t("Kirish")}
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
            {t("Ro'yxatdan o'tish")}
          </Link>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${context.locale}.json`))
        .default,
    },
  };
}
