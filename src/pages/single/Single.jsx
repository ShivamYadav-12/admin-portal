import "./single.scss"
import Navbar from "../../navbar/Navbar"
import Sidebar from "../../sidebar/Sidebar"
import Chart from "../../chart/Chart"
import List from "../../tables/Tables"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singlecontainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editbtn">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img className="itemimg" src="https://pbs.twimg.com/media/FVZoSUgX0AASGFy.jpg:large"  />
            <div className="details">
              <h1 className="itemtitle">Portgaz D. Ace</h1>
              <div className="detailitem">
              <span className="itemkey">Email:</span>
              <span className="itemvalue">Ace@gmail.com</span>
              </div>
              <div className="detailitem">
              <span className="itemkey">Phone:</span>
              <span className="itemvalue">9857463490</span>
              </div>
              <div className="detailitem">
              <span className="itemkey">Adress:</span>
              <span className="itemvalue">Enies Lobby near impel down</span>
              </div>
              <div className="detailitem">
              <span className="itemkey">Country:</span>
              <span className="itemvalue">East Blue</span>
              </div>
              </div>

            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="user last six month"/>
          </div>
        </div>
        <h1 className="title">Last Transactions</h1>
        <div className="bottom">
          <List/>
        </div>
      </div>
      
    </div>
  )
}

export default Single
