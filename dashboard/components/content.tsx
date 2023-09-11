import { Layout, Input, Table, Space, Button, Modal, DatePicker, } from 'antd';
import { EditFilled, DeleteFilled, PlusCircleFilled } from '@ant-design/icons';
import { useState, useEffect, } from 'react';
const { Search } = Input;
const { Content } = Layout;
import { collection, getDocs, addDoc, updateDoc, doc } from '@firebase/firestore'
import { db } from '../src/firebaseConfig';
import { Dayjs } from 'dayjs';


interface DataType {
    key: string;
    // other properties...
}

export default function Inventory() {
    const empty = {
        id: '',
        code: '',
        name: '',
        instruction: '',
        status: 'pending',
        date: '', // Date value, initialize it as needed
        quantity: 0,
    }
    const [open, setOpen] = useState(false);
    const [stocks, setStocks] = useState<DataType[]>([]);
    const [formData, setFormData] = useState({
        code: '',
        name: '',
        instruction: '',
        status: 'pending',
        date: '', // Date value, initialize it as needed
        quantity: 0,
    });
    const [date, setDate] = useState<Dayjs | null>(null);
    const [title, setTitle] = useState("");
    const [value, setValue] = useState({
        id: '',
        code: '',
        name: '',
        instruction: '',
        status: 'pending',
        date: '', // Date value, initialize it as needed
        quantity: 0,
    });


    const stocksCollections = collection(db, "stocks");


    useEffect(() => {
        const getStocks = async () => {

            const data = await getDocs(stocksCollections)
            // console.log(data.docs[0].data())
            if (data) {
                setStocks(data.docs.map((doc) => ({ ...doc.data(), key: doc.id, id: doc.id })));

            }

        }
        getStocks()
    }, []);

    const handleSubmit = async (e: any) => {
        setValue({ ...empty })
        e.preventDefault()
        if (date) {
            formData.date = date.format('DD-MM-YYYY').toString()
        }
        // console.log(date?.format('DD-MM-YYYY').toString())
        // console.log(formData)

        (title == "Edit Product") ? update() : await addDoc(stocksCollections, formData)

        setOpen(false)
    }

    const showModal = () => {
        setTitle("Add a Product")
        setOpen(true)
    }
    const update = async () => {
        const stocksDoc = doc(db, "stocks", value.id)
        await updateDoc(stocksDoc, value)
    }
    // console.log(stocks)

    const editModal = (record: any) => {
        setTitle("Edit Product")
        setValue({ ...record })
        // console.log(record)
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false);
    };

    const addStock = async (e: any) => {
        setValue(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const pagination = {
        pageSize: 7, // Number of items to display per page
        defaultCurrent: 1,  // Current page number
        total: stocks.length, // Total number of items
    };
    const columns =
        [
            {
                title: 'Product Code',
                dataIndex: 'code',

            },
            {
                title: 'Product',
                dataIndex: 'name',
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
                render: (text: any, record: any) => (
                    <Space size="middle">
                        <Button icon={<EditFilled />} onClick={() => editModal(record)} style={{ color: "#2123bf" }}>
                            Edit
                        </Button>
                        <Button icon={<DeleteFilled />} onClick={() => console.log(text)} danger className='danger'>
                            Delete
                        </Button>
                    </Space>
                ),
            },
        ]

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
                    <Table
                        columns={columns}
                        dataSource={stocks}
                        size='middle'
                        style={{ padding: 5 }}
                        pagination={pagination}

                    />
                </Layout>
                <Modal title={title} open={open} onOk={handleSubmit} onCancel={handleCancel}>
                    <form action="" method="post">
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <Input placeholder='Enter product code...' name='code' onChange={addStock} value={value.code} />
                            <Input placeholder='Enter product name...' name='name' onChange={addStock} value={value.name} />
                            <Input placeholder='Enter Instructions...' name='instruction' onChange={addStock} value={value.instruction} />
                            <Input placeholder='Enter Status...' name='status' value={value.status} onChange={addStock} />
                            <DatePicker name='date' onChange={(newDate) => setDate(newDate)} />
                            <Input placeholder='Enter quantity...' name='quantity' onChange={addStock} value={value.quantity} />
                        </Space>
                    </form>

                </Modal>
            </Content>
        </>
    );
}
