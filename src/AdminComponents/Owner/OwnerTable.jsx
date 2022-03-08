import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./Owner.module.css";

const OwnerTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>လုပ်ငန်းရှင်မှပစ္စည်:ထုတ်သုံးခြင်းစာရင်း</h2>
            </div>
            <div>
              <Button color="success" size="sm">
                <Icons.FaPlusCircle style={{ margin: 5 }} />
                မန်ဘာအသစ်ထည့်ရန်
              </Button>
            </div>
          </div>
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
                <td>22/02/20</td>
                <td>Motobyite</td>
                <td>08483</td>
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
                <td>22/02/20</td>
                <td>Motobyite</td>
                <td>08483</td>
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
                <td>22/02/20</td>
                <td>Motobyite</td>
                <td>08483</td>
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

export default OwnerTable;
