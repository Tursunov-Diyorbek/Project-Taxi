import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Space, Select, DatePicker } from "antd";
import axios from "axios";
import styles from "./index.module.sass";
import { Button, Layout } from "antd";
import { FiSearch } from "react-icons/fi";

interface DataType {
  id: number;
  from: string;
  to: string;
}

const HomePage = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [selectedFrom, setSelectedFrom] = useState<string>("");
  const [selectedTo, setSelectedTo] = useState<string>("");
  const { Option } = Select;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFromChange = (value: string) => {
    setSelectedFrom(value);
  };

  const handleToChange = (value: string) => {
    setSelectedTo(value);
  };
  const { Header } = Layout;
  const { Footer } = Layout;

  return (
    <>
      <div className={styles.homepages_section}>
        <Header className={styles.header}>
          <div className={styles.logo}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXSn2aspVWSGPMfI1kB81YXZ1xd2HhJFkmXmU2A59VLaMHNv0ZceEk2fbT0OHuk77gHc&usqp=CAU"
              alt="Logo"
            />
          </div>
          <div className={styles.button}>
            <Button type="primary">Sign In</Button>
          </div>
        </Header>
      </div>

      <div className={styles.homepages_card}>
        <Select
          suffixIcon={<CiLocationOn />}
          placeholder="Qayerdan"
          value={selectedFrom}
          showSearch
          allowClear
          style={{ width: "25%" }}
          onChange={handleFromChange}
        >
          {data.map((item) => (
            <Option key={item.id} value={item.from}>
              {item.from}
            </Option>
          ))}
        </Select>

        <Select
          suffixIcon={<CiLocationOn />}
          placeholder="Qayerga"
          value={selectedTo}
          style={{ width: "25%" }}
          showSearch
          allowClear
          onChange={handleToChange}
        >
          {data.map((item) => (
            <Option key={item.id} value={item.to}>
              {item.to}
            </Option>
          ))}
        </Select>

        <Space direction="vertical">
          <DatePicker />
        </Space>

        <Button>
          <FiSearch />
        </Button>
      </div>
      <Footer className="footer">This is the footer content.</Footer>
    </>
  );
};

export default HomePage;
