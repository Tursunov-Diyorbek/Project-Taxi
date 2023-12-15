import React, { useState } from "react";
import styles from "./index.module.sass";
import Head from "next/head";
import { Form, Input, Button } from "antd";
import { PatternFormat } from "react-number-format";
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { PiTelegramLogoThin } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";
import {
  MdOutlineWhereToVote,
  MdOutlineVerticalAlignBottom,
} from "react-icons/md";
import { css } from "@emotion/css";

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

type FieldType = {
  name?: string;
  number?: string;
  messange: string;
  price?: number;
  carModel?: string;
  carNumber?: string;
  departureTime?: string;
  where?: string;
  whereTo?: string;
};

export default function TaxiPage() {
  const [plaseOne, setPlaseOne] = useState<boolean>(false);
  const [plaseTwo, setPlaseTwo] = useState<boolean>(false);
  const [plaseThree, setPlaseThree] = useState<boolean>(false);
  const [plaseFour, setPlaseFour] = useState<boolean>(false);
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Head>
        <title>Taksi sahifasi</title>
      </Head>
      <main>
        <div className={styles.taxiPage}>
          <div className={styles.taxiPage__form}>
            <Form onFinish={onFinish} layout={"vertical"}>
              <Form.Item<FieldType>
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
                className={styles.taxiPage__input}
              >
                <Input placeholder={"Ism"} prefix={<CiUser />} />
              </Form.Item>

              <Form.Item<FieldType>
                name="number"
                rules={[
                  { required: true, message: "Please input your Number!" },
                ]}
                className={styles.taxiPage__input}
              >
                <CustomPasswordInput prefix={<BsTelephone />} />
              </Form.Item>

              <Form.Item<FieldType>
                name="messange"
                className={styles.taxiPage__input}
              >
                <Input
                  placeholder={"Telegram link"}
                  prefix={<PiTelegramLogoThin />}
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="price"
                rules={[
                  { required: true, message: "Please input your Price!" },
                ]}
                className={styles.taxiPage__input}
              >
                <Input
                  placeholder={"Narxi"}
                  prefix={<GiMoneyStack />}
                  type={"number"}
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="carModel"
                rules={[
                  { required: true, message: "Please input your Car model!" },
                ]}
                className={styles.taxiPage__input}
              >
                <Input
                  placeholder={"Avtomobil rusumi"}
                  prefix={<IoCarSportOutline />}
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="carNumber"
                rules={[
                  { required: true, message: "Please input your Car number!" },
                ]}
                className={styles.taxiPage__input}
              >
                <Input placeholder={"Avtomobil raqami"} prefix={"#"} />
              </Form.Item>

              <Form.Item<FieldType>
                name="departureTime"
                rules={[
                  {
                    required: true,
                    message: "Please input your Departure time!",
                  },
                ]}
                className={styles.taxiPage__input}
              >
                <Input
                  placeholder={"Jo'nash vaqti"}
                  prefix={<CiCalendarDate />}
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="where"
                rules={[
                  {
                    required: true,
                    message: "Please input your Where!",
                  },
                ]}
                className={styles.taxiPage__input}
              >
                <Input
                  placeholder={"Qayerdan"}
                  prefix={<MdOutlineWhereToVote />}
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="whereTo"
                rules={[
                  {
                    required: true,
                    message: "Please input your Where to!",
                  },
                ]}
                className={styles.taxiPage__input}
              >
                <Input
                  placeholder={"Qayerga"}
                  prefix={<MdOutlineWhereToVote />}
                />
              </Form.Item>

              <Form.Item
                className={css`
                  width: 100%;
                `}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className={css`
                    width: 100%;
                  `}
                >
                  Tasdiqlash
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className={styles.taxiPage__carImage}>
          <h2>
            {"Bo'sh o'rindiqlarni belgilang"} <MdOutlineVerticalAlignBottom />
          </h2>

          <div className={styles.taxiPage__carDiv}>
            <img
              src="../../../Images/car-4.png"
              alt="Car"
              className={styles.taxiPage__carDivImage}
            />
            <Button
              onClick={() => setPlaseThree(!plaseThree)}
              className={css`
                background: ${plaseThree ? "black" : "none"};
                color: ${plaseThree ? "#fff" : "black"};
              `}
            >
              3
            </Button>
            <Button
              onClick={() => setPlaseOne(!plaseOne)}
              className={css`
                background: ${plaseOne ? "black" : "none"};
                color: ${plaseOne ? "#fff" : "black"};
              `}
            >
              1
            </Button>
            <Button
              onClick={() => setPlaseFour(!plaseFour)}
              className={css`
                background: ${plaseFour ? "black" : "none"};
                color: ${plaseFour ? "#fff" : "black"};
              `}
            >
              4
            </Button>
            <Button
              onClick={() => setPlaseTwo(!plaseTwo)}
              className={css`
                background: ${plaseTwo ? "black" : "none"};
                color: ${plaseTwo ? "#fff" : "black"};
              `}
            >
              2
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
