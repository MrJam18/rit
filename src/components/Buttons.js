import React from 'react';
import Button from "react-bootstrap/Button";
import {forEach} from "react-bootstrap/ElementChildren";

const Buttons = ({classId, id, data, setData, setShowModal, item, setItem, provider}) => {
    const onUpdate = () => {
        const item = provider.findItem(id, classId);
        if (item) {
            setItem({...item.item});
        }
    }
    const onDelete = () => {
        let tableData = provider.removeItem(id, classId);
        if(tableData) {
            setData(tableData);
        }
    }
    return <>
        <Button onClick={onDelete} style={{marginTop: 10, width: '100%'}}>Удалить</Button>
        <Button onClick={onUpdate}  style={{marginTop: 10, width: '100%'}}>Изменить</Button>
    </>;

}

export default Buttons;