import React, { useState } from "react";
import SearchTable from "../packages/search-table/src";

import "antd/dist/antd.css";
import "./style.css";

export default { title: "带搜索功能的表格" };

export const WithSearchTable = () => {
  const schema = {
    type: "object",
    properties: {
      name: {
        type: "string",
        title: "姓名"
      },
      age: {
        type: "number",
        title: "年龄"
      }
    }
  };

  const columns = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 100,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  const dataSource = [];
  for (let i = 0; i < 100; i++) {
    dataSource.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  const [data, setData] = useState(dataSource);

  const onChange = (page: number, searchKey: any) => {
    console.log(
      "%c这里只要设置 dataSource",
      "background: #69c0ff; color: white; padding: 4px",
      page,
      searchKey
    );
    setData([]);
  };

  const pagination = {
    showQuickJumper: true,
    total: 20,
    pageSize: 10
  };

  const tableProps = {
    bordered: true
  };

  return (
    <div className="content--box">
      <SearchTable
        // schema={schema}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={pagination}
        tableProps={tableProps}
        // tableScrollY={false}
        tableScrollX={1500}
      />
    </div>
  );
};
