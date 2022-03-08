import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./Expend.module.css";


const ExpendTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>ကုန်ကျစရိတ်စာရင်း</h2>
            </div>
            <div>
              <Button color="success" size="sm">
                <Icons.FaPlusCircle style={{ margin: 5 }} />
                ထပ်ထည့်မည်
              </Button>
              <Button
                className="bg-danger bg-gradient"
                color="primary"
                size="sm"
                style={{ marginLeft: 5 }}
              >
                <Icons.FaSave style={{ margin: 5 }} /> စာရင်းထုတ်မည်
              </Button>
            </div>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>ရက်စွဲ</th>
                <th>ကုန်ကျစရိတ်စုစုပေါင်း</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>33/04/1999</td>
                <td>200000</td>
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
                <td>33/04/1999</td>
                <td>200000</td>
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
                <td>33/04/1999</td>
                <td>200000</td>
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
  );
};

export default ExpendTable;
