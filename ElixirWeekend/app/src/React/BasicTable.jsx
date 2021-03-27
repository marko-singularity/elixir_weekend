import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import Input from "../SharedComponents/Input/Input";
import "../Css/ProductsTable.css"
import * as ReactBootStrap from "react-bootstrap"
export const BasicTable = () =>
{
    const product = [
        {id: "1", code: "ABC123", name: "Aspirin", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir"},
        {id: "2", code: "ABC123", name: "Bedoxin", avaliable: "true", prescription_needed: "true", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir"},
        {id: "3", code: "ABC123", name: "Betaferon", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir"},
        {id: "4", code: "ABC123", name: "Arixtra", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir"},
        {id: "5", code: "ABC123", name: "Betametazon", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty"},
        {id: "6", code: "ABC123", name: "Bezidin", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty"},
        {id: "7", code: "ABC123", name: "Caffetin", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty"}
    ]

    const [quantity, setQuantity]  = useState("");
     const renderProduct = (product, index) =>
     { return(
        <tr key={index}>
            <td>{product.id}</td>
            <td></td>
            <td>{product.name}</td>
            <td>{product.prescription_needed}</td>
            <td>{product.price}</td>
            <td>{product.pharmacy}</td>
            <td><Input id = "quantity" onChange={
                setQuantity
            }/></td>
            <td><Button>Naruci</Button></td>
        </tr>
    )
     }

     return(
         <ReactBootStrap.Table>
         <table >
             <thead>
                 <tr>
                     <th >Id</th>
                     <th><img src="../Images/aspirin.png"/></th>
                     <th >Ime lijeka</th>
                     <th >Potreban recept</th>
                     <th >Cijena</th>
                     <th >Apoteka</th>
                     <th width="100px" > Komada</th>
                     <th ></th>
                 </tr>
             </thead>
             <tbody class="tbl-content">
                 {product.map(renderProduct)}
             </tbody>
         </table>
         </ReactBootStrap.Table>
     )
}