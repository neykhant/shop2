import React from "react";
import Navbar from "../NavBar/NavBar";
import { Table, Button } from "reactstrap";
import * as Icons from "react-icons/fa";
import Style from "./Supplier.module.css";
import image from "../NavBar/profile.png";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`
//   }
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
// ];

const SupplierTable = () => {
  return (
    <>
      <Navbar />
      <div className={Style.staff}>
        <div className={Style.staff_formMain}>
          <div className="m-2 d-flex">
            <div className="item_list">
              <h2>Supplier List</h2>
            </div>
            <div>
              <Button color="success" size="sm">
                <Icons.FaPlusCircle style={{ margin: 5 }} />
                ထပ်ထည့်မည်
              </Button>
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
          <Table striped>
            <thead>
              <tr>
                <th>ကုတ်</th>
                <th>အမည်</th>
                <th>ကုမ္ပဏီအမည်</th>
                <th>ဖုန်းနံပါတ်</th>
                <th>အခြား</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14569</td>
                <td>Mg ko</td>
                <td>ABC Company</td>
                <td>09887665</td>
                <td> How are you</td>
                <td>
                  <Button color="warning m-2" size="md">
                    <Icons.FaEdit className={Style.FEdit}/>
                  </Button>
                  <Button color="danger" size="md">
                    <Icons.FaTrashAlt className={Style.FTrash}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>14569</td>
                <td>Mg ko</td>
                <td>ABC Company</td>
                <td>09887665</td>
                <td> How are you</td>
                <td>
                  <Button color="warning m-2" size="md">
                    <Icons.FaEdit className={Style.FEdit}/>
                  </Button>
                  <Button color="danger" size="md">
                  <Icons.FaTrashAlt className={Style.FTrash}/>
                  </Button>
                </td>
              </tr>
              <tr>
                <td>14569</td>
                <td>Mg ko</td>
                <td>ABC Company</td>
                <td>09887665</td>
                <td> How are you</td>
                <td>
                  <Button color="warning m-2" size="md">
                    <Icons.FaEdit className={Style.FEdit}/>
                  </Button>
                  <Button color="danger" size="md">
                  <Icons.FaTrashAlt className={Style.FTrash}/>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>

    // <>
    //   <Navbar />

    //   <div style={{ height: 400, width: "86%", display: flexbox, marginLeft: '16rem' }}>
    //     <DataGrid
    //       rows={rows}
    //       columns={columns}
    //       pageSize={5}
    //       rowsPerPageOptions={[5]}
    //     />
    //   </div>
    // </>
  );
};

export default SupplierTable;
