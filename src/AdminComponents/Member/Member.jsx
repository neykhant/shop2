import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Member.module.css";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from "reactstrap";
import * as Icons from "react-icons/fa";

const Member = () => {

  
  const initialValues = {
    member_code: "",
    member_name: "",
    member_phone: "",
    member_address: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log("formError", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("formvalues", formValues);
      console.log("issubmit", isSubmit);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.member_code) {
      errors.member_code = "မန်ဘာကုတ်ဖြည့်ပါ......!";
    }
    if (!values.member_name) {
      errors.member_name = "အမည်ဖြည့်ပါ......!";
    }
    if (!values.member_phone) {
      errors.member_phone = "ဖုန်းနံပါတ်ဖြည့်ပါ......!";
    }
    if (!values.member_address) {
      errors.member_address = "နေရပ်လိပ်စာဖြည့်ပါ......!";
    }
    
    return errors;
  };

  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>မန်ဘာစာရင်းသွင်းခြင်းစာမျက်နှာ</h2>
            </div>
          </div>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="member_code" className="m-2 w-25">
                မန်ဘာကုတ်
              </Label>
              <Input
                type="number"
                name="member_code"
                id="member_code"
                value={formValues.member_code}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.member_code ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.member_code}
              </Alert>
            ) : null}

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="member_name" className="m-2 w-25">
                အမည်
              </Label>
              <Input
                type="text"
                name="member_name"
                id="member_name"
                value={formValues.member_name}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.member_name ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.member_name}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="member_phone" className="m-2 w-25">
                ဖုန်းနံပါတ်
              </Label>
              <Input
                type="number"
                name="member_phone"
                id="member_phone"
                value={formValues.member_phone}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.member_phone ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.member_phone}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="member_address" className="m-2 w-25">
                နေရပ်လိပ်စာ
              </Label>
              <Input
                type="text"
                name="member_address"
                id="member_address"
                value={formValues.member_address}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.member_address ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.member_address}
              </Alert>
            ) : null}
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
        </div>
      </div>
    </>
  );
};

export default Member;
