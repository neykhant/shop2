import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./ServiceDetail.module.css";

const ServiceDetailTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>ဝန်ဆောင်မှုစာရင်း</h2>
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
                <th>ကုတ်</th>
                <th>အမျိုးအစား</th>
                <th>ကျသင့်ငွေ</th>
                <th>ရာခိုင်နှုန်း</th>
                <th>ကော်မရှင်</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3999</td>
                <td>Car and Motor</td>
                <td>99900</td>
                <td>20</td>
                <td>10</td>
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

export default ServiceDetailTable;
