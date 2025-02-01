import React, {useState} from "react";
import Table from 'react-bootstrap/Table';
import Buttons from "./Buttons";

export const MyTable = ({provider, data, setData, item, setItem}) => {

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Имя</th>
                <th>Стоимость</th>
                <th>Кнопки</th>
            </tr>
            </thead>
            <tbody>
            {data.map(function (el) {
                return <tr key={el.id + '|' + el.classId} >
                    <td>{el.name}</td>
                    <td>{el.amount}</td>
                    <td><Buttons data={data} setData={setData} id={el.id} classId={el.classId} item={item} setItem={setItem} provider={provider}  /></td>
                </tr>
            })}
            </tbody>
        </Table>
    );
}