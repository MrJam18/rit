import React, {useEffect, useState} from 'react';
import '../styles/app.css';
import {MyTable} from '../components/MyTable';
import RequestService from "../utils/Services/RequestService";
import {DataProvider} from "../providers/DataProvider";
import MyForm from "../components/MyForm";
import Alert from 'react-bootstrap/Alert';

const provider = new DataProvider();

const App = () => {
    const fetchData = async () => {
        const data = await RequestService.getData('index');
        provider.load(data);
        setTableData(provider.getTableData());
    }
    useEffect( () => {
        fetchData();
    }, []);
    const [tableData, setTableData] = useState([]);
    let showModal = false;
    const [item, setItem] = useState();
    if(item) {
        showModal = true;
    }
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
            <MyTable provider={provider} data={tableData} setData={setTableData} item={item} setItem={setItem} />
            {showModal ? <MyForm provider={provider} setShow={setItem} setData={setTableData} item={item} setItem={setItem} /> : ''}
        </div>
    );
};

export default App;