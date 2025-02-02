import React from 'react';
import Amount from "./Amount";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import MyInput from "./MyInput";

function CashObligationAsset({item, provider}) {
    return (
        <>
            <MyInput name={'basis_name'} defaultValue={item.basis_name} label={'Основание'} />
            <Amount item={item} provider={provider} />
        </>
    );
}

export default CashObligationAsset;