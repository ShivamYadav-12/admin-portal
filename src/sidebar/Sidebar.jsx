import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
// import { useEffect } from "react";
//import { auth } from "../../firebase";
// import { signOut } from "firebase/auth";
const Sidebar = () => {

  // useEffect(()=>{
    // setOptions({
      // headerRight: () => (
  //       <TouchableOpacity>
  //           <LogoutIcon className="icon"/>
  //       </TouchableOpacity>
  //     ),
  //   });
    // const logout = async()= {
      //await signOut(auth);
      //.then(() => {
  //         Navigation.replace("LOGIN")
  //       }).catch((error) => {
  //         // An error happened.

     // };

  // },[])
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}> 
       
      <span className="logo">Admin Portal</span>
      </Link>
      </div>
      <hr/>
      <div className="center">
      <ul>
        <p className="title">MAIN</p>
        <li>

            <DashboardIcon className ="icon"/>
            <span>Dashboard</span>
        </li>
        <p className="title">LIST</p>
        <Link to="/products" style={{textDecoration:"none"}}>
        <li>
          <PeopleOutlineIcon className ="icon"/>
            <span>Donors</span>
        </li>
        </Link>
        <Link to="/users" style={{textDecoration:"none"}}>
        <li>
         
          <PeopleIcon className ="icon"/>
            <span>Acceptor</span>
        </li>
        </Link>
        <p className="title">SERVICE</p>
        <li>
          <NotificationsActiveIcon className ="icon"/>
            <span>Notifications</span>
        </li>
        <li>
             <LeaderboardIcon className ="icon"/>
            <span>Stats</span>
        </li>
        <li>
          <PsychologyIcon className="icon"/>
            <span>Logs</span>
        </li>
        <li>
          <SettingsIcon className="icon"/>
            <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
      
          <AccountCircleIcon className="icon"/>
            <span>Profile</span>
        </li>
        <li>
                       <LogoutIcon className="icon"/>
                   <span>Logout</span>
        </li>
        


      </ul>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Sidebar
