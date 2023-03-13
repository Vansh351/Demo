import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { Button, Container,Form } from 'react-bootstrap'
import '../styles/signup.css'
import {Link} from 'react-router-dom'

const Login = () => {

  const { register,reset, handleSubmit, formState: {errors}} = useForm();
  const [userInfo,setUserInfo] = useState();
  const onSubmit= (data)=>{
    console.log(data);
    reset();
  ;}


  return (
    <div>
      
          <div className="wrapper">

               <Container fluid>
                <Form className='formContainer'onSubmit={handleSubmit(onSubmit)}  >
                    <div className="form">
                    <h2 style={{marginBottom:'50px'}}> SignUp Form</h2>   
                    <input style={{marginBottom:'25px'}} placeholder='Username' type="name" {...register("username" , {required:'Username is required '}  )} />  
                    <p className='error' > {errors.username?.message } </p>
                     <input style={{marginBottom:'20px'}} placeholder='Email' type="email" {...register("email" , {required:'Email is required '}  )} />  
                     <p className='error'> {errors.email?.message } </p>
                     <input style={{marginBottom:'20px'}} placeholder='Password' type="password"  {...register("password" ,  {required:'Password is required', minLength:{value: 5, message: "Min lenth should be 5"}})} />
                     <p className='error' > {errors.password?.message } </p>
                      <Button style={{marginBottom:'20px'}} type='submit' >Sign Up</Button>
                      <div style={{marginBottom:'23px'}}  id='smalldiv2'> 
                       Already Signed Up? 
                       <Link to='/login'> Log In</Link>   
                      </div> 
                    </div>
                </Form>         
               </Container>
          </div>

    </div>
  )
}

export default Login
 