import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./Member.module.css";

const MemberTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>မန်ဘာစာရင်း</h2>
            </div>
            <div>
              <Button color="success" size="sm">
                <Icons.FaPlusCircle style={{ margin: 5 }} />
                မန်ဘာအသစ်ထည့်ရန်
              </Button>
              {/* <Button
              className="bg-danger bg-gradient"
              color="primary"
              size="sm"
              style={{ marginLeft: 5 }}
            >
              <Icons.FaSave style={{ margin: 5 }} /> စာရင်းထုတ်မည်
            </Button> */}
            </div>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>မန်ဘာကုတ်</th>
                <th>အမည်</th>
                <th>ဖုန်းနံပါတ်</th>
                <th>နေရပ်လိပ်စာ</th>
                <th>Point စုစုပေါင်း</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>76999</td>
                <td>Ko Mg</td>
                <td>0977463673</td>
                <td>Yangon</td>
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
                <td>76999</td>
                <td>Ko Mg</td>
                <td>0977463673</td>
                <td>Yangon</td>
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
                <td>76999</td>
                <td>Ko Mg</td>
                <td>0977463673</td>
                <td>Yangon</td>
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

export default MemberTable;
