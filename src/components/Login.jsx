import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { Button, Container,Form } from 'react-bootstrap'
import '../styles/login.css'
import {Link} from 'react-router-dom'

const Login = () => {

const { register, handleSubmit,reset, formState: {errors}} = useForm();
const onSubmit= (data)=>{
  console.log(data);
  reset();
;}

  return (
    <div>
      
          <div className="wrapper">

               <Container fluid>
                <form className='loginformContainer' onSubmit={handleSubmit(onSubmit)} >
                    <div className="loginform">
                    <h2 style={{marginBottom:'50px'}}>Login Form</h2>   
                     <input style={{marginBottom:'25px'}} placeholder='Email' type="email" {...register("email" , {required:'Email is required '}  )}  />  
                       <p className='error'> {errors.email?.message } </p>
                     <input style={{marginBottom:'20px'}} placeholder='Password' type="password"  {...register("password" ,  {required:'Password is required'})}/>
                     <p className='error' > {errors.password?.message } </p>
                      <div style={{marginBottom:'23px'}} id='smalldiv1' > <Link to=''> Forget Password?</Link> </div>

                      <Button style={{marginBottom:'20px'}} type='submit' >Log In</Button>
                      <div id='smalldiv2'> 
                       New User?
                       <Link to='/signup'> Sign Up</Link>   
                      </div> 
                    </div>
              
                </form>         
               </Container>
          </div>

    </div>
  )
}

export default Login
 