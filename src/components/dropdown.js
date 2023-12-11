/* eslint-disable jsx-a11y/anchor-is-valid */
import { CaretDownFilled } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to="/resume">Resume</Link>,
    key: "0",
  },
  {
    label: <Link to="/Folder">Form</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link to="/Contact">Contact</Link>,
    key: "2",
  },
  {
    label: <Link to="/About">About</Link>,
    key: "3",
  },
];
const App = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="text-white text-lg ">
        Menu
        <CaretDownFilled />
      </Space>
    </a>
  </Dropdown>
);
export default App;
