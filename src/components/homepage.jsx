import './homepage.css'

const Homepage = () => {
    return (
        <>

            <div style={{ position: "fixed", marginLeft: "10px", display: "flex", flexDirection: "column", gap: "230px", borderRight: "1px solid #D7D7D4", paddingRight: "15px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "25px", alignItems: "center" }}>
                    <div><i class="bi bi-layout-sidebar" style={{ fontSize: "14px" }}></i></div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
                        <div className="add-btn">
                            <i className="bi bi-plus-lg"></i>
                        </div>
                        <i className="bi bi-chat-text" style={{ fontSize: "18px" }}></i>
                        <i className="bi bi-cup" style={{ fontSize: "18px" }}></i>
                        <i className="bi bi-boxes" style={{ fontSize: "18px" }}></i>
                        <i className="bi bi-code-slash" style={{ fontSize: "18px", color: "#CFCFCD" }}></i>
                        <i className="bi bi-briefcase" style={{ fontSize: "18px" }}></i>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "23px", alignItems: "center" }}>
                    <i className="bi bi-download" style={{ fontSize: "18px" }}></i>
                    <div style={{ backgroundColor: "#373734", color: "white", textAlign: "center", paddingTop: "5px", borderRadius: "50%", width: "35px", height: "35px" }}>PB</div>
                </div>
            </div>
            <div style={{ marginTop: "10px" }}>
                <center>
                    <span className="ps-2 pe-2 pt-1 pb-2 rounded-3 free">Freepaln . <u>Upgrade</u> </span>
                    <div className="h1 d-flex justify-content-center text-align-center gap-2">
                        <div className='d-flex align-items-center'><i class="bi bi-claude" style={{ color: "#DE8E73" }}></i>&nbsp;<h1 className="fw-normal">Coffee and Claude time?</h1></div>
                    </div><br />
                </center>

                <div className='card w-50 rounded-4' style={{ marginLeft: "320px" }}>
                    <div className='card-body text'>
                        <input type="text" placeholder='how can i help you today?' /><br /><br /><br />

                        <div className='d-flex justify-content-between'>
                            <div><i className="bi bi-plus-lg"></i></div>
                            <div className='d-flex gap-3 align-item-center'>
                                <span> Sonnet 5 </span><span>Medium <i className="bi bi-chevron-down"></i></span><span><i class="bi bi-mic"></i></span><span><i class="bi bi-soundwave fs-5"></i></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </>
    )
}
export default Homepage