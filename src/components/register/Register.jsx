import "./register.css";

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginleft">
                <h3 className="loginLogo">TMG social</h3>
                <span className="logIndesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="loginright">
                <div className="loginBox">

                    <input placeholder="username" className="logininput" />
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <input placeholder="Password again" className="logininput" />
                    <button className="loginBTN">signup</button>
                    
                    <button className="loginResgisterBtn">Login </button>
                </div>
            </div>


        </div>
        </div>
  )
}
