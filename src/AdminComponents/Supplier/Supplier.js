import React, { useState, useEffect } from "react";
import "./Supplier.css";
import Navbar from "../NavBar/NavBar";
import Style from "./Supplier.module.css";
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

function Supplier() {
  const initialValues = {
    code: "",
    name: "",
    company_name: "",
    phone: "",
    other: ""
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
    if (!values.name) {
      errors.name = "အမည်ဖြည့်ပါ......!";
    }
    if (!values.code) {
      errors.code = "ကုတ်ဖြည့်ပါ......!";
    }
    if (!values.company_name) {
      errors.company_name = "ကုမ္ပဏီအမည်ဖြည့်ပါ......!";
    }
    if (!values.phone) {
      errors.phone = "ဖုန်းနံပါတ်ဖြည့်ပါ......!";
    }
    if (!values.other) {
      errors.other = "အခြားဖြည့်ပါ......!";
    }

    // if(!values.email){
    //   errors.email = "Email is required!."
    // }else if(!regex.test(values.email)){
    //   errors.email = "This is not a valid Email!."
    // }

    // if(!values.password){
    //   errors.password = "Password is required!."
    // }else if(values.password.length  < 4 ){
    //   errors.password = "Password must be more than 4 charachters"
    // }else if(values.password.length > 10){
    //errors.password = "Password cannot exceed more than 10 charachters"
    // }
    return errors;
  };

  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <div className={Style.staff_list}>
              <h2>Supplier အချက်အလက်များသွင်းရန်စာမျက်နှာ</h2>
            </div>
          </div>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex justify-content-center align-items-center mb-1">
              <Label for="code" className="m-2 w-25">
                ကုတ်
              </Label>
              <Input
                type="number"
                name="code"
                id="code"
                value={formValues.code}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.code ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.code}
              </Alert>
            ) : null}

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="name" className="m-2 w-25">
                အမည်
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.name ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.name}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="company_name" className="m-2 w-25">
                ကုမ္ပဏီအမည်
              </Label>
              <Input
                type="text"
                name="company_name"
                id="company_name"
                value={formValues.company_name}
                onChange={handleChange}
                // required
              />
            </FormGroup>
            {formErrors.company_name ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.company_name}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="phone" className="m-2 w-25">
                ဖုန်းနံပါတ်
              </Label>
              <Input
                type="number"
                name="phone"
                id="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.phone ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.phone}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="other" className="m-2 w-25">
                အခြား
              </Label>
              <Input
                type="text"
                name="other"
                id="other"
                value={formValues.other}
                onChange={handleChange}
              />
            </FormGroup>
            {formErrors.other ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.other}
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
}

export default Supplier;
