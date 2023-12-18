import React, { useState } from "react";
import Head from "next/head";
import { Form, Input, Button, Alert } from "antd";
import { css } from "@emotion/css";
import styles from "./index.module.sass";
import { useRouter } from "next/router";
import { PatternFormat } from "react-number-format";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import Loading from "@/components/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const t = useTranslations();

  const onFinish = (values: any) => {
    if (!smsActive) {
      console.log(values);
      setSMSnotActive(true);
      // setLoading(true);
    } else {
      console.log("else", values);
      router.push("/auth/login");
      setLoading(true);
      toast.success("Login !");
    }
  };
  return (
    <>
      <Head>
        <title>{t("Ro'yxatdan o'tish")}</title>
      </Head>
      {loading && <Loading />}
      <main className={styles.register}>
        <div className={styles.register__form}>
          <div>
            <h2>{t("Ro'yxatdan o'tish")}</h2>
            <Alert
              className={styles.register__alert}
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

            <Form.Item<FieldType>
              name="number"
              rules={[
                {
                  required: true,
                  message: t("Iltimos raqamingizni kiriting", { icon: "📞!" }),
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
                    message: t("Iltimos sms kiriting", { icon: "📩!" }),
                  },
                ]}
              >
                <Input placeholder={t("Smsni kiriting", { icon: "📩" })} />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {smsActive ? t("Kirish") : t("SMS")}
              </Button>
            </Form.Item>
          </Form>

          <Button
            type={"link"}
            className={css`
              text-align: end;
              padding: 0;
            `}
            onClick={() => {
              router.push("/auth/login");
              setLoading(true);
            }}
          >
            {t("Kirish")}
          </Button>
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
