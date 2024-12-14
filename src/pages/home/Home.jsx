import Sidebar from "../../sidebar/Sidebar"
import "./home.scss"; 
import Navbar from "../../navbar/Navbar";
import Widget from "../../widget/Widget";
import Chart from "../../chart/Chart";
import Featured from "../../featured/Featured";
import Tables from "../../tables/Tables";


const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homecontainer">
          <Navbar/>
          <div className="widgets">
          <Widget type ="user"/>
          <Widget type ="order"/>
          <Widget type ="earning"/>
          <Widget type ="donor"/>
          </div>
          <div className="charts">
            <Featured/>
          <Chart aspect={2/1} title= "Revenue (Last Six Month)"/ >
          </div>
          <div className="listcontainer">
            <div className="listtitle">
              Latest Transactions
            </div>
            <Tables/>
          </div>
        </div>
    </div>
  )
}

export default Home
