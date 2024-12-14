import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useEffect, useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { auth,db,storage } from "../../firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth"
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const [file, setfile] = useState("");
  const [data, setdata] = useState({});
  const [per, setper] = useState(null);
   const navigate = useNavigate();



  useEffect(()=>{
    const uploadFile =() =>{
      const name = new Date().getTime() + file.name
      console.log(name)
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  (snapshot) => {
   
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setper(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
   console.log(error)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setdata((prev) =>({...prev,img:downloadURL}))
    });
  }
);

    };
    file && uploadFile();
  },[file]);

console.log(data)
  const handleInput = (e) =>{
    const id = e.target.id;
    const value = e.target.value;

    setdata({...data,[id] : value});
  }

  console.log(data)


  const handleAdd = async (e) =>{
    e.preventDefault();
    try{
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
        );


     await setDoc(doc(db, "users",res.user.uid), {
      ...data,
      timestamp: serverTimestamp(),
    });
  }catch(err){
    console.log(err);
  }

  navigate(-1);
  
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit ={handleAdd} >
              <div className="forminput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setfile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="forminput" key={input.id}>
                  <label>{input.label}</label>
                  <input id ={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}
              <button disabled ={per!=null && per<100}  type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
