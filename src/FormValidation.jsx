import React from 'react'
import { useForm } from 'react-hook-form';
import  './FromValidation.css';

const FormValidation = () => {
      const  {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(
        {
            defaultValues: {
                username: "",
                email: "",
                isAdmin: true,
                password: "",
            },
        }
    );
    
    return (
        <div class="container"> 
        <form onSubmit={handleSubmit((d) => console.log(d))}>
            <div >
                <label htmlFor="username">Username</label>
                <br/>
                <input
                 id="username"
                 {...register("username", {
                    required: true,
                    validate: {
                        minLength: (v) => v.length >= 5,
                         matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
      },
    })}
  />

  {errors.username?.type === "required" && (
    <small>Username is required</small>
  )}

  {errors.username?.type === "minLength" && (
    <small>The username should have at least 5 characters</small>
  )}

  {errors.username?.type === "matchPattern" && (
    <small>Username must contain only letters, numbers and _</small>
  )}
</div>
<br/>
<div>
  <label htmlFor="email">Email</label>
  <br/>
  <input
    id="email"
    {...register("email", {
      required: "Email is required",
      validate: {
        maxLength: (v) =>
          v.length <= 50 || "The email should have at most 50 characters",
        matchPattern: (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Email address must be a valid address",
      },
    })}
  />

  {errors.email?.message && (
    <small>{errors.email.message}</small>
  )}
</div>
<div>
    <br/>
                <label htmlFor="isAdmin">IsAdmin</label>
                <input
                    id="isAdmin"
                    type="checkbox"
                    {...register('isAdmin')}
                />
            </div>
            <br/>

            <div >
                <label htmlFor="password">Password</label>
                <br/>
                <input
                 id="password"
                 {...register("password", {
                    required: true,
                    validate: {
                        minLength: (v) => v.length >=8,
                         matchPattern: (v) => /^[@#][A-Za-z0-9]+$/.test(v),
      },
    })}
  />

  {errors.password?.type === "required" && (
    <small>password is required</small>
  )}

  {errors.password?.type === "minLength" && (
    <small>The password should have at least 8 characters</small>
  )}

  {errors.password?.type === "matchPattern" && (
    <small>password must start with @ or # only letters, numbers and _</small>
  )}
</div>
<br/>

            <button type="submit">Submit</button>
        </form>
        </div>
        
    )
  
}

export default FormValidation
