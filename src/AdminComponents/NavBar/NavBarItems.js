//jshint ignore:start

import * as Icons from "react-icons/fa";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const navItems = [
  {
    id: 1,
    title: "Supplier",
    path: "/supplier",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPeopleArrows />,

    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow

    subNav: [
      {
        title: 'Table List',
        path: '/supplier/Table',
        // icon: <IoIcons.IoIosPaper />
      },
      // {
      //   title: 'Table Create',
      //   path: '/supplier/Table',
      // }
    ]
  },
  {
    id: 2,
    title: "ပစ္စည်းအချက်",
    path: "/items",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'Table List',
        path: '/item/table',
        icon: <FaIcons.FaListUl />
      },
      {
        title: 'ပစ္စည်းအ၀ယ်သွင်းရန်',
        path: '/item_import',
        icon: <FaIcons.FaListUl />
      },
      {
        title: 'Stock List',
        path: '/item_import/stock',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 3,
    title: "ဝန်ထမ်:စာရင်း",
    path: "/staff",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaClipboardList />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'ဝန်ထမ်: List',
        path: '/staff/table',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 4,
    title: "ကုန်ကျစရိတ်",
    path: "/expend",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaMoneyCheckAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'ကုန်ကျစရိတ် List',
        path: '/expend/table',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 5,
    title: "ပစ္စည်းလွှဲပြောင်းရန်",
    path: "/item_transfer",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaSitemap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'ပစ္စည်းလွှဲပြောင်း List',
        path: '/item_transfer/table',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 6,
    title: "မန်ဘာစာရင်း",
    path: "/member",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUsersCog />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'မန်ဘာစာရင်း List',
        path: '/member/table',
        icon: <FaIcons.FaListUl />
      },
      {
        title: 'မန်ဘာအသေးစိတ်စာမျက်နှာ',
        path: '/member_detail_list',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 7,
    title: "လုပ်ငန်းရှင်သုံးခြင်း",
    path: "/owner",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPenNib />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'လုပ်ငန်းရှင်ထုတ်သုံးခြင်းစာရင်း',
        path: '/owner/table',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 8,
    title: "ပစ္စည်းအရောင်းမှတ်တမ်း",
    path: "/item_sale_record/table",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'ဘောင်ချာအရောင်းမှတ်တမ်း',
        path: '/voucher/table',
        icon: <FaIcons.FaListUl />
      },
      {
        title: 'ဝန်ဆောင်မှုမှတ်တမ်း',
        path: '/service/table',
        icon: <FaIcons.FaListUl />
      },
      
    ]
  },
  {
    id: 9,
    title: "Report Screem",
    path: "/report",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaEnvelopeSquare />
  },
  {
    id: 10,
    title: "ချို့ယွင်းပစ္စည်း",
    path: "/bad_item",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCalendarTimes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'ချို့ယွင်းပစ္စည်းList',
        path: '/bad_item/table',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 11,
    title: "ဝန်ဆောင်မှု့",
    path: "/service_detail",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCalendarTimes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    subNav: [
      {
        title: 'ဝန်ဆောင်မှု့စာရင်း',
        path: '/service_detail/table',
        icon: <FaIcons.FaListUl />
      }
    ]
  },
  {
    id: 12,
    title: "SalaryCommession",
    path: "/salary_commession/table",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaCalendarTimes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,//for upArrow
    iconOpened: <RiIcons.RiArrowUpSFill />,//for downArrow
    
  }
];
