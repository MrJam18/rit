import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import MyForm from "./MyForm";
import {alert} from "../utils/alert";

function CreateModal(props) {
    const handleClose = () => props.setShow(false);

    const [assetType, setAssetType] = useState(1);
    const onChangeAssetType = (ev) => {
        setAssetType(Number(ev.target.value));
    }
    function onSuccess (data) {
        const tableData = props.provider.createItem(assetType, data);
        props.setData(tableData);
        alert('Запись добавлена');
        handleClose();
    }
    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Добавить Актив</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MyForm {...props} item={{}} assetType={assetType} handleClose={handleClose} setAssetType={onChangeAssetType} onSuccess={onSuccess} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default CreateModal;