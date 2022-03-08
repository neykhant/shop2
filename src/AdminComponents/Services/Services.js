import React from "react";
import Navbar from "../NavBar/NavBar";
import * as Icons from "react-icons/fa";
import Style from "./ServiceDetail.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function ServiceDetail() {
  return (
    <>
      <Navbar />
      <div className={Style.items}>
        <div className={Style.formMain}>
          <form>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>ဝန်ဆောင်မှုအချက်အလက်သွင်းရန်စာမျက်နှာ</h2>
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
            <div className={Style.form__control}>
              <FormGroup className="m-2">
                <Label for="code" className="w-100">ကုတ်</Label>
                <Input type="number" name="code" id="code" required/>
              </FormGroup >
              <FormGroup className="m-2">
                <Label for="type" className="w-100">အမျိုးအစား</Label>
                <Input type="text" name="type" id="type" required/>
              </FormGroup>
              <FormGroup className="m-2">
                <Label for="money_about" className="w-100">ကျသင့်ငွေ</Label>
                <Input type="number" name="money_about" id="money_about" required/>
              </FormGroup>
              <FormGroup className="m-2">
                <Label for="percentage" className="w-100">ရာခိုင်နှုန်း</Label>
                <Input type="text" name="percentage" id="percentage" required/>
              </FormGroup>
              <FormGroup className="m-2">
                <Label for="commission" className="w-100">ကော်မရှင်</Label>
                <Input type="text" name="commission" id="commission" required/>
              </FormGroup>
            </div>
            <div className={Style.form__button}>
              <Button color="primary" size="md" style={{ marginLeft: 5, backgroundColor: '#9a4d3a', border: 'none' }}>
                <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
