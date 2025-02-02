import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Assets from "./Assets";
import RequestService from "../utils/Services/RequestService";
import {alert} from "../utils/alert";
import MyInput from "./MyInput";
const BoostrapForm = Form;

function MyForm({item, handleClose, provider, onSuccess, assetType, setAssetType}) {
    const onSumbit = async (ev) => {
        ev.preventDefault();
        const form = ev.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        form.querySelectorAll('.input__validation-error').forEach(function (el) {
            el.classList.add('d-none');
        });
        try {
            const responseData = (await RequestService.post('validate', data)).data;
            if(responseData.result) {
                onSuccess(data);
            } else {
                for (let name in responseData.errors) {
                    form.querySelectorAll('.my-input-group').forEach(function (el) {
                        const input = el.querySelector(`[name="${name}"]`);
                        if(input) {
                            const error = el.querySelector('.input__validation-error');
                            if(error) {
                                error.innerText = responseData.errors[name];
                                error.classList.remove('d-none');
                                el.appendChild(error);
                            }
                        }
                    });
                }
            }
        } catch (e) {
            console.error(e);
            alert('Прозошла ошибка при запросе на сервер');
            handleClose();
        }
    }
    return (
            <form onSubmit={onSumbit}>
                <input type='hidden' className='d-none' value={item.id}/>
                <MyInput label={'Имя актива'} name={'name'} defaultValue={item.name} />
                <MyInput>
                    <BoostrapForm.Select name='class_id' value={assetType} onChange={setAssetType} size="lg">
                        {provider.getAssetTypes().map(function (el) {
                            return <option key={el.id} value={el.id}>{el.name}</option>
                        })}
                    </BoostrapForm.Select>
                </MyInput>
                <div className='mt-3 mb-3'>
                    <Assets item={item} assetType={assetType} provider={provider} />
                </div>
                <div className='d-flex justify-content-between'>
                    <Button type='button' onClick={handleClose} variant="secondary">Закрыть</Button>
                    <Button variant="primary" type='submit'>Сохранить</Button>
                </div>
            </form>
    );
}

export default MyForm;