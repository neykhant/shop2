import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Report.module.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import * as Icons from "react-icons/fa";

const Report = () => {
  const [togle, setTogle] = useState(false);
  const toggle = () => {
    setTogle(!togle);
  };

//   အရောင်းစာရင်းချုပ်
// အရှံးအမြတ်စာရင်း
// ပစည်းအမည်/ပစည်းကုတ်
// ချို့ယွင်းချက်ရှိပစည်းများ
// ချို့ယွင်းချက်ရှိပစည်းများစာရင်း

  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>Report Screen</h2>
            </div>
          </div>

          <Form className="w-80">
            <div className="d-flex w-100">
              <FormGroup className="d-flex w-50 justify-content-center align-items-center">
                <Label for="name" className="m-2 w-100">
                  ကုန်ကျစရိတ်အမည်
                </Label>
                <ButtonDropdown isOpen={togle} toggle={toggle}>
                  <DropdownToggle caret>အမျိုးအစား</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>အရောင်းစာရင်းချုပ်</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>အရှံးအမြတ်စာရင်း</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </FormGroup>
              <FormGroup className="d-flex w-50 justify-content-center align-items-center">
                <Label for="amount" className="m-2 w-100">
                  ပမာဏ
                </Label>
                <Input type="number" name="amount" id="amount" required/>
              </FormGroup>
            </div>
            <div className={Style.form__button_staff}>
              <Button
                color="primary"
                size="sm"
                style={{ marginLeft: 5, backgroundColor: "#9a4d3a" }}
              >
                <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Report;
