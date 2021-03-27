import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import Input from "../SharedComponents/Input/Input";
import "../Css/ProductsTable.css"
import * as ReactBootStrap from "react-bootstrap"
export const Order = () =>
{
    const product = [
        { id: "1", code: "ABC123", name: "Aspirin", imgUrl: "https://www.aspirin.ba/static/media/images/products/aspirin_prod.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 7, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir", manufacturer: "BAYER" },
        { id: "2", code: "ABC123", name: "Bedoxin", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemKCE_wxu0kQ4MTRZNyb9B-gybrtbfief3HzK0rtpji5Om3Q8vNMqUaz1IjCvNrFKHIA&usqp=CAU", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "true", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir", manufacturer: "GALENIKA"},
        { id: "3", code: "ABC123", name: "Betaferon", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlKAiPTeipI7rLILqb4VNLRCVagUPGMYyzjQywlu3qAVwd9JOIxViEseFaR-g9kXExwc&usqp=CAU", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir", manufacturer: "BAYER"},
        { id: "4", code: "ABC123", name: "Arixtra", imgUrl: "https://www.fatehpharma.com/wp-content/uploads/2020/06/Arixtra-Injection-2.5mg-0.5ml-10s.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 8, quantity: 50, measurment_unit: "mg", pharmacy: "Elixir", manufacturer: "ASPEN"},
        { id: "5", code: "ABC123", name: "Betametazon", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW44qXvCAmRRjQqOZWut_I9dgjhKQnFpGlzA&usqp=CAU", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty", manufacturer: "KRKA"},
        { id: "6", code: "ABC123", name: "Gelusil Lac", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OmxMY5ySIPkf3wuZF3pv2VHcrXtn3oW77z3VdIYZ1Sh0Tda3Ctg2nw5b-hufRHpGbv0&usqp=CAU", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty", manufacturer: "HEMOFARM"},
        { id: "7", code: "ABC123", name: "Caffetin", imgUrl: "https://www.apotekanet.rs/image/cache/catalog/Proizvodi/caffetin-tablete-a12-600x439.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty", manufacturer: "ALKALOID" },
        { id: "8", code: "ABC123", name: "Andol", imgUrl: "https://www.centarzdravlja.hr/site/assets/files/23003/andol_100_mg_tablete.480x256.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", avaliable: "true", prescription_needed: "false", price: 7.5, quantity: 50, measurment_unit: "mg", pharmacy: "Betty", manufacturer: "PLIVA" }
    ]
    const dictionary = {true: "da", false: "ne"}

    const [quantity, setQuantity]  = useState("");
     const renderProduct = (product, index) =>
     { return(
        <tr key={index}>
            <td>{product.id}</td>
            <td><img width="400px" height="200px" src={product.imgUrl}/></td>
            <td>{product.name}</td>
            <td>{dictionary[product.prescription_needed]}</td>
            <td>{product.price} KM</td>
            <td>{product.pharmacy}</td>
            <td>1</td>
            <td width="350px"><Button class="btn_red">Ukloni</Button></td>
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
                     <th width="100px" >Potreban recept</th>
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