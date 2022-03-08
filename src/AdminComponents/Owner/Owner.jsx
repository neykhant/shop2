import React, { useState, useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Style from "./Owner.module.css";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import * as Icons from "react-icons/fa";


const Owner = () => {

  const initialValues = {
    owner_code: "",
    owner_name: "",
    owner_numb: "",
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
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.owner_code) {
      errors.owner_code = "ပစ္စည်:ကုတ်ဖြည့်ပါ......!";
    }
    if (!values.owner_name) {
      errors.owner_name = "ပစ္စည်:အမည်ဖြည့်ပါ......!";
     }
    if (!values.owner_numb) {
      errors.owner_numb = "အရေအတွက်ဖြည့်ပါ......!";
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
              <h2>လုပ်ငန်းရှင်မှပစ္စည်:ထုတ်သုံးခြင်း</h2>
            </div>
          </div>
          {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}

          <Form onSubmit={handleSubmit}>
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="owner_code" className="m-2 w-25">
              ပစ္စည်:ကုတ်
              </Label>
              <Input type="number" name="owner_code" id="owner_code" value={formValues.owner_code}
                onChange={handleChange} />
            </FormGroup>
            {formErrors.owner_code ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.owner_code}
              </Alert>
            ) : null}

            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="owner_name" className="m-2 w-25">
              ပစ္စည်:အမည်
              </Label>
              <Input type="text" name="owner_name" id="owner_name" value={formValues.owner_name}
                onChange={handleChange} />
            </FormGroup>
            {formErrors.owner_name ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.owner_name}
              </Alert>
            ) : null}
            <FormGroup className="d-flex justify-content-center align-items-center">
              <Label for="owner_numb" className="m-2 w-25">
              အရေအတွက်
              </Label>
              <Input type="number" name="owner_numb" id="owner_phone" value={formValues.owner_numb}
                onChange={handleChange}/>
            </FormGroup>
            {formErrors.owner_numb ? (
              <Alert
                className="d-flex mb-1 p-1 justify-content-center align-items-center"
                color="danger"
              >
                {formErrors.owner_numb}
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
  )
}

export default Owner