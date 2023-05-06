
import { Button, Modal, Table, Space, Tag } from 'antd';
import './App.css';
import { CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import type { ColumnsType } from 'antd/es/table';
const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  phase: string;
  step: string,
  duple: string[],
  status: string,
  des: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'フェーズ',
    dataIndex: 'phase',
    key: 'phase',
    width: 170,
    className: 'mb-2'
  },
  {
    title: 'ステップ',
    dataIndex: 'step',
    key: 'step',
    width: 170,
  },
  {
    title: '対応者',
    width:300,
    children: [
      {
        title: '対応日時',
        dataIndex:"duple",
        className: "",
        key:"duple",
        width: 300,
        render: (duple: string[])=>{
          return( <div className='flex flex-col '>
            {duple?.map((tag, index) => (
              <label key={index} className={`p-1 text-center  ${index === 0 && 'border-b-[1px]'}`}>{tag}</label>
            ))}
          </div>)
        }
      },
    
    ],
    
  },
  {

    title: '対応種別',
    dataIndex: 'status',
    key: 'status',
    width: 180,

  },
  {
    title: 'コメント',
    dataIndex: 'des',
    key: 'des',
    width: 800,
  },
];
const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    phase: '期初',
    step: '目標設定',
    duple: ['神社 太郎','yyyy/mm/dd hh:mm'],
    status: '確定',
    des: '問題ありません。',
  });
}
function App() {
  const [modal, setModal] = useState(true)
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Modal
        centered
        open={modal}
        width={1510}
        footer={null}
        closable={false}
      >
        <div className=''>
          <div className='relative py-[25px] bg-[#E5E8F7] rounded-t-[4px] border-b-[1px] border-[#CDD5EB]'>
            <label className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] font-medium text-[#211512]'>コメント確認</label>
            <CloseOutlined className='absolute top-[50%] translate-x-[-100%] translate-y-[-50%] right-0' onClick={() => setModal(false)} />
          </div>
          <Table
            columns={columns}
            dataSource={data}
            className='p-[25px]'
            bordered
            pagination={false}
          />
          <div className='flex items-center justify-center py-3'>
            <Button className='px-[30px] rounded-[19px] w-[128px] h-[38px] bg-[#BABABA] text-white' onClick={() => setModal(false)}>閉じる</Button>
          </div>

        </div>
      </Modal>
      <Button onClick={() => setModal(true)}>Open Popup</Button>
    </div>
  );
}

export default App;
