import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function MaterialAsset({item, provider}) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.initial_amount} id="initial_amount">Начальная цена</InputGroup.Text>
                <Form.Control
                    type='number'
                    name='initial_amount'
                    aria-describedby="initial_amount"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.final_amount} id="final_amount">Конечная цена</InputGroup.Text>
                <Form.Control
                    type='number'
                    name='final_amount'
                    aria-describedby="final_amount"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.manufacturing_year} id="manufacturing_year">Год производства</InputGroup.Text>
                <Form.Control
                    type='number'
                    name='manufacturing_year'
                    aria-describedby="manufacturing_year"
                />
            </InputGroup>
            <Form.Select defaultValue={item.material_measurement_unit_id} size="sm" aria-label="Default select example">
                {provider.getMaterialMeasurementUnits().map(function (el) {
                    return <option value={el.id}>{el.name}</option>
                })}
                <option value='0'>Единица измерения</option>
            </Form.Select>
        </>
    );
}

export default MaterialAsset;