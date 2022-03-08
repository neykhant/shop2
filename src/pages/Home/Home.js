// import React, { useState } from "react";
// import * as Icons from "react-icons/fa";
// import "./Home.css";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Navbar from "../../components/NavBar/NavBar";

// function Home() {
//   const [code, setCode] = useState("");
//   const [name, setName] = useState("");
//   const [company, setCompany] = useState("");
//   const [phone, setPhone] = useState("");
//   const [other, setOther] = useState("");


//   const handleSubmit = () => {
//     console.log("code", code);
//     console.log("name", name);
//     console.log("company", company);
//     console.log("phone", phone);
//     console.log("other", other);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="supplier">
//         <div className="supplier_form">
//           <p style={{ fontSize: 20, fontSize: 28, fontWeight: 700 }}>
//             Supplier အချက်အလက်များသွင်းရန်စာမျက်နှာ
//           </p>
//           <div>
//             <div className="supplier_container">
//               <Button variant="contained" disabled className="supplier_button">
//                 ကုတ်
//               </Button>
//               <TextField
//                 onChange={(e) => setCode(e.target.value)}
//                 className="text_field"
//                 id="outlined-basic"
//                 variant="outlined"
//               />
//             </div>
//             <div className="supplier_container">
//               <Button variant="contained" disabled className="supplier_button">
//                 အမည်
//               </Button>
//               <TextField
//                 onChange={(e) => setName(e.target.value)}
//                 className="text_field"
//                 id="outlined-basic"
//                 variant="outlined"
//               />
//             </div>
//             <div className="supplier_container">
//               <Button variant="contained" disabled className="supplier_button">
//                 ကုမ္ပဏီအမည်
//               </Button>
//               <TextField
//                 onChange={(e) => setCompany(e.target.value)}
//                 className="text_field"
//                 id="outlined-basic"
//                 variant="outlined"
//               />
//             </div>
//             <div className="supplier_container">
//               <Button variant="contained" disabled className="supplier_button">
//                 ဖုန်းနံပါတ်
//               </Button>
//               <TextField
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="text_field"
//                 id="outlined-basic"
//                 variant="outlined"
//               />
//             </div>
//             <div className="supplier_container">
//               <Button variant="contained" disabled className="supplier_button">
//                 အခြား
//               </Button>
//               <TextField
//                 onChange={(e) => setOther(e.target.value)}
//                 className="text_field"
//                 id="outlined-basic"
//                 variant="outlined"
//               />
//             </div>
//             <div className="supplier_container_save">
//               <Button
//                 onClick={handleSubmit}
//                 className="supplier_button_save"
//                 size="large"
//                 variant="contained"
//               >
//                 <Icons.FaSave style={{ margin: 5 }} />
//                 သိမ်းမည်
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
