import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Staff.module.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert
} from "reactstrap";
import * as Icons from "react-icons/fa";


const Staff = () => {

  const initialValues = {
    staff_name: "",
    staff_photo: "",
    staff_dob: "",
    staff_start_date: "",
    stf_phone: "",
    staff_salary: "",
    staff_bank_account: ""
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
    // console.log("formError", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log("formvalues", formValues);
      // console.log("issubmit", isSubmit);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.staff_name) {
      errors.staff_name = "အမည်ဖြည့်ပါ......!";
    }
    if (!values.staff_photo) {
      errors.staff_photo = "ဓါတ်ပုံဖြည့်ပါ......!";
    }
    if (!values.staff_dob) {
      errors.staff_dob = "မွေးသက္ကရာဇ်ဖြည့်ပါ......!";
    }
    if (!values.staff_start_date) {
      errors.staff_start_date = "အလုပ်စဝင်သောနေ့ဖြည့်ပါ......!";
    }
    if (!values.stf_phone) {
      errors.stf_phone = "ဖုန်းနံပါတ်ဖြည့်ပါ......!";
    }
    if (!values.staff_salary) {
      errors.staff_salary = "လခဖြည့်ပါ......!";
    }
    if (!values.staff_bank_account) {
      errors.staff_bank_account = "ဘဏ်အကောင့်ဖြည့်ပါ......!";
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>ဝန်ထမ်းစာရင်းသွင်းရန်စာမျက်နှာ </h2>
            </div>
          </div>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="staff_name" className="m-2 w-25">
                အမည်
              </Label>
              <Input
                type="text"
                name="staff_name"
                id="staff_name"
                value={formValues.staff_name}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.staff_name ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.staff_name}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="staff_photo" className="m-2 w-25">
                ဓါတ်ပုံ
              </Label>
              <Input
                type="file"
                name="staff_photo"
                id="staff_photo"
                value={formValues.staff_phone}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.staff_photo ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.staff_photo}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="staff_dob" className="m-2 w-25">
                မွေးသက္ကရာဇ်
              </Label>
              <Input
                type="number"
                name="staff_dob"
                id="staff_dob"
                value={formValues.staff_dob}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.staff_dob ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.staff_dob}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="staff_start_date" className="m-2 w-25">
                အလုပ်စဝင်သောနေ့
              </Label>
              <Input
                type="number"
                name="staff_start_date"
                id="staff_start_date"
                value={formValues.staff_start_date}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.staff_start_date ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.staff_start_date}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="stf_phone" className="m-2 w-25">
                ဖုန်းနံပါတ်
              </Label>
              <Input
                type="number"
                name="stf_phone"
                id="staff_phone"
                value={formValues.stfphone}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.stf_phone ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.stf_phone}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="staff_salary" className="m-2 w-25">
                လခ
              </Label>
              <Input
                type="number"
                name="staff_salary"
                id="staff_salary"
                value={formValues.staff_salary}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.staff_salary ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.staff_salary}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="staff_bank_account" className="m-2 w-25">
                ဘဏ်အကောင့်
              </Label>
              <Input
                type="number"
                name="staff_bank_account"
                id="staff_bank_account"
                value={formValues.staff_bank_account}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.staff_bank_account ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.staff_bank_account}
              </Alert>
            ) : null}
            <div className={Style.form__button_staff}>
              <Button
                color="primary"
                size="sm"
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

export default Staff;
