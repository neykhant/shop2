import React, { useState } from "react";
import Navbar from "../NavBar/NavBar";
import * as Icons from "react-icons/fa";
import "./Items.css";
import Style from "./Item.module.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
} from "reactstrap";
import image from "../NavBar/profile.png";

const Items = () => {
  // const initialValues = [
  //   {
  //     item_image: "",
  //     item_code: "",
  //     item_name: "",
  //     buy_price: "",
  //     sell_price: "",
  //   },
  // ];

  const [realData, setRealData] = useState(null);

  const [data, setData] = useState([]);

  const [formValues, setFormValues] = useState({
    item_code: "",
    item_name: "",
    buy_price: "",
    sell_price: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // console.log(formValues)

  const handleClick = () => {
    // console.log("click");
    setData([...data, formValues]);
    setFormValues({
      item_code: "",
      item_name: "",
      buy_price: "",
      sell_price: "",
    });
  };

  const handleSubmit = () => {
    setRealData(formValues);
    console.log("first", data);
  };

  const handleDelete = (price) => {
    setData(data.filter(da => da.buy_price !== price ))
    console.log("delete",  data)
  }

  console.log("data", realData);

  return (
    <>
      <Navbar />
      <div className="items">
        <div className="formMain">
          <Form>
            <h1 style={{ fontSize: 20, marginBottom: 20, fontWeight: "600" }}>
              ပစ္စည်းအချက်အလက်သွင်းရန်စာမျက်နှာ
            </h1>
            <div className="form__control">
              {/* <FormGroup className="m-2">
                <Label for="item_image" className="w-100">
                  ပစ္စည်:ပုံ
                </Label>
                <Input type="file" name="item_image" id="item_image" required />
              </FormGroup> */}
              <FormGroup className="m-2">
                <Label for="item_code" className="w-100">
                  ပစ္စည်:ကုတ်
                </Label>
                <Input
                  type="number"
                  name="item_code"
                  id="item_code"
                  required
                  value={formValues.item_code}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="m-2">
                <Label for="item_name" className="w-100">
                  ပစ္စည်:အမည်
                </Label>
                <Input
                  type="text"
                  name="item_name"
                  id="item_name"
                  required
                  value={formValues.item_name}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="m-2">
                <Label for="buy_price" className="w-100">
                  ဝယ်ဈေ:
                </Label>
                <Input
                  type="number"
                  name="buy_price"
                  id="buy_price"
                  required
                  value={formValues.buy_price}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="m-2">
                <Label for="sell_price" className="w-100">
                  ရောင်းဈေး
                </Label>
                <Input
                  type="number"
                  name="sell_price"
                  id="sell_price"
                  required
                  value={formValues.sell_price}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
            <div className="form__button">
              <Button
                onClick={handleClick}
                color="primary"
                size="md"
                style={{
                  marginLeft: 5,
                  backgroundColor: "#9a4d3a",
                  border: "none",
                }}
              >
                <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
              </Button>
            </div>
          </Form>

          <Table striped>
            <thead>
              <tr>
                {/* <th>ပစ္စည်:ပုံ</th> */}
                <th>ပစ္စည်:ကုတ်</th>
                <th>ပစ္စည်:အမည်</th>
                <th>ဝယ်ဈေ:</th>
                <th>ရောင်းဈေး</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <td>
                  <img src={image} width="50px" height="50px" alt="" />
                </td> */}
              {data.map((da) => (
                <tr key={da.item_code}>
                  <td>{da.item_code}</td>
                  <td>{da.item_name}</td>
                  <td>{da.buy_price}</td>
                  <td>{da.sell_price}</td>
                  <td>
                    <Button color="warning m-2" size="md">
                      <Icons.FaEdit className={Style.FEdit} />
                    </Button>
                    <Button color="danger" size="md" onClick={() =>handleDelete(da.buy_price)}>
                      <Icons.FaTrashAlt className={Style.FTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="form__button">
            <Button
              onClick={handleSubmit}
              color="primary"
              size="md"
              style={{
                marginLeft: 5,
                backgroundColor: "#9a4d3a",
                border: "none",
              }}
            >
              <Icons.FaSave style={{ margin: 5 }} /> သိမ်းမည်
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
