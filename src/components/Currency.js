import React from 'react';
import Form from 'react-bootstrap/Form';
import MyInput from "./MyInput";
function Currency({currencyId, provider}) {
    if(!currencyId) {
        currencyId = 0;
    }
    return (
        <MyInput>
            <Form.Select defaultValue={currencyId} name={'currency_id'}  size="sm" aria-label="Default select example">
                {provider.getCurrencies().map(function (el) {
                    return <option value={el.id}>{el.name}</option>
                })}
                <option value='0'>Валюта</option>
            </Form.Select>
        </MyInput>
    );
}

export default Currency;