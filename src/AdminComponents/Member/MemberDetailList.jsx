import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Member.module.css";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import * as Icons from "react-icons/fa";

const MemberDetailList = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>မန်ဘာအသေးစိတ်စာမျက်နှာ</h2>
            </div>
          </div>

          <Form className="mb-3">
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="code" className="m-2 w-25">
                မန်ဘာကုတ်
              </Label>
              <Input type="number" name="code" id="code" />
            </FormGroup>

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="name" className="m-2 w-25">
                အမည်
              </Label>
              <Input type="text" name="name" id="name" />
            </FormGroup>

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="phone" className="m-2 w-25">
                ဖုန်းနံပါတ်
              </Label>
              <Input type="number" name="phone" id="phone" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="other" className="m-2 w-25">
                နေရပ်လိပ်စာ
              </Label>
              <Input type="text" name="other" id="other" />
            </FormGroup>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="other" className="m-2 w-25">
                လက်ကျန် Point
              </Label>
              <Input type="text" name="other" id="other" />
            </FormGroup>

            <div className={Style.form__button_staff}>
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

          <Table striped>
            <thead>
              <tr>
                <th>ရက်စွဲ</th>
                <th>ဝယ်ယူခဲ့သောပမာဏ</th>
                <th>ပွိုင့်အရေအတွက်</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22/03/22</td>
                <td>200000</td>
                <td>30</td>
              </tr>
              <tr>
                <td>22/03/22</td>
                <td>200000</td>
                <td>30</td>
              </tr>
              <tr>
                <td>22/03/22</td>
                <td>200000</td>
                <td>30</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default MemberDetailList;
