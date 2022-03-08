import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./SalaryCommession.module.css";
import {
  FormGroup,
  Label,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const SalaryCommessionTable = () => {
  const [togle, setTogle] = useState(false);
  const toggle = () => {
    setTogle(!togle);
  };

  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>၀န်ထမ်းလခနှင့်ကော်မရှင်စုစုပေါင်း</h2>
            </div>
            <div>
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
          <div className="d-flex w-100 justify-content-start align-items-center">
            <ButtonDropdown
              isOpen={togle}
              toggle={toggle}
              className="item_list"
            >
              <DropdownToggle caret>ကုန်ကျစရိတ်နှုန်း</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>200000</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>300000</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="dob" className="m-2 w-100">
                စုစုပေါင်း (Total)
              </Label>
              <Input type="text" name="dob" id="dob" />
            </FormGroup>
          </div>
          <Table striped>
            <thead>
              <tr>
                <th>အမည်</th>
                <th>လခ</th>
                <th>ရက်မှန်ကြေး</th>
                <th>ကော်မရှင်</th>
                <th>စုစုပေါင်း</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ko Heinn</td>
                <td>200000</td>
                <td>10000</td>
                <td>20</td>
                <td>230000</td>
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

export default SalaryCommessionTable;
