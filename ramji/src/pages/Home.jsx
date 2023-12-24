import { useState } from "react"
const Home = () => {
   const [inputs, setInputs] = useState({
      name:'',
      email:''
   })
   const [tableData, setTableData] = useState([]) ;
   const [editClick, setEditClick] =useState(null);
   const [editIndex, setEditIndex]=useState('') ;

   const handleChange = (e)=>{
 setInputs({
  ...inputs,[e.target.name] : e.target.value,
 })
   } 
    
   const handleSubmit = (e)=>{
     e.preventDefault();
     setTableData([...tableData, inputs])
    if(editClick){
        const tempTableData = tableData ;
        Object.assign(tempTableData[editIndex],inputs);
        setTableData([...tempTableData])
        setEditClick(false) 
        setInputs({
          name:"",
          email:""
         })

    }else{
      setInputs({
        name:"",
        email:""
       })
    }
   } 
    
   const handleRemove = (i)=>{
   const removeData = tableData.filter((elem, id)=> i!== id)
     
  setTableData(removeData)
   }  
    const handleEdit =(i)=>{
      const editData = tableData[i] ;
      setInputs({name:editData.name, email:editData.email})
      setEditClick(true) 
      setEditIndex(i)
    }

  return (
    <>
    <div style={{backgroundColor:"#32FF87",padding:"50px",height:"650px"}}>
    <h1>Crud operation </h1>
    <div style={{backgroundColor:"#206654",padding:"40px",alignItems:'center',justifyContent:"center",display:'flex',boxShadow:" 9px 9px 9px grey"}}>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{color:"white",fontSize:"larger"}}>Name : </label>
          <input style={{height:"40px",width:"250px", borderRadius:"5px" }} type="text" placeholder="Enter Name" name='name' value={inputs.name} onChange={handleChange} />
        </div><br></br>
        <div>
          <label style={{color:"white",fontSize:"larger"}}> Email : </label>
          <input style={{height:"40px",width:"250px", borderRadius:"5px" }}  type="text" placeholder="Enter Email"  name='email' value={inputs.email} onChange={handleChange}  />
        </div> <br></br>
        <button type="submit" style={{width:"80px",height:"40px",backgroundColor:"#32FF87",color:"black",fontSize:"larger",fontWeight:"bolder", borderRadius:"5px",marginLeft:"130px"}}>{editClick ? 'Update': 'Add'}</button>
      </form>
    </div>
     
   <div style={{paddingTop:"40px"}}>
   {

tableData.map((item,i)=>{
  return(
    <div key={i} style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
  
      <h3>{item.name}</h3>
      <h3>{item.email}</h3>
  

      <span>
      <button onClick={()=>handleRemove(i)}  style={{width:"80px",height:"40px",backgroundColor:"red",color:"white",fontSize:"larger",fontWeight:"bolder", borderRadius:"5px"}} >Remove</button>
      <button onClick={()=> handleEdit(i)}  style={{width:"80px",height:"40px",backgroundColor:"green",color:"white",fontSize:"larger",fontWeight:"bolder", borderRadius:"5px" ,margin:'5px'}} >Edit</button>
      </span>
    </div>
  )
})
}
   </div>



    </div>
    
    
    </>
  )
}

export default Home