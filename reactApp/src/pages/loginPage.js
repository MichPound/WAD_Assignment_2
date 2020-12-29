import React, { useRef, useState, useContext } from "react";
import { AuthContext } from '../contexts/authContext'
import {Alert} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "./forms.css";

export default function Login(){
   const emailRef = useRef()
   const passwordRef = useRef()




  //  const {login} = useAuth()
  const context = useContext(AuthContext)



   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   async function handleSubmit(e){
     e.preventDefault()

    try{
      setError('')
      setLoading(true)



      // await login(emailRef.current.value, passwordRef.current.value)
      await context.authenticate(emailRef.current.value, passwordRef.current.value);


      history.push('/')
    }catch{
      setError('Failed to sign in')
    }
    setLoading(false)
   }


  return (
    <div className="container">
      <form className="form bg-dark text-light" onSubmit={handleSubmit}>
        
       <h3 class = "ui header">
         Log In
       </h3> 
      
       <div className="form-group">
        <input className="form-control" type="text" placeholder="Email" name="email" ref={emailRef} autoFocus required />
       </div>
       <div className="form-group">
        <input className="form-control" type="password" placeholder="Password" name="password" ref={passwordRef} required />
       </div>

       {error && <Alert variant="danger">{error}</Alert>}
       
       <button disabled={loading} type="submit" className="btn btn-primary">
        Log In
       </button>
      
       <div>
        Don't have an account? <Link to = "/signup"> Register </Link>
       </div>
      </form>
    </div>
  )
}