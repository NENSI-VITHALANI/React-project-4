
import { useState } from 'react';
const Row =()=>{
    const [input, setInput] = useState([
        {
          name: '',
          email: '',
          salary: '',
        }
      ])
    
      const adddata = () => {
        let singlefiled = { name: '', email: '', salary: '' }
        let Data = [...input, singlefiled];
        setInput(Data);
      }
    
      const removebutton = (index) => {
        let data = [...input];
        data.splice(index, 1);
        setInput(data);
      }
    
      const addmore = (index, e) => {
    
        let data = [...input]
        data[index][e.target.name] = e.target.value;
        setInput(data);
      }
      return (
    
      <body style={{backgroundColor :'black',color:'white',height:'100vh'}}>
          <center>
          <h1 style={{padding:'30px 0px',borderBottom :'2px solid white',margin :'0px'} }>Add & Delete Table Rows Dynamically</h1>
          <table style={{padding:'30px 0px'}}>
          
            <thead>
              <tr >          
                <th>Full Name</th>     
             
                <th>Email Address</th>
               
                <th>Salary</th>
               
                <th><button onClick={() => adddata()}  style= {{color :'green',borderColor:'green'}} >+</button></th>
              </tr>
            </thead>
            <tbody>
            {
                input.map((item, index) => {
                  return (
                    <tr key={index}>   
                      <td><input name="name" style={{padding :'5px 20px',margin :'10px 20px'}} type='text' value={input.name} onChange={(e) => addmore(index, e)} /></td>
                    
                      <td><input name="email"  style={{padding :'5px 20px',margin :'10px 20px'}} type='text' value={input.email} onChange={(e) => addmore(index, e)} /></td>
                   
                      <td ><input name="salary" style={{padding :'5px 20px',margin :'10px 20px'}} type='text' value={input.salary} onChange={(e) => addmore(index, e)} /></td>
                    
                      <td><button type='button' onClick={() => removebutton(index)} style= {{color :'red',borderColor:'red'}}  >x</button></td>   
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </center>
      </body>
    
      );
}
export default Row;