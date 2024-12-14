import { useContext } from "react"
//import Welcome from "./pages/welcome/Welcome"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List"; 
import { productInputs, UserInputs } from "./formsource";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


function App() {
  const {currentUser} = useContext(AuthContext)
 
  const RequireAuth = ({children})=>{
    return currentUser ? children :<Navigate to ="/login"/>
  };


 // console.log(currentUser)

  
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="login" element ={<Login/>}/>
     <Route path ="/" >
      <Route index element =
      
      {  <RequireAuth> <Home/>  </RequireAuth>}/>
      
     
      <Route path ="users" >
      <Route index element ={ <RequireAuth><List/> </RequireAuth>}/>
      <Route path = ":userId" element ={<RequireAuth><Single/></RequireAuth>}/>
      <Route path = "new" element ={<RequireAuth><New inputs={UserInputs} title="Add New User"/></RequireAuth>}/>
      </Route>
      <Route path ="products" >
      <Route index element ={<RequireAuth><List/></RequireAuth>}/>
      <Route path = ":productId" element ={<RequireAuth><Single/></RequireAuth>}/>
      <Route path = "new" element ={<RequireAuth><New inputs={productInputs} title="Add New Product"/></RequireAuth>}/>

      </Route>
     </Route>

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
