import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Amount from "./Amount";
import MyInput from "./MyInput";
function CashCashBoxAsset({item, provider}) {

    return (
        <>
            <MyInput defaultValue={item.cashbox_name} name={'cashbox_name'} label={'Название кассы'} />
            <Amount item={item} provider={provider} />
        </>
    );
}

export default CashCashBoxAsset;