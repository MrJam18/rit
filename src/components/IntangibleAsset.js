import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function IntangibleAsset({item, provider}) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.quantity} id="quantity">Количество</InputGroup.Text>
                <Form.Control
                    type='number'
                    name='quantity'
                    aria-describedby="quantity"
                />
            </InputGroup>
            <Form.Select defaultValue={item.intangible_measurement_unit_id} size="sm" aria-label="Default select example">
                {provider.getIntangibleMeasurementUnits().map(function (el) {
                    return <option value={el.id}>{el.name}</option>
                })}
                <option value='0'>Единица измерения</option>
            </Form.Select>
        </>
    );
}

export default IntangibleAsset;