import { useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App(){
  const [users, setUsers] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [isModel, setIsModel] = useState(false);
  const [userData, setUserData] = useState({name: "", age: "", city: ""});
  
  const getAllUsers = async () => {
    await axios.get("http://localhost:2000/users").then
    ((res) => {
      setUsers(res.data);
      setFilterUser(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  //Search Function
  const handleSearchChange = (e) => {
    const SearchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(SearchText) || user.city.toLowerCase().includes(SearchText));
    setFilterUser(filteredUsers);
  }

  //Delete Function
  const handleDelete = async (id) =>{
    const isConfirm = window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS USER?");
    if(isConfirm){
    await axios.delete(`http://localhost:2000/users/${id}`).
    then((res) => {
      setUsers(res.data);
      setFilterUser(res.data);
    });
  }
  };

  //Add User Details
  const handleAddRecord = () => {
    setUserData({name: "", age: "", city: ""});
    setIsModel(true);
  };

  
  return(
    <>
      <div className=" mb-5 border-b-2 border-gray-300 max-w-[800px] m-auto">
        <h3 className="flex justify-center text-xl w-800 p-6">CRUD APPLICATION</h3>
      </div>
      <div className='flex justify-between items-center mb-6  max-w-[800px] m-auto'>
        <input className='w-[300px] h-10 border-gray-400 outline-none border-2' type="search" placeholder='Search Text Here' onChange={handleSearchChange}/>
        <button onClick={handleAddRecord} className='btn green'>Add Button</button>
      </div>
      <table className='table w-[100%] cursor-pointer  max-w-[800px] m-auto'>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filterUser &&
            filterUser.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td><button className='btn green'>Edit</button></td>
                  <td><button onClick={() => handleDelete(user.id)} className='btn red'>Delete</button></td>
                </tr>
              )
            })}
          
        </tbody>
      </table>
      {isModel && (
        // <div className='block fixed z-[1] left-0 top-0 w-[100%] h-[100%] bg-gray-300 overflow-auto'>
        //   <div className='bg-slate-100 w-[80%] m-[10%] auto p-[20px] border-[1px] border-solid border-gray-500'>
            
        //     <h1>USER  RECORD</h1>
        //   </div>
        // </div>
        <div className='model'>
          <div className='model-content'>
            <span></span>
            <h2>USER RECORD</h2>
          </div>
        </div>
      )}
    </>
  )
}

export default App;
