import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Space, Select, DatePicker } from "antd";
import axios from "axios";
import styles from "./index.module.sass";

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

  return (
    <div className={styles.listofcars}>
      <div className={styles.listofcars_card}>
        <Select
          suffixIcon={<CiLocationOn />}
          placeholder="Qayerdan"
          value={selectedFrom}
          showSearch
          allowClear
          style={{ width: "100%" }}
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
          style={{ width: "100%" }}
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
      </div>
    </div>
  );
};

export default HomePage;
