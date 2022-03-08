import React from "react";
import Navbar from "../NavBar/NavBar";
import * as Icons from "react-icons/fa";
import Style from "./BadItem.module.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";


const BadItem = () => {
  return (
    <>
      <Navbar />
      <div className={Style.items}>
        <div className={Style.formMain}>
          <form>
            <h1 style={{ fontSize: 20, marginBottom: 20, fontWeight: "600" }}>
              ချို့ယွင်းချက်ရှိပစ္စည်းများ
            </h1>
            <div className={Style.form__control}>
              
              <FormGroup className="m-2">
                <Label for="item_code_name" className="w-100">ပစ္စည်:ကုတ်/ပစ္စည်:အမည်</Label>
                <Input type="text" name="item_code_name" id="item_code_name" required/>
              </FormGroup >
              <FormGroup className="m-2">
                <Label for="item_number" className="w-100">အရေအတွက်</Label>
                <Input type="number" name="item_number" id="item_number" required/>
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
  )
}

export default BadItem