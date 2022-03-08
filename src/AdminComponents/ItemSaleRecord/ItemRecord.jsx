import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import Style from "./ItemRecord.module.css";

const ItemRecord = () => {
  return (
    <>
    <Navbar />
    <div className={Style.staff}>
      <div className={Style.staff_formMain}>
        <div className="m-2 d-flex">
          <div className="item_list">
            <h2>ပစ္စည်:အရောင်း မှတ်တမ်းစာမျက်နှာ</h2>
          </div>
          
        </div>
        <div>
            
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>စည်</th>
              <th>ရက်စွဲ</th>
              <th>ပစ္စည်:အမည်</th>
              <th>အရေအတွက်</th>
              <th>စုစုပေါင်း</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/22/21</td>
              <td>Car</td>
              <td>7</td>
              <td>70</td>
              <td>
                <Button color="warning m-2" size="sm">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>12/22/21</td>
              <td>Car</td>
              <td>7</td>
              <td>70</td>
              <td>
                <Button color="warning m-2" size="sm">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>12/22/21</td>
              <td>Car</td>
              <td>7</td>
              <td>70</td>
              <td>
                <Button color="warning m-2" size="sm">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
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

export default ItemRecord