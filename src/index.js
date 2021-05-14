import React from "react";
import ReactDOM from "react-dom";
import { version, Button, Table } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const dataSource = [];
for (let i = 0; i < 60; i++) {
  dataSource.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}
// console.log("dataSource", dataSource);
const columns = [
  {
    title: "Full Name",
    width: 160,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  {
    title: "Age",
    width: 160,
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 160
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 160
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 160
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 160,
    render: (text, row, index) => {
      // render rowspan
      const component = {
        children: text,
        props: {
          rowSpan: 0
        }
      };
      if (index === 0) {
        component.props.rowSpan = 10;
      }
      return component;
    }
  },
  {
    title: "Action",
    key: "operation",
    render: () => <a href="javascript:void(0)">action</a>
  }
];
console.log("columns", columns);
const testObj = columns.reduce((acc, curr) => {
  acc[curr.title] = { ...curr };
  console.log("acc", acc);
  console.log("curr", curr);
  return acc;
}, {});
console.log("testObj", testObj); // array to Obj

const testArray = Array.from(columns, (x) => x.title);
console.log("testArray", testArray); // 比對後拿出array

const scroll = { x: 1600, y: 300 };

ReactDOM.render(
  <div className="App">
    <div>Current antd version: {version}</div>
    <div style={{ marginTop: "16px" }}>
      <Button type="primary">Example button</Button>
      <div style={{ width: "1000px", height: "600px" }}>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={scroll}
        />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
