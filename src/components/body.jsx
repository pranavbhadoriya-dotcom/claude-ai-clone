const Body = () => {
    return (
        <>
            <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br />

            <center>
                <h1 style={{ fontSize: "75px", fontFamily:"emoji"}}>Claude Code</h1><br />
                <p style={{ fontSize: "25px" }}>Claude Code is an agent that reads your codebase, edits files, and <p> runs commands across your terminal, IDE, desktop app, and browser. <p> Build, debug, and ship with natural language.</p></p></p><br />
                <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <div style={{ display: "flex", justifyContent: "center", gap: "13px" }}>
                    <button type="button" className="btn rounded-3" style={{ border: "1px solid #4D4C48", color: "white", width: "230px", backgroundColor: "black" }}><i class="bi bi-microsoft"></i>&nbsp;&nbsp;Download for Windows</button>
                    <button type="button" className="btn rounded-3" style={{ border: "1px solid #E8E6DC", color: "black", width: "200px", backgroundColor: "#E8E6DC" }}>Other ways to use <i class="bi bi-chevron-down"></i></button>
                </div>
                <p>Available for macOS, Linux, and Windows. Read the <span style={{textDecoration:"underline"}}>documentation</span></p>
                </div>
            </center>
            <br />
            <br /><br /><br /><br />
        </>
    )
}
export default Body