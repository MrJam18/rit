import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import MyForm from "./MyForm";
import {alert} from "../utils/alert";

function UpdateModal(props) {
    const handleClose = () => props.setItem(null);
    const [assetType, setAssetType] = useState(props.item.classId);
    const onChangeAssetType = (ev) => {
        setAssetType(Number(ev.target.value));
    }
    function onSuccess(data) {
        const tableData = props.provider.updateItem(props.item.id, props.item.classId, data);
        if (tableData) {
            props.setData(tableData);
            alert('Данные успешно сохранены');
            props.setItem(null);
        }
    }
    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Изменить Актив</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MyForm {...props} setAssetType={onChangeAssetType} handleClose={handleClose} assetType={assetType} onSuccess={onSuccess} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default UpdateModal;