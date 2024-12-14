import Datatable from "../../Datatable/Datatable"
import Navbar from "../../navbar/Navbar"
import Sidebar from "../../sidebar/Sidebar"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listcontainer">
        <Navbar/>
        <Datatable/>

      </div>
    </div>
  )
}

export default List
