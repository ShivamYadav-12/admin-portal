import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {UserColumns} from "../datatablesource";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { collection, getDocs ,doc, onSnapshot, deleteDoc} from "firebase/firestore";
import { db } from "../firebase";

const Datatable = () => {
  const [data,setdata] = useState([]);

useEffect(()=>{
  // const fetchData =async () =>{
    // let list =[];
    // try{
      // const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//  list.push({id:doc.id ,...doc.data()});
// });
//  setdata(list)

    // }catch(err){
      // console.log(err);
    // }
  // };
  // fetchData()
  const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
    let list =[];
    snapShot.docs.forEach((doc) =>{
      list.push({id:doc.id,...doc.data()});
    
});
setdata(list);
},
(error)=>{
  console.log(error)
}
  );
  return()=>{
    unsub();
  }
},[]);

console.log(data)

const handledelete = async(id)=>{
  try{
    await deleteDoc(doc(db,"users",id));
    setdata(data.filter((item) => item.id !==id));

  }
  catch(err)
  {
    console.log(err);
  }
};


  const actioncolumn =[{ field:"action",width:200,renderCell:(params)=>{
 return (
  <div className="cellAction">
    <Link to="/users/test" style ={{textDecoration:"none"}}>
    <div className="viewbutton">View</div>
    </Link>
    <div className="deletebutton" onClick={()=>handledelete(params.row.id)}>Delete</div>
  </div>
 )
  }
}]
  return (

    
    <div className="datatable">
      <div className="datatabletitle">
        Add New User
        <Link to="/users/new"  className="link">
          New User
        </Link>
      </div>
         <DataGrid
        rows={data}
        columns={UserColumns.concat(actioncolumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      
    </div>
  )
}

export default Datatable
