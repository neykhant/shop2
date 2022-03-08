import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./ItemRecord.module.css";

const Voucher = () => {
  return (
    <>
    <Navbar />
    <div className={Style.staff}>
      <div className={Style.staff_formMain}>
        <div className="m-2 d-flex">
          <div className="item_list">
            <h2>ဘောင်ချာအရောင်း မှတ်တမ်းစာမျက်နှာ</h2>
          </div>
          
        </div>
        <div>
            
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ရက်စွဲ</th>
              <th>ဘောင်ချာကုတ်</th>
              <th>ဝယ်သူအမည်</th>
              <th>ဝယ်ယူသောပမာဏ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12/22/21</td>
              <td>V-1264</td>
              <td>Ma Khin </td>
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
            <tr>
              <td>12/22/21</td>
              <td>V-1264</td>
              <td>Ma Khin </td>
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
            <tr>
              <td>12/22/21</td>
              <td>V-1264</td>
              <td>Ma Khin </td>
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
  )
}

export default Voucher