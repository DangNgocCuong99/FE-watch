import { Tooltip } from "antd";

import { BasicColumnModel } from "/@/components/Table/src/types/table";

import { IStatusTable } from "./types";

const tranformToolTip = (value: any) => {
  return (
    <Tooltip title={value + 'asd'}>
      <div>{value}</div>
    </Tooltip>
  )
}

export const columns: BasicColumnModel<IStatusTable>[] = [
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
  {
    title: "Name",
    dataIndex: "nameStatus",
    key: "title",
    render: (value: any) => {
      return tranformToolTip(value)
    }
  },
];
