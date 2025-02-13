import './App.css';

function App(){
  return(
    <>
      <div className="flex justify-center mb-5 border-b-2 border-gray-300">
        <h3 className="text-xl w-800 p-6">CRUD APPLICATION</h3>
      </div>
      <div className='input-search'>
        <input className='outline-black border-2' type="search"/>
        <button className='btn green'>Add Button</button>
      </div>
      <table>
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
          <tr>
            <td>1</td>
            <td>Gunal</td>
            <td>21</td>
            <td>Thanjavur</td>
            <td><button className='btn green'>Edit</button></td>
            <td><button className='btn red'>Delete</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Gunal</td>
            <td>21</td>
            <td>Thanjavur</td>
            <td><button className='btn green'>Edit</button></td>
            <td><button className='btn red'>Delete</button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gunal</td>
            <td>21</td>
            <td>Thanjavur</td>
            <td><button className='btn green'>Edit</button></td>
            <td><button className='btn red'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App;
