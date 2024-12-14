import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useEffect,useState } from "react";
import { collection,query,where,getDocs } from "firebase/firestore";
import { db } from "../firebase";




const Widget = ({ type }) => {
const[amount,setamount] =useState(null);
const[diff,setdiff] =useState(null);


  let data;
 
switch(type){
  case "user":
    data ={
      title: "USERS",
      ismoney: false,
      link:"visit all user",
      query:"users",
      icon:<PeopleOutlineIcon className="icon" style ={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>

    };
    break;
    case "order":
    data ={
      title: "ORDERS",
      ismoney: false,
      link:"view all order",
      icon:<AddShoppingCartIcon className="icon"style ={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>

    };
    break;
    case "earning":
    data ={
      title: "EARNING",
      ismoney: true,
      link:"view net earning",
      icon:<AttachMoneyIcon className="icon"style ={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>

    };
    break;
    case "donor":
    data ={
      title: "DONOR",
      query:"donor",
      
      link:"see details",
      icon:<AccountBalanceIcon className="icon" style ={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>

    };
    break;
    default:
      break;
}

useEffect(()=>{
  const fetchdata = async()=>{
    const today = new Date();
    const lastmonth =  new Date( new Date().setMonth(today.getMonth()-1));
    const prevmonth =  new Date( new Date().setMonth(today.getMonth()-2));

    const lastmonthQuery = query
    (collection(db,data.query),where("timestamp","<=",today),
    where("timestamp",">",lastmonth));
    const prevmonthQuery = query
    (collection(db,data.query),where("timestamp","<=",lastmonth),
    where("timestamp",">",prevmonth));

    const lastmonthdata = await getDocs(lastmonthQuery)
    const prevmonthdata = await getDocs(prevmonthQuery)

    setamount(lastmonthdata.docs.length)
    setdiff((lastmonthdata.docs.length-prevmonthdata.docs.length)/(prevmonthdata.docs.length)*100);
  };
  fetchdata()
},[]);




  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.ismoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className={`percentage ${diff<0 ?"negative": "positive"}`}>
        
          {diff <0 ? <KeyboardArrowDownIcon/> :<KeyboardArrowUpIcon/> }
          {diff} %
          
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
