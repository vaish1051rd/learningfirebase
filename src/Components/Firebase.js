import React,{useEffect, useState} from 'react'
import { database } from '../friebase';

function Firebase() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    let createuserindatabase = async() => {
        // await database.users.add({name,age})   // was adding some default id
        await database.users.doc('11111111').set({name,age})  // will make my own uniqe id    
    }

     // to read data from saved uid
    // useEffect(async()=>{
    //     let uid = 'NiQXXFNpI0vd5xHtzLXh';
    //     let data = await database.users.doc(uid).get();
    //     console.log(data.data())

    //data.forEach((obj)=>console.log(obj.data()))    // for getting all the data from users
    // })

   /*for updating the already existing users info */
//    let update = async() => {
//     let uid ='NiQXXFNpI0vd5xHtzLXh';
//     await database.users.doc(uid).update({
//         name,age
//     })
//    }

/*for delete */
let deletee = async() => {
  let uid = 'NiQXXFNpI0vd5xHtzLXh';
  await database.users.doc(uid).delete()
}



  return (
    <>
    <div>
        <label htmlFor='name'>Name</label>
        <input type='text'value={name} onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor='age'>Age</label>
        <input type='number'value={age} onChange={(e)=>setAge(e.target.value)} />
        <button onClick={createuserindatabase}>Create</button>
        <button onClick={deletee}>Delete</button>
    </div>
    </>
  )
}

export default Firebase