import Footer from "./footer"
import Header from "./header"

const Contact = () => {
    return (
        <>
            <Header />

            <div>
                <center>
                    <h1 style={{ marginTop: "200px", fontSize: "70px" ,fontFamily:"emoji"}}>Contact sales</h1><br />
                    <h4 style={{ color: "#5E5D59" }}>Get started on your own or contact the sales team for <h4> complex deployments.</h4></h4>
                </center>
            </div> <br /><br /> <br /><br /><br /><br />

            <div style={{ marginLeft: "55px" }}>
                <h2>  For quick results</h2>
                <p style={{ color: "#5E5D59", marginTop: "15px", fontSize: "21px", fontWeight: "500" }}>Get started on your own without <p> waiting on us.</p></p>
            </div><br /><br /><br />

            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                <div className="card ms-5 ps-4 pe-4" style={{ width: "1150px", borderRadius: "20px", border: "1px solid  #ebebe1" }}>
                    <div className="card-body" style={{ paddingLeft: "40px" }}>
                        <i class="bi bi-buildings" style={{ fontSize: "60px" }}></i> <br /><br />
                        <h3>Get the Enterprise plan</h3>
                        <p style={{ color: "#5E5D59", marginTop: "15px", fontSize: "18px" }}>Buy or upgrade to Enterprise yourself. Check out in minutes with a credit card.</p>
                        <hr style={{ marginTop: "30px" }} />
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-check2 fs-5"></i>
                            <span style={{ fontSize: "20px", color: "#5E5D59" }}>Best if you know exactly what you need and are ready to check out</span>
                        </div> <br />
                        <button type="button" className="w-100 bg-dark text-light p-1 fs-5 rounded-3" style={{ border: "1px solid black" }}>Get Enterprice</button> <br /><br />
                    </div>
                </div>

                <div className="card ms-5 ps-4 pe-4" style={{ width: "1150px", borderRadius: "20px", border: "1px solid  #ebebe1" }}>
                    <div className="card-body">

                        <i class="bi bi-chat-text" style={{ fontSize: "60px" }}></i> <br /><br />
                        <h3>Chat with buying agent</h3>
                        <p style={{ color: "#5E5D59", marginTop: "15px", fontSize: "18px" }}>Ask any questions you have, get a personalized quote, and check out today. Our buying agent can escalate to the sales team <p>when needed.</p></p>
                        <hr style={{ marginTop: "30px" }} />

                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-check2 fs-5"></i>
                            <span style={{ fontSize: "20px", color: "#5E5D59" }}>Best if you have questions you need answered before purchasing</span>
                        </div> <br />
                        <button type="button" className="w-100 bg-dark text-light p-1 fs-5 rounded-3" style={{ border: "1px solid black" }}>Chat Now</button><br /><br />
                    </div>
                </div>


                <div className="card ms-5 rounded-4 ps-3 pe-3" style={{ width: "1150px", backgroundColor: "#F0EEE6", border: "1px solid  #ebebe1" }}>
                    <div className="card-body">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div> <p style={{ fontSize: "17px", color: "#5E5D59" }}> <b> More help, right this way.</b> Browse articles, see product details, and get <p> answers to technical questions.</p></p></div>
                            <div> <button style={{ border: "1px solid #d6d5d1", backgroundColor: "white", padding: "9px", width: "200px", borderRadius: "10px" }}>Visit Support Center</button> </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br />

            <div className="ms-5">

                <h2>   For complex needs</h2>
                <p style={{ fontSize: "20px", color: "#5E5D59" }}>Our sales team can only support <br /> complex deals, like 500+ seat <br /> deployments and BAAs. For the <br /> fastest support, chat with our buying <br /> agent above.</p>
            </div> <br /><br />

            <div className="card ms-5 rounded-4" style={{ width: "1150px", backgroundColor: "#F0EEE6", border: "1px solid  #ebebe1" }}>
                <div className="card-body">
                    <span className="ms-2">What can we help you with?</span><span className="text-danger">*</span><br /><br />
                    <select className=" p-3 rounded-4  text-secondary select" style={{width:"98%", backgroundColor:"#F0EEE6"}} >
                        <option>Select Option</option>
                        <option value="Contact Sales">Contact Sales</option>
                        <option value="increase rate limits">increase rate limits</option>
                        <option value="Business associate agreement">Business associate agreement</option>
                        <option value="Zero data retention">Zero data retention</option>
                        <option value="Product support">Product support</option>

                    </select><br /><br />

                    <button type="submit" className="btn rounded-3" style={{ backgroundColor: "#141413", color: "#FAF9F5", width:"100px" }}>Submit</button><br /><br />
                </div>
            </div> <br /><br />

            <Footer/>

        </>
    )
}
export default Contact