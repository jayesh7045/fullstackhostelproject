import React from "react";
import "./UserRegi.css";
import {DevTool} from "@hookform/devtools"
import {useForm} from "react-hook-form";
type formValues = {
  username : string,
  email: string,
  lname: string,
  fname: string,
  phonenumbers : string[],

}
function AdminsRegistration() {
  const form = useForm({
    defaultValues : {
      username: "jayesh_2003",
      lname: "",
      fname : "",
      email : "",
      phonenumbers : ["", ""]
      
    }
  });
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;
  const {name, ref, onChange, onBlur} = register("username");
  const handlethesubmit=(data : formValues)=>{
    console.log("The form has been submited", data);
  }
  return (
    <div className="main">
      <div className="register">
        <h2>Admin Registration </h2>
        <form id="register" method="post" onSubmit={handleSubmit(handlethesubmit)} noValidate>
         
         <label htmlFor="">Username</label>
          <br />
          <input type="text" placeholder="Enter the Username here" id="username" {...register("username", {
            required :{ 
              value: true,
              message: "Username is required",
            }

          })}/>
          <p className="errors">{errors.username ?.message} </p>
          <br />
          <label htmlFor="">First Name : </label>
          <br />
          <input type="text" id="name" placeholder="Enter your name here" {...register("fname",{
            required: {
              value: true,
              message:"Last Name is Required",
            }
          })} />
          <p className="errors">{errors.fname ?.message} </p>
          <br />
          <label htmlFor="">Last Name : </label>
          <br />
          <input type="text" id="name" placeholder="Enter Your last name here" {...register("lname", {
            required: {
              value: true,
              message: "Last name is required"
            }
          })}/>
          <p className="errors">{errors.lname ?.message} </p>
          <br />
          <label htmlFor=""  id="name" placeholder="Enter the valid Email id">Email</label>
          <br />
          <input type="email" id="email" placeholder="Enter Your Email Here" {...register("email", {
            pattern:{
              value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message : "Invalid email",
            },
            validate:{
              notAdmin : (fieldValue)=>{
              return (
                fieldValue !== "admin@example.com" || "Enter a different email address"
              );
            },
            notBlackListed: (fieldValue)=>{
              return (!fieldValue.endsWith("baddomain.com") || "This domain is not supported");
            },
          }}
          )}/>
          <p className="errors">{errors.email ?.message} </p>
          <br />
          <label htmlFor="">Gender : </label>
          <br />
          &nbsp;&nbsp;&nbsp;
          <input type="radio" name="gender" id="male"/>
          &nbsp;
          <span id="male"> Male </span>
          <input id="female" name="gender" type="radio"></input>
          &nbsp;
          <span id="female" >Female</span>
          <br />
          <label htmlFor="primaryPhone">Primary-Phone Number</label>
          <br></br>
          <input type="text" id="primaryPhone" placeholder="+91" {...register("phonenumbers.1")}/>
          <br />
          <label htmlFor="secondary-phone">Secondary-Phone Number</label>
          <br></br>
          <input type="text" id="secondaryPhone" placeholder="+91" {...register("phonenumbers.0")}/>
          <br />
          <label htmlFor="New Password">Create a New Password</label>
          <br />
          <input type="password" name="password" id="password" placeholder="Create a new Password"/>
          <br />
          <label htmlFor="re-enter the Password">Re-enter the password</label>
          <br />
          <input type="password" name="password" id="password" placeholder="reenter the new Password"/>
          <br />
          <br />
          <hr />
          <hr />
          <br />
          <button className="submit"><h2>Submit</h2></button>
          <br />
        </form>
        <DevTool control={control}></DevTool>
      </div>
    </div>
  );
}
export default AdminsRegistration;
