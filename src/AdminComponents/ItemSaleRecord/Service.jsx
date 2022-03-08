import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import Style from "./ItemRecord.module.css";
import * as Icons from "react-icons/fa";

const Service = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>ဝန်ဆောင်မှု မှတ်တမ်းစာမျက်နှာ</h2>
            </div>
          </div>
          <div></div>
          <Table striped>
            <thead>
              <tr>
                <th>စည်</th>
                <th>ရက်စွဲ</th>
                <th>ဝန်ဆောင်မှုအမည်</th>
                <th>အရေအတွက်</th>
                <th>စုစုပေါင်း</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12/22/21</td>
                <td>Car Service</td>
                <td>7</td>
                <td>70</td>
                <td>
                  <Button color="warning m-2" size="md">
                    <Icons.FaEdit className={Style.FEdit} />
                  </Button>
                  <Button color="danger" size="md">
                    <Icons.FaTrashAlt className={Style.FTrash} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>12/22/21</td>
                <td>Car Service</td>
                <td>7</td>
                <td>70</td>
                <td>
                  <Button color="warning m-2" size="md">
                    <Icons.FaEdit className={Style.FEdit} />
                  </Button>
                  <Button color="danger" size="md">
                    <Icons.FaTrashAlt className={Style.FTrash} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>12/22/21</td>
                <td>Car Servicces</td>
                <td>7</td>
                <td>70</td>
                <td>
                  <Button color="warning m-2" size="md">
                    <Icons.FaEdit className={Style.FEdit} />
                  </Button>
                  <Button color="danger" size="md">
                    <Icons.FaTrashAlt className={Style.FTrash} />
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

export default Service;
