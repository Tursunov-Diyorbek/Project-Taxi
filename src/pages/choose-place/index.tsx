import Steps from "@/components/Steps";
import React, { useState } from "react";
import styles from "./index.module.sass";
import { Tag, Button, Form, Input, Select } from "antd";
import { SiTelegram } from "react-icons/si";
import {
  MdOutlineAccessTime,
  MdCall,
  MdOutlineWhereToVote,
  MdWhereToVote,
  MdConnectWithoutContact,
} from "react-icons/md";
import { css } from "@emotion/css";
import { FaUserCircle } from "react-icons/fa";
import Head from "next/head";
import { HiArrowLongRight } from "react-icons/hi2";
import Layout from "@/components/Layout";

type FieldType = {
  surname?: string;
  name?: string;
  age?: number;
  womenandboy?: string;
};

const ChoosePlace = () => {
  const [plaseOne, setPlaseOne] = useState<boolean>(false);
  const [plaseTwo, setPlaseTwo] = useState<boolean>(false);
  const [plaseThree, setPlaseThree] = useState<boolean>(false);
  const [plaseFour, setPlaseFour] = useState<boolean>(false);

  const placeButtonOne = () => {
    if (plaseOne) {
      setPlaseOne(false);
    } else setPlaseOne(true);
  };
  const placeButtonTwo = () => {
    if (plaseTwo) {
      setPlaseTwo(false);
    } else setPlaseTwo(true);
  };
  const placeButtonThree = () => {
    if (plaseThree) {
      setPlaseThree(false);
    } else setPlaseThree(true);
  };
  const placeButtonFour = () => {
    if (plaseFour) {
      setPlaseFour(false);
    } else setPlaseFour(true);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Head>
        <title>Joy Tanlash</title>
      </Head>
      <main>
        <Layout />
        <Steps />
        <div className={styles.choosePlace}>
          <div>
            <div className={styles.choosePlace__boxInfo}>
              <div className={styles.choosePlace__boxContent}>
                <div className={styles.choosePlace__departure}>
                  <p className={styles.choosePlace__aboutUser}>
                    Diko
                    <FaUserCircle />
                  </p>
                  <p className={styles.choosePlace__region}>
                    Toshkent:
                    <MdOutlineWhereToVote
                      className={css`
                        color: #01c3a7;
                      `}
                    />
                  </p>
                  <p className={styles.choosePlace__TgandTel}>
                    Boglanish
                    <MdConnectWithoutContact
                      className={css`
                        color: #0175c3;
                      `}
                    />
                  </p>
                </div>
                <div className={styles.choosePlace__iconSvgRow}>
                  <HiArrowLongRight />
                </div>
                <div className={styles.choosePlace__arrive}>
                  <p className={styles.choosePlace__userTel}>(90)000-00-00</p>
                  <p className={styles.choosePlace__region}>
                    <MdWhereToVote
                      className={css`
                        color: #0175c3;
                      `}
                    />
                    :Samarqand
                  </p>
                  <div className={styles.choosePlace__media}>
                    <SiTelegram
                      className={css`
                        color: #0175c3;
                        cursor: pointer;
                      `}
                    />
                    <MdCall
                      className={css`
                        color: #000000;
                        cursor: pointer;
                      `}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.choosePlace__boxContent2}>
                <div className={styles.departure2}>
                  <Tag color="success">Avtomobil</Tag>
                  <span className={styles.departure2__carNumber}>01A200AA</span>
                  <div className={styles.departure2__content}>
                    <MdOutlineAccessTime
                      className={css`
                        color: #9c9c9c;
                      `}
                    />
                    <p className={styles.departure2__arriveTime}>
                      {"Jo'nash vaqtlari mahalliy vaqt bilan ko'rsatilgan."}
                    </p>
                  </div>
                  <p className={styles.departure2__time}>13:40pm</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.choosePlace__contentInfoOrder}>
              <h3>Avtomobil(nomi) joyni tanlang</h3>
              <div className={styles.choosePlace__boxInfo2}>
                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    {"Jami o'rindiqlar"}
                  </p>
                  <p>4</p>
                </div>

                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    {"Bosh o'rindiqlar"}
                  </p>
                  <p>4</p>
                </div>

                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>
                    {"Band o'rindiqlar"}
                  </p>
                  <p>0</p>
                </div>

                <div className={styles.choosePlace__orderInfo}>
                  <p className={styles.choosePlace__totalText}>Narxi</p>
                  <p>100,000 {"so'm"}</p>
                </div>
              </div>
              <div className={styles.choosePlace__carDiv}>
                <img
                  src="../../../Images/car-4.png"
                  alt="Car"
                  className={styles.choosePlace__carDivImage}
                />

                <Button onClick={placeButtonThree}>3</Button>
                <Button onClick={placeButtonOne}>1</Button>
                <Button onClick={placeButtonFour}>4</Button>
                <Button onClick={placeButtonTwo}>2</Button>
              </div>
            </div>
          </div>
          {plaseOne && (
            <div className={styles.choosePlace__userForm}>
              <h2>{"1 - O'rindiq"}</h2>
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item<FieldType>
                  label="Familiyasi"
                  name="surname"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item<FieldType>
                  label="Ismi"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item<FieldType>
                  label="Yoshi"
                  name="age"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input type={"number"} />
                </Form.Item>
                <Form.Item<FieldType>
                  label="Yoshi"
                  name="age"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Select
                    onChange={onFinish}
                    style={{ width: 100 }}
                    options={[
                      { value: "erkak", label: "Erkak" },
                      { value: "ayol", label: "Ayol" },
                    ]}
                  />
                </Form.Item>
              </Form>
            </div>
          )}
          {plaseTwo && (
            <div className={styles.choosePlace__userForm}>
              <h2>{"2 - O'rindiq"}</h2>
            </div>
          )}
          {plaseThree && (
            <div className={styles.choosePlace__userForm}>
              <h2>{"3 - O'rindiq"}</h2>
            </div>
          )}
          {plaseFour && (
            <div className={styles.choosePlace__userForm}>
              <h2>{"4 - O'rindiq"}</h2>
            </div>
          )}
        </div>
        <footer className={styles.footer}>
          <div className={styles.footer__button}>
            <Form onFinish={onFinish}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Tasdiqlash
                </Button>
              </Form.Item>
            </Form>
          </div>
        </footer>
      </main>
    </>
  );
};

export default ChoosePlace;
