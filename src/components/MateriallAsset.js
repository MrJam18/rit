import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import MyInput from "./MyInput";
import Currency from "./Currency";
import Amount from "./Amount";

function MaterialAsset({item, provider}) {
    return (
        <>
            <MyInput defaultValue={item.initial_amount}
                     type='number'
                     name='initial_amount'
                     label={'Начальная стоимость'}
            />
            <MyInput type={'number'} name={'final_amount'} label={'Конечная стоимость'} defaultValue={item.final_amount} />
            <MyInput type={'number'} name={'manufacturing_year'} label={'Год производства'} defaultValue={item.manufacturing_year} />
            <Amount provider={provider} label={'Оценочная стоимость'} item={item} />
            <MyInput type={'number'} name={'quantity'} label={'Количество'} defaultValue={item.quantity} />
            <MyInput>
                <Form.Select defaultValue={item.material_measurement_unit_id ?? 1} size="sm" aria-label="Default select example" name={'material_measurement_unit_id'}>
                    {provider.getMaterialMeasurementUnits().map(function (el) {
                        return <option value={el.id}>{el.name}</option>
                    })}
                </Form.Select>
            </MyInput>


        </>
    );
}

export default MaterialAsset;