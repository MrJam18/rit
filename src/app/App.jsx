import React, {useEffect, useState} from 'react';
import '../styles/app.css';
import {MyTable} from '../components/MyTable';
import RequestService from "../utils/Services/RequestService";
import {DataProvider} from "../providers/DataProvider";
import MyForm from "../components/MyForm";
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import UpdateModal from "../components/UpdateModal";
import CreateModal from "../components/CreateModal";

const provider = new DataProvider();

const App = () => {
    const fetchData = async () => {
        const data = await RequestService.getData('index');
        provider.load(data);
        setTableData(provider.getTableData());
    }
    const [item, setItem] = useState();
    useEffect( () => {
        fetchData();
    }, []);

    const [showCreateModal, setShowCreateModal] = useState(false);
    function onClickCreate () {
        setShowCreateModal(true);
    }
    const [tableData, setTableData] = useState([]);

    return (
        <div className='container'>
            <div id={'alert-container'}>
                {[
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    ].map((variant) => (
                    <Alert key={variant} className='d-none' id={'alert-' + variant} variant={variant}>
                    test
                    </Alert>
                ))}
            </div>
            <div className={'d-flex justify-content-end mb-3'}>
                <Button onClick={onClickCreate} >Добавить</Button>
            </div>
            <MyTable provider={provider} data={tableData} setData={setTableData} item={item} setItem={setItem} />
            {item ? <UpdateModal provider={provider} setShow={setItem} setData={setTableData} item={item} setItem={setItem} /> : ''}
            {showCreateModal ? <CreateModal provider={provider} setShow={setShowCreateModal} setData={setTableData} /> : ''}
            {}
        </div>
    );
};

export default App;