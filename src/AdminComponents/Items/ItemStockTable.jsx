import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import "./Items.css";
import Style from './Item.module.css'
import image from "../NavBar/profile.png";

const ItemStockTable = () => {
  return (
    <>
    <Navbar />
    <div className="items">
      <div className="formMain_item">
        <div className="m-2 d-flex">
          <div className="item_list">
            <h2>ပစ္စည်းစာရင်း</h2>
          </div>
          <div>
            <Button color="success" size="sm">
              <Icons.FaPlusCircle style={{ margin: 5 }} />
              ထပ်ထည့်မည်
            </Button>
            <Button className="bg-danger bg-gradient" color="primary" size="sm" style={{ marginLeft: 5 }}>
              <Icons.FaSave style={{ margin: 5 }} /> စာရင်းထုတ်မည်
            </Button>
          </div>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ပစ္စည်:ပုံ</th>
              <th>ပစ္စည်:ကုတ်</th>
              <th>ပစ္စည်:အမည်</th>
              <th>ဝယ်ဈေ:</th>
              <th>ရောင်းဈေး</th>
              <th>အရေအတွက်</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={image} width="50px" height="50px" alt="" />
              </td>
              <td>1234</td>
              <td>@mdo</td>
              <td>20000</td>
              <td>20000</td>
              <td>40</td>
              <td>
              <Button color="warning m-2" size="md">
                  <Icons.FaEdit className={Style.FEdit}/>
                </Button>
                <Button color="danger" size="md">
                  <Icons.FaTrashAlt className={Style.FTrash}/>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={image} width="50px" height="50px" alt="" />
              </td>
              <td>12345</td>
              <td>@fat</td>
              <td>6788</td>
              <td>345676</td>
              <td>76</td>
              <td>
              <Button color="warning m-2" size="md">
                  <Icons.FaEdit className={Style.FEdit}/>
                </Button>
                <Button color="danger" size="md">
                  <Icons.FaTrashAlt className={Style.FTrash}/>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <img src={image} width="50px" height="50px" alt="" />
              </td>
              <td>12345</td>
              <td>@fat</td>
              <td>6788</td>
              <td>345676</td>
              <td>76</td>
              <td>
              <Button color="warning m-2" size="md">
                  <Icons.FaEdit className={Style.FEdit}/>
                </Button>
                <Button color="danger" size="md">
                  <Icons.FaTrashAlt className={Style.FTrash}/>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </>
  )
}

export default ItemStockTable