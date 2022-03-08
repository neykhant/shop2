import React from "react";
import Navbar from "../NavBar/NavBar";
import * as Icons from "react-icons/fa";
import "./Items.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ItemImport = () => {
  return (
    <>
    <Navbar />
    <div className="items">
      <div className="formMain">
        <form>
          <h1 style={{ fontSize: 20, marginBottom: 20, fontWeight: "600" }}>
          ပစ္စည်းအဝယ်သွင်းရန်စာမျက်နှာ
          </h1>
          <div className="form__control">
            {/* <FormGroup className="m-2">
              <Label for="item" className="w-100">ပစ္စည်:ပုံ</Label>
              <Input type="file" name="item" id="item" />
            </FormGroup> */}
            <FormGroup className="m-2">
              <Label for="item_code" className="w-100">ပစ္စည်းကုတ်/အမည်</Label>
              <Input type="text" name="item_code" id="item_code" />
            </FormGroup >
            <FormGroup className="m-2">
              <Label for="item_image" className="w-100">အရေအတွက်</Label>
              <Input type="text" name="item_image" id="item_image" />
            </FormGroup>
            <FormGroup className="m-2">
              <Label for="buy_price" className="w-100">ဝယ်ဈေ:</Label>
              <Input type="number" name="buy_price" id="buy_price" />
            </FormGroup>
            <FormGroup className="m-2">
              <Label for="sell_price" className="w-100">ရောင်းဈေး</Label>
              <Input type="number" name="sell_price" id="sell_price" />
            </FormGroup>
          </div>
          <div className="form__button">
            <Button color="primary" size="md" style={{ marginLeft: 5, backgroundColor: '#9a4d3a', border: 'none' }}>
              <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
            </Button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default ItemImport