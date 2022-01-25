import React,{useState} from 'react';

const Signup = () => {
  // const styling = {color:red};
  const styling = {color:'red'}
  const [data, setData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword: ''
  })
  const {username,email,password,confirmPassword} = data;
  const changeHandler = e => {
    var l = setData({...data,[e.target.name]:e.target.value}); //important value not enclosed with brackets
  }
  const submitHandler = e => {
    e.preventDefault();
    // if(password === confirmPassword){
    //   console.log(data);
    // } else {
    //   console.log('Password and confirm password not same');
    // }
    if(username.length <=5){
      alert('Username must be atleast 6 characters')
    } else if(password !== confirmPassword){
      alert('Passwords are not matching')
    } else {
      console.log(data);
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" placeholder='username' value={username} onChange={changeHandler}/> <br/>
          <input type="text" name="email" placeholder='email' value={email} onChange={changeHandler}/> <br/>
          <input type="password" name="password" placeholder='password' value={password} onChange={changeHandler}/> <br/>
          <input type="password" name="confirmPassword" placeholder='cofirm password' value={confirmPassword} onChange={changeHandler}/> <br/>
          {password !== confirmPassword ?<p style={styling}>passwords not matching</p> : null}
          <input type="submit" value="Submit" />
        </form>
      </center>
    </div>
  )
};

export default Signup;
