import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Currency from "./Currency";
import MyInput from "./MyInput";

function Amount({item, provider, label = 'Сумма актива'}) {
    return (
        <>
            <MyInput defaultValue={item.amount} label={label} type='number' name={'amount'} />
            <Currency provider={provider} currencyId={item.currency_id} />
        </>
    );
}

export default Amount;