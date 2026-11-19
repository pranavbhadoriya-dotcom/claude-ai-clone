import { useState } from "react"
import LoginHeader from "./Loginheader"
import Card2 from "./card2"
import Footer from "./footer"
import './login.css'
import { Link } from "react-router-dom"


const Login = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState({});

    const handleInput = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log(email);
        }
    };

    const validate = () => {
        let newError = {};

        if (email.trim() === "") {
            newError.mail = "Email is required";
        }

        setError(newError);

        return Object.keys(newError).length === 0;
    };
    return (
        <>
            <LoginHeader /> <br /><br /><br /><br /><br />
            <center>
                <form onSubmit={handleSubmit}>
                    <h1 style={{ fontSize: "70px", fontWeight: "400", fontFamily: "Libre Baskerville, serif" }}>Think fast,<h1 style={{ fontSize: "70px", fontWeight: "400", fontFamily: "Libre Baskerville, serif" }} >build faster</h1></h1>

                    <h5 style={{ fontFamily: "Libre Baskerville, serif" }}>Brainstorm in chat, build in Cowork</h5> <br /><br />

                    <div className="login-box">
                        <button className="google-btn">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                alt="Google"
                            />
                            <span>Continue with Google</span>
                        </button>

                        <p className="or-text">OR</p>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="email-input"
                            onChange={handleInput}
                            value={email}

                        />
                        {error.mail && (
                            <span className="text-danger">{error.mail}</span>
                        )}

                        {/* <button type="submit" className="email-btn">
                            Continue with email
                        </button>   */}
                        
                        <Link to="/homepage"><button type="submit" className="email-btn">
                            Continue with email
                        </button></Link> 
                     
                    </div><br />
                </form>


                <button type="button" className="btn rounded-3" style={{ border: "1px solid #4D4C48", color: "black", width: "250px", backgroundColor: "transparent" }}><i class="bi bi-microsoft"></i>&nbsp;&nbsp;&nbsp;Download desktop app</button><br /><br /><br /><br /><br />

                <h1 style={{ fontSize: "40px", fontWeight: "400", fontFamily: "Libre Baskerville, serif" }}>Explore plans</h1> <br />

                <div style={{ border: "1px solid #F0EEE6", width: "350px", padding: "10px", borderRadius: "15px", backgroundColor: "#F0EEE6" }}>
                    <span><i class="bi bi-person"></i>&nbsp;Individual</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span><i class="bi bi-people"></i>&nbsp;Teams & Enterprise</span>
                </div><br /><br />



            </center>

            <Card2 />

            <Footer />

        </>
    )
}
export default Login