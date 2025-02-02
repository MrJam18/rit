import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import MyInput from "./MyInput";
import Amount from "./Amount";

function IntangibleAsset({item, provider}) {
    return (
        <>
            <Amount provider={provider} item={item} />
            <MyInput defaultValue={item.quantity} name={'quantity'} label={'Количество'} />
            <Form.Select defaultValue={item.intangible_measurement_unit_id ?? 1} size="sm" aria-label="Default select example">
                {provider.getIntangibleMeasurementUnits().map(function (el) {
                    return <option value={el.id}>{el.name}</option>
                })}
            </Form.Select>
        </>
    );
}

export default IntangibleAsset;