import { Layout, Input, Table, Space, Button, Modal, DatePicker } from 'antd';
import { EditFilled, DeleteFilled, PlusCircleFilled } from '@ant-design/icons';
import { useState } from 'react';
const { Search } = Input;
const { Content } = Layout;
import { data } from '../src/utils';

export default function Inventory() {
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true)
    }
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Content>
                <Layout>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                        <Search placeholder="search stocks" style={{ width: 300, }} enterButton />
                        <Button icon={<PlusCircleFilled />} style={{ alignSelf: "flex-end" }} onClick={showModal} type='primary'>
                            Add
                        </Button>
                    </div>
                </Layout>

                <Layout style={{ marginLeft: 5 }}>
                    <Table columns={[
                        {
                            title: 'Product Code',
                            dataIndex: 'product',

                        },
                        {
                            title: 'Product',
                            dataIndex: 'product',
                        },
                        {
                            title: 'Instructions',
                            dataIndex: 'instruction',
                        },
                        {
                            title: 'Status',
                            dataIndex: 'status',
                        },
                        {
                            title: 'Date',
                            dataIndex: 'date',
                            filters: []
                        },
                        {
                            title: 'Quantity',
                            dataIndex: 'quantity'
                        },
                        {
                            title: 'Actions',
                            key: 'actions',
                            render: (text) => (
                                <Space size="middle">
                                    <Button icon={<EditFilled />} onClick={showModal} style={{ color: "#2123bf" }} >
                                        Edit
                                    </Button>
                                    <Button icon={<DeleteFilled />} onClick={() => text} danger className='danger'>
                                        Delete
                                    </Button>
                                </Space>
                            ),
                        },
                    ]}
                        dataSource={data}
                        size='middle'
                        style={{ padding: 5 }}
                    />
                </Layout>
                <Modal title="Add Product" open={open} onOk={handleOk} onCancel={handleCancel}>
                   <form action="" method="post">
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Input placeholder='Enter product code...' name='code' />
                            <Input placeholder='Enter product name...' name='product' />
                            <Input placeholder='Enter Instructions...' name='instruction' />
                            <Input placeholder='Enter Status...' name='status' value={"pending"} />
                            <DatePicker name='date' />
                            <Input placeholder='Enter quantity...' name='quantity' />
                        </Space>
                   </form>

                </Modal>
            </Content>
        </>
    );
}
