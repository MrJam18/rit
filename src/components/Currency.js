import React from 'react';
import Form from 'react-bootstrap/Form';
function Currency({currencyId, provider}) {
    if(!currencyId) {
        currencyId = 0;
    }
    return (
        <Form.Select defaultValue={currencyId}  size="sm" aria-label="Default select example">
            {provider.getCurrencies().map(function (el) {
                console.log(el);
                return <option value={el.id}>{el.name}</option>
            })}
            <option value='0'>Валюта</option>
        </Form.Select>
    );
}

export default Currency;