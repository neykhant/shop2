import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./AuthComponents/Login/Login";
import Supplier from "./AdminComponents/Supplier/Supplier";
import SupplierTable from "./AdminComponents/Supplier/SupplierTable";
import Items from "./AdminComponents/Items/Items";
import ItemTable from "./AdminComponents/Items/ItemTable";
import Staff from "./AdminComponents/Staff/Staff";
import StaffTable from "./AdminComponents/Staff/StaffTable";
import Expend from "./AdminComponents/Expend/Expend";
import ExpendTable from "./AdminComponents/Expend/ExpendTable";
import ItemTransfer from "./AdminComponents/ItemTransfer/ItemTransfer";
import ItemTransferTable from "./AdminComponents/ItemTransfer/ItemTransferTable";
import Member from "./AdminComponents/Member/Member";
import MemberTable from "./AdminComponents/Member/MemberTable";
import MemberDetailList from "./AdminComponents/Member/MemberDetailList";
import Owner from "./AdminComponents/Owner/Owner";
import OwnerTable from "./AdminComponents/Owner/OwnerTable";
import ItemRecord from "./AdminComponents/ItemSaleRecord/ItemRecord";
import Voucher from "./AdminComponents/ItemSaleRecord/Voucher";
import Service from "./AdminComponents/ItemSaleRecord/Service";
import Report from "./AdminComponents/Report/Report";
import BadItem from "./AdminComponents/BadItem/BadItem";
import BadItemTable from "./AdminComponents/BadItem/BadItemTable";
import ServiceDetail from "./AdminComponents/Services/Services";
import ServiceDetailTable from "./AdminComponents/Services/ServiceDetailTable";
import SalaryCommessionTable from "./AdminComponents/SalaryCommession/SalaryCommessionTable";
import ItemImport from "./AdminComponents/Items/ItemImport";
import ItemStockTable from "./AdminComponents/Items/ItemStockTable";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />

          <Route path="supplier" exact element={<Supplier />} />
          <Route path="supplier/Table" exact element={<SupplierTable/> } />

          <Route path="staff" exact element={<Staff />} />
          <Route path="staff/table" exact element={<StaffTable />} />

          <Route path="items" exact element={<Items />} />
          <Route path="item/table" exact element={<ItemTable />} />
          <Route path="item_import" exact element={<ItemImport />} />
          <Route path="item_import/stock" exact element={<ItemStockTable />} />

          <Route path="expend" exact element={<Expend />} />
          <Route path="expend/table" exact element={<ExpendTable />} />

          <Route path="item_transfer" exact element={<ItemTransfer />} />
          <Route path="item_transfer/table" exact element={<ItemTransferTable />} />
          
          <Route path="member" exact element={<Member />} />

          <Route path="member/table" exact element={<MemberTable />} />
          <Route path="member_detail_list" exact element={<MemberDetailList />} />

          <Route path="owner" exact element={<Owner />} />
          <Route path="owner/table" exact element={<OwnerTable />} />

          <Route path="item_sale_record/table" exact element={<ItemRecord />} />
          <Route path="voucher/table" exact element={<Voucher />} />
          <Route path="service/table" exact element={<Service />} />

          <Route path="report" exact element={<Report />} />

          <Route path="bad_item" exact element={<BadItem />} />
          <Route path="bad_item/table" exact element={<BadItemTable />} />

          <Route path="service_detail" exact element={<ServiceDetail />} />
          <Route path="service_detail/table" exact element={<ServiceDetailTable />} />

          <Route path="salary_commession/table" exact element={<SalaryCommessionTable />} />
          
          <Route path="*" element={<Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
