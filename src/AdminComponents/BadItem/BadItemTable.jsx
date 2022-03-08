import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import Style from "./BadItem.module.css";
import * as Icons from "react-icons/fa";

const BadItemTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>ချို့ယွင်းချက်ရှိပစ္စည်:များစာရင်း</h2>
            </div>
            <div>
              <Button color="success" size="sm">
                <Icons.FaPlusCircle style={{ margin: 5 }} />
                မန်ဘာအသစ်ထည့်ရန်
              </Button>
            </div>
          </div>

          <div></div>
          <Table striped>
            <thead>
              <tr>
                <th>ရက်စွဲ</th>
                <th>ပစ္စည်:အမည်</th>
                <th>ပစ္စည်:ကုတ်</th>
                <th>အရေအတွက်</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/22/21</td>
                <td>Car</td>
                <td>08737</td>
                <td>50</td>
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

export default BadItemTable;
