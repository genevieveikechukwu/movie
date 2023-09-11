import { Layout, Input, Table, Space, Button, Modal, DatePicker, } from 'antd';
import { EditFilled, DeleteFilled, PlusCircleFilled } from '@ant-design/icons';
import { useState, useEffect, } from 'react';
const { Search } = Input;
const { Content } = Layout;
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from '@firebase/firestore'
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
        quantity: '0',
    }
    const [open, setOpen] = useState(false);
    const [stocks, setStocks] = useState<DataType[]>([]);
    const [formData, setFormData] = useState(empty)
    const [date, setDate] = useState<Dayjs | null>(null);
    const [title, setTitle] = useState("");
    const [values, setValue] = useState(empty);
    const [name, setName] = useState("")
    const [code, setCode] = useState("")
    const [status, setStatus] = useState("")
    const [instruction, setInstruction] = useState("")
    const [quantity, setQuantity] = useState("")


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
        const intervalId = setInterval(getStocks, 2000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (date) {
            formData.date = date.format('DD-MM-YYYY').toString()
            values.date = date.format('DD-MM-YYYY').toString()
        }
        console.log(values);

        (title === "Edit Product") ? update() : await addDoc(stocksCollections, formData);

        setOpen(false)
    }

    const showModal = () => {
        setTitle("Add a Product")
        setValue(empty)
        setOpen(true)
    }
    const update = async () => {
        const stocksDoc = doc(db, "stocks", values.id);
        await updateDoc(stocksDoc, values)
    }
    // console.log(stocks)

    const editModal = (record: any) => {
        setOpen(true);
        setTitle("Edit Product");
        setValue(record);
        setName(record.name)
        setCode(record.code)
        setInstruction(record.instruction)
        setQuantity(record.quantity)
        setStatus(record.status)
        console.log(values)

    }

    const handleCancel = () => {
        setOpen(false);
    };

    // const addStock = async (e: any) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // }

    const deleteStock = async (id: string) => {
        const stocksDoc = doc(db, "stocks", id)
        await deleteDoc(stocksDoc)
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
                render: (_: undefined, record: any) => (
                    <Space size="middle">
                        <Button icon={<EditFilled />} onClick={() => editModal(record)} style={{ color: "#2123bf" }}>
                            Edit
                        </Button>
                        <Button icon={<DeleteFilled />} onClick={() => deleteStock(record.id) } danger className='danger'>
                            Delete
                        </Button>
                    </Space>
                ),
            },
        ]
    const addName = (e: any) => {
        setName(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValue({ ...values, name: value })
    };

    const addCode = (e: any) => {
        setCode(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValue({ ...values, code: value })
    };

    const addInstruction = (e: any) => {
        setInstruction(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValue({ ...values, instruction: value })
    };

    const addQuantity = (e: any) => {
        setQuantity(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValue({ ...values, quantity: value })
    };

    const addStatus = (e: any) => {
        setStatus(e.target.value);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValue({ ...values, status: value })
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
                            <Input placeholder='Enter product code...' name='code' onChange={addCode} value={code} />
                            <Input placeholder='Enter product name...' name='name' onChange={addName} value={name} />
                            <Input placeholder='Enter Instructions...' name='instruction' onChange={addInstruction} value={instruction} />
                            <Input placeholder='Enter Status...' name='status' onChange={addStatus} value={status} />
                            <DatePicker name='date' onChange={(newDate) => setDate(newDate)} />
                            <Input placeholder='Enter quantity...' name='quantity' onChange={addQuantity} value={quantity} />
                        </Space>
                    </form>

                </Modal>
            </Content>
        </>
    );
}
