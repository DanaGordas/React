import React from "react";
import { useForm  } from "react-hook-form";
import './App.css';

function App() {

  const { register, handleSubmit, errors} = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Gender</label>
      <select name="gender" ref={register({required: true})}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label>Age</label>
      <select name="age" ref={register({required: true})}>
        <option value="18-25">18-25</option>
        <option value="25-35">25-35</option>
        <option value="35-45">35-45</option>
        <option value="45-55">45-55</option>
        <option value="55+">55+</option>
      </select>
      <label>Postal Code</label>
      <input name="postalcode" ref={register({ required: true, maxLength: 10 })}/>
      {errors.postalcode && <p>This field is required</p>}
      {errors.gender && <p>This field is required</p>}
      {errors.age && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}

export default App;
