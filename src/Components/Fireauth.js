import React,{useEffect, useState} from 'react'
import {auth} from '../friebase';

function Fireauth() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('');

    let craete = async()=> {
        let res = await auth.createUserWithEmailAndPassword(email,password);
        console.log(res);
    }

    // this useeffect is doing componentdidmount
    useEffect(()=>{
        let unsub =auth.onAuthStateChanged((user)=>   //onAuthStateChanged is eventlistner for auth, jo user ki state ko change krne ka kaam karta hai
                                           // to remove this eventlistner we use unsub 
        setUser(user))
        return ()=>{                     // componentwill mount usse phle ye wala return chalega
            unsub(); // cleanup(also called)
        }
    },[])  
    
    let logout = async() => {
        await auth.signOut();
    }

    let signin = async() => {
        await auth.signInWithEmailAndPassword(email,password);
    }

  return (
    <>
    {
        user == null?
    
    <div>
        <label htmlFor='email'>Email</label>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor='password'>Password</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={signin}>Sign In</button>
    </div>:
<>
    {/* uid is unique identity of that user which we created in frontend page and which get 
                            // stored in our firebase id */}
    <div>{user.uid}</div> 
    <button onClick={logout}>Logout</button>    
</>  
}
    </>
  )
}

export default Fireauth