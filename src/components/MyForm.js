import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import CashBankAsset from "./CashBankAsset";
import Assets from "./Assets";
import RequestService from "../utils/Services/RequestService";
import {alert} from "../utils/alert";
const BoostrapForm = Form;

function MyForm({item, setItem, provider, setData}) {
    const [assetType, setAssetType] = useState(item.classId);
    const onChangeAssetType = (ev) => {
        setAssetType(Number(ev.target.value));
    }
    const onSumbit = async (ev) => {
        ev.preventDefault();
        const data = Object.fromEntries(new FormData(ev.currentTarget));

        let message = null;
        try {
            const responseData = (await RequestService.post('validate', data)).data;
            if(responseData.result) {
                const tableData = provider.updateItem(item.id, item.classId, data);
                message = 'Данные успешно сохранены';
                setData(tableData);
            } else {
                message = 'Данные не прошли валидацию';

            }
        } catch (e) {
            message = 'Прозошла ошибка при запросе на сервер';
        }
        alert(message);
        setItem(null);
    }
    const handleClose = () => setItem(null);
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={true} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Изменить Актив</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={onSumbit}>
                        <input type='hidden' className='d-none' value={item.id}/>
                        <InputGroup size="sm"  className="mb-3">
                            <InputGroup.Text  id="name">Имя актива</InputGroup.Text>
                            <Form.Control
                                name='name'
                                value={item.name}
                                aria-label="Small"
                                aria-describedby="name"
                            />
                        </InputGroup>
                        <BoostrapForm.Select name='class_id' value={assetType} onChange={onChangeAssetType} size="lg">
                            {provider.getAssetTypes().map(function (el) {
                                return <option key={el.id} value={el.id}>{el.name}</option>
                            })}
                        </BoostrapForm.Select>
                        <div className='mt-3 mb-3'>
                            <Assets item={item} assetType={assetType} provider={provider} />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Button type='button' onClick={handleClose} variant="secondary">Close</Button>
                            <Button variant="primary" type='submit'>Save changes</Button>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MyForm;