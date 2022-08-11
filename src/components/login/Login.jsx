import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginLogo">TMG social</h3>
                <span className="logIndesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="loginright">
                <div className="loginBox">

                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <button className="loginBTN">Login</button>
                    <span className="forgot">Forgot password?</span>
                    <button className="loginResgisterBtn">Create a new account</button>
                </div>
            </div>


        </div>
        </div>
  )
}
