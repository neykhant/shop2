import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import * as Icons from "react-icons/fa";
import Style from "./ItemTransfer.module.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const ItemTransfer = () => {
  const [togle, setTogle] = useState(false);
  const toggle = () => {
    setTogle(!togle);
  };

  return (
    <>
      <Navbar />
      <div className={Style.items}>
        <div className={Style.formMain}>
          <Form>
            <h1
              className="m-2"
              style={{ fontSize: 20, marginBottom: 20, fontWeight: "600" }}
            >
              ပစ္စည်းလွှဲပြောင်းရန်စာမျက်နှာ
            </h1>
            <ButtonDropdown isOpen={togle} toggle={toggle} className="ml-2 mt-4 mb-4">
              <DropdownToggle caret>သို့_______________________</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <div className={Style.form__control}>
              <FormGroup className="m-2">
                <Label for="item_image" className="w-100">
                  ပစ္စည်:အမည်
                </Label>
                <Input type="text" name="item_image" id="item_image" required />
              </FormGroup>

              <FormGroup className="m-2">
                <Label for="item_code" className="w-100">
                  ပစ္စည်:ကုတ်
                </Label>
                <Input type="number" name="item_code" id="item_code" required/>
              </FormGroup>

              <FormGroup className="m-2">
                <Label for="sell_price" className="w-100">
                  အရေအတွက်
                </Label>
                <Input type="number" name="sell_price" id="sell_price" required/>
              </FormGroup>
            </div>
            <div className="form__button">
              <Button
                color="primary"
                size="md"
                style={{
                  marginLeft: 5,
                  backgroundColor: "#9a4d3a",
                  border: "none"
                }}
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

export default ItemTransfer;
