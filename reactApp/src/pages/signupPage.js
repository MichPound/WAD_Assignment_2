import React, { useRef, useState } from "react";
import { useAuth } from '../contexts/authContext'
import {Alert} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import "./forms.css";

export default function Signup(){
   const emailRef = useRef()
   const passwordRef = useRef()
   const passwordConfirmRef = useRef()
   const {register} = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)
   const history = useHistory()

   async function handleSubmit(e){
     e.preventDefault()

      if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match')
      }

    try{
      setError('')
      setLoading(true)
      await register(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    }catch{
      setError('Failed to create account')
    }
    setLoading(false)
   }

  return (
    <div className="container">
      <form className="form bg-dark text-light" onSubmit={handleSubmit}>
        
       <h3>
         Register
       </h3> 
      
       <div className="form-group">
        <input className="form-control" type="email" placeholder="Email" name="email" ref={emailRef} autoFocus required />
       </div>
       <div className="form-group">
        <input className="form-control" type="password" placeholder="Password" name="password" ref={passwordRef} required />
       </div>
       <div className="form-group">
        <input className="form-control" type="password" placeholder="Confirm Password" name="passwordConfirm" ref={passwordConfirmRef} required />
       </div>

       {error && <Alert variant="danger">{error}</Alert>}
       
       <button disabled={loading} type="submit" className="btn btn-primary">
        Register
       </button>

       <div className="center">
        Already have an account? <Link to = "/login"> Log In</Link>
       </div>
      </form>
    </div>
  )
}
