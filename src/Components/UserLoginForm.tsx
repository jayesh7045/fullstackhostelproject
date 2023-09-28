import "./UserLogin.css";
import { NavLink } from "react-router-dom";
function UserLoginForm() {
  return (
    <div>
      <div className="loginuser">
        <h1>STUDENT'S <span className="templogin">LOGIN</span></h1>
      </div>
      <div className="loginform">
        <form className="login">
          <label htmlFor="">Enter the Username</label>
          <br />
          <input type="text" id="username" />
          <br />
          <br />
          <br />
          <label htmlFor="">Enter the password</label>
          <br />
          <input type="password" id="password" />
          <br />
          <br />
          <h5 className="forgetpass">Forget Password ?</h5>
          <NavLink to={'/hostelmainpage'}><button className="btn">Login</button></NavLink>
        </form>
      </div>
    </div>
  );
}

export default UserLoginForm;
