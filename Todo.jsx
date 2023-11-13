// import React,{ Fragment, useState } from 'react'

// const Todo = () => {
//     let [inputValue,setinputValue]= useState ("")
//     let [listitems,setlistitems]=useState([])
//     let [editindex,setEditindex]=useState(null)


//     let handleChange=(e)=>{
//         setinputValue(e.target.value);
        
//     }
//     let handleSubmit=(e)=>
//     {
//         e.preventDefault();
//         console.log(inputValue);
//     }
//     let handleAdd=()=>{
//         if(inputValue!=""){
//             if(editindex!==null){
//             listitems[editindex]=inputValue;
//             setEditindex(null)
//             }
//             else{
//                 setlistitems([...listitems,inputValue])
//             }
//             setinputValue("")
//         }
//     }
//     let handleDelete=(id)=>{
//             let newList =listitems.filter((val,index)=>{
//                 return index!==id
//             })
    
//     setlistitems(newList)
//         }
//         let handleEdit=(id)=>
//         {
//             setinputValue(listitems[id]);
//             setEditindex(id);
//         }
//   return (
    
//     <>
//         <h1>TO-DO APP</h1>
//         <form onSubmit={handleSubmit} autoComplete='off'>
//             <input type="text" name='inputvalue' id='inputvalue' value={inputValue} onChange={handleChange}/>
//             <button onClick={handleAdd}>{editindex!==null?"Update Items":"Add Items"}</button>
//         </form>
//         <section>
//             {listitems.map((val,index)=>{
//                 return(
//                     <Fragment key={index}>
//                         <h3>{val}</h3>
//                         <button onClick={()=>handleEdit(index)}>Edit</button>
//                         <button onClick={()=>handleDelete(index)}>Delete</button>
//                     </Fragment>
//                 )
//             })}
//         </section>
//         <button onClick={()=>setlistitems([])}>clear All</button>   
//     </>
//   )
// }
// export default Todo
